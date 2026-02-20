import React from 'react'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-xl w-full text-center px-4 py-10 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Agropecuária Galvão
        </h1>
        <p className="text-gray-600 mb-6">
          Site em construção. Em breve aqui você vai poder descobrir a melhor ração
          para o seu cachorro e agendar serviços como banho e tosa. 🐶🧼
        </p>
        <button className="bg-[#ff7c32] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-colors">
          Voltar mais tarde
        </button>
      </div>
    </div>
  )
}
