
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
          <span className="block">Software at Your Service</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
          Bernoulli builds robust software systems for startups and established businesses.
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in">
        <a 
          href="#services" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur hover:bg-background transition-all duration-300"
          aria-label="Scroll to services"
        >
          <ArrowDown size={20} className="text-foreground/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
