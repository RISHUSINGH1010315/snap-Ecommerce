
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../models/Product';
import { toast } from '@/components/ui/use-toast';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        const updatedCart = prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
        toast({
          title: "Item updated",
          description: `${product.name} quantity updated to ${newQuantity}`,
        });
        return updatedCart;
      } else {
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === productId);
      if (item) {
        toast({
          title: "Item removed",
          description: `${item.name} has been removed from your cart`,
        });
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cart.reduce(
    (total, item) => {
      const itemPrice = item.discount 
        ? item.price * (1 - item.discount / 100) 
        : item.price;
      return total + (itemPrice * item.quantity);
    }, 
    0
  );

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
