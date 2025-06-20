'use client';

import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex justify-center mb-6"
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
            </motion.div>
            <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}