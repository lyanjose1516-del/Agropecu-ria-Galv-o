import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600">
            Quem ama cuida, e quem cuida confia na AgroPet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Quote className="absolute top-6 right-6 text-brand-orange/20 w-10 h-10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-orange fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{item.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green/30 rounded-full flex items-center justify-center text-green-800 font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
