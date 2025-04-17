
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Categories: React.FC = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Latest gadgets and electronic devices',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80'
    },
    {
      id: 'clothing',
      name: 'Clothing',
      description: 'Fashion and apparel for all styles',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80'
    },
    {
      id: 'home-decor',
      name: 'Home Decor',
      description: 'Furniture and decor for your space',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      description: 'Skincare, makeup and beauty products',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80'
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Books and literature across all genres',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80'
    },
    {
      id: 'sports',
      name: 'Sports',
      description: 'Sports equipment and activewear',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80'
    },
    {
      id: 'toys',
      name: 'Toys & Games',
      description: 'Fun toys and games for all ages',
      image: 'https://images.unsplash.com/photo-1558060370-d644485927b2?auto=format&fit=crop&q=80'
    },
    {
      id: 'jewelry',
      name: 'Jewelry',
      description: 'Elegant jewelry and accessories',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8 pb-16">
        <div className="container-custom">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
            <p className="text-gray-600 max-w-3xl">Browse our wide selection of products across various categories. Find exactly what you're looking for with our curated collections.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/products?category=${category.id}`)}
              >
                <div className="aspect-w-16 aspect-h-9 w-full h-44 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
