import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Jérôme Martins",
    text: "Had a gas leak, and their quick response might have saved my home. They arrived within 20 minutes and handled everything professionally. Forever grateful!",
    rating: 5,
    date: "7 months ago"
  },
  {
    id: 2,
    name: "Katarina Johnes",
    text: "Plumbing NYC came out in the early afternoon and stayed past 5 pm to get the job done. They tackled issues with our old corroded pipes to ensure I had hot water.",
    rating: 5,
    date: "1 year ago"
  },
  {
    id: 3,
    name: "Alexis Lawson",
    text: "My water heater stopped working, and they fixed it the same day. Super impressed with their service!",
    rating: 5,
    date: "7 months ago"
  },
  {
    id: 4,
    name: "Justine Benford",
    text: "I had a leaking pipe for over a week I couldn't detect. Thanks to Plumbing NYC they acted swiftly and resolved my problem within hours.",
    rating: 5,
    date: "1 year ago"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-brand-200 text-lg">Rated 4.8/5 based on 55+ Google Reviews</p>
        </div>
      </div>

      <div className="container mx-auto px-4 overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div key={review.id} className="w-[300px] md:w-auto bg-brand-800 p-6 rounded-xl border border-brand-700 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"{review.text}"</p>
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-brand-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};