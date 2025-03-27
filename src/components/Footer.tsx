
import React from "react";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-medium tracking-tight mb-2">Bernoulli</h3>
              <p className="text-foreground/60 text-sm">
                Building robust software systems.
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60 mb-4">
                  Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60 mb-4">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60 mb-4">
                  Social
                </h4>
                <div className="flex justify-center md:justify-start">
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Bernoulli Software. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
