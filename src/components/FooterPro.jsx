import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const FooterPro = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mayankagg9722', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mayankagg9722/', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/Mayank9722', icon: Twitter },
    { name: 'Youtube', href: 'https://www.youtube.com/channel/UC1r6h3Tq_IDreen0_FdlmYg', icon: Youtube },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">MAYANK AGGARWAL</h3>
            <p className="text-gray-500 text-sm">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Mayank Aggarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPro;
