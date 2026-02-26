import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              Nutrição especializada para seu pet
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Encontre a ração ideal para o seu cachorro em <span className="text-brand-orange">poucos cliques</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Receba uma recomendação personalizada baseada na raça, idade e peso do seu melhor amigo. Veja o preço final na hora!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <button 
                onClick={scrollToCalculator}
                className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Descobrir ração ideal
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-gray-700 border-2 border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-all bg-white">
                Ver catálogo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-green" size={18} />
                Recomendação personalizada
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-green" size={18} />
                Produtos disponíveis na loja
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-green" size={18} />
                Orçamento imediato
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Cachorro feliz e saudável" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-brand-green/20 p-2 rounded-full">
                  <CheckCircle2 className="text-brand-green" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Qualidade</p>
                  <p className="text-gray-900 font-bold">Garantida</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
