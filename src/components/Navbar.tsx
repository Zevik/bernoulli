
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-medium tracking-tight animate-fade-in">
          Bernoulli
        </a>

        <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 flex flex-col items-center justify-center space-y-8 text-lg",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <a
          href="#services"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#about"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
