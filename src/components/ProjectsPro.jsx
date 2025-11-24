import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Cloud, Shield, Zap, Code, ExternalLink } from 'lucide-react';

const ProjectsPro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const featuredProjects = [
    {
      id: 1,
      title: 'Gardianscale',
      subtitle: 'CI builds 50x faster',
      description: 'Next-generation CI/CD platform that accelerates builds by up to 50x with intelligent caching, zero configuration, and end-to-end automation.',
      tags: ['Kubernetes', 'Docker', 'Cache', 'DevOps', 'Go'],
      icon: Zap,
      color: 'from-green-400 to-emerald-400',
      link: 'https://gardianscale.com/',
      metrics: [
        { label: 'Speed Increase', value: '50x' },
        { label: 'Setup Time', value: '5 min' },
        { label: 'Cache Hit Rate', value: '4x faster' },
      ],
      details: {
        challenge: 'Modern software development faces persistent challenges with long build times, complex CI/CD setups, and inefficient caching mechanisms that slow down development cycles.',
        solution: 'Built a next-generation CI/CD platform with intelligent elastic caching (Node, Docker, Java, Python), automatic infrastructure provisioning, real-time logs, and GitHub integration—all with zero configuration required.',
        impact: 'Accelerated builds by up to 50x, reduced setup time to zero, and enabled teams to focus on innovation instead of waiting for builds. Intelligent caching provides 4x performance improvement automatically.'
      },
      featured: true,
    },
    {
      id: 2,
      title: 'BandhanPoints',
      subtitle: 'Customer loyalty reimagined',
      description: 'Digital loyalty platform empowering local businesses to build lasting customer relationships through rewards, discounts, and seamless experiences.',
      tags: ['React', 'Node.js', 'Firebase', 'PWA'],
      icon: Shield,
      color: 'from-blue-400 to-cyan-400',
      link: 'https://bandhanpoints.tech/',
      metrics: [
        { label: 'Businesses', value: '50+' },
        { label: 'Active Users', value: '10K+' },
        { label: 'Redemptions', value: '25K+' },
      ],
      details: {
        challenge: 'Local businesses struggled to retain customers and build loyalty in a competitive market. Traditional loyalty programs were expensive, complex, and inaccessible to small businesses.',
        solution: 'Created a digital loyalty platform where customers earn reward points on every purchase, redeem discounts, and enjoy seamless experiences. Businesses get easy-to-use tools to strengthen customer trust.',
        impact: 'Enabled 50+ local businesses to launch loyalty programs, reached 10K+ active users, and facilitated 25K+ reward redemptions. Built lasting customer relationships: "Rishta bhi, Rewards bhi."'
      },
      featured: true,
    }
  ];

  const otherProjects = [
    {
      id: 4,
      title: 'VIT GO',
      subtitle: 'Campus portal app',
      description: '35K+ users, ranked 3rd on Play Store India',
      tags: ['Android', 'Firebase'],
      icon: Code,
      color: 'from-orange-400 to-red-400',
      link: 'https://github.com/mayankagg9722/VIT-Go',
      metrics: [
        { value: '35K+', label: 'Users' },
        { value: '3rd', label: 'Play Store' },
      ],
    },
    {
      id: 5,
      title: 'Edge.fit',
      subtitle: 'AI fitness trainer',
      description: 'Microsoft Garage Hackathon First Prize winner',
      tags: ['Azure', 'Computer Vision'],
      icon: Zap,
      color: 'from-yellow-400 to-orange-400',
      link: 'https://github.com/mayankagg9722/MSFTGaradge-IOTEdge-SmartGym',
      metrics: [
        { value: '1st', label: 'Prize' },
        { value: 'MSFT', label: 'Garage' },
      ],
    },
  ];

  return (
    <>
      <section id="projects" ref={ref} className="py-16 md:py-20 bg-dark-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
              Projects That <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solve Real Problems</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-scale systems impacting millions of users
            </p>
          </motion.div>

          {/* Featured Projects - Large Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 mb-12"
          >
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl bg-dark-700/30 backdrop-blur-sm border border-dark-600/50 hover:border-dark-500/70 transition-all overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-6 gap-3">
                        <div className="flex items-start gap-3 sm:gap-5 flex-1 min-w-0">
                          <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 border border-white/5 flex-shrink-0`}>
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h4>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400">{project.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 hover:bg-dark-600/50 rounded-xl transition-colors group/link"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-white" />
                            </a>
                          )}
                          <ArrowRight className="hidden sm:block w-6 h-6 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-600/40 backdrop-blur-sm text-gray-300 rounded-full text-xs sm:text-sm border border-dark-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="p-4 sm:p-5 rounded-2xl bg-dark-600/30 backdrop-blur-sm border border-dark-500/30">
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Other Projects - Compact Cards */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">Other Notable Projects</h4>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {otherProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group relative"
                  >
                    <div className="h-full p-4 sm:p-6 rounded-2xl bg-dark-700/30 backdrop-blur-sm border border-dark-600/50 hover:border-dark-500/70 transition-all">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 border border-white/5 flex-shrink-0`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h5 className="text-base sm:text-lg font-bold text-white mb-1">
                                {project.title}
                              </h5>
                              <p className="text-xs sm:text-sm text-gray-400 mb-2">{project.subtitle}</p>
                              <p className="text-xs sm:text-sm md:text-base text-gray-500">{project.description}</p>
                            </div>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 hover:bg-dark-600/50 rounded-xl transition-colors group/link flex-shrink-0"
                              >
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-white" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 sm:px-3 sm:py-1 bg-dark-600/40 text-gray-400 rounded-full text-xs border border-dark-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 sm:gap-6">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-700/50 backdrop-blur-xl border border-dark-600/50 rounded-2xl sm:rounded-3xl max-w-4xl w-full my-4 sm:my-8 mx-4 sm:mx-auto"
            >
              <div className="p-5 sm:p-8 md:p-12">
                <div className="flex items-start justify-between mb-8 sm:mb-10 gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400">{selectedProject.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 hover:bg-dark-600/50 rounded-xl transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-white" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 sm:p-2.5 hover:bg-dark-600/50 rounded-xl transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider">
                      The Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {selectedProject.details.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider">
                      The Solution
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider">
                      Impact
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {selectedProject.details.impact}
                    </p>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-dark-600/50`}>
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsPro;
