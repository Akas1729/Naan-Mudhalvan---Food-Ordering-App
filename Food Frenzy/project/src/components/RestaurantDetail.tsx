import React from 'react';
import { Star, Clock, ArrowLeft } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export default function RestaurantDetail({
  restaurant,
  onBack,
  onAddToCart,
}: RestaurantDetailProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to restaurants
      </button>
      
      <div className="relative h-64 rounded-xl overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-md">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <span>•</span>
          <span>{restaurant.minOrder} min. order</span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <div className="grid gap-6">
          {restaurant.menu.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}