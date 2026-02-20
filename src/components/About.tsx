import React from 'react';
import { Store } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Interior da Agropecuária" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-green text-brand-dark p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg mb-1">Desde 2015</p>
              <p className="text-sm opacity-90">Cuidando com carinho da alimentação dos pets da nossa região.</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider text-sm mb-4">
              <Store size={18} />
              Sobre a AgroPet
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Compromisso com a saúde do seu melhor amigo
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                A AgroPet nasceu da paixão por animais e da necessidade de oferecer produtos de alta qualidade com orientação especializada.
              </p>
              <p>
                Sabemos que cada cachorro é único, e por isso nossa equipe é treinada para ajudar você a encontrar a nutrição exata que ele precisa para viver mais e melhor.
              </p>
              <p>
                Trabalhamos apenas com fornecedores certificados e garantimos a procedência de cada pacote de ração que sai da nossa loja.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
