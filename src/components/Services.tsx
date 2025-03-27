
import React, { useEffect, useRef } from "react";
import { Code, Zap, Monitor, RotateCw, ScrollText } from "lucide-react";

const services = [
  {
    title: "Bespoke Software Solutions",
    icon: <Code size={36} className="text-primary" />,
    description:
      "We start off by listening to you and analyzing your needs. Then we start architecting the solution, making sure we solve the problem at hand without adding features that aren't needed or complicating the solution.",
  },
  {
    title: "Software Prototyping",
    icon: <Zap size={36} className="text-primary" />,
    description:
      "Rapid prototyping in a reasonable time table and on a budget is one of our specialties. From your conceptual ideas to working web or mobile prototypes within the time and budget constraints.",
  },
  {
    title: "Web and Mobile App Development",
    icon: <Monitor size={36} className="text-primary" />,
    description:
      "After listening carefully and understanding what you are trying to achieve we'll set off to achieve your goals in the time table and budget allotted.",
  },
  {
    title: "Legacy System Integration",
    icon: <RotateCw size={36} className="text-primary" />,
    description:
      "Having problems maintaining an outdated codebase? Need help rescuing a failing project? Let us help – achieve better performance and add functionality to your legacy applications.",
  },
  {
    title: "Consultancy",
    icon: <ScrollText size={36} className="text-primary" />,
    description:
      "At Bernoulli we keep abreast of the latest technological developments and strive to keep an open mind and an experimental attitude so you can have an edge over your competition.",
  },
];

const Services: React.FC = () => {
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
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 reveal" ref={(el) => (revealRefs.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">What We Do</h2>
          <p className="text-lg text-foreground/70">
            The Challenge - Building good robust software is far from easy. Software engineering and well thought out architectural choices are at its heart. We have the experience needed and the know-how to tackle the challenges you are facing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-md reveal"
              ref={(el) => (revealRefs.current[index + 1] = el)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl mx-auto reveal" ref={(el) => (revealRefs.current[services.length + 1] = el)}>
          <div className="bg-secondary/50 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-medium mb-4">Our Commitment</h3>
            <p className="text-foreground/70 mb-4">
              In partnership with you we will undertake your custom software development – building a team focused on the delivery of your project. We are efficient, professional and offer practical solutions.
            </p>
            <p className="text-foreground/70">
              We will use the latest technologies and produce a modern, specially tailored solution that meets your special requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
