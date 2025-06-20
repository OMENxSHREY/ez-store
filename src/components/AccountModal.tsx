import React from 'react';
import Link from 'next/link';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-20 right-4 w-64 bg-white shadow-lg rounded-lg p-6 z-50">
      <h2 className="text-xl font-semibold mb-4">Welcome</h2>
      <p className="text-sm text-gray-600 mb-4">To access account and manage orders</p>
      <Link 
        href="/account/login" 
        className="block w-full bg-yellow-300 text-center py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
      >
        Login / Signup
      </Link>
      <div className="mt-4 space-y-2">
        <Link href="/account/orders" className="block text-sm hover:underline">Track your Order</Link>
        <Link href="/stores" className="block text-sm hover:underline">Store Locator</Link>
        <Link href="/returns" className="block text-sm hover:underline">Returns and Exchange</Link>
        <Link href="/care" className="block text-sm hover:underline">Care</Link>
        <Link href="/faq" className="block text-sm hover:underline">FAQ</Link>
      </div>
    </div>
  );
}