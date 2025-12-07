import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Upload, Facebook, Twitter, Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import gsap from 'gsap';
import { SERVICES_LIST } from './ServicesPage';

export const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.contact-header', { y: -30, opacity: 0, duration: 1, ease: 'power3.out' });
      
      // Left Column (Form)
      gsap.from('.contact-form-col', { x: -30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      
      // Right Column (Info)
      gsap.from('.contact-info-col', { x: 30, opacity: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' });
      
      // Map
      gsap.from('.contact-map', { y: 30, opacity: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Formspree submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would fetch() to Formspree here
    // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: 'POST', body: ... })
    
    setIsSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="pt-20 min-h-screen bg-gray-50 animate-fade-in">
      
      {/* Hero Header */}
      <section className="bg-brand-900 text-white py-16 contact-header relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We are here to help 24/7. Reach out for emergency services, quotes, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form Section */}
          <div className="contact-form-col bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-8 max-w-xs">
                  Thank you for contacting Plumbing NYC. We will respond to your request shortly.
                </p>
                <Button onClick={() => {setSubmitted(false); setFormData({name:'', email:'', phone:'', service: '', message:''}); setFile(null);}} variant="outline" className="!text-brand-600 !border-brand-600 hover:!bg-brand-50">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form 
                  onSubmit={handleSubmit} 
                  action="https://formspree.io/f/YOUR_FORM_ID" 
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="E.g. John" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="E.g. john@doe.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="E.g. +1 3004005000" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    >
                      <option value="" disabled>Select a Service</option>
                      {SERVICES_LIST.map(service => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <div className="relative">
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5} 
                        placeholder="Enter your message..." 
                        value={formData.message}
                        onChange={handleInputChange}
                        maxLength={180}
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                      ></textarea>
                      <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                        {formData.message.length} / 180
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload file (Videos or Photos)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative group">
                      <input 
                        type="file" 
                        name="attachment"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        accept="image/*,video/*"
                      />
                      <div className="flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload size={20} />
                        </div>
                        <p className="text-gray-900 font-medium text-sm">
                          {file ? file.name : "Drag and Drop (or) Choose Files"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">File Capacity: 30 MB Only</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info & Map Section */}
          <div className="contact-info-col space-y-8">
            
            {/* Info Cards */}
            <div className="bg-brand-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>

               <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
               
               <div className="space-y-8 relative z-10">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                     <Phone className="text-brand-400" size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm font-medium uppercase mb-1">Phone</p>
                     <a href="tel:6465807524" className="text-xl font-bold hover:text-brand-400 transition-colors">
                       +1 (646) 580-7524
                     </a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                     <Mail className="text-brand-400" size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm font-medium uppercase mb-1">Email</p>
                     <a href="mailto:info@plumbingnyc.com" className="text-lg font-medium hover:text-brand-400 transition-colors">
                       info@plumbingnyc.com
                     </a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                     <MapPin className="text-brand-400" size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm font-medium uppercase mb-1">Addresses</p>
                     <p className="text-base leading-relaxed mb-2">
                       510 West 45th Apt 11g,<br/> New York, NY 10036
                     </p>
                     <p className="text-base leading-relaxed text-gray-300">
                       11 Mott St Apt 5f,<br/> New York, NY 10013
                     </p>
                   </div>
                 </div>
               </div>

               {/* Socials */}
               <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                 <p className="text-gray-400 text-sm mb-4">Connect with us:</p>
                 <div className="flex gap-4">
                   {[Facebook, Twitter, Instagram, MessageCircle].map((Icon, i) => (
                     <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                       <Icon size={18} className="text-white" />
                     </a>
                   ))}
                 </div>
               </div>
            </div>

            {/* Google Map Embed */}
            <div className="contact-map bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-[300px] md:h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.029875953051!2d-73.99650632426618!3d40.76149297138597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585315482367%3A0x673934394018285a!2s510%20W%2045th%20St%20%2311g%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1714582947123!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Plumbing NYC Office Location"
              ></iframe>
            </div>

            {/* CTA Box */}
            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-brand-900">Get a Free Quote</h4>
                <p className="text-sm text-brand-700">Detailed estimates for large projects.</p>
              </div>
              <Button onClick={() => window.scrollTo(0,0)} variant="primary" size="sm">
                Request Now
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};