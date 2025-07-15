"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ColourfulText } from "@/components/ui/colourful-text";
import { PageLoader } from "@/components/ui/page-loader";
import { useCallback, useState } from "react";

export function Hero() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsPageLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const itemTransition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const openExternalLink = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  // Show page loader initially
  if (isPageLoading) {
    return (
      <PageLoader 
        isLoading={isPageLoading} 
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <HeroHighlight containerClassName="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-2 sm:pb-4 lg:pb-6">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            className="text-center relative z-10 space-y-4 sm:space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Badge */}
            <motion.div variants={itemVariants} transition={itemTransition}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} transition={itemTransition} className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 px-2">
                Hi, I&apos;m
              </h1>
              <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight bg-transparent px-2">
                <ColourfulText text="Naveesha " />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} transition={itemTransition} className="space-y-3 sm:space-y-4 px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A passionate{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Full-Stack Developer
                </span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
                Crafting digital experiences with modern technologies and creative solutions
              </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} transition={itemTransition}>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} transition={itemTransition} className="pt-2 sm:pt-4 px-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg group min-w-[180px] sm:min-w-[200px]"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-500 px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px] sm:min-w-[200px]"
                  onClick={() => openExternalLink("/resume.pdf")}
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </Button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="pt-4 sm:pt-6"
            >
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { icon: Github, url: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, url: "mailto:naveesha@example.com", label: "Email" },
                ].map(({ icon: Icon, url, label }) => (
                  <motion.div key={label} variants={socialVariants}>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openExternalLink(url)}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
