'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart, Truck } from 'lucide-react';
import Toast from '@/components/ui/Toast';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CartItem {
  id: number;
  product_id: number;
  product_name: string;
  image_url: string;  // Add this
  price: number;
  quantity: number;
  customer_email: string;
  created_at: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const customerData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      if (!customerData) return;
      
      const customer = JSON.parse(customerData);
      const response = await fetch(`/api/cart/get?email=${customer.email}`);
      const data = await response.json();
      
      if (data.success) {
        setCartItems(data.items);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      showToastMessage('Failed to fetch cart items', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    try {
      const customerData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      if (!customerData) return;
      const customer = JSON.parse(customerData);
      
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity, customer_email: customer.email })
      });

      if (response.ok) {
        fetchCartItems();
        showToastMessage('Quantity updated successfully', 'success');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      showToastMessage('Failed to update quantity', 'error');
    }
  };

  const removeItem = async (id: number) => {
    try {
      const customerData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      if (!customerData) return;
      const customer = JSON.parse(customerData);
      
      const response = await fetch('/api/cart/remove', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, customer_email: customer.email })
      });

      if (response.ok) {
        fetchCartItems();
        showToastMessage('Item removed from cart', 'success');
      }
    } catch (error) {
      console.error('Error removing item:', error);
      showToastMessage('Failed to remove item', 'error');
    }
  };

  const showToastMessage = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  if (isLoading) {
    return <div className="min-h-screen pt-20 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <div>  {/* Added wrapping div */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex items-center mb-6"
              >
                <Link 
                  href="/"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Continue Shopping
                </Link>
              </motion.div>
  
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <h1 className="text-2xl font-bold">Shopping Cart</h1>
                </div>
                
                {cartItems.length === 0 ? (
                  <AnimatePresence>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="flex justify-center mb-6">
                        <div className="relative w-48 h-48">
                          <motion.div
                            animate={{ 
                              x: [0, 20, 0],
                              transition: { repeat: Infinity, duration: 2 }
                            }}
                            className="absolute inset-0"
                          >
                            <Truck size={64} className="text-gray-400 mx-auto" />
                          </motion.div>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        Your cart is empty
                      </h2>
                      <p className="text-gray-500 mb-6">
                        Looks like you haven't added anything to your cart yet
                      </p>
                      <Link 
                        href="/products/women-sneakers" 
                        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      >
                        Start Shopping
                        <ArrowLeft size={16} className="ml-2 rotate-180" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {cartItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-6 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="relative w-24 h-24 flex-shrink-0">
                            <Image
                              src={item.image_url || "/images/gift-card (2).png"}
                              alt={item.product_name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <p className="font-medium text-lg">{item.product_name}</p>
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity} × ₹{item.price}
                            </p>
                            <p className="text-sm font-medium">
                              Total: ₹{item.quantity * item.price}
                            </p>
                          </div>
  
                          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
  
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </motion.div>
                      ))}
  
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                      >
                        // Replace the existing checkout button with:
                        <Link href="/checkout">
                          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                            <ShoppingCart size={20} />
                            Proceed to Checkout
                          </button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </AnimatePresence>
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