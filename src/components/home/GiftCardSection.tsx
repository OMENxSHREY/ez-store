"use client";
import React, { useState } from "react";
import Image from "next/image";
import Toast from '@/components/ui/Toast';

const GiftCardSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleBuyNow = async () => {
    try {
      const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      const isLoggedIn = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
      
      if (!isLoggedIn || !userData) {
        window.location.href = "/account/login";
        return;
      }

      const user = JSON.parse(userData);

      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: 1,
          quantity: 1,
          customer_email: user.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setToastMessage('Gift card added to cart');
        setToastType('success');
        setShowToast(true);
        setTimeout(() => {
          window.location.href = "/cart";
        }, 1000);
      } else {
        throw new Error(data.error || 'Failed to add to cart');
      }
    } catch (error) {
      setToastMessage('Error adding to cart');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <section className="bg-[#3b7ee8] text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="relative w-full h-[250px] md:h-[300px]">
              <Image
                src="/images/gift-card (2).png"
                alt="Gift Card"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <p className="text-lg mb-2">Make 'em happy!</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">THE GIFT CARD</h2>
            <button onClick={handleBuyNow} className="btn-brand inline-block">
              BUY NOW ₹999
            </button>
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
    </section>
  );
};

export default GiftCardSection;
