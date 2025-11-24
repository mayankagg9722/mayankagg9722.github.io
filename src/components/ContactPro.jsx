import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, ExternalLink, Calendar } from 'lucide-react';

const ContactPro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      value: '',
      href: 'https://github.com/mayankagg9722',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      iconHoverColor: 'group-hover:text-purple-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '',
      href: 'https://www.linkedin.com/in/mayankagg9722/',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      iconHoverColor: 'group-hover:text-blue-300',
    },
    {
      icon: Calendar,
      label: 'Topmate',
      value: '',
      href: 'https://topmate.io/mayankagg9722',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      iconHoverColor: 'group-hover:text-emerald-300',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-dark-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-wider uppercase">
              Get in touch
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let's build something <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">together!</span>
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${method.gradient} backdrop-blur-sm border border-dark-600/50 text-left group overflow-hidden transition-all duration-300`}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-300"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 ${method.iconBg} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <Icon className={`w-8 h-8 ${method.iconColor} ${method.iconHoverColor} transition-colors duration-300`} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-xl font-bold mb-1">{method.label}</h4>
                        <p className="text-gray-400 text-base group-hover:text-gray-300 transition-colors">{method.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" strokeWidth={2} />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative inline-block"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
            
            <motion.a
              href="mailto:mayankagg9722@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPro;
