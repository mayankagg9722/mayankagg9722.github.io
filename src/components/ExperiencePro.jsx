import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, TrendingUp, Award } from 'lucide-react';

const ExperiencePro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const microsoftTimeline = [
    {
      title: 'Senior Software Engineer',
      period: '2025 - Present',
      focus: 'Azure Cosmos DB Resiliency',
      description: 'Working on resiliency and business continuity for Azure Cosmos DB. Securing exabytes of customer data with enterprise-grade reliability.',
      link: 'https://azure.microsoft.com/en-in/updates?id=488905',
      achievements: [
        'Azure Cosmos DB resiliency engineering',
        'Business continuity solutions at exabyte scale',
        'Data protection and disaster recovery'
      ],
    },
    {
      title: 'Software Engineer 2',
      period: '2021 - 2025',
      focus: 'Azure Kubernetes Backup',
      description: 'Released scalable and secure Azure Kubernetes Backup Generally Available solution. Led Azure File Share persistent volume Backup private preview.',
      link: 'https://azure.microsoft.com/en-in/updates?id=aksbackupga',
      achievements: [
        'Led Azure Kubernetes Backup GA release',
        'Secured exabytes of customer data on AKS',
        'Contributed to Velero (CNCF) open source project',
        'Azure File Share PV Backup private preview'
      ],
    },
    {
      title: 'Software Engineer',
      period: '2019 - 2021',
      focus: 'Azure Data Protection Platform',
      description: 'Contributed to Azure Data Protection Platform GA. Built Managed Disk Backup service and Azure Portal UIs with A11Y compliance.',
      link: 'https://azure.microsoft.com/en-in/updates?id=azure-disk-backup-ga',
      achievements: [
        'Azure Data Protection Platform GA',
        'Built Managed Disk Backup microservice',
        'Azure Portal backup/restore UIs (WCAG 2.1)'
      ],
    },
  ];

  const otherExperience = {
    role: 'Co-Founder & Developer',
    company: 'Team Go',
    period: '2017 - 2018',
    description: 'Built VIT Go app used by 35K+ students. Android App ranked 3rd on Play Store in Productivity Category in India.',
    achievements: [
      'Built app for 35K+ students',
      'Ranked 3rd on Play Store India',
      'Full stack development and design'
    ],
  };

  return (
    <section id="experience" ref={ref} className="py-16 md:py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
            Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            6+ years building enterprise-grade solutions at scale
          </p>
        </motion.div>

        {/* Microsoft Experience - Combined Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-dark-600/50 overflow-hidden">
            {/* Accent gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Company Header */}
              <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-blue-500/20 backdrop-blur-sm">
                    <Briefcase className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Microsoft</h3>
                    <p className="text-blue-400 font-medium text-lg">Azure Cloud Services</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/60 backdrop-blur-sm border border-dark-700/50">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 font-medium">2019 - Present</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                {microsoftTimeline.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                    className="relative pl-8 border-l-2 border-blue-500/30"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark-900" />
                    
                    <div className="pb-8">
                      {/* Role Header */}
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {role.link ? (
                              <a 
                                href={role.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors"
                              >
                                {role.title}
                              </a>
                            ) : (
                              role.title
                            )}
                          </h4>
                          <p className="text-blue-400 font-medium">{role.focus}</p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">{role.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {role.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {role.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-dark-600/50 overflow-hidden">
            {/* Accent gradient */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-green-500/20 backdrop-blur-sm">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {otherExperience.role}
                  </h4>
                  <p className="text-lg text-green-400 mb-2 font-medium">{otherExperience.company}</p>
                  <p className="text-sm text-gray-500">{otherExperience.period}</p>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {otherExperience.description}
                  </p>
                  <div className="space-y-2">
                    {otherExperience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePro;
