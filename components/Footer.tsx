import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="./assets/logo.png"
                alt="Plumbing NYC"
                className="h-12 py-2 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">
              NYC's trusted 24/7 emergency plumbers. Serving all 5 boroughs with speed and integrity.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-brand-600 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-brand-600 transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-600 transition-colors">Contact Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 transition-colors">Emergency Repairs</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 transition-colors">Drain Cleaning</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 transition-colors">Water Heaters</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 transition-colors">Leak Detection</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="tel:6465807524" className="hover:text-brand-600 transition-colors">646-580-7524</a></li>
              <li><a href="mailto:info@plumbingnyc.com" className="hover:text-brand-600 transition-colors">info@plumbingnyc.com</a></li>
              <li>510 West 45th Apt 11g, NY</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-50">
          <p>© 2025 Plumbing NYC. All Rights Reserved. Built by BUILDWRKS COMPANY.</p>
        </div>
      </div>
    </footer>
  );
};