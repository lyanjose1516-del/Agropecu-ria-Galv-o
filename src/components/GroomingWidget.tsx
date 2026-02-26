import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, X, Check, Calendar, MessageCircle, Dog, Ruler, Clock, Sparkles, ShowerHead } from 'lucide-react';
import { breeds } from '../data';

const groomingServices = [
  { id: 'banho', label: 'Banho', icon: ShowerHead },
  { id: 'tosa_completa', label: 'Tosa completa', icon: Scissors },
  { id: 'tosa_higienica', label: 'Tosa higiênica', icon: Sparkles },
  { id: 'unhas', label: 'Corte de unhas', icon: Ruler },
  { id: 'ouvido', label: 'Limpeza de ouvido', icon: Check },
  { id: 'hidratacao', label: 'Hidratação', icon: Sparkles },
];

export default function GroomingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'results'>('form');
  
  // Form State
  const [formData, setFormData] = useState({
    breed: '',
    age: 'adult',
    weight: '',
    lastBath: '1-2_weeks',
    selectedServices: [] as string[]
  });

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(id)
        ? prev.selectedServices.filter(s => s !== id)
        : [...prev.selectedServices, id]
    }));
  };

  const handleCalculate = () => {
    // Simulate processing
    setTimeout(() => {
      setStep('results');
    }, 500);
  };

  const reset = () => {
    setStep('form');
    setFormData({
      breed: '',
      age: 'adult',
      weight: '',
      lastBath: '1-2_weeks',
      selectedServices: []
    });
    setIsOpen(false);
  };

  // Mock recommendation logic
  const getRecommendations = () => {
    const recs = [];
    const { breed, lastBath, selectedServices } = formData;
    
    // Base recommendations based on selection
    if (selectedServices.includes('banho') || lastBath === 'more_1_month') {
      recs.push({
        name: 'Banho Premium + Hidratação',
        description: 'Ideal para revitalizar a pelagem e garantir limpeza profunda.',
        price: 'R$ 80,00',
        tag: 'Recomendado'
      });
    }

    if (selectedServices.includes('tosa_completa') || ['shihtzu', 'poodle', 'yorkshire'].includes(breed)) {
      recs.push({
        name: 'Tosa da Raça (Tesoura)',
        description: 'Acabamento perfeito respeitando o padrão da raça.',
        price: 'R$ 120,00',
        tag: 'Especialidade'
      });
    }

    if (selectedServices.includes('unhas') || selectedServices.includes('ouvido')) {
      recs.push({
        name: 'Combo Higiene Total',
        description: 'Corte de unhas, limpeza de ouvidos e escovação de dentes.',
        price: 'R$ 45,00',
        tag: 'Combo'
      });
    }

    // Default if nothing specific matches
    if (recs.length === 0) {
      recs.push({
        name: 'Banho & Tosa Higiênica',
        description: 'Manutenção essencial para o bem-estar do seu pet.',
        price: 'R$ 95,00',
        tag: 'Popular'
      });
    }

    return recs;
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 bg-brand-orange text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 font-bold hover:bg-orange-600 transition-colors group"
      >
        <div className="bg-white/20 p-2 rounded-full">
          <Scissors size={20} className="text-white" />
        </div>
        <span className="pr-1">Banho e Tosa</span>
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-brand-orange opacity-75 animate-ping -z-10"></span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 pointer-events-none"
            >
              <div className="bg-white w-full md:w-[600px] md:max-h-[90vh] md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">
                
                {/* Header */}
                <div className="bg-brand-orange p-6 text-white flex justify-between items-start shrink-0">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Scissors size={24} />
                      Banho e Tosa
                    </h2>
                    <p className="text-orange-100 text-sm mt-1 opacity-90">
                      Cuidados especiais para o seu melhor amigo.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content Scrollable Area */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  {step === 'form' ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Breed */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Dog size={16} className="text-brand-orange" />
                          Raça do cachorro
                        </label>
                        <select
                          value={formData.breed}
                          onChange={(e) => setFormData({...formData, breed: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none bg-white"
                        >
                          <option value="">Selecione a raça...</option>
                          {breeds.map(breed => (
                            <option key={breed.id} value={breed.id}>{breed.name}</option>
                          ))}
                          <option value="other">Outra raça</option>
                        </select>
                      </div>

                      {/* Age & Weight */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Calendar size={16} className="text-brand-orange" />
                            Idade
                          </label>
                          <select
                            value={formData.age}
                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none bg-white"
                          >
                            <option value="puppy">Filhote</option>
                            <option value="adult">Adulto</option>
                            <option value="senior">Sênior</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Ruler size={16} className="text-brand-orange" />
                            Peso (kg)
                          </label>
                          <input
                            type="number"
                            placeholder="Ex: 8,5"
                            value={formData.weight}
                            onChange={(e) => setFormData({...formData, weight: e.target.value})}
                            className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none"
                          />
                        </div>
                      </div>

                      {/* Last Bath */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Clock size={16} className="text-brand-orange" />
                          Último banho
                        </label>
                        <select
                          value={formData.lastBath}
                          onChange={(e) => setFormData({...formData, lastBath: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none bg-white"
                        >
                          <option value="less_1_week">Menos de 1 semana</option>
                          <option value="1-2_weeks">1 a 2 semanas</option>
                          <option value="more_1_month">Mais de 1 mês</option>
                        </select>
                        <p className="text-xs text-gray-500">Isso nos ajuda a identificar a necessidade de hidratação extra.</p>
                      </div>

                      {/* Services */}
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Sparkles size={16} className="text-brand-orange" />
                          Serviços desejados
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {groomingServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => toggleService(service.id)}
                              className={`p-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 text-left ${
                                formData.selectedServices.includes(service.id)
                                  ? 'border-brand-orange bg-orange-50 text-brand-orange ring-1 ring-brand-orange'
                                  : 'border-gray-200 hover:border-brand-orange/50 text-gray-600'
                              }`}
                            >
                              <service.icon size={16} />
                              {service.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={handleCalculate}
                        disabled={!formData.breed || !formData.weight}
                        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all mt-4 ${
                          !formData.breed || !formData.weight
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-brand-orange text-white hover:bg-orange-600 hover:shadow-orange-200 hover:-translate-y-1'
                        }`}
                      >
                        Ver serviços recomendados
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <div className="bg-brand-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Check size={32} className="text-brand-green" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Recomendação Pronta!</h3>
                        <p className="text-gray-600 text-sm">Baseado no perfil do seu {breeds.find(b => b.id === formData.breed)?.name || 'pet'}</p>
                      </div>

                      <div className="space-y-4">
                        {getRecommendations().map((rec, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-brand-green text-green-900 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                              {rec.tag}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{rec.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-brand-orange font-bold">{rec.price}</span>
                              <span className="text-xs text-gray-400">Estimativa</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 space-y-3">
                        <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center gap-2">
                          <Calendar size={20} />
                          Agendar Agora
                        </button>
                        <button className="w-full bg-white text-gray-700 border-2 border-gray-200 py-3 rounded-xl font-bold hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center gap-2">
                          <MessageCircle size={20} />
                          Falar no WhatsApp
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => setStep('form')}
                        className="w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-2"
                      >
                        Voltar e editar dados
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
