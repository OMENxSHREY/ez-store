'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Toast from '@/components/ui/Toast';

interface CustomerData {
  id: number;  // Changed from customer_id to id
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [customerData, setCustomerData] = useState<CustomerData>({
    id: 0,  // Changed from customer_id to id
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCustomerData({
        id: parsedData.id,  // Changed from customer_id to id
        name: parsedData.name || '',
        email: parsedData.email || '',
        phone: parsedData.phone || '',
        address: parsedData.address || ''
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/customer/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(customerData));
        setToastMessage('Profile updated successfully!');
        setToastType('success');
      } else {
        setToastMessage(data.error || 'Failed to update profile');
        setToastType('error');
      }
    } catch (error) {
      setToastMessage('An error occurred');
      setToastType('error');
    } finally {
      setIsLoading(false);
      setShowToast(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <Link 
              href="/account/dashboard"
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Dashboard
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={customerData.name || ''}
                  onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={customerData.email || ''}
                  onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={customerData.phone || ''}
                  onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                  className="w-full border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea
                  value={customerData.address || ''}
                  onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                  className="w-full border rounded-md p-2 h-24"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}