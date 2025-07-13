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
    <Section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 sm:mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-4 sm:mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">Want to see more projects or collaborate on something amazing?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open("https://github.com", "_blank")}
              className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
            >
              <Github className="w-5 h-5 mr-3" />
              View All Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Let&apos;s Collaborate
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
