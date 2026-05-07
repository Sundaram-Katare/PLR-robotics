import { motion } from 'framer-motion';
import { Search, Link2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Analysis',
    description: 'Deep analysis of your manufacturing workflow and requirements'
  },
  {
    icon: Link2,
    title: 'Integration',
    description: 'Seamless integration with existing systems and infrastructure'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Rapid deployment with minimal disruption to operations'
  },
  {
    icon: TrendingUp,
    title: 'Optimization',
    description: 'Continuous optimization using AI-driven insights'
  }
];

export default function WorkflowSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f0f14] to-[#0a0a0f]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Automation Workflow
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our proven process delivers results from concept to production
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan via-blue to-cyan origin-left"
                style={{
                  boxShadow: '0 0 20px #00d9ff'
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan to-blue rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-cyan/50"
                  >
                    {index + 1}
                  </motion.div>

                  <div className="relative w-24 h-24 mb-6 mt-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 to-blue/30 rounded-2xl blur-xl" />

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-cyan/30 rounded-2xl flex items-center justify-center"
                    >
                      <Icon className="w-10 h-10 text-cyan" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-8 w-0.5 h-8 bg-gradient-to-b from-cyan to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}