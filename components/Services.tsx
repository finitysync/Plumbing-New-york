import React, { useCallback } from 'react';
import { Wrench, Building2, Home, Droplets, AlertTriangle, ArrowRight } from 'lucide-react';
import { ServiceItem, SectionId } from '../types';

const services: ServiceItem[] = [
  {
    id: 'emergency',
    title: '24/7 Emergency Plumbing',
    description: 'Immediate response for bursts, floods, and gas leaks. We arrive within 60 minutes.',
    icon: <AlertTriangle className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: 'residential',
    title: 'Residential Services',
    description: 'Complete home plumbing care including toilets, sinks, showers, and water heaters.',
    icon: <Home className="w-8 h-8 text-brand-600" />,
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Heavy-duty solutions for NYC businesses. Minimizing downtime for your operations.',
    icon: <Building2 className="w-8 h-8 text-brand-600" />,
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'High-pressure cleaning for clogged drains, sewer lines, and grease buildup.',
    icon: <Droplets className="w-8 h-8 text-brand-600" />,
  },
  {
    id: 'sewer',
    title: 'Sewer Line Repair',
    description: 'Expert diagnostics and repair for damaged sewer lines from roots or age.',
    icon: <Wrench className="w-8 h-8 text-brand-600" />,
  },
  {
    id: 'install',
    title: 'Fixture Installation',
    description: 'Professional installation of new appliances, faucets, and modern fixtures.',
    icon: <ArrowRight className="w-8 h-8 text-brand-600" />, // Placeholder icon
  },
];

export const Services: React.FC = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById(SectionId.CONTACT);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Plumbing Solutions</h3>
          <p className="text-gray-600 text-lg">
            From minor residential leaks to major commercial overhauls, we bring 30 years of NYC expertise to every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={scrollToContact}
              className="w-full text-left bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              <div className="mb-6 p-4 rounded-lg bg-blue-50 w-fit group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { 
                  className: `w-8 h-8 ${service.id === 'emergency' ? 'text-brand-accent group-hover:text-white' : 'text-brand-600 group-hover:text-white'}`,
                  'aria-hidden': 'true'
                })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="inline-flex items-center text-brand-600 font-semibold group-hover:text-brand-800">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};