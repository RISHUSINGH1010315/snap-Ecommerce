
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, LogOut } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-purple">ShopStyle</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-purple transition-colors">Products</Link>
            <Link to="/categories" className="text-gray-700 hover:text-purple transition-colors">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-purple transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-purple transition-colors hidden sm:block">
                  <User size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{user?.name}</span>
                      <span className="text-xs text-gray-500">{user?.email}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2" size={16} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-purple transition-colors hidden sm:block">
                <User size={20} />
              </Link>
            )}
            
            <Link to="/cart" className="text-gray-700 hover:text-purple transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 relative animate-fade-in">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple"
              onClick={toggleSearch}
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden animate-slide-in">
            <ul className="flex flex-col space-y-3">
              <li><Link to="/" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/products" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Products</Link></li>
              <li><Link to="/categories" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Categories</Link></li>
              <li><Link to="/about" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/contact" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Contact</Link></li>
              {isAuthenticated ? (
                <>
                  <li><Link to="/profile" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Profile</Link></li>
                  <li><Link to="/orders" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Orders</Link></li>
                  <li><button onClick={() => { handleLogout(); toggleMenu(); }} className="block text-gray-700 hover:text-purple">Logout</button></li>
                </>
              ) : (
                <li><Link to="/login" className="block text-gray-700 hover:text-purple" onClick={toggleMenu}>Login</Link></li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
