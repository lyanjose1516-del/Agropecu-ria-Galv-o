import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { breeds, products } from '../data';
import { Search, ChevronRight, Calculator, MessageCircle, ShoppingCart, RefreshCcw } from 'lucide-react';

type AgeGroup = 'puppy' | 'adult' | 'senior';

export default function FoodCalculator() {
  const [step, setStep] = useState(1);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [weight, setWeight] = useState('');
  const [ageType, setAgeType] = useState<AgeGroup>('adult');
  const [quantity, setQuantity] = useState('10');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    if (!selectedBreed || !weight || !quantity) return;

    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const product = products[ageType];
      const total = parseFloat(quantity) * product.pricePerKg;
      const dailyPortion = parseFloat(weight) * 1000 * product.dailyPortionFactor;
      
      setResult({
        product,
        total,
        dailyPortion: Math.round(dailyPortion),
        daysLasting: Math.round((parseFloat(quantity) * 1000) / dailyPortion)
      });
      setIsCalculating(false);
      setStep(2);
      
      // Scroll to result after render
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 1500);
  };

  const resetCalculator = () => {
    setStep(1);
    setResult(null);
    if (typeof window !== 'undefined') {
      const element = document.getElementById('calculadora');
      if (element) {
        window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="calculadora" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-brand-orange p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Descubra a melhor ração</h2>
            <p className="text-orange-100 opacity-90">Preencha os dados abaixo para uma recomendação personalizada</p>
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  {/* 1. Breed Selection */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="bg-brand-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                      Qual a raça do seu cachorro?
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {breeds.map((breed) => (
                        <button
                          key={breed.id}
                          onClick={() => setSelectedBreed(breed.id)}
                          className={`relative group rounded-xl overflow-hidden border-2 transition-all duration-200 text-left ${
                            selectedBreed === breed.id 
                              ? 'border-brand-orange ring-2 ring-brand-orange/20 scale-105 shadow-md' 
                              : 'border-gray-100 hover:border-brand-orange/50 hover:shadow-sm'
                          }`}
                        >
                          <div className="aspect-square overflow-hidden bg-gray-100">
                            <img 
                              src={breed.image} 
                              alt={breed.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className={`p-3 text-sm font-medium ${selectedBreed === breed.id ? 'bg-brand-orange text-white' : 'bg-white text-gray-700'}`}>
                            {breed.name}
                          </div>
                          {selectedBreed === breed.id && (
                            <div className="absolute top-2 right-2 bg-brand-orange text-white rounded-full p-1">
                              <Search size={12} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Dog Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="bg-brand-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                      Dados do cachorro
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Peso (kg)</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Ex: 12"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Idade</label>
                        <select
                          value={ageType}
                          onChange={(e) => setAgeType(e.target.value as AgeGroup)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white appearance-none cursor-pointer"
                        >
                          <option value="puppy">Filhote (até 1 ano)</option>
                          <option value="adult">Adulto (1 a 7 anos)</option>
                          <option value="senior">Sênior (+7 anos)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Quantidade a comprar</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Ex: 10"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                      <Search size={12} />
                      Recomendação baseada nos produtos disponíveis em estoque.
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleCalculate}
                      disabled={!selectedBreed || !weight || !quantity || isCalculating}
                      className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                        !selectedBreed || !weight || !quantity || isCalculating
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-brand-orange text-white hover:bg-orange-600 hover:shadow-orange-200 hover:-translate-y-1'
                      }`}
                    >
                      {isCalculating ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Calculando melhor opção...
                        </>
                      ) : (
                        <>
                          <Calculator size={20} />
                          Calcular melhor ração
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  ref={resultRef}
                  className="bg-white"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Product Image */}
                    <div className="w-full md:w-1/3 bg-gray-50 rounded-2xl p-6 flex items-center justify-center border border-gray-100">
                      <img 
                        src={result.product.image} 
                        alt={result.product.name}
                        className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300" 
                      />
                    </div>

                    {/* Result Details */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="inline-block bg-brand-green text-green-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                          Recomendado para seu pet
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.product.name}</h3>
                        <p className="text-gray-600">{result.product.description}</p>
                      </div>

                      <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-gray-600 font-medium">Valor total ({quantity}kg):</span>
                          <span className="text-3xl font-bold text-brand-orange">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.total)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 text-right">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.product.pricePerKg)} por kg
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <p className="text-xs text-gray-500 uppercase font-bold mb-1">Porção diária</p>
                          <p className="font-semibold text-gray-900">{result.dailyPortion}g / dia</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <p className="text-xs text-gray-500 uppercase font-bold mb-1">Duração estimada</p>
                          <p className="font-semibold text-gray-900">{result.daysLasting} dias</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button className="flex-1 bg-brand-orange text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2">
                          <ShoppingCart size={20} />
                          Comprar Agora
                        </button>
                        <button className="flex-1 bg-white text-gray-700 border-2 border-gray-200 py-3.5 rounded-xl font-bold hover:border-brand-green hover:text-brand-green transition-colors flex items-center justify-center gap-2">
                          <MessageCircle size={20} />
                          Falar com atendente
                        </button>
                      </div>

                      <button 
                        onClick={resetCalculator}
                        className="w-full text-center text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1 mt-4"
                      >
                        <RefreshCcw size={14} />
                        Calcular novamente
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
