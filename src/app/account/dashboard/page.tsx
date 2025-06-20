'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, User, RefreshCw, LogOut, Home } from 'lucide-react';

interface CustomerData {
  customer_id?: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface Order {
  id: number;
  product_name: string;
  product_image: string;
  quantity: number;
  price: number;
  order_date: string;
}

export default function Dashboard() {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedCustomerData = localStorage.getItem('userData');

    if (!isLoggedIn) {
      window.location.href = '/account/login';
      return;
    }

    if (storedCustomerData) {
      const userData = JSON.parse(storedCustomerData);
      setCustomerData(userData);
      fetchOrders(userData.email);
    }
  }, []);

  const fetchOrders = async (email: string) => {
    try {
      const response = await fetch(`/api/orders?email=${email}`);
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-white p-6 rounded-lg shadow flex-grow">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {customerData?.name || 'Customer'}!
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your orders and account details here.
            </p>
          </div>
          <Link 
            href="/"
            className="ml-4 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            title="Back to Home"
          >
            <Home size={24} />
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <Link 
              href="/account/edit-profile"
              className="block text-gray-800 hover:text-black"
            >
              EDIT PROFILE
            </Link>
            <Link 
              href="/account/orders"
              className="block text-gray-800 hover:text-black font-medium"
            >
              ORDER HISTORY
            </Link>
            <Link 
              href="/account/track-order"
              className="block text-gray-800 hover:text-black"
            >
              TRACK YOUR ORDER
            </Link>
            <Link 
              href="/account/returns"
              className="block text-gray-800 hover:text-black"
            >
              RETURNS AND EXCHANGE
            </Link>
            <button
              onClick={handleLogout}
              className="block text-gray-800 hover:text-black"
            >
              LOGOUT
            </button>
          </div>
  
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">ALL ORDERS</h2>
              <input
                type="text"
                placeholder="Order Number"
                className="border rounded-md px-4 py-2"
              />
            </div>
  
            <div className="bg-white rounded-lg p-6">
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={order.product_image} 
                            alt={order.product_name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">{order.product_name}</h3>
                            <p className="text-sm text-gray-500">
                              Quantity: {order.quantity}
                            </p>
                            <p className="text-sm text-gray-500">
                              Price: ₹{order.price}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            Order Date: {new Date(order.order_date).toLocaleDateString()}
                          </p>
                          <p className="font-medium mt-1">
                            Total: ₹{order.price * order.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">You haven't placed any orders yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}