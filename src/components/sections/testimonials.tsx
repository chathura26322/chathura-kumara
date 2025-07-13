"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/90 via-blue-50/90 to-purple-50/90 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-16 left-16 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-16 sm:space-y-20">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What People Say</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Here&apos;s what clients and collaborators have to say about working with me.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <AnimatedTestimonials autoplay={true} />
        </div>
      </div>
    </Section>
  );
}