import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:vishalkoppal987@gmail.com',
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

export default function SocialLinks() {
  return (
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
  );
}