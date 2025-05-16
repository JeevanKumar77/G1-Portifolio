
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GitHub, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-2xl">
          <span className="text-teal-500">J</span>eevan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="nav-link py-2 hover:text-teal-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-3">
            <a
              href="https://github.com/JeevanKumar77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Button size="icon" variant="ghost" className="rounded-full">
                <GitHub size={20} />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/jeevan-kumar-chippala-0ba246357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Button size="icon" variant="ghost" className="rounded-full">
                <Linkedin size={20} />
              </Button>
            </a>
            <a href="mailto:nanijeevan662@gmail.com" aria-label="Email">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Mail size={20} />
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-teal-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-xl font-medium hover:text-teal-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com/JeevanKumar77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Button size="icon" variant="outline" className="rounded-full">
                <GitHub size={20} />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/jeevan-kumar-chippala-0ba246357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin size={20} />
              </Button>
            </a>
            <a href="mailto:nanijeevan662@gmail.com" aria-label="Email">
              <Button size="icon" variant="outline" className="rounded-full">
                <Mail size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
