
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  RefreshCw, 
  Shield, 
  Star,
  ChevronRight,
  Minus,
  Plus
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="btn-primary">Return to Homepage</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { name, price, description, image, category, rating, stock, discount } = product;
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter(p => p.category === category && p.id !== product.id)
    .slice(0, 4);
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to={`/category/${category.toLowerCase()}`} className="hover:text-purple transition-colors">
              {category}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-700">{name}</span>
          </div>
          
          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-auto max-h-[500px] object-contain p-4"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{rating}</span>
                </div>
              </div>
              
              <div className="mb-6">
                {discount ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                    <span className="ml-3 text-xl text-gray-500 line-through">${price.toFixed(2)}</span>
                    <span className="ml-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                      {discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600">
                  {description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className={`mr-2 ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock > 0 ? '● In Stock' : '● Out of Stock'}
                  </span>
                  <span>({stock} available)</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center border rounded-md mr-4">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-none focus:outline-none"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex items-center justify-center"
                  disabled={stock <= 0}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn-outline flex items-center justify-center">
                  <Heart size={16} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>
              
              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck size={18} className="text-purple mr-2" />
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <RefreshCw size={18} className="text-purple mr-2" />
                    <span>30-day returns</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield size={18} className="text-purple mr-2" />
                    <span>2-year warranty</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="flex items-center text-sm text-gray-600 hover:text-purple transition-colors">
                  <Share2 size={16} className="mr-1" />
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
