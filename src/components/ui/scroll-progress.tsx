"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Add spring animation to make it smoother
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform for side indicator
  const sideProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 12px)"]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Side progress indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative">
          {/* Background line */}
          <div className="w-px h-32 bg-border" />
          
          {/* Progress line */}
          <motion.div
            className="absolute top-0 left-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ 
              height: sideProgress
            }}
          />
          
          {/* Progress dot */}
          <motion.div
            className="absolute -left-1 w-3 h-3 bg-blue-500 rounded-full shadow-lg"
            style={{
              top: dotPosition
            }}
          />
        </div>
      </div>
    </>
  );
}