import { motion } from 'framer-motion';
import { Cpu, Zap, Network, Factory } from 'lucide-react';

const solutions = [
  {
    icon: Cpu,
    title: 'Cobot Systems',
    description: 'Collaborative robots designed to work safely alongside human workers, enhancing productivity and flexibility.'
  },
  {
    icon: Zap,
    title: 'SCARA Robotics',
    description: 'High-speed selective compliance assembly robots for precise pick-and-place operations.'
  },
  {
    icon: Network,
    title: 'Delta Automation',
    description: 'Ultra-fast parallel robots optimized for high-speed packaging and sorting applications.'
  },
  {
    icon: Factory,
    title: 'Smart Manufacturing',
    description: 'End-to-end automation solutions powered by AI and real-time data analytics.'
  }
];

export default function SolutionsSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f14]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-oswald bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent font-oswald">
              Robotics Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced automation systems engineered for precision, speed, and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 to-blue/0 group-hover:from-cyan/10 group-hover:to-blue/5 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-cyan/20 to-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-cyan hover:text-yellow-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
