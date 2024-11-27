import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:vishalkoppal888@gmail.com',
      label: 'Email'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/vishalkoppal23?igsh=YTYwdGJ5NzdnY3l4',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vishal-koppal-22b01727a',
      label: 'LinkedIn'
    }
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! We'll keep you updated.");
    e.currentTarget.reset();
  };

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
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-6">PRIMOV</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing content marketing with AI-powered solutions that deliver measurable results.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors p-2 hover:bg-gray-800 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
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