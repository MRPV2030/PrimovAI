import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function Subscribe() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! We'll keep you updated.");
    e.currentTarget.reset();
  };

  return (
    <motion.div variants={fadeInUp}>
      <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            required
          />
          <motion.button 
            type="submit" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}