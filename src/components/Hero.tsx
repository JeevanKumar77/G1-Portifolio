import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerChildren = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-0">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(0,0,0,0.05)_0.5px,transparent_0.5px)] bg-[size:20px_20px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div className="w-full md:w-3/5" initial="hidden" animate="visible" variants={staggerChildren}>
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-block py-1 px-4 text-sm font-medium bg-teal-500/20 text-teal-400 rounded-full mb-4 backdrop-blur-sm border border-teal-500/20">Web Developer </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="text-gradient bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
Ch. Jeevan Kumar</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">Passionate about AI &amp; Web Development</motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToProjects} className="btn btn-primary group relative overflow-hidden">
                <span className="relative z-10">View Portfolio</span>
                <span className="absolute inset-0 bg-teal-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" size={18} />
              </Button>
              
              <Button onClick={scrollToContact} variant="outline" className="btn btn-outline relative overflow-hidden group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeIn} className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Find me on:</span>
              <div className="flex space-x-2">
                <a href="https://github.com/JeevanKumar77" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-teal-500/20 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/jeevan-kumar-chippala-0ba246357" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-teal-500/20 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:nanijeevan662@gmail.com" className="p-2 rounded-full bg-card hover:bg-teal-500/20 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="w-full md:w-2/5 flex justify-center md:justify-end" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }}>
            <div className="relative">
              {/* Decorative geometric shapes */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-teal-500/30 rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-teal-500/30 rounded-full"></div>
              
              {/* Hero image container with glassy effect */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-700/20 backdrop-blur-sm border border-teal-500/20 flex items-center justify-center p-2">
                <div className="w-full h-full rounded-xl overflow-hidden border-2 border-teal-500/30 shadow-[0_0_25px_rgba(20,184,166,0.2)]">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop" alt="Profile placeholder" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating badges */}
                
                
              </div>
              
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;