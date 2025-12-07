import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { PageView } from '../types';

interface HeaderProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Handle navigation based on target
    if (['home', 'about', 'quote', 'blog', 'contact', 'services'].includes(target)) {
      onNavigate(target as PageView);
    } else {
      // It's a section link like #services (fallback)
      if (activePage !== 'home') {
        onNavigate('home');
        // Wait for render then scroll
        setTimeout(() => {
          const element = document.querySelector(target);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', action: 'home' },
    { name: 'Services', action: 'services' },
    { name: 'About Us', action: 'about' },
    { name: 'Free Quote', action: 'quote' },
    { name: 'Blog', action: 'blog' },
    { name: 'Contact Us', action: 'contact' },
  ];

  // Determine if header should be solid/dark text based on page or scroll
  const isSolidHeader = isScrolled || activePage !== 'home';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2">
          <img 
            src="./assets/logo.png" 
            alt="Plumbing NYC" 
            className={`h-12 sm:h-16 w-auto py-4 object-contain transition-all duration-300 ${!isSolidHeader ? 'brightness-0 invert' : ''}`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleNavClick(e, link.action)}
              className={`text-sm font-semibold hover:text-brand-500 transition-colors ${
                isSolidHeader ? 'text-gray-700' : 'text-gray-200'
              } ${activePage === 'blog' && link.name === 'Blog' ? '!text-brand-600' : ''} 
                ${activePage === 'about' && link.name === 'About Us' ? '!text-brand-600' : ''} 
                ${activePage === 'quote' && link.name === 'Free Quote' ? '!text-brand-600' : ''}
                ${activePage === 'contact' && link.name === 'Contact Us' ? '!text-brand-600' : ''}
                ${activePage === 'services' && link.name === 'Services' ? '!text-brand-600' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant={isSolidHeader ? 'primary' : 'secondary'} 
            size="sm"
            onClick={() => window.location.href = 'tel:6465807524'}
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            646-580-7524
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.div
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? 
              <X className="w-6 h-6 text-gray-900" /> : 
              <Menu className={`w-6 h-6 ${isSolidHeader ? 'text-gray-900' : 'text-white'}`} />
            }
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="mobile-menu-container">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 bg-white rounded-xl shadow-2xl z-50 overflow-hidden md:hidden"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleNavClick(e, link.action)}
                    className="w-full text-left text-gray-800 font-medium p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (navLinks.length * 0.05) }}
                >
                  <Button 
                    className="w-full justify-center mt-2" 
                    onClick={() => window.location.href = 'tel:6465807524'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Call Now: 646-580-7524
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};