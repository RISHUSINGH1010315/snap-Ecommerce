
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../models/Product';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, image, quantity, discount } = item;
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const itemTotal = discountedPrice * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-800 mb-1">{name}</h3>
        <div className="flex items-center mb-2">
          {discount ? (
            <>
              <span className="font-medium text-gray-800">${discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium text-gray-800">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <button 
          onClick={() => updateQuantity(id, quantity - 1)}
          className="p-1 border rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        
        <span className="w-10 text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-1 border rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0 ml-0 sm:ml-6">
        <span className="font-bold text-gray-800 mr-4">${itemTotal.toFixed(2)}</span>
        <button 
          onClick={() => removeFromCart(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
