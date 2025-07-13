"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50/80 via-white to-blue-50/80 border-t border-gray-200 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main footer content with enhanced spacing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold text-2xl mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                A passionate full-stack developer creating beautiful and functional web experiences 
                with modern technologies and clean code.
              </p>
            </div>
            
            {/* Skills highlight */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-lg text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-base font-medium group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-base font-medium group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-base font-medium group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-lg text-gray-900 mb-6">Let&apos;s Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-600 text-base">
                Follow me on social media for updates and insights into my work.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="pt-12 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-500 text-base">
                © 2025 Chathura Kumara. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></span>
                <span className="text-gray-500 text-sm">Portfolio v2.0</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-base">Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={18} className="text-red-500" />
              </motion.div>
              <span className="text-gray-500 text-base">using Next.js & Tailwind CSS</span>
            </div>
          </motion.div>
          
          {/* Additional spacing at bottom */}
          <div className="mt-8"></div>
        </div>
      </div>
    </footer>
  );
}
