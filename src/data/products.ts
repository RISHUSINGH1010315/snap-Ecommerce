
import { Product } from '../models/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation and high-quality sound. Perfect for music lovers and professionals alike.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    featured: true,
    rating: 4.8,
    stock: 45
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-packed smartwatch with health tracking, notifications, and a beautiful display. Stay connected and maintain your fitness goals.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    featured: true,
    discount: 10,
    rating: 4.6,
    stock: 20
  },
  {
    id: 3,
    name: "Laptop Backpack",
    description: "Ergonomic and spacious backpack with laptop compartment, water resistance, and multiple pockets for organization.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    featured: false,
    rating: 4.5,
    stock: 38
  },
  {
    id: 4,
    name: "Smart Phone",
    description: "Latest smartphone with high-performance processor, amazing camera, and long battery life. Stay connected in style.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    featured: true,
    rating: 4.9,
    stock: 15
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and customizable brewing options. Perfect for coffee enthusiasts.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1525103504173-8dc1582c7430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    featured: false,
    rating: 4.4,
    stock: 27
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with crystal clear sound, long battery life, and comfortable fit. Perfect for active lifestyles.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    featured: true,
    discount: 15,
    rating: 4.7,
    stock: 32
  },
  {
    id: 7,
    name: "Fitness Tracker",
    description: "Sleek fitness tracker with heart rate monitoring, sleep tracking, and waterproof design. Achieve your fitness goals with ease.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    featured: false,
    rating: 4.3,
    stock: 40
  },
  {
    id: 8,
    name: "Portable Speaker",
    description: "Powerful portable speaker with deep bass, waterproof design, and long battery life. Take your music anywhere.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    featured: true,
    rating: 4.6,
    stock: 22
  }
];

export const categories = [
  { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Accessories", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Home", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Fitness", image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }
];
