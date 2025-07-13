"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProjectsLoading } from "@/components/ui/loading-skeleton";
import {
  IconCode,
  IconDeviceMobile,
  IconChartBar,
  IconRobot,
  IconCloudRain,
  IconUser,
} from "@tabler/icons-react";
import { Github, ExternalLink, Star } from "lucide-react";

export function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <Section id="projects" className="-mt-1 py-20 px-4 bg-gradient-to-b from-blue-50/90 via-white to-slate-50/90 relative overflow-hidden">
        <ProjectsLoading />
      </Section>
    );
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution with secure payments, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, Kanban boards, and team coordination features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/username/taskmanager",
      featured: false,
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Intelligent chat app powered by OpenAI with natural language processing and real-time messaging capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenAI API", "WebSocket", "Redis", "PostgreSQL"],
      liveUrl: "https://aichat-demo.com",
      githubUrl: "https://github.com/username/aichat",
      featured: true,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with real-time data visualization, custom reports, and interactive charts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/username/analytics",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and personalized alerts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "OpenWeather API", "Leaflet"],
      liveUrl: "https://weather-demo.com",
      githubUrl: "https://github.com/username/weather",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio showcasing projects with modern animations, dark/light mode, and contact integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      featured: true,
    },
  ];

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        
        {/* Project Image/Preview */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
          <div className="flex items-center justify-center h-full">
            {project.id === 1 && <IconCode className="w-16 h-16 text-blue-500" />}
            {project.id === 2 && <IconDeviceMobile className="w-16 h-16 text-green-500" />}
            {project.id === 3 && <IconRobot className="w-16 h-16 text-cyan-500" />}
            {project.id === 4 && <IconChartBar className="w-16 h-16 text-indigo-500" />}
            {project.id === 5 && <IconCloudRain className="w-16 h-16 text-yellow-500" />}
            {project.id === 6 && <IconUser className="w-16 h-16 text-purple-500" />}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => {
              let colorClass = "bg-blue-50 text-blue-700 border-blue-200";
              
              if (tech.includes("React") || tech.includes("Next.js")) {
                colorClass = "bg-cyan-50 text-cyan-700 border-cyan-200";
              } else if (tech.includes("Node.js") || tech.includes("Express")) {
                colorClass = "bg-green-50 text-green-700 border-green-200";
              } else if (tech.includes("TypeScript")) {
                colorClass = "bg-blue-50 text-blue-700 border-blue-200";
              } else if (tech.includes("PostgreSQL") || tech.includes("MongoDB")) {
                colorClass = "bg-orange-50 text-orange-700 border-orange-200";
              }
              
              return (
                <span
                  key={techIndex}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass} transition-all duration-200 hover:scale-105`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <Section id="projects" className="py-20 sm:py-24 lg:py-32 pb-32 sm:pb-40 lg:pb-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-yellow-500 fill-current" size={28} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <Star className="text-yellow-500 fill-current" size={28} />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of featured projects and notable works. Each project showcases different 
            technologies and approaches to solving real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action - Enhanced for Better Visibility */}
        <motion.div
          className="text-center mt-4 sm:mt-6 relative z-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ 
            marginBottom: '60px',
            paddingBottom: '30px',
            minHeight: '160px'
          }}
        >
          {/* Enhanced background container for better visibility */}
          <div className="relative mx-auto max-w-4xl" style={{ minHeight: '140px' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 via-white/90 to-purple-50/70 rounded-3xl border-2 border-gray-300/80 shadow-2xl backdrop-blur-sm -mx-8 -my-8"></div>
            
            <div className="relative z-10 py-8 px-8">
              {/* Enhanced title section */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Collaborate?</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Want to see more projects or collaborate on something amazing?
                </p>
                
                {/* Decorative elements */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Enhanced buttons with much better visibility */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="group relative bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg font-semibold min-w-[220px] transform hover:-translate-y-2 hover:scale-105 border-2 border-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl"></div>
                  <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View All Projects</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative border-3 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg font-semibold min-w-[220px] transform hover:-translate-y-2 hover:scale-105 bg-white/95 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"></div>
                  <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Let&apos;s Collaborate</span>
                </Button>
              </div>
              
              {/* Additional visual indicators */}
              <div className="mt-8 flex justify-center">
                <div className="flex gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
