import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Mic, Award, MapPin, Youtube } from 'lucide-react';

const AboutPro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-16 md:py-20 relative overflow-hidden bg-dark-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Building scalable systems that power modern enterprises
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Profile Photo Card */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-dark-600/50 shadow-2xl">
                {/* Theme-aligned filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent mix-blend-overlay z-10"></div>
                
                {/* Photo */}
                <img 
                  src="/photo.jpg" 
                  alt="Mayank Aggarwal - Senior Software Engineer at Microsoft specializing in Azure, Kubernetes and Cloud Infrastructure"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="320"
                  height="320"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1) saturate(0.95)',
                  }}
                />
                
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                
                {/* Name label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 z-20">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">Mayank Aggarwal</h3>
                  <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">Senior Software Engineer @ Microsoft</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Microsoft Developer Card - Hero */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-dark-600/50 overflow-hidden">
              {/* Accent gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-blue-500/20 backdrop-blur-sm">
                    <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Microsoft Developer</h3>
                    <p className="text-sm md:text-base text-blue-400 font-medium">Senior Software Engineer at Microsoft Azure</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  With <span className="text-white font-semibold">6+ years of industry experience</span>, I develop critical{' '}
                  <span className="text-white font-semibold">enterprise resiliency applications on Azure</span>, providing reliability 
                  to cloud workloads and business-critical workloads like{' '}
                  <span className="text-blue-400 font-medium">Azure Disk</span>,{' '}
                  <span className="text-blue-400 font-medium">Azure Kubernetes Service</span>, and{' '}
                  <span className="text-blue-400 font-medium">Azure Cosmos DB</span>.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-dark-800/60 backdrop-blur-sm border border-dark-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">Key Achievement</span>
                    </div>
                    <p className="text-gray-300 font-medium">Led Azure Kubernetes Backup GA Release</p>
                    <p className="text-sm text-gray-500 mt-1">Enabling enterprise disaster recovery at scale</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-dark-800/60 backdrop-blur-sm border border-dark-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-semibold text-purple-400">International Speaker</span>
                    </div>
                    <p className="text-gray-300 font-medium">Presented at KubeCon Paris</p>
                    <p className="text-sm text-gray-500 mt-1">Showcased AKS Backup GA product to global audience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Podcast Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-pink-500/10 via-red-500/10 to-orange-500/10 backdrop-blur-sm border border-dark-600/50 overflow-hidden">
              {/* Accent gradient */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-red-500/20 backdrop-blur-sm">
                      <Mic className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Beyond Code</h3>
                      <p className="text-sm md:text-base text-red-400 font-medium">Co-Host of The Openers Podcast</p>
                    </div>
                  </div>
                  
                  <motion.a
                    href="https://www.youtube.com/@_theopeners_"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm sm:text-base font-semibold transition-colors shadow-lg"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                    Watch on YouTube
                  </motion.a>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  <span className="text-white font-semibold">The Openers</span> is a platform started to give people from all walks of life 
                  more clarity on what any profession entails, helping them make calculated decisions in their education and corporate journeys.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-dark-800/60 backdrop-blur-sm border border-dark-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span className="text-sm font-semibold text-red-400">Our Mission</span>
                    </div>
                    <p className="text-gray-300 font-medium">Each episode features professionals who provide meaningful insights</p>
                    <p className="text-sm text-gray-500 mt-1">Offering guidance to those navigating their career paths</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPro;
