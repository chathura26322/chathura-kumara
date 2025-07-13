"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <motion.div
        className="absolute -inset-10"
        style={{
          background: "linear-gradient(45deg, rgba(239, 246, 255, 0.4), rgba(250, 245, 255, 0.3), rgba(253, 242, 248, 0.4))",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, rgba(239, 246, 255, 0.4), rgba(250, 245, 255, 0.3), rgba(253, 242, 248, 0.4))",
            "linear-gradient(135deg, rgba(239, 246, 255, 0.3), rgba(250, 245, 255, 0.4), rgba(253, 242, 248, 0.3))",
            "linear-gradient(225deg, rgba(250, 245, 255, 0.4), rgba(253, 242, 248, 0.3), rgba(239, 246, 255, 0.4))",
            "linear-gradient(315deg, rgba(253, 242, 248, 0.3), rgba(239, 246, 255, 0.4), rgba(250, 245, 255, 0.3))",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      
      {/* Enhanced floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
          scale: [1, 0.7, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-slate-400/3 to-slate-300/3 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-400/6 to-teal-400/6 rounded-full blur-2xl"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.3, 0.6, 0.4, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Noise texture for more realistic effect */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
