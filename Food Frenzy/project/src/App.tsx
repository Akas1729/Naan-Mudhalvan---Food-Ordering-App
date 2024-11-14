import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import RestaurantCard from './components/RestaurantCard';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import AboutUs from './components/AboutUs';
import PrivateRoute from './components/PrivateRoute';
import { useCart } from './hooks/useCart';
import { restaurants } from './data/restaurants';
import { Category } from './types';
import { AuthProvider } from './context/AuthContext';

const initialCategories: Category[] = [
  { id: 1, name: 'All', active: true },
  { id: 2, name: 'Pizza', active: false },
  { id: 3, name: 'Sushi', active: false },
  { id: 4, name: 'Asian', active: false },
  { id: 5, name: 'Burgers', active: false },
  { id: 6, name: 'Desserts', active: false },
];

function MainContent() {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, clearCart } = useCart();

  const handleSelectCategory = useCallback((categoryId: number) => {
    setCategories(categories.map(category => ({
      ...category,
      active: category.id === categoryId,
    })));
  }, []);

  const activeCategory = categories.find(category => category.active)?.name || 'All';
  const filteredRestaurants = activeCategory === 'All'
    ? restaurants
    : restaurants.filter(restaurant => restaurant.cuisine.includes(activeCategory));

  const selectedRestaurantData = restaurants.find(r => r.id === selectedRestaurant);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {showCart ? (
          <div className="fixed right-0 top-16 bottom-0 w-96 bg-white shadow-lg z-40 overflow-y-auto">
            <Cart
              items={cart}
              total={cartTotal}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </div>
        ) : null}

        {selectedRestaurantData ? (
          <RestaurantDetail
            restaurant={selectedRestaurantData}
            onBack={() => setSelectedRestaurant(null)}
            onAddToCart={addToCart}
          />
        ) : (
          <>
            <div className="py-6">
              <h1 className="text-4xl font-bold text-gray-900">Hungry?</h1>
              <p className="mt-2 text-lg text-gray-600">
                Order food from our curated list of restaurants
              </p>
            </div>

            <CategoryList
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                  className="cursor-pointer"
                >
                  <RestaurantCard
                    name={restaurant.name}
                    image={restaurant.image}
                    rating={restaurant.rating}
                    deliveryTime={restaurant.deliveryTime}
                    minOrder={restaurant.minOrder}
                    cuisine={restaurant.cuisine}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainContent />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <PrivateRoute>
                <OrderConfirmation />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}