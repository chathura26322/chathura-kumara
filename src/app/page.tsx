import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { 
  LoadingSkeleton, 
  SectionLoading, 
  ProjectsLoading, 
  TestimonialsLoading 
} from "@/components/ui/loading-skeleton";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollIndicator />
      <Navigation />
      
      <Suspense fallback={<LoadingSkeleton className="min-h-screen" />}>
        <div id="hero">
          <Hero />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <div id="about">
          <About />
        </div>
      </Suspense>
      
      <Suspense fallback={<ProjectsLoading />}>
        <div id="projects" className="mt-8 sm:mt-12 lg:mt-16">
          <Projects />
        </div>
      </Suspense>
      
      <Suspense fallback={<TestimonialsLoading />}>
        <div id="testimonials" className="mt-8 sm:mt-12 lg:mt-16">
          <Testimonials />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
      
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <Footer />
      </div>
    </main>
  );
}
