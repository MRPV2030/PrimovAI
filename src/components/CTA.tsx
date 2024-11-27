import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../utils/animations';

export default function CTA() {
  const handleBookCall = () => {
    window.location.href = 'https://calendly.com/vishalkoppal888/30min';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            'radial-gradient(circle at 0% 0%, #4ade80 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #4ade80 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #4ade80 0%, transparent 50%)'
          ]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Your Success Story Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to revolutionize your marketing strategy? Book a free consultation and let's discuss how we can help you achieve your goals.
          </p>
          <motion.button 
            onClick={handleBookCall}
            className="group bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}