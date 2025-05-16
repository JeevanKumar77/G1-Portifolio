
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="font-bold text-2xl">
              <span className="text-teal-400">J</span>eevan
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Passionate developer focused on creating beautiful, functional web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-3 mb-4">
              <a
                href="https://github.com/JeevanKumar77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Button size="icon" variant="outline" className="rounded-full">
                  <Github size={18} />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/jeevan-kumar-chippala-0ba246357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Button size="icon" variant="outline" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
              </a>
              <a
                href="mailto:nanijeevan662@gmail.com"
                aria-label="Email me"
              >
                <Button size="icon" variant="outline" className="rounded-full">
                  <Mail size={18} />
                </Button>
              </a>
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram size={18} />
              </Button>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-teal-400"
            >
              Back to top
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {currentYear} Ch. Jeevan Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
