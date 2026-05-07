import { motion } from 'framer-motion';
import { Link2, GitBranch, Mail, MapPin, Phone, Bird } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                RoboTech
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Leading the future of industrial automation with intelligent robotics and AI-powered manufacturing solutions.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Link2, href: '#' },
                { Icon: Bird, href: '#' },
                { Icon: GitBranch, href: '#' },
                { Icon: Mail, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:border-cyan/50 hover:bg-cyan/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {['Cobot Systems', 'SCARA Robotics', 'Delta Automation', 'Smart Manufacturing', 'AI Integration'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan/50 rounded-full group-hover:bg-cyan transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Partners', 'News', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan/50 rounded-full group-hover:bg-cyan transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan mt-1 flex-shrink-0" />
                <span>1234 Innovation Drive<br />Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>info@robotech.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} RoboTech. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-cyan transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
    </footer>
  );
}
