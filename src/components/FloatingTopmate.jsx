import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';

const FloatingTopmate = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 bottom-6 z-50"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-0 right-16 mb-2 px-4 py-2 bg-dark-800 border border-blue-500/30 rounded-lg shadow-xl whitespace-nowrap"
          >
            <p className="text-sm text-white font-medium">Schedule a 1:1 call</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://topmate.io/mayankagg9722"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
      >
        {/* Pulsing ring effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-blue-500"
        />

        {/* Icon */}
        <Calendar className="w-6 h-6 text-white relative z-10" strokeWidth={2} />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-300" />
      </motion.a>
    </motion.div>
  );
};

export default FloatingTopmate;
