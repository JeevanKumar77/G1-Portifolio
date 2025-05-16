
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  title,
  description
}: ServiceProps) => {
  return <Card className="bg-card border border-teal-900/50 hover:border-teal-500 transition-all duration-300 h-full group">
      <CardContent className="p-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 mb-6">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="mt-4 inline-flex items-center text-teal-400 font-medium group-hover:text-teal-300 transition-colors">
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardFooter>
    </Card>;
};

const Services = () => {
  const services: ServiceProps[] = [{
    icon: "🌐",
    title: "Web Development",
    description: "Creating responsive, user-friendly websites with modern technologies like HTML, CSS, and JavaScript."
  }, {
    icon: "📱",
    title: "Full Stack Development",
    description: "End-to-end web development with both frontend and backend technologies for complete digital solutions."
  }, {
    icon: "🐍",
    title: "Python Development",
    description: "Building efficient applications, scripts, and automation tools using Python and its frameworks."
  }, {
    icon: "🧠",
    title: "AI/ML Solutions",
    description: "Implementing machine learning models and AI-driven solutions to solve complex problems."
  }];
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
