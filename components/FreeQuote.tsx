import React, { useState } from 'react';
import { Upload, CheckCircle2, Phone, MapPin, Clock, DollarSign, Send, Shield, FileText } from 'lucide-react';
import { Button } from './Button';

export const FreeQuote: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen animate-fade-in">
      {/* Hero Header */}
      <section className="bg-brand-900 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Your Free Estimate</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Honest pricing. Expert solutions. Fast response. Tell us about your project or emergency, and we'll provide a transparent quote—no strings attached.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Trust & Context */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Clock size={20} />, text: "Fast reply within 15 minutes" },
                  { icon: <DollarSign size={20} />, text: "Transparent, upfront pricing" },
                  { icon: <Shield size={20} />, text: "No hidden fees or obligations" },
                  { icon: <FileText size={20} />, text: "Detailed breakdown of costs" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="text-brand-600">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-brand-900 mb-2">Need Help Immediately?</h3>
              <p className="text-brand-700 text-sm mb-4">
                For active leaks, floods, or gas issues, skip the form and call our 24/7 emergency line.
              </p>
              <a href="tel:6465807524" className="flex items-center gap-3 text-brand-600 font-bold text-xl hover:underline">
                <Phone className="fill-current" size={24} />
                646-580-7524
              </a>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 text-brand-500" size={18} />
                <div>
                  <p className="font-semibold text-gray-900">Dispatch Locations:</p>
                  <p>510 West 45th Apt 11g, New York, NY 10036</p>
                  <p className="mt-1">11 Mott St Apt 5f, New York, NY 10013</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              {submitted ? (
                <div className="text-center py-16">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-8">
                    Thank you for contacting Plumbing NYC. One of our master plumbers will review your details and contact you shortly with your estimate.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="E.g. John Doe"
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="E.g. john@doe.com"
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="E.g. +1 646-555-0123"
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                      <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                        <option>Residential Plumbing</option>
                        <option>Commercial Plumbing</option>
                        <option>Emergency Repair</option>
                        <option>Leak Detection</option>
                        <option>Installation / Renovation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Please describe your plumbing issue or project details..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                    ></textarea>
                    <p className="text-right text-xs text-gray-400 mt-1">0 / 180 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Photos or Videos (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer relative group">
                      <input 
                        type="file" 
                        id="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        accept="image/*,video/*"
                      />
                      <div className="flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload size={24} />
                        </div>
                        <p className="text-gray-900 font-medium">
                          {file ? file.name : "Drag and Drop or Choose Files"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Max capacity: 30 MB</p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg shadow-xl shadow-brand-500/20">
                    <Send className="w-5 h-5 mr-2" />
                    Get My Free Quote
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};