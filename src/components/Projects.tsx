
import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Motorola Solutions",
    description: "Development of a POC for a real-time image processing based autonomous drone navigation system",
    imageUrl: "https://images.unsplash.com/photo-1621274147744-cfb5862a18e4?q=80&w=500&auto=format"
  },
  {
    title: "Roadmetric",
    description: "Lead Roadmetric's development effort of their product "Enforcement Deputy" – A video recording, streaming and management solution for police cars.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-7eed14a54239?q=80&w=500&auto=format"
  },
  {
    title: "Mishor 3D",
    description: "Lead the R&D department and development effort of ShadowBox. ShadowBoxTM is Mishor's 3D contextual and augmented reality rendering software engine.",
    imageUrl: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=500&auto=format"
  },
  {
    title: "Atmosfir Optics",
    description: "An Innovative Advanced Air Monitoring Technology Company - In this project we helped to develop Atmosfir's next generation product.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-7eed14a54239?q=80&w=500&auto=format"
  },
  {
    title: "Ministry Of Health Israel",
    description: "Digital Health department - An ongoing consulting project for the architecture team in the department.",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=500&auto=format"
  },
  {
    title: "Microsoft",
    description: "An ongoing development project with the Microsoft Surface team in Israel.",
    imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=500&auto=format"
  }
];

const Projects: React.FC = () => {
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
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24 reveal"
          ref={(el) => (revealRefs.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/70">
            Our clients hire us again and again because they know we will do our best to deliver on their needs, on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card reveal"
              ref={(el) => (revealRefs.current[index + 1] = el)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="project-content bg-background/90 backdrop-blur-sm">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
