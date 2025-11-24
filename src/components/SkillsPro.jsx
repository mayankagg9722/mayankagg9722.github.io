import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Code, Database, Shield, Layers, Boxes } from 'lucide-react';

const SkillsPro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Cloud & Platform',
      icon: Cloud,
      color: 'from-blue-400 to-cyan-400',
      description: 'Azure, Kubernetes, Docker, Terraform, Serverless',
    },
    {
      title: 'Backend Engineering',
      icon: Code,
      color: 'from-purple-400 to-pink-400',
      description: 'Go, C#, Node.js, Python, Microservices, REST/gRPC APIs',
    },
    {
      title: 'Data & Storage',
      icon: Database,
      color: 'from-green-400 to-emerald-400',
      description: 'Cosmos DB, PostgreSQL, Redis, Event-Driven Architecture',
    },
    {
      title: 'DevOps & Observability',
      icon: Layers,
      color: 'from-orange-400 to-red-400',
      description: 'CI/CD, Prometheus, Grafana, OpenTelemetry, GitOps',
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-indigo-400 to-purple-400',
      description: 'RBAC, Zero Trust, Backup/DR, Policy Management, Encryption',
    },
    {
      title: 'Architecture & Design',
      icon: Boxes,
      color: 'from-yellow-400 to-orange-400',
      description: 'Distributed Systems, High Availability, Scalability Patterns',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-16 md:py-20 bg-dark-800 relative overflow-hidden">
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
            Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Not limited by tools-adaptable across the full stack to solve complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-dark-900/60 backdrop-blur-sm border border-dark-700/50 hover:border-dark-600/50 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 mb-4 md:mb-6`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    {category.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experienced in working across the entire technology stack - from infrastructure and backend systems 
            to frontend interfaces and security implementations. Quick to learn new tools and frameworks as needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPro;
