/**
 * SEO Configuration
 * Central configuration for all SEO-related settings
 */

export const SEO_CONFIG = {
  // Site Information
  site: {
    name: 'Mayank Aggarwal Portfolio',
    url: 'https://mayankagg9722.github.io/',
    language: 'en',
    locale: 'en_US',
  },

  // Personal Information
  person: {
    name: 'Mayank Aggarwal',
    jobTitle: 'Senior Software Engineer',
    company: 'Microsoft',
    image: '/photo.jpg',
    location: {
      city: 'Bengaluru',
      country: 'India',
    },
  },

  // Default Meta Tags
  meta: {
    title: 'Mayank Aggarwal - Senior Software Engineer @ Microsoft | Cloud & Kubernetes Expert',
    description: 'Senior Software Engineer at Microsoft specializing in Azure Cosmos DB, Kubernetes, Cloud Infrastructure & Distributed Systems. Expert in scalable cloud solutions, data protection, and enterprise-grade reliability.',
    keywords: [
      'Mayank Aggarwal',
      'Senior Software Engineer',
      'Microsoft',
      'Azure',
      'Kubernetes',
      'Cloud Computing',
      'Distributed Systems',
      'Azure Cosmos DB',
      'AKS',
      'Azure Kubernetes Service',
      'DevOps',
      'Software Architecture',
      'Cloud Infrastructure',
      'Data Protection',
      'Microservices',
      'System Design',
      'Scalable Systems',
      'Enterprise Solutions',
      'Full Stack Developer',
    ],
  },

  // Social Media Links
  social: {
    github: 'https://github.com/mayankagg9722',
    linkedin: 'https://www.linkedin.com/in/mayankagg9722',
    twitter: 'https://twitter.com/mayankagg9722', // Update if available
    email: 'contact@mayankagg9722.com', // Update with actual email
  },

  // Skills & Expertise
  skills: {
    primary: [
      'Azure',
      'Kubernetes',
      'Cloud Computing',
      'Distributed Systems',
    ],
    secondary: [
      'React',
      'Node.js',
      'Docker',
      'CI/CD',
      'Microservices',
      'System Design',
    ],
  },

  // Projects highlight (for structured data)
  projects: [
    {
      name: 'Azure Kubernetes Backup',
      description: 'Scalable and secure backup solution for Azure Kubernetes Service',
      status: 'Generally Available',
    },
    {
      name: 'Azure Cosmos DB Resiliency',
      description: 'Business continuity and data protection for exabyte-scale data',
      status: 'In Production',
    },
    {
      name: 'Gardianscale',
      description: 'Next-generation CI/CD platform with 50x faster builds',
      status: 'Active Development',
    },
  ],

  // Awards & Recognition
  awards: [
    'Star Performer Award 2024 - Microsoft',
    'Bravo Award 2024 - Microsoft',
    'Special Recognition Award 2023 - Microsoft',
  ],

  // Content sections for sitemap priority
  sections: [
    { id: 'home', priority: 1.0, changefreq: 'weekly' },
    { id: 'about', priority: 0.8, changefreq: 'monthly' },
    { id: 'experience', priority: 0.9, changefreq: 'monthly' },
    { id: 'projects', priority: 0.9, changefreq: 'monthly' },
    { id: 'skills', priority: 0.7, changefreq: 'monthly' },
    { id: 'awards', priority: 0.7, changefreq: 'monthly' },
    { id: 'contact', priority: 0.8, changefreq: 'monthly' },
  ],
};

export default SEO_CONFIG;
