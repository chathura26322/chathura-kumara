"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mouse } from "lucide-react";

interface ScrollDownIndicatorProps {
  onClick?: () => void;
  className?: string;
}

export function ScrollDownIndicator({ onClick, className = "" }: ScrollDownIndicatorProps) {
  const scrollToNext = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to next section
      const nextSection = document.getElementById("about");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.button
      type="button"
      className={`flex flex-col items-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg p-3 hover:bg-black/5 transition-colors duration-200 ${className}`}
      onClick={scrollToNext}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      aria-label="Scroll down to next section"
    >
      {/* Scroll text */}
      <motion.span
        className="text-xs font-medium text-muted-foreground/80 mb-3 group-hover:text-primary transition-colors duration-200 tracking-wide uppercase"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll Down
      </motion.span>

      {/* Mouse icon with scroll wheel animation */}
      <motion.div
        className="relative mb-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mouse className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
        <motion.div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-primary rounded-full"
          animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Animated chevron */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground/80 group-hover:text-primary transition-colors duration-200" />
      </motion.div>

      {/* Vertical line */}
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent mt-3"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        style={{ transformOrigin: "top" }}
      />
    </motion.button>
  );
}