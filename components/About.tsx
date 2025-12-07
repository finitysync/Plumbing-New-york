import React from 'react';
import { CheckCircle2, DollarSign } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://picsum.photos/seed/plumbertools/800/1000" 
              alt="Plumber working" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-brand-600 mb-1">100%</p>
              <p className="text-gray-800 font-medium">Satisfaction Guarantee</p>
              <p className="text-sm text-gray-500 mt-2">We don't leave until the job is done right.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why NYC Chooses Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Plumbing in New York is complex. You need a team that understands the unique infrastructure of our city. With over 30 years of experience, we pride ourselves on transparency, speed, and quality.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-brand-600 p-2 rounded-lg text-white">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600 mb-4">
                    The average cost for a plumber in NYC is between <strong>$75 and $200 per hour</strong>. We stay competitive within this range but offer something others don't: <strong>Upfront Quotes.</strong>
                  </p>
                  <p className="text-sm text-gray-500">
                    No hidden fees. You know the cost before we start.
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Licensed, Bonded, and Insured Professionals",
                "Same-Day Service Availability",
                "Clean-up Guarantee (We leave no mess)",
                "Honest diagnostics—no upselling unnecessary repairs"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};