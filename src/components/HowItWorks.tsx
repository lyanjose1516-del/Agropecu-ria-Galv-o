import React from 'react';
import { Dog, Scale, ShoppingBag } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Dog,
      title: '1. Escolha a raça',
      description: 'Selecione a raça do seu cachorro para entendermos o porte e necessidades.'
    },
    {
      icon: Scale,
      title: '2. Informe os dados',
      description: 'Diga o peso, idade e a quantidade de ração que deseja comprar.'
    },
    {
      icon: ShoppingBag,
      title: '3. Veja a recomendação',
      description: 'Receba a indicação da melhor ração e o valor total na hora.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            É muito simples e rápido encontrar a alimentação perfeita para seu pet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-orange group-hover:shadow-md transition-all duration-300 relative z-10">
                <div className="bg-orange-50 p-4 rounded-full">
                  <step.icon className="text-brand-orange w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
