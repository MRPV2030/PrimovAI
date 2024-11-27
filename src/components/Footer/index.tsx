import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import Subscribe from './Subscribe';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <SocialLinks />
          <QuickLinks />
          <Subscribe />
        </div>
        
        <motion.div 
          variants={fadeInUp}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} PRIMOV. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}