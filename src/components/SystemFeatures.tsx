import React from 'react';
import { 
  Calculator, 
  Search, 
  PackageCheck, 
  LayoutDashboard, 
  Trophy, 
  MessageCircle, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

export default function SystemFeatures() {
  const features = [
    { 
      icon: Calculator, 
      title: 'Simulador de ração',
      desc: 'Recomendação precisa baseada em dados.'
    },
    { 
      icon: Search, 
      title: 'Catálogo inteligente',
      desc: 'Filtros avançados para encontrar o produto ideal.'
    },
    { 
      icon: PackageCheck, 
      title: 'Controle de estoque',
      desc: 'Atualização em tempo real da disponibilidade.'
    },
    { 
      icon: LayoutDashboard, 
      title: 'Painel administrativo',
      desc: 'Gestão completa do negócio em um só lugar.'
    },
    { 
      icon: Trophy, 
      title: 'Sistema de fidelidade',
      desc: 'Pontos e recompensas para clientes recorrentes.'
    },
    { 
      icon: MessageCircle, 
      title: 'Integração WhatsApp',
      desc: 'Contato direto e facilitado com a loja.'
    },
    { 
      icon: Smartphone, 
      title: 'Versão mobile',
      desc: 'Acesso perfeito em qualquer smartphone ou tablet.'
    }
  ];

  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-orange-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Tecnologia de Ponta
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Um Sistema Inteligente para Agropecuária com:
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                <feature.icon className="text-brand-orange w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="p-6 rounded-2xl bg-brand-orange text-white flex flex-col items-center justify-center text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" onClick={scrollToCalculator}>
            <h3 className="font-bold text-xl mb-2">Experimente Agora</h3>
            <p className="text-orange-100 text-sm mb-4">Veja o sistema em ação</p>
            <div className="bg-white text-brand-orange w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={scrollToCalculator}
            className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg flex items-center gap-3 group"
          >
            Testar Sistema Agora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
