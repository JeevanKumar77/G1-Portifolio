
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillProps {
  name: string;
  level: number;
  icon: string;
}

const SkillCard = ({ name, level, icon }: SkillProps) => {
  return (
    <Card className="border-none shadow-lg bg-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500/20 text-teal-400">
            <span className="text-lg">{icon}</span>
          </div>
          <h3 className="font-medium text-lg">{name}</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <Progress value={level} className="h-2 bg-gray-700" indicatorClassName="bg-teal-500" />
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const skills: SkillProps[] = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "HTML & CSS", level: 85, icon: "🌐" },
    { name: "JavaScript", level: 80, icon: "📜" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "Django", level: 85, icon: "🎯" },
    { name: "Problem Solving", level: 90, icon: "🧩" },
    { name: "Machine Learning", level: 70, icon: "🤖" },
    { name: "Git & GitHub", level: 80, icon: "📊" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard name={skill.name} level={skill.level} icon={skill.icon} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Other Skills & Attributes</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Teamwork', 'Communication', 'Adaptability', 'Time Management', 
              'Critical Thinking', 'Fast Learner', 'Detail-Oriented', 'Creative Problem Solving'].map((skill) => (
              <span 
                key={skill}
                className="py-2 px-4 bg-card rounded-full text-sm border border-teal-900/50 hover:border-teal-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
