import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-all duration-300 font-mono ${
        isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/50 py-4' : 'bg-transparent py-8'
      }`}
    >
      {/* Logo Container with Scroll Animation */}
      <div className="relative h-8 w-40 overflow-hidden">
        <div 
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out flex items-center ${
            isScrolled ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-foreground cursor-pointer">
            BALERION
          </Link>
        </div>
        
        <div 
          className={`absolute w-full h-full -top-full transition-transform duration-500 ease-in-out flex items-center ${
            isScrolled ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/bairu/image/upload/v1762286286/on-black-white_jqurzf.png" 
              alt="Balerion Logo" 
              className="h-8 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm md:text-[15px] text-foreground font-medium tracking-tight">
        <Link to="/portfolio" className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-all">Portfolio</Link>
        <Link to="/products" className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-all">Products</Link>
        <Link to="/careers" className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-all">Careers</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-foreground"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-sm font-mono animate-in slide-in-from-top-5">
          <Link to="/portfolio" className="text-lg font-medium text-foreground hover:text-black" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/products" className="text-lg font-medium text-foreground hover:text-black" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/careers" className="text-lg font-medium text-foreground hover:text-black" onClick={() => setIsMenuOpen(false)}>Careers</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;