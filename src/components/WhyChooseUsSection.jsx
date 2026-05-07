import { motion } from 'framer-motion';
import { Brain, Gauge, Radio, Shield, Boxes, Leaf } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Powered Automation',
    description: 'Machine learning algorithms optimize performance in real-time'
  },
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Micron-level accuracy for critical manufacturing operations'
  },
  {
    icon: Radio,
    title: 'Real-Time Monitoring',
    description: 'Cloud-connected diagnostics with predictive maintenance'
  },
  {
    icon: Shield,
    title: 'Safety & Reliability',
    description: 'Industry-leading safety standards with 99.9% uptime'
  },
  {
    icon: Boxes,
    title: 'Smart Factory Integration',
    description: 'Seamless integration with existing manufacturing systems'
  },
  {
    icon: Leaf,
    title: 'Energy Efficient Systems',
    description: 'Sustainable automation reducing power consumption by 40%'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0a0f]">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue/10 rounded-full blur-[90px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-cyan bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-leading technology backed by decades of robotics expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-md border border-cyan/20 rounded-2xl hover:border-cyan/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(90deg, transparent, #00d9ff, transparent)',
                    animation: 'borderGlow 3s linear infinite'
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan/30 to-blue/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
