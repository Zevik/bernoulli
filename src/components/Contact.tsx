
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container mx-auto">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20 reveal"
          ref={(el) => (revealRefs.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Contact Us</h2>
          <p className="text-lg text-foreground/70">
            Get in touch with us to discuss your project or inquire about our services.
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal"
          ref={(el) => (revealRefs.current[1] = el)}
        >
          <div className="bg-background border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-field resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send
                  </span>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-background border border-border rounded-lg p-8 mb-8">
              <h3 className="text-xl font-medium mb-6">Visit Us</h3>
              <div className="flex items-start mb-4">
                <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" />
                <p className="text-foreground/70">
                  Haharuv<br />
                  Eliav<br />
                  7938300 Israel
                </p>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1 flex-shrink-0" />
                <p className="text-foreground/70">info@bernoulli.com</p>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              {/* Here we would typically include a map, but we'll use a placeholder background */}
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-foreground/60">Map Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
