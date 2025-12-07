import React from 'react';
import { ShieldCheck, Users, Lightbulb, Clock, Target, Heart, Wrench, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/nycskyline/1920/1080" 
            alt="NYC Skyline" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            More Than Just <br/>
            <span className="text-brand-500">A Job Well Done</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            30 years of building relationships and ensuring safety across the five boroughs. 
            Independently owned. Dedication driven.
          </p>
        </div>
      </section>

      {/* Our Story / Founder's Message */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Our Story</h2>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              From a Wrench to a <br/>City-Wide Standard
            </h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                When Plumbing NYC was first founded, the goal was simple: fix pipes. But as we worked in homes across Manhattan, Queens, and Brooklyn, we realized that our customers needed more. They didn't just need a repair; they needed peace of mind.
              </p>
              <p>
                We believe that a plumbing service should offer a <strong>top-notch overall experience</strong>. This means combining excellent technical results with amazing customer service. It's not just about stopping a leak; it's about respecting your home, your time, and your budget.
              </p>
              <p>
                Today, with over 30 years in the market, our reputation precedes us. We have evolved from a local operation into New York City's premier authority on residential and commercial plumbing, yet we remain independently owned and deeply connected to the communities we serve.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={() => onNavigate('services')} variant="outline" className="!text-brand-600 !border-brand-600 hover:!bg-brand-50">
                View Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-8 -left-4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <img 
              src="https://picsum.photos/seed/plumbingteam/800/1000" 
              alt="Plumbing NYC Team" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-brand-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To serve New York City residents by delivering exquisite plumbing services that prioritize safety, quality, and speed. We act immediately to avert disasters, ensuring that whether it's a minor leak or a major sewer burst, our clients are protected from loss and stress.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-brand-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To establish lasting relationships with our clientele by being the most educational and transparent plumbing consultancy in NYC. We don't just fix problems; we empower property owners to make informed decisions about their infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why New York Trusts Us</h2>
            <p className="text-gray-600 text-lg">
              Plumbing issues in NYC—from hidden leaks to freezing pipes—are complex. Here is how we stand apart in a crowded market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-brand-600" />,
                title: "Rapid Response",
                desc: "We understand that you can't wait when water is rising. Our flexible teams are dispatched immediately to minimize damage and get you back to normal."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
                title: "Education First",
                desc: "We take the initiative to educate home and property owners. We provide consultancy to help you understand the 'why' and 'how' of your plumbing system."
              },
              {
                icon: <Heart className="w-8 h-8 text-brand-600" />,
                title: "Transparent Care",
                desc: "No hidden costs. We offer free quotes upon assessment. We value the relationship over the transaction, ensuring you never feel hassled."
              },
              {
                icon: <Wrench className="w-8 h-8 text-brand-600" />,
                title: "State-of-the-Art Tech",
                desc: "We invest in the latest diagnostics and repair equipment, allowing us to fix complex sewer and drain issues faster and with less mess."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-600" />,
                title: "Experienced Team",
                desc: "30 years in the market means we have seen it all. Our licensed professionals are experts at navigating NYC's unique building codes and infrastructure."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-brand-600" />,
                title: "Comprehensive Service",
                desc: "From water mains to fixture installation, residential to commercial. We are the one-stop shop for all five boroughs."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="mb-4 bg-blue-50 w-fit p-3 rounded-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Free Quote?</h2>
              <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
                Don't stay in limbo regarding your plumbing problems. Let our experts provide a free assessment and guide you to the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="danger" size="lg" onClick={() => window.location.href = 'tel:6465807524'}>
                  Call 646-580-7524
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate('home')}>
                  Contact Us Online
                </Button>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};