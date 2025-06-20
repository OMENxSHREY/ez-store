'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Toast from '@/components/ui/Toast';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // In your login page, after successful login:
      if (response.ok) {
        // Set both localStorage and sessionStorage
        localStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(data.user));
        sessionStorage.setItem('userData', JSON.stringify(data.user));
        
        setToastMessage('Login successful!');
        setToastType('success');
        setShowToast(true);
      
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = '/account/dashboard';
        }, 1500);
      }
      else {
        setToastMessage(data.message || 'Login failed');
        setToastType('error');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setToastMessage('An error occurred');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 mt-32 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Login / Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border rounded-md p-2"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full border rounded-md p-2 pr-20"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/account/signup" className="text-black underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}