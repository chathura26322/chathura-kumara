import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[28rem] sm:auto-rows-[30rem] md:auto-rows-[32rem] lg:auto-rows-[36rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
  technologies,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  technologies?: string[];
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden h-full",
        className,
      )}
      onClick={onClick}
    >
      {/* Header Section - Interactive Demo */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 pb-3">
        {header}
      </div>
      
      {/* Content Section - Title, Description, Technologies */}
      <div className="p-4 sm:p-5 md:p-6 pt-3 space-y-3 sm:space-y-4">
        {/* Icon and Title */}
        <div className="flex items-center gap-2 transition-transform duration-200 group-hover/bento:translate-x-1">
          {icon}
          <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-4">
          {description}
        </p>
        
        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-2 sm:pt-3">
            {technologies.map((tech, index) => {
              // Different color schemes for different technologies
              let colorClass = "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 hover:from-blue-100 hover:to-purple-100";
              
              if (tech.includes("React") || tech.includes("Next.js")) {
                colorClass = "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 text-cyan-700 hover:from-cyan-100 hover:to-blue-100";
              } else if (tech.includes("Node.js") || tech.includes("Express")) {
                colorClass = "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 hover:from-green-100 hover:to-emerald-100";
              } else if (tech.includes("TypeScript") || tech.includes("JavaScript")) {
                colorClass = "bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 text-yellow-700 hover:from-yellow-100 hover:to-amber-100";
              } else if (tech.includes("PostgreSQL") || tech.includes("MongoDB") || tech.includes("Redis")) {
                colorClass = "bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 text-orange-700 hover:from-orange-100 hover:to-red-100";
              } else if (tech.includes("Python") || tech.includes("Django") || tech.includes("Flask")) {
                colorClass = "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 hover:from-indigo-100 hover:to-purple-100";
              }
              
              return (
                <span 
                  key={index}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 ${colorClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
