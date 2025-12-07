import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data here
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
            <p className="text-gray-600 text-lg mb-8">
              We respond to all requests within 15 minutes. For immediate emergencies, please call us directly.
            </p>

            <div className="space-y-6 mb-8">
              <a href="tel:6465807524" className="flex items-center gap-4 text-gray-700 hover:text-brand-600 transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Emergency Line</p>
                  <p className="text-2xl font-bold">646-580-7524</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Service Area</p>
                  <p className="text-lg">NYC, Manhattan, Queens, Brooklyn, Bronx</p>
                  <p className="text-sm text-gray-400">510 West 45th Apt 11g, New York, NY 10036</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Email Us</p>
                  <p className="text-lg">info@plumbingnyc.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We will call you back within 15 minutes.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 font-semibold hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Describe your plumbing issue..."></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Request Free Quote
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};