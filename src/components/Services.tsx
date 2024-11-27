import React from 'react';
import { services } from '../config/services';

export default function Services() {
  return (
    <section className="py-24 bg-gray-900" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive AI solutions for your content needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/50 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}