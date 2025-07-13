"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ProjectsLoading } from "@/components/ui/loading-skeleton";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
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

  // Skeleton Components for Bento Grid
  const ECommerceSkeletonDemo = () => {
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-blue-50 to-purple-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <IconCode className="w-5 h-5 text-white" />
            </div>
            <div className="h-4 w-20 bg-blue-200 rounded"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <motion.div
          variants={{
            initial: { scale: 1 },
            animate: { scale: 1.02 },
          }}
          className="bg-white rounded-lg p-4 flex-1 border border-blue-200"
        >
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="h-4 bg-blue-100 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-4 bg-blue-100 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-gray-100 rounded w-3/4"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const TaskManagementSkeletonDemo = () => {
    const cards = [
      { title: "To Do", count: 3, color: "bg-red-100 border-red-200" },
      { title: "In Progress", count: 2, color: "bg-yellow-100 border-yellow-200" },
      { title: "Done", count: 5, color: "bg-green-100 border-green-200" },
    ];

    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-green-50 to-emerald-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <div className="flex items-center space-x-2 mb-4">
          <IconDeviceMobile className="w-6 h-6 text-green-600" />
          <div className="h-4 w-24 bg-green-200 rounded"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { y: 0, rotate: 0 },
                animate: { y: -2, rotate: i === 1 ? 1 : i === 2 ? -1 : 0 },
              }}
              className={`${card.color} rounded-lg p-2 border`}
            >
              <div className="text-xs font-medium mb-1">{card.title}</div>
              <div className="space-y-1">
                {Array.from({ length: card.count }).map((_, j) => (
                  <div key={j} className="h-2 bg-white/60 rounded"></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const WeatherSkeletonDemo = () => {
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-yellow-50 to-orange-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <motion.div
          variants={{
            initial: { rotate: 0 },
            animate: { rotate: 360 },
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center"
        >
          <IconCloudRain className="w-6 h-6 text-white" />
        </motion.div>
        <div className="text-center space-y-2">
          <div className="h-8 w-16 bg-yellow-200 rounded mx-auto"></div>
          <div className="h-4 w-20 bg-orange-200 rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0.7, scale: 1 },
                animate: { opacity: 1, scale: 1.05 },
              }}
              transition={{ delay: i * 0.1 }}
              className="h-8 bg-yellow-100 rounded border border-yellow-200"
            ></motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const AISkeletonDemo = () => {
    const messages = [
      { isUser: true, length: "w-3/4" },
      { isUser: false, length: "w-2/3" },
      { isUser: true, length: "w-1/2" },
    ];

    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-cyan-50 to-blue-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <div className="flex items-center space-x-2 mb-3">
          <IconRobot className="w-6 h-6 text-cyan-600" />
          <div className="h-4 w-16 bg-cyan-200 rounded"></div>
        </div>
        <div className="space-y-2 flex-1">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { x: 0, opacity: 0.8 },
                animate: { x: msg.isUser ? 5 : -5, opacity: 1 },
              }}
              transition={{ delay: i * 0.2 }}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`h-6 ${msg.length} rounded-full ${
                  msg.isUser ? "bg-cyan-200" : "bg-blue-200"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={{
            initial: { scale: 1 },
            animate: { scale: [1, 1.02, 1] },
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-6 bg-gray-100 rounded-full border border-gray-200"
        ></motion.div>
      </motion.div>
    );
  };

  const AnalyticsSkeletonDemo = () => {
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-indigo-50 to-purple-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <IconChartBar className="w-6 h-6 text-indigo-600" />
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 items-end flex-1">
          {[60, 80, 40, 90].map((height, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { height: "20%" },
                animate: { height: `${height}%` },
              }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-indigo-200 rounded-t border border-indigo-300"
            ></motion.div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="h-3 bg-indigo-100 rounded"></div>
          <div className="h-3 bg-purple-100 rounded"></div>
          <div className="h-3 bg-pink-100 rounded"></div>
        </div>
      </motion.div>
    );
  };

  const PortfolioSkeletonDemo = () => {
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-purple-50 to-pink-50 flex-col space-y-2 p-4 rounded-lg"
      >
        <div className="flex items-center space-x-2 mb-3">
          <IconUser className="w-6 h-6 text-purple-600" />
          <div className="h-4 w-20 bg-purple-200 rounded"></div>
        </div>
        <motion.div
          variants={{
            initial: { scale: 1 },
            animate: { scale: 1.02 },
          }}
          className="bg-white rounded-lg p-3 flex-1 border border-purple-200"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
            <div className="space-y-1">
              <div className="h-3 w-16 bg-purple-100 rounded"></div>
              <div className="h-2 w-12 bg-gray-100 rounded"></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-100 rounded w-full"></div>
            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution with secure payments, inventory management, and admin dashboard. Built with Next.js and TypeScript for optimal performance.",
      header: <ECommerceSkeletonDemo />,
      className: "md:col-span-2",
      icon: <IconBrandNextjs className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, Kanban boards, and team coordination features using React and Socket.io.",
      header: <TaskManagementSkeletonDemo />,
      className: "md:col-span-1",
      icon: <IconBrandReact className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chat app powered by OpenAI with natural language processing, conversation history, and real-time messaging capabilities.",
      header: <AISkeletonDemo />,
      className: "md:col-span-1",
      icon: <IconRobot className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with real-time data visualization, custom reports, and interactive charts using D3.js and React.",
      header: <AnalyticsSkeletonDemo />,
      className: "md:col-span-2",
      icon: <IconChartBar className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, historical data, and personalized weather alerts.",
      header: <WeatherSkeletonDemo />,
      className: "md:col-span-1",
      icon: <IconCloudRain className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio showcasing projects with modern animations, dark/light mode, and contact integration using Next.js and Framer Motion.",
      header: <PortfolioSkeletonDemo />,
      className: "md:col-span-1",
      icon: <IconBrandTypescript className="h-4 w-4 text-gray-600" />,
      onClick: () => window.open("https://github.com", "_blank"),
    },
  ];

  return (
    <Section id="projects" className="-mt-1 pt-8 pb-36 px-4 bg-gradient-to-b from-blue-50/90 via-white to-slate-50/90 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-32 left-32 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-yellow-500 fill-current" size={24} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <Star className="text-yellow-500 fill-current" size={24} />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of featured projects and notable works. Each project showcases different 
            technologies and approaches to solving real-world problems. Click on any card to learn more 
            about the project details, technologies used, and see live demos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
            {projects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Call to Action - Enhanced */}
        <motion.div
          className="text-center mt-20 mb-24 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Enhanced background for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/80 to-purple-50/50 rounded-3xl border border-gray-200/50 shadow-lg backdrop-blur-sm -mx-8 -my-8"></div>
          
          <div className="relative z-10 py-8 px-6">
            {/* Enhanced header */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-600 text-lg mb-2">Want to see more projects or collaborate on something amazing?</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="h-1 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-1 w-2 bg-pink-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced buttons with better visibility */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => window.open("https://github.com", "_blank")}
                className="group bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px]"
              >
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">View All Projects</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group border-3 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px] bg-white/90 backdrop-blur-sm"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Let&apos;s Collaborate</span>
              </Button>
            </div>
            
            {/* Additional visual separator */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
