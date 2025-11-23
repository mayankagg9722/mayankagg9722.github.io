import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Briefcase, Smartphone } from 'lucide-react';

const HeroPro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Enhanced gradient background with radial effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-black" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />
      
      {/* Enhanced grid pattern with fade */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light">
              Hi, I'm{' '}
              <span className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">Mayank Aggarwal</span>
            </p>
          </motion.div>

          {/* Main headline with enhanced typography */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.15] mb-8 tracking-tight"
          >
            <span className="block text-white mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Building Reliable Systems</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Delivering Real Impact
            </span>
          </motion.h1>

          {/* Enhanced subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Full-stack engineer architecting{' '}
            <span className="text-white font-medium">scalable cloud systems</span>{' '}
            and{' '}
            <span className="text-white font-medium">modern web experiences</span>{' '}
            that drive innovation.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 justify-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center gap-2 overflow-hidden shadow-xl"
            >
              <span className="relative z-10">Let's talk</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-dark-800/40 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-dark-600/50 hover:bg-dark-700/60 transition-all shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">View work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dark-700/50 to-dark-600/50"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700/50 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroPro;
