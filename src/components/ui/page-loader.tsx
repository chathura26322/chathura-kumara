"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ColourfulText } from "./colourful-text";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

export function PageLoader({ isLoading, onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            // Auto-complete when reaching 100%
            setTimeout(() => {
              onComplete();
            }, 800); // Small delay to show 100% completion
            return 100;
          }
          return prev + Math.random() * 12 + 3; // Slightly faster progress
        });
      }, 120); // Faster interval for quicker loading

      return () => clearInterval(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, -30, 20, 0],
                y: [0, 20, -30, 0],
                scale: [1, 0.9, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, 20, -30, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="text-center relative z-10 space-y-8 max-w-md mx-auto px-6">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-4xl md:text-5xl font-bold">
                <ColourfulText text="NE" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Naveesha Ekanayaka</p>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              className="relative w-20 h-20 mx-auto"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-600"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-600"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-full max-w-xs mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <motion.p
                  className="text-xs text-gray-500 mt-2 text-center font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {Math.round(Math.min(progress, 100))}% Complete
                </motion.p>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.p
                className="text-gray-600 text-sm font-medium"
                animate={{
                  opacity: progress >= 100 ? [1, 1, 1] : [1, 0.5, 1]
                }}
                transition={{
                  duration: progress >= 100 ? 0.3 : 2,
                  repeat: progress >= 100 ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              >
                {progress >= 100 ? "Welcome! Ready to explore..." : "Crafting your experience..."}
              </motion.p>
            </motion.div>

            {/* Floating Dots */}
            <div className="absolute -top-10 -left-10 space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="inline-block w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="absolute -bottom-10 -right-10 space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="inline-block w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
