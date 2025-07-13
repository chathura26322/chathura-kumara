"use client";
import React from "react";
import { motion } from "motion/react";

const colors = [
  "rgb(59, 130, 246)",   // Blue-500 - Professional bright blue
  "rgb(16, 185, 129)",   // Emerald-500 - Fresh professional green
  "rgb(139, 92, 246)",   // Violet-500 - Modern professional purple
  "rgb(236, 72, 153)",   // Pink-500 - Creative professional pink
  "rgb(6, 182, 212)",    // Cyan-500 - Tech professional cyan
  "rgb(245, 158, 11)",   // Amber-500 - Warm professional gold
  "rgb(99, 102, 241)",   // Indigo-500 - Professional indigo
  "rgb(20, 184, 166)",   // Teal-500 - Modern teal
  "rgb(168, 85, 247)",   // Purple-500 - Creative purple
  "rgb(34, 197, 94)",    // Green-500 - Vibrant professional green
];

export function ColourfulText({ text }: { text: string }) {
  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 3000); // Faster color change

    return () => clearInterval(interval);
  }, []);

  // Ensure every character gets a unique color by extending the color array
  const extendedColors = React.useMemo(() => {
    const needed = text.length;
    const extended = [...currentColors];
    while (extended.length < needed) {
      extended.push(...colors);
    }
    return extended.slice(0, needed);
  }, [currentColors, text.length]);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
        color: extendedColors[index],
      }}
      animate={{
        color: extendedColors[index],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(2px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight bg-transparent"
      style={{ 
        backgroundColor: 'transparent',
        color: extendedColors[index] // Ensure color is always set
      }}
    >
      {char}
    </motion.span>
  ));
}
