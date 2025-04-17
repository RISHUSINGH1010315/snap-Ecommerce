
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, UserCheck, CreditCard, TruckIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategorySection />
        
        {/* Call-to-action section */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start shopping?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our complete collection with thousands of products and exclusive deals.
            </p>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              Browse All Products <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Shop With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Selection</h3>
                <p className="text-gray-600">Thousands of quality products across multiple categories.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TruckIcon size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable shipping on all orders.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
                <p className="text-gray-600">Multiple secure payment options for your convenience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Member Benefits</h3>
                <p className="text-gray-600">Exclusive deals and rewards for registered members.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Account banner section */}
        {!isAuthenticated && (
          <section className="py-12 bg-purple-100">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account today</h2>
                <p className="text-gray-700">
                  Sign up to get personalized recommendations, track orders, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/register')}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Create Account
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </section>
        )}
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
