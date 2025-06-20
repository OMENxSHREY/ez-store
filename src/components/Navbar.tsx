import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const handleAccountClick = () => {
    const isLoggedIn = 
      localStorage.getItem('isLoggedIn') === 'true' || 
      sessionStorage.getItem('isLoggedIn') === 'true';
      
    const redirectPath = isLoggedIn ? '/account/dashboard' : '/account/login';
    window.location.href = redirectPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Ez store
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              href="/products/men-sneakers" 
              className="py-2 hover:text-gray-600 relative"
              style={{ pointerEvents: 'auto' }}
            >
              Men
            </Link>
            
            <Link 
              href="/products/women-sneakers" 
              className="py-2 hover:text-gray-600 relative"
              style={{ pointerEvents: 'auto' }}
            >
              Women
            </Link>
            
            <Link 
              href="/account/dashboard" 
              className="hover:text-gray-600"
            >
              Account
            </Link>
            
            <Link href="/about" className="hover:text-gray-600">
              About Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleAccountClick}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User size={24} />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
