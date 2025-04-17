
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-light/10 to-purple/10 py-12 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop the latest trends and must-have items with free shipping on orders over $50.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary flex items-center justify-center">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/categories" className="btn-outline flex items-center justify-center">
                Browse Categories
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Featured product" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-light text-white py-2 px-4 rounded-lg shadow-md transform rotate-2">
              <p className="font-bold">New Arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
