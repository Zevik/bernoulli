
import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal"
            ref={(el) => (revealRefs.current[0] = el)}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Who We Are</h2>
              <p className="text-lg text-foreground/70 mb-6">
                Bernoulli is a small software house with a passion for technology. At Bernoulli we work with software specialists that have a rich experience and a love of technology.
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                We strive to help you achieve your goals and surpass them.
              </p>
              <p className="text-lg text-foreground/70">
                To understand more about our experience and expertise, please take a look at our featured projects.
              </p>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-8">
              <blockquote className="relative">
                <div className="text-6xl text-primary/20 absolute -top-8 -left-4">"</div>
                <p className="text-xl text-foreground/80 italic relative z-10">
                  Software can be made in an elegant and efficient manner. It's a matter of choice.
                </p>
                <footer className="mt-4 text-sm text-foreground/60">
                  <cite>— Gley Mughr</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          <div 
            className="mt-16 md:mt-24 max-w-3xl mx-auto text-center reveal"
            ref={(el) => (revealRefs.current[1] = el)}
          >
            <h3 className="text-xl font-medium mb-4">Cost & Budget</h3>
            <p className="text-foreground/70">
              Your budget and the numbers we agree upon determine the costs of the project from start to completion. We do our utmost to adapt to your needs and limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
