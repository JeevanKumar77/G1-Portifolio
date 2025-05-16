
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const ProjectCard = ({
  project
}: {
  project: ProjectProps;
}) => {
  return <Card className="overflow-hidden bg-card border-teal-900/50 hover:border-teal-500 transition-all duration-300 h-full group">
      <div className="relative overflow-hidden h-56">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
          <div className="w-full">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.slice(0, 3).map(tech => <span key={tech} className="py-1 px-2 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                  {tech}
                </span>)}
              {project.technologies.length > 3 && <span className="py-1 px-2 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                  +{project.technologies.length - 3} more
                </span>}
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-400 mb-6 text-justify">{project.description}</p>
        <div className="flex gap-3">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-gray-300 hover:text-teal-400 transition-colors">
              <Github size={16} className="mr-1" /> Source Code
            </a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-gray-300 hover:text-teal-400 transition-colors">
              <ExternalLink size={16} className="mr-1" /> Live Preview
            </a>}
        </div>
      </CardContent>
    </Card>;
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const projects: ProjectProps[] = [{
    title: "Educational Platform",
    description: "Built a dynamic, user-friendly platform using HTML, CSS, and JavaScript to provide students access to educational resources.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/JeevanKumar77",
    category: "web"
  }, {
    title: "Journeyer Using Django",
    description: "A Django-based travel collaboration platform that allows users to connect, create groups, and plan shared travel experiences.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=500&auto=format&fit=crop",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    githubUrl: "https://github.com/JeevanKumar77",
    liveUrl: "#",
    category: "fullstack"
  }, {
    title: "Speech Identification",
    description: "Developed a Python-based system using ML for real-time speaker identification and transcription.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=500&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "ML", "Audio Processing"],
    githubUrl: "https://github.com/JeevanKumar77",
    category: "ml"
  }];
  const categories = [{
    id: "all",
    name: "All Projects"
  }, {
    id: "web",
    name: "Web Development"
  }, {
    id: "fullstack",
    name: "Full Stack"
  }, {
    id: "ml",
    name: "Machine Learning"
  }];
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">My Projects</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button 
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id ? "bg-teal-600 hover:bg-teal-700" : ""}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <div key={project.title} className="animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <ProjectCard project={project} />
            </div>)}
        </div>

        <div className="text-center mt-12">
          <Button className="btn btn-primary group">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </section>;
};

export default Projects;
