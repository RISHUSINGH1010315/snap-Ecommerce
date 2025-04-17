
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../models/Product';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, image, rating, discount } = product;

  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {discount}% OFF
          </div>
        )}
        
        <button 
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={16} className="text-gray-600" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center text-sm font-medium"
          >
            <ShoppingCart size={16} className="mr-1" /> Add to Cart
          </button>
          <Link 
            to={`/product/${id}`}
            className="text-sm font-medium underline"
          >
            View Details
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-gray-800 mb-1 truncate hover:text-purple transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {discount ? (
              <>
                <span className="font-bold text-gray-800">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-gray-800">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
