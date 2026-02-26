import React, { useState } from 'react';
import { motion } from 'motion/react';

interface OpeningScreenProps {
  onComplete: () => void;
}

export default function OpeningScreen({ onComplete }: OpeningScreenProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setIsAnimating(true);
    // The animation takes about 1.5s. We trigger onComplete slightly before it ends.
    setTimeout(() => {
      onComplete();
    }, 1600);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={isAnimating ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }} // Delay fade out so dog passes over
        className="relative z-10 flex flex-col items-center"
      >
        <div className="mb-10">
           <img 
              src="https://i.postimg.cc/Dyk18tFC/417958326-386775137160008-6972213239840010646-n.png" 
              alt="Logo AgroPet" 
              className="h-28 w-auto object-contain"
            />
        </div>

        {/* Bone Shaped Button */}
        <button
          onClick={handleStart}
          className="relative group cursor-pointer outline-none transform transition-transform active:scale-95 filter drop-shadow-md hover:drop-shadow-xl"
          aria-label="Vamos começar"
        >
          {/* Bone Ends - Left */}
          <div className="absolute -left-4 -top-3 w-14 h-14 bg-brand-orange rounded-full group-hover:bg-orange-600 transition-colors duration-300"></div>
          <div className="absolute -left-4 -bottom-3 w-14 h-14 bg-brand-orange rounded-full group-hover:bg-orange-600 transition-colors duration-300"></div>
          
          {/* Bone Ends - Right */}
          <div className="absolute -right-4 -top-3 w-14 h-14 bg-brand-orange rounded-full group-hover:bg-orange-600 transition-colors duration-300"></div>
          <div className="absolute -right-4 -bottom-3 w-14 h-14 bg-brand-orange rounded-full group-hover:bg-orange-600 transition-colors duration-300"></div>
          
          {/* Bone Center */}
          <div className="relative bg-brand-orange h-20 w-56 flex items-center justify-center z-10 group-hover:bg-orange-600 transition-colors duration-300">
            <span className="text-white font-bold text-2xl tracking-wide">Vamos começar</span>
          </div>
        </button>
      </motion.div>

      {/* Running Dog Animation */}
      {isAnimating && (
        <motion.div
          className="absolute bottom-1/2 left-0 z-50 pointer-events-none"
          initial={{ x: '-150%', y: '50%' }}
          animate={{ x: '150vw' }}
          transition={{ 
            duration: 1.8, 
            ease: "linear",
          }}
        >
          <img 
            src="https://media.tenor.com/18_w9qZ4pG4AAAAj/dog-running.gif" 
            alt="Running Dog" 
            className="w-40 h-auto md:w-56 mix-blend-multiply"
          />
        </motion.div>
      )}

      {/* Wipe/Fade Transition Overlay */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 bg-brand-orange z-40"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 0.4 }}
        />
      )}
    </motion.div>
  );
}
