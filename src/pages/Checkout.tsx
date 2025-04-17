
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, ChevronRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/components/ui/use-toast';

const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'USA',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevStep = () => {
    setActiveStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulating order processing
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. Your order has been received.",
    });
    
    clearCart();
    navigate('/order-confirmation');
  };
  
  // Redirect to home if cart is empty
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="mb-6">Add some items to your cart before proceeding to checkout.</p>
            <Link to="/" className="btn-primary">Shop Now</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/cart" className="text-purple hover:underline flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Back to Cart
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          {/* Checkout Steps */}
          <div className="flex justify-between items-center mb-12">
            <div className="hidden sm:flex w-full items-center">
              <div className={`flex-1 border-t-2 ${activeStep >= 1 ? 'border-purple' : 'border-gray-300'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-purple text-white' : 'bg-gray-300 text-gray-600'}`}>
                <span>1</span>
              </div>
              <div className={`flex-1 border-t-2 ${activeStep >= 2 ? 'border-purple' : 'border-gray-300'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-purple text-white' : 'bg-gray-300 text-gray-600'}`}>
                <span>2</span>
              </div>
              <div className={`flex-1 border-t-2 ${activeStep >= 3 ? 'border-purple' : 'border-gray-300'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-purple text-white' : 'bg-gray-300 text-gray-600'}`}>
                <span>3</span>
              </div>
              <div className={`flex-1 border-t-2 ${activeStep >= 3 ? 'border-purple' : 'border-gray-300'}`}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Step 1: Shipping Information */}
                {activeStep === 1 && (
                  <div className="animate-fade-in">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Information</h2>
                    
                    <form onSubmit={handleNextStep}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country *
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          >
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button type="submit" className="btn-primary flex items-center">
                          Continue to Payment <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Step 2: Payment Information */}
                {activeStep === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Information</h2>
                    
                    <form onSubmit={handleNextStep}>
                      <div className="mb-6">
                        <div className="flex items-center border-b pb-4 mb-4">
                          <CreditCard size={20} className="text-purple mr-2" />
                          <span className="font-medium">Credit Card</span>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="**** **** **** ****"
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                              Expiration Date (MM/YY) *
                            </label>
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              required
                              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                            />
                          </div>
                          <div>
                            <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                              CVV *
                            </label>
                            <input
                              type="text"
                              id="cardCvv"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleChange}
                              placeholder="123"
                              required
                              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="btn-outline flex items-center"
                        >
                          <ArrowLeft size={16} className="mr-1" /> Back
                        </button>
                        <button type="submit" className="btn-primary flex items-center">
                          Review Order <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Step 3: Review Order */}
                {activeStep === 3 && (
                  <div className="animate-fade-in">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Review Order</h2>
                    
                    <form onSubmit={handlePlaceOrder}>
                      <div className="mb-8">
                        <h3 className="font-medium text-gray-800 mb-3">Shipping Information</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p>{formData.firstName} {formData.lastName}</p>
                          <p>{formData.address}</p>
                          <p>{formData.city}, {formData.zipCode}</p>
                          <p>{formData.country}</p>
                          <p>{formData.email}</p>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="font-medium text-gray-800 mb-3">Payment Information</h3>
                        <div className="bg-gray-50 p-4 rounded-md flex items-center">
                          <CreditCard size={20} className="text-purple mr-3" />
                          <span>Credit Card ending in {formData.cardNumber.slice(-4)}</span>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="font-medium text-gray-800 mb-3">Order Items</h3>
                        <div className="bg-gray-50 p-4 rounded-md divide-y">
                          {cart.map(item => (
                            <div key={item.id} className="flex items-center py-3 first:pt-0 last:pb-0">
                              <div className="w-16 h-16 bg-white rounded-md overflow-hidden mr-4">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-gray-800">
                                  ${((item.discount ? item.price * (1 - item.discount / 100) : item.price) * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="btn-outline flex items-center"
                        >
                          <ArrowLeft size={16} className="mr-1" /> Back
                        </button>
                        <button type="submit" className="btn-primary flex items-center">
                          Place Order <Check size={16} className="ml-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-md flex items-center justify-center mr-3">
                          {item.quantity}
                        </div>
                        <span className="text-gray-600 truncate max-w-[180px]">{item.name}</span>
                      </div>
                      <span className="font-medium">${((item.discount ? item.price * (1 - item.discount / 100) : item.price) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <hr className="my-4" />
                
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
                </div>
                
                <hr className="my-4" />
                
                <div className="flex justify-between font-bold text-lg text-gray-800 mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
