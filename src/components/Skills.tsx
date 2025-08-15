import { Code, Brain, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS", "MySQL"],
      color: "text-primary"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Analysis"],
      color: "text-tech-accent"
    },
    {
      title: "Frameworks & Tools",
      icon: Database,
      skills: ["Django", "Flutter", "Firebase", "TensorFlow", "PyTorch"],
      color: "text-success"
    },
    {
      title: "Mobile & Web",
      icon: Smartphone,
      skills: ["Flutter Development", "React", "REST APIs", "Progressive Web Apps"],
      color: "text-tech-accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for modern AI and software development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="skill-card group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 bg-card border border-border rounded-lg group-hover:border-primary transition-colors duration-300`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border
                                 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm text-muted-foreground">
                Continuously learning and adapting to new technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;