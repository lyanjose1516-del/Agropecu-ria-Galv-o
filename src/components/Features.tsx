import React from 'react';
import { benefits } from '../data';

export default function Features() {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a AgroPet?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mais do que uma loja, somos parceiros na saúde do seu animal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-brand-orange w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
