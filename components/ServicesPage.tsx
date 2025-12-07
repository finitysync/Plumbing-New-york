import React, { useEffect, useRef } from 'react';
import { 
  Wrench, Building2, Home, Droplets, AlertTriangle, ArrowRight, 
  Flame, Bath, Thermometer, Construction, Hammer,
  CheckCircle2, Inspect, Fuel, MapPin, Phone
} from 'lucide-react';
import { Button } from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom icon mapping for specific services
const getIcon = (id: string) => {
  switch (id) {
    case 'commercial': return <Building2 size={24} />;
    case 'emergency': return <AlertTriangle size={24} className="text-red-500" />;
    case 'residential': return <Home size={24} />;
    case 'sewer': return <Wrench size={24} />;
    case 'bathroom': return <Bath size={24} />;
    case 'shower': return <Droplets size={24} />;
    case 'drain': return <Droplets size={24} />;
    case 'broken-main': return <Hammer size={24} />;
    case 'pipe-upgrade': return <Construction size={24} />;
    case 'common': return <Wrench size={24} />;
    case 'gas': return <Fuel size={24} className="text-orange-500" />;
    case 'heater': return <Flame size={24} className="text-orange-500" />;
    case 'sump': return <Droplets size={24} />;
    case 'boiler': return <Thermometer size={24} />;
    case 'staten': return <MapPin size={24} />;
    case 'fixture': return <Wrench size={24} />;
    case 'inspection': return <Inspect size={24} />;
    case 'roughing': return <Construction size={24} />;
    default: return <CheckCircle2 size={24} />;
  }
};

export const SERVICES_LIST = [
  { id: 'commercial', title: 'Commercial Plumbing', desc: 'Comprehensive plumbing solutions for offices, retail, and industrial buildings in NYC.' },
  { id: 'emergency', title: 'Emergency Plumbing', desc: '24/7 rapid response for bursts, floods, and gas leaks. Arriving in 30 mins.' },
  { id: 'residential', title: 'Residential Plumbing', desc: 'Expert home repairs and installations for apartments, brownstones, and houses.' },
  { id: 'sewer', title: 'Sewer Line Repair', desc: 'Trenchless and traditional repair methods for damaged or clogged sewer lines.' },
  { id: 'bathroom', title: 'Bathroom Plumbing', desc: 'Toilet repair, sink installation, and complete bathroom renovation plumbing.' },
  { id: 'shower', title: 'Shower Repair', desc: 'Fixing leaks, low pressure, and temperature issues for showers and tubs.' },
  { id: 'drain', title: 'Drain Cleaning', desc: 'High-pressure hydro jetting and snaking to clear stubborn blockages.' },
  { id: 'broken-main', title: 'Broken Water Main Repair', desc: 'Emergency excavation and repair for main water line breaks and street service connections.' },
  { id: 'pipe-upgrade', title: 'Pipe Upgrades', desc: 'Replacing old galvanized pipes with copper or PEX for better flow and safety.' },
  { id: 'common', title: 'Common Plumbing', desc: 'Fixing dripping faucets, running toilets, and other daily annoyances efficiently.' },
  { id: 'gas', title: 'Gas Leak Repair Service', desc: 'Certified gas line inspection, repair, and new installation. Safety first.' },
  { id: 'heater', title: 'Water Heater Repair & Installation', desc: 'Repair and installation of tankless and traditional water heating systems.' },
  { id: 'sump', title: 'Sump Pump Installation', desc: 'Protect your basement from flooding with reliable sump pump systems.' },
  { id: 'boiler', title: 'Boilers Repair & Installation', desc: 'Annual maintenance and emergency repair for steam and hot water boilers.' },
  { id: 'staten', title: 'Staten Island Plumber', desc: 'Dedicated local service team for our Staten Island residential clients.' },
  { id: 'fixture', title: 'Plumbing Fixture', desc: 'Installation of high-end faucets, showerheads, and modern fixtures.' },
  { id: 'inspection', title: 'Plumbing Inspection', desc: 'Thorough diagnostics and LL152 inspections for code compliance.' },
  { id: 'roughing', title: 'Specializing in New Roughing Projects', desc: 'Rough-in plumbing for new construction and major gut renovations.' },
];

interface ServicesPageProps {
  onNavigate: (page: any) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation - Fast and snappy
      gsap.from('.services-hero-content', { 
        y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' 
      });
      
      // Removed grid animation to eliminate fade effect
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-brand-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/plumbingpipes/1920/1080" 
            alt="Plumbing Services" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white services-hero-content">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/80 backdrop-blur-sm border border-brand-500 mb-6 text-sm font-medium">
             <CheckCircle2 size={16} className="text-white" />
             <span>Licensed, Bonded & Insured in all 5 Boroughs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Expert Plumbing Services <br/>
            <span className="text-brand-400">Across NYC</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            From emergency repairs to major renovations, we cover every aspect of residential and commercial plumbing with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="danger" size="lg" onClick={() => onNavigate('quote')}>
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:6465807524'}>
              <Phone className="w-4 h-4 mr-2" /> 646-580-7524
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Catalog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are fully licensed, bonded, and insured to handle these plumbing tasks in NYC.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Area - No dimming for brightness */}
              <div className="h-52 overflow-hidden relative border-b border-gray-100">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/600/400`} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-md text-brand-600 border border-gray-100">
                  {getIcon(service.id)}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>
              </div>

              {/* Distinct Footer Area */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 mt-auto">
                 <button 
                   onClick={() => onNavigate('quote')}
                   className="text-brand-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                 >
                   Request Service <ArrowRight size={16} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Service Not Listed?</h2>
               <p className="text-gray-400 text-lg mb-10">
                 Our expertise runs deep. If it involves pipes, water, or gas, we can fix it. Contact us for a custom consultation.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button variant="primary" size="lg" onClick={() => onNavigate('contact')}>
                   Contact Us
                 </Button>
                 <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:6465807524'}>
                   Call 646-580-7524
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};