import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your order. Your order number is #{orderNumber}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          You will receive an email confirmation shortly with your order details.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}