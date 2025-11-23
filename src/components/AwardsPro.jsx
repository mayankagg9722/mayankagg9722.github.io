import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Rocket, Globe, Smartphone, Zap, Gem, Bot } from 'lucide-react';

const AwardsPro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: 'Microsoft Edge.fit',
      prize: 'First Prize',
      organization: 'Microsoft Garage Hackathon, India',
      date: 'July 2019',
      description: 'Virtual personal fitness trainer using Computer Vision, IoT, Intelligent Edge and Cloud computing. Won competing against teams across Microsoft India.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-400',
      highlight: true,
    },
    {
      title: 'CanSat Competition',
      prize: '1st in Asia, 18th Globally',
      organization: 'NASA CanSat Competition',
      date: 'April 2018',
      description: 'Ranked 1st in Asia among 105 teams at Texas, USA. Led CS team, designed GUI for sensor data visualization with Arduino integration.',
      icon: Rocket,
      color: 'from-blue-400 to-cyan-400',
      highlight: true,
    },
    {
      title: 'NASA Space App Challenge',
      prize: 'Global Nominee',
      organization: 'NASA Space Apps Challenge',
      date: 'April 2017',
      description: 'Won First Prize and selected as Global Nominee from India. Built "Where\'s Water" to help farmers visualize water resources using satellite data.',
      icon: Globe,
      color: 'from-green-400 to-emerald-400',
      highlight: true,
    },
    {
      title: 'App-A-Thon',
      prize: 'Second Prize',
      organization: 'Apple Developer Group',
      date: 'March 2017',
      description: 'Built Android and iOS app for Dharavi Slums to manage hand-made products with proper business model. Competed against 40-50 teams.',
      icon: Smartphone,
      color: 'from-purple-400 to-pink-400',
    },
    {
      title: 'IEEE-PELS Electric Make-A-Thon',
      prize: 'Second Prize',
      organization: 'IEEE Power Electronics Society',
      date: 'March 2017',
      description: 'SmartKitchen project based on IoT and cloud computing, managing kitchen ingredients and suggesting recipes intelligently.',
      icon: Zap,
      color: 'from-orange-400 to-red-400',
    },
    {
      title: 'Google DevFest',
      prize: 'Platinum Award',
      organization: 'Google Developer Group',
      date: 'November 2016',
      description: 'Built chat-based Android app using heart rate to determine mood and suggest emoticons automatically during conversations.',
      icon: Gem,
      color: 'from-indigo-400 to-purple-400',
    },
    {
      title: 'Indian Space Conclave',
      prize: 'Consolation Prize',
      organization: 'SEDS India',
      date: 'August 2017',
      description: 'Developed GUI-controlled MARS Rover prototype using socket programming with Raspberry Pi.',
      icon: Bot,
      color: 'from-red-400 to-pink-400',
    },
  ];

  const highlightedAwards = awards.filter(a => a.highlight);
  const otherAwards = awards.filter(a => !a.highlight);

  return (
    <section id="awards" ref={ref} className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-gray-500 mb-4 tracking-wider uppercase">
            Awards & Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements That Matter
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition from industry leaders and global competitions
          </p>
        </motion.div>

        {/* Highlighted Awards - Larger Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {highlightedAwards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl bg-dark-900/60 backdrop-blur-sm border border-dark-700/50 hover:border-dark-600/50 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${award.color} bg-opacity-10 mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Prize Badge */}
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${award.color} bg-opacity-20 backdrop-blur-sm mb-4`}>
                    <span className="text-sm font-semibold text-white">{award.prize}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {award.title}
                  </h4>
                  
                  {/* Organization & Date */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 font-medium">{award.organization}</p>
                    <p className="text-xs text-gray-600">{award.date}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {award.description}
                  </p>

                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Awards - Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherAwards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl bg-dark-900/40 backdrop-blur-sm border border-dark-700/50 hover:border-dark-600/50 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${award.color} bg-opacity-10 mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Title & Prize */}
                  <h5 className="text-lg font-bold text-white mb-2">
                    {award.title}
                  </h5>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                    {award.prize}
                  </p>
                  
                  {/* Organization */}
                  <p className="text-xs text-gray-500 mb-1">{award.organization}</p>
                  <p className="text-xs text-gray-600">{award.date}</p>

                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '7+', label: 'Major Awards', color: 'from-yellow-400 to-orange-400' },
            { value: '1st', label: 'Asia Ranking', color: 'from-blue-400 to-cyan-400' },
            { value: 'NASA', label: 'Global Nominee', color: 'from-green-400 to-emerald-400' },
            { value: 'MSFT', label: 'Garage Winner', color: 'from-[#F25022] via-[#7FBA00] to-[#00A4EF]' },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-dark-900/40 backdrop-blur-sm border border-dark-700/50 text-center">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsPro;
