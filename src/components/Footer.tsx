import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.postimg.cc/Dyk18tFC/417958326-386775137160008-6972213239840010646-n.png" 
                alt="Logo AgroPet" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold text-white">
                AgroPet
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua parceira de confiança para cuidar da alimentação e bem-estar do seu pet. Produtos de qualidade e atendimento especializado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
                <span>
                  Av. Principal, 1234 - Centro<br />
                  Cidade Exemplo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-orange shrink-0" size={20} />
                <span>Seg a Sex: 08h às 19h<br/>Sáb: 08h às 14h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-brand-orange transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-orange transition-colors">Como funciona</a></li>
              <li><a href="#calculadora" className="hover:text-brand-orange transition-colors">Calculadora de Ração</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-orange transition-colors">Depoimentos</a></li>
              <li><a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre nós</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgroPet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
