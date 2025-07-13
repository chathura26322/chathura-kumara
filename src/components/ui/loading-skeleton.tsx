"use client";

import { motion } from "motion/react";

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function LoadingSkeleton({ className, children }: LoadingSkeletonProps) {
  return (
    <motion.div
      className={`animate-pulse bg-gradient-to-r from-muted/50 via-muted to-muted/50 bg-[length:200%_100%] rounded-lg ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface SectionLoadingProps {
  title?: string;
  subtitle?: string;
}

export function SectionLoading({ title = "Loading...", subtitle }: SectionLoadingProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-500 rounded-full animate-spin animation-delay-300 animate-reverse"></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-b-purple-500 rounded-full animate-spin animation-delay-500"></div>
      </div>
      
      <motion.h3
        className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {title}
      </motion.h3>
      
      {subtitle && (
        <motion.p
          className="text-muted-foreground text-center max-w-md"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// Specialized loading components
export function ProjectsLoading() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-16">
        <LoadingSkeleton className="h-12 w-64 mx-auto mb-4" />
        <LoadingSkeleton className="h-6 w-96 mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="border rounded-xl p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <LoadingSkeleton className="h-48 w-full rounded-lg" />
            <LoadingSkeleton className="h-6 w-3/4" />
            <LoadingSkeleton className="h-4 w-full" />
            <LoadingSkeleton className="h-4 w-2/3" />
            <div className="flex space-x-2">
              <LoadingSkeleton className="h-6 w-16 rounded-full" />
              <LoadingSkeleton className="h-6 w-20 rounded-full" />
              <LoadingSkeleton className="h-6 w-14 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsLoading() {
  return (
    <div className="mx-auto max-w-sm px-4 py-20 md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <LoadingSkeleton className="h-full w-full rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div className="space-y-4">
            <LoadingSkeleton className="h-8 w-48" />
            <LoadingSkeleton className="h-4 w-32" />
            <div className="space-y-2 mt-8">
              <LoadingSkeleton className="h-4 w-full" />
              <LoadingSkeleton className="h-4 w-full" />
              <LoadingSkeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <LoadingSkeleton className="h-7 w-7 rounded-full" />
            <LoadingSkeleton className="h-7 w-7 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
