import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&auto=format&fit=crop&q=60"
              alt="Food delivery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                About FoodHub
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-8">
                Founded in 2024, FoodHub has revolutionized the way people experience food delivery. 
                We partner with the finest restaurants in your area to bring delicious meals directly 
                to your doorstep. Our mission is to connect food lovers with their favorite restaurants 
                while providing exceptional service and convenience.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver not just food, but memorable dining experiences to every customer, 
                    while supporting local restaurants and communities.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the most loved food delivery platform, known for quality, reliability, 
                    and innovation in the food delivery industry.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span>123 Foodie Street, Cuisine City, FC 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span>support@foodhub.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}