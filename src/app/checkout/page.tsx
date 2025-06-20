'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Smartphone, Building2, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Checkout() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [showUpiInput, setShowUpiInput] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const paymentMethods = [
    {
      id: 'upi',
      name: 'Pay via UPI',
      description: 'Use any registered UPI ID',
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      id: 'card',
      name: 'Pay via Credit/Debit Cards',
      description: 'Use any payment method',
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      id: 'netbanking',
      name: 'Netbanking',
      description: 'Select from a list of banks',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      id: 'wallets',
      name: 'Wallets',
      description: 'Amazon Pay, OlaMoney, Mobikwik & more',
      icon: <Wallet className="w-6 h-6" />,
    },
  ];
  
  useEffect(() => {
    fetchCartTotal();
  }, []);

  const fetchCartTotal = async () => {
    try {
      const customerData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      if (!customerData) return;
      
      const customer = JSON.parse(customerData);
      const response = await fetch(`/api/cart/get?email=${customer.email}`);
      const data = await response.json();
      
      if (data.success) {
        const total = data.items.reduce((sum: number, item: any) => 
          sum + (item.price * item.quantity), 0);
        setCartTotal(total);
      }
    } catch (error) {
      console.error('Error fetching cart total:', error);
    }
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    if (methodId === 'upi') {
      setShowUpiInput(true);
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const customerData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
      if (!customerData) return;
      const customer = JSON.parse(customerData);

      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerEmail: customer.email,
          amount: cartTotal,
          paymentMethod: selectedMethod,
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Simulate payment processing
        setTimeout(() => {
          router.push('/checkout/success');
        }, 1500);
      } else {
        throw new Error('Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      // You might want to add error handling UI here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <Link 
            href="/cart"
            className="flex items-center text-gray-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Cart
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Payment methods</h1>
            
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                  className={`w-full p-4 rounded-lg border ${
                    selectedMethod === method.id 
                      ? 'border-black bg-gray-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    {method.icon}
                    <div className="text-left">
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                    <div className="ml-auto">₹{cartTotal}</div>
                  </div>
                </button>
              ))}
            </div>

            {showUpiInput && (
              <form onSubmit={handlePayment} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pay with UPI ID / Number
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="Enter UPI ID"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Continue
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}