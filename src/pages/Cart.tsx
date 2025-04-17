
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AlertCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <ShoppingCart size={28} className="mr-3" /> Shopping Cart
          </h1>
          
          {cart.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Link to="/" className="btn-primary inline-flex items-center">
                Continue Shopping <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                      Items ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-red-500 text-sm hover:text-red-700 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="divide-y">
                    {cart.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    {shipping > 0 && (
                      <div className="flex items-center text-sm text-orange-500 bg-orange-50 p-3 rounded-md mt-3">
                        <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                        <span>Add ${(50 - subtotal).toFixed(2)} more for free shipping</span>
                      </div>
                    )}
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between font-bold text-lg text-gray-800 mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <Link 
                    to="/checkout" 
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Proceed to Checkout <ArrowRight size={16} className="ml-2" />
                  </Link>
                  
                  <div className="mt-4">
                    <Link 
                      to="/"
                      className="text-purple text-sm hover:underline block text-center"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
