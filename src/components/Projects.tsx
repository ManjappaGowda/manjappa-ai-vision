import { ExternalLink, Github, Eye, Brain, Shield, Zap, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Facial Expression-Controlled Therapy Tool",
      description: "Real-time expression tracking system designed to improve therapy sessions through advanced computer vision and emotion recognition.",
      technologies: ["Computer Vision", "Python", "OpenCV", "Machine Learning", "Real-time Processing"],
      icon: Eye,
      category: "AI/ML",
      features: [
        "Real-time facial expression detection",
        "Emotion classification and analysis",
        "Therapy session improvement metrics",
        "User-friendly interface for therapists"
      ]
    },
    {
      title: "NoPerch XR",
      description: "AI-powered surveillance system with AR/VR visualization to deter pigeons and protect urban spaces using intelligent monitoring.",
      technologies: ["AI", "AR/VR", "Computer Vision", "IoT", "Real-time Analytics"],
      icon: Brain,
      category: "AI/IoT",
      features: [
        "Intelligent pigeon detection",
        "AR/VR visualization interface",
        "Automated deterrent systems",
        "Real-time monitoring dashboard"
      ]
    },
    {
      title: "Website Compliance Checker & Image Watermarking",
      description: "Comprehensive cybersecurity toolkit for web security analysis and image protection with automated compliance checking.",
      technologies: ["Cybersecurity", "Web Security", "Image Processing", "Automation", "Python"],
      icon: Shield,
      category: "Security",
      features: [
        "Automated website security scanning",
        "Intelligent image watermarking",
        "Compliance report generation",
        "Remote sensing integration"
      ]
    },
    {
      title: "SafeSphere AI",
      description: "Women's safety application developed for SHE Secure 2025 Hackathon, featuring AI-powered threat detection and emergency response.",
      technologies: ["AI", "Mobile App", "Flutter", "Firebase", "Safety Tech"],
      icon: Shield,
      category: "Safety Tech",
      features: [
        "AI-powered threat detection",
        "Emergency contact system",
        "Real-time location sharing",
        "Community safety network"
      ]
    },
    {
      title: "Real-time Bengaluru Traffic App",
      description: "Intelligent traffic management system providing real-time traffic updates and route optimization for Bengaluru city.",
      technologies: ["Real-time Data", "Mobile App", "APIs", "Machine Learning", "Flutter"],
      icon: Car,
      category: "Smart City",
      features: [
        "Real-time traffic monitoring",
        "Route optimization algorithms",
        "Predictive traffic analysis",
        "User-friendly mobile interface"
      ]
    },
    {
      title: "AI Research Companion",
      description: "FOSS Hack 2025 project featuring offline search capabilities and YouTube content summarization for researchers.",
      technologies: ["NLP", "AI", "Offline Processing", "YouTube API", "Research Tools"],
      icon: Brain,
      category: "Research",
      features: [
        "Offline research capabilities",
        "YouTube content summarization",
        "AI-powered insights",
        "Academic research optimization"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "text-primary",
      "AI/IoT": "text-tech-accent",
      "Security": "text-destructive",
      "Safety Tech": "text-success",
      "Smart City": "text-primary",
      "Research": "text-tech-accent"
    };
    return colors[category as keyof typeof colors] || "text-primary";
  };

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Innovative AI solutions and real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="project-card group">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className={`text-sm font-medium ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border
                                   hover:border-primary hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 mt-6 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-card border border-border rounded-full">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">More projects available on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;