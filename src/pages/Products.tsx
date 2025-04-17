
import React, { useState } from 'react';
import { Sliders, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <Sliders size={16} className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Search</h3>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label 
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm text-gray-600 cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => {
                      setSearchTerm('');
                      setPriceRange([0, 1000]);
                      setSelectedCategories([]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
