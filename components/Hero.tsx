import React from 'react';
import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './Button';
import { PageView } from '../types';

interface HeroProps {
  onNavigate?: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/plumbingwork/1920/1080" 
          alt="Professional Plumber in NYC" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Arriving in 30 Minutes or Less
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            NYC's Most Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              24/7 Emergency Plumbers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Expert residential and commercial plumbing across Manhattan, Queens, Brooklyn, and the Bronx. Licensed, insured, and serving New York for over 30 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="danger" 
              size="lg" 
              className="w-full sm:w-auto shadow-red-500/20"
              onClick={() => window.location.href = 'tel:6465807524'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 646-580-7524
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => onNavigate && onNavigate('quote')}
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="pt-8 pb-8 border-t border-white/10 grid grid-cols-3 gap-4">
            <div className="text-white/80">
              <Clock className="h-6 w-6 text-brand-500 mb-2" />
              <p className="font-semibold text-white">24/7 Service</p>
              <p className="text-sm">Day or Night</p>
            </div>
            <div className="text-white/80">
              <ShieldCheck className="h-6 w-6 text-brand-500 mb-2" />
              <p className="font-semibold text-white">Licensed</p>
              <p className="text-sm">& Fully Insured</p>
            </div>
            <div className="text-white/80">
              <MapPin className="h-6 w-6 text-brand-500 mb-2" />
              <p className="font-semibold text-white">NYC Wide</p>
              <p className="text-sm">5 Boroughs</p>
            </div>
          </div>
        </div>

        {/* Floating Card / Form Placeholder */}
        <div className="hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
          <div className="space-y-6 text-white">
             <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="text-3xl font-bold">12k+</div>
                <div className="text-sm text-gray-300">Emergency Jobs<br/>Completed</div>
             </div>
             <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-gray-300">Years of<br/>Experience</div>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-gray-300">Star Rating<br/>on Google</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};