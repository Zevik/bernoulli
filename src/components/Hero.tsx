
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/b0289643-ce91-4651-9f63-0b7ad3bbc069.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in z-20 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white">
          <span className="block">Software at Your Service</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Bernoulli builds robust software systems for startups and established businesses.
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in z-20">
        <a 
          href="#services" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur hover:bg-black/50 transition-all duration-300"
          aria-label="Scroll to services"
        >
          <ArrowDown size={20} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
