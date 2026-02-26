import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FoodCalculator from './components/FoodCalculator';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OpeningScreen from './components/OpeningScreen';
import GroomingWidget from './components/GroomingWidget';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);

  // Prevent scrolling while opening screen is active
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (showOpening) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showOpening]);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <AnimatePresence>
        {showOpening && (
          <OpeningScreen onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FoodCalculator />
        <Testimonials />
        <Features />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Floating Grooming Widget - Only show after opening screen */}
      {!showOpening && <GroomingWidget />}
    </div>
  );
}
