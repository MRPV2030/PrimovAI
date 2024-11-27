import React from 'react';
import { MessageSquare, Settings, PlayCircle, BarChart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We understand your business, goals, and challenges'
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'We design AI-driven solutions aligned with your objectives'
  },
  {
    icon: PlayCircle,
    title: 'Execution',
    description: 'Our team ensures seamless implementation and stunning content'
  },
  {
    icon: BarChart,
    title: 'Results',
    description: 'We deliver measurable growth and actionable insights'
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-800" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-xl text-gray-400">A proven process for consistent results</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}