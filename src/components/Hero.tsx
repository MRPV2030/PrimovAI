import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../utils/animations';

export default function Hero() {
  const handleBookCall = () => {
    window.location.href = 'https://calendly.com/vishalkoppal888/30min';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute w-96 h-96 -top-48 -left-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            variants={scaleIn}
          >
            Revolutionizing Content Marketing with AI
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Transform your content strategy with AI-powered solutions that deliver measurable results
          </motion.p>
          <motion.button 
            onClick={handleBookCall}
            className="group bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Call Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}