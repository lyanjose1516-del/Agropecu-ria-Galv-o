import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.postimg.cc/Dyk18tFC/417958326-386775137160008-6972213239840010646-n.png" 
              alt="Logo AgroPet" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              AgroPet
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Como funciona', 'Depoimentos', 'Sobre', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
                className="text-gray-600 hover:text-brand-orange font-medium transition-colors text-sm"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Descobrir Ração
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-orange focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {['Início', 'Como funciona', 'Depoimentos', 'Sobre', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('í', 'i'))}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-brand-orange hover:bg-orange-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('calculadora')}
                  className="w-full bg-brand-orange text-white px-4 py-3 rounded-xl font-bold text-center shadow-md active:scale-95 transition-transform"
                >
                  Descobrir Melhor Ração
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
