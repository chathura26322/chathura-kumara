"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { SectionLoading } from "@/components/ui/loading-skeleton";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <Section id="about" className="-mt-1 py-12 px-4 bg-gradient-to-b from-purple-50/90 via-white to-blue-50/90 relative overflow-hidden">
        <SectionLoading />
      </Section>
    );
  }

  return (
    <Section id="about" className="pt-2 pb-12 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/80 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 right-8 sm:right-24 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-8 sm:left-24 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-300 rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-pink-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Content container with enhanced spacing */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Stylish Section Header */}
        <motion.div
          className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative line with icon */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full border border-blue-200 shadow-sm">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
          
          {/* Main heading with gradient */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight px-4">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="h-1 w-3 sm:w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="h-1 w-1.5 sm:w-2 bg-pink-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            I&apos;m passionate about creating 
            <span className="font-semibold text-blue-600"> digital experiences </span>
            that make a difference. With a strong foundation in 
            <span className="font-semibold text-purple-600"> modern web technologies</span>, 
            I love bringing ideas to life.
          </p>
        </motion.div>

        {/* Main Content Area with Enhanced Styling */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content with Better Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Enhanced Journey Section */}
            <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl">
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-br-2xl sm:rounded-br-3xl"></div>
              
              <div className="relative space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg sm:rounded-xl">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">My Journey</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5 text-gray-600 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    I started my journey in <span className="font-semibold text-blue-600">web development 3 years ago</span>, 
                    driven by curiosity and a love for problem-solving. Since then, I&apos;ve worked on various projects
                    ranging from small business websites to complex web applications.
                  </p>
                  <p className="text-base sm:text-lg">
                    I believe in writing <span className="font-semibold text-purple-600">clean, maintainable code</span> 
                    and creating user experiences that are both beautiful and functional. I&apos;m always learning new technologies
                    and staying up-to-date with industry best practices.
                  </p>
                  <p className="text-base sm:text-lg">
                    When I&apos;m not coding, you can find me exploring new design trends,
                    contributing to <span className="font-semibold text-indigo-600">open-source projects</span>, 
                    or sharing knowledge with the developer community.
                  </p>
                </div>
                
                {/* Skills highlights */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                  {['Problem Solver', 'Team Player', 'Continuous Learner', 'Open Source'].map((skill) => (
                    <span key={skill} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Collage-Style Photo Frame with Enhanced Background */}
            <div className="relative group max-w-sm sm:max-w-md mx-auto">
              {/* Enhanced Background decorative elements */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-white/50 to-blue-50/50 rounded-xl sm:rounded-2xl backdrop-blur-sm"></div>
              
              {/* Floating elements for extra style */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -top-1 sm:-top-2 -right-4 sm:-right-6 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Polaroid-style frames scattered behind */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-10 sm:w-14 h-12 sm:h-18 bg-white rounded-lg shadow-lg rotate-12 opacity-60 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-4 w-12 sm:w-18 h-10 sm:h-14 bg-white rounded-lg shadow-lg -rotate-6 opacity-70 group-hover:-rotate-3 transition-transform duration-300"></div>
              <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-2 w-11 sm:w-16 h-14 sm:h-20 bg-white rounded-lg shadow-lg rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-300"></div>
              
              {/* Main photo container with enhanced styling */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-white group-hover:shadow-3xl transition-all duration-500">
                {/* Enhanced corner tape pieces */}
                <div className="absolute -top-2 left-8 w-12 h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-80 rotate-12 shadow-lg z-10 rounded-sm group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute -top-2 right-8 w-12 h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-80 -rotate-12 shadow-lg z-10 rounded-sm group-hover:-rotate-6 transition-transform duration-300"></div>
                <div className="absolute -bottom-2 left-10 w-12 h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-80 rotate-6 shadow-lg z-10 rounded-sm group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute -bottom-2 right-10 w-12 h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-80 -rotate-6 shadow-lg z-10 rounded-sm group-hover:-rotate-12 transition-transform duration-300"></div>
                
                {/* Enhanced photo frame inner border */}
                <div className="absolute inset-3 border-2 border-white/50 rounded-2xl pointer-events-none group-hover:border-white/70 transition-colors duration-300"></div>
                
                {/* Your profile image */}
                <Image
                  src="/profile.jpg"
                  alt="Chathura Kumara - Web Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Enhanced film grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-black/5 pointer-events-none"></div>
                
                {/* Enhanced vintage color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/15 via-transparent to-blue-500/15 mix-blend-overlay pointer-events-none group-hover:from-amber-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
              </div>
              
              {/* Enhanced scattered photo elements */}
              <div className="absolute -bottom-5 -right-5 w-22 h-16 bg-white rounded-xl shadow-xl rotate-12 overflow-hidden opacity-80 group-hover:opacity-90 group-hover:rotate-6 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>
                <div className="absolute bottom-1 left-1 right-1 h-3 bg-white rounded-sm"></div>
                <div className="absolute top-1 left-1 text-xs text-gray-400 font-mono">IMG_2024</div>
              </div>
              
              {/* Enhanced paper clips */}
              <div className="absolute top-4 -right-2 w-3 h-7 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg rotate-45 opacity-70 group-hover:opacity-80 transition-all duration-300"></div>
              <div className="absolute bottom-8 -left-2 w-3 h-7 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg -rotate-12 opacity-60 group-hover:opacity-70 transition-all duration-300"></div>
            </div>
            
            {/* Enhanced Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-2xl border border-gray-100 rotate-3 hover:rotate-0 transition-all duration-500 group-hover:shadow-3xl">
              {/* Enhanced corner fold effect */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-gray-100 to-gray-200 transform rotate-45 translate-x-2 -translate-y-2 shadow-sm"></div>
              
              <div className="relative space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-semibold">AVAILABLE</span>
                </div>
                <p className="text-sm font-bold text-gray-800">3+ Years Experience</p>
                <p className="text-xs text-gray-600">Full Stack Developer</p>
                
                {/* Enhanced decorative elements */}
                <div className="flex gap-1 mt-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Professional Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Professional badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-50 to-gray-50 px-6 py-3 rounded-full border border-slate-200 mb-6 shadow-sm">
                <Code2 className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-semibold text-slate-700 tracking-wide">CORE COMPETENCIES</span>
              </div>
              
              {/* Main title */}
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                Technical
                <span className="text-slate-700"> Expertise</span>
              </h3>
              
              {/* Professional subtitle */}
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Leveraging modern technologies and industry best practices to deliver robust, scalable solutions
              </p>
            </motion.div>
          </div>

          {/* Professional Skills Display */}
          <div className="relative max-w-6xl mx-auto">
            {/* Clean background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/50 rounded-2xl border border-slate-200/50"></div>
            
            {/* Skills categories with professional styling */}
            <div className="relative grid md:grid-cols-2 gap-8 p-8">
              
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  {/* Professional header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <Code2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Frontend Development</h4>
                      <p className="text-sm text-slate-600">User Interface & Experience</p>
                    </div>
                  </div>
                  
                  {/* Skills grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group/item"
                      >
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">{tech}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                      <Rocket className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Backend Development</h4>
                      <p className="text-sm text-slate-600">Server Architecture & APIs</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group/item"
                      >
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">{tech}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Design & UX */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                      <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Design & UX</h4>
                      <p className="text-sm text-slate-600">Visual Design & User Experience</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Prototyping", "Design Systems"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group/item"
                      >
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">{tech}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools & DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Tools & DevOps</h4>
                      <p className="text-sm text-slate-600">Development & Deployment</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Git", "Docker", "AWS", "Vercel", "VS Code", "CI/CD"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group/item"
                      >
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-orange-50 hover:border-orange-200 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">{tech}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
