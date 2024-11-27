import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function QuickLinks() {
  return (
    <motion.div variants={fadeInUp}>
      <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
      <ul className="space-y-3">
        <li>
          <a href="#services" className="hover:text-emerald-500 transition-colors">Services</a>
        </li>
        <li>
          <a href="#process" className="hover:text-emerald-500 transition-colors">How We Work</a>
        </li>
        <li>
          <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
        </li>
      </ul>
    </motion.div>
  );
}