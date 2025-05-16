
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-3/5 animate-fade-in">
            <div className="mb-4">
              <span className="inline-block py-1 px-3 text-sm font-medium bg-teal-500/10 text-teal-400 rounded-full mb-4">
                Web Developer | Python Full Stack Enthusiast
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm{" "}
              <span className="text-teal-400">Ch. Jeevan Kumar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Passionate about problem-solving and building practical web solutions.
              Transforming ideas into elegant, functional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                className="btn btn-primary group"
              >
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="btn btn-outline"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop"
                    alt="Profile placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-5 -left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-5 right-0 w-24 h-24 bg-teal-600/20 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
