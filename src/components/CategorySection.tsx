
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/category/${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold px-4 py-2 bg-black/30 rounded-md">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
