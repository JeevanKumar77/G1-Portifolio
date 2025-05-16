import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const About = () => {
  const downloadCV = () => {
    // This is a placeholder function that would normally handle CV download
    alert("CV download functionality would be implemented here");
  };
  return <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative max-w-sm">
              <div className="w-full aspect-[3/4] bg-card rounded-xl overflow-hidden border border-teal-900/50">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&auto=format&fit=crop" alt="Jeevan Kumar working on code" className="w-full h-full object-cover" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg border border-teal-900/50 shadow-xl">
                <div className="text-teal-400 font-bold text-xl">B.Tech CSE-AIML</div>
                <div className="text-sm text-gray-400">2022 - 2026</div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-teal-500 rounded-xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <h2 className="section-title">About Me</h2>
            
            <p className="text-lg text-gray-300 mb-6 text-justify">
              I am a passionate student with a strong interest in coding and problem-solving. 
              Eager to apply my programming skills in real-world scenarios and gain 
              hands-on experience in software development. Highly motivated and adaptable, 
              I possess a robust work ethic and commitment to efficiency and growth, 
              excelling in both individual and team environments.
            </p>
            
            <div className="mb-8 bg-card p-6 rounded-lg border border-teal-900/50">
              <h3 className="text-xl font-semibold mb-3">Educational Background</h3>
              <p className="text-gray-300">
                <span className="block text-teal-400 font-medium">Pursuing B.Tech in Computer Science and Engineering</span>
                <span className="block">Artificial Intelligence & Machine Learning</span>
                <span className="block">Malla Reddy College of Engineering & Technology</span>
                <span className="block">Expected Graduation: 2026</span>
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={downloadCV} variant="outline" className="btn btn-outline group">
                Download CV
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;