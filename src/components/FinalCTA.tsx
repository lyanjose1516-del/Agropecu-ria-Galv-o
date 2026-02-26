import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-brand-green/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pronto para encontrar a ração ideal?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Garanta a saúde e felicidade do seu cachorro com a nutrição correta. É rápido, fácil e gratuito.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToCalculator}
                className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Descobrir melhor ração agora
                <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200">
                Falar com a loja
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
