import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "TECHSAKSHAM (Microsoft & SAP, Edunet Foundation)",
      period: "November 2024 - December 2024",
      location: "AICTE Program",
      description: [
        "Built AI-powered chatbot with advanced NLP techniques using Python",
        "Gained comprehensive experience in data analysis and model building",
        "Enhanced problem-solving skills through real-world AI applications",
        "Collaborated with industry professionals on cutting-edge AI projects"
      ],
      isRecent: true
    },
    {
      title: "AI/ML Intern",
      company: "Dotch Endeavours Pvt. Ltd",
      period: "October 2024 - November 2024",
      location: "Remote",
      description: [
        "Focused on Python development for AI/ML applications",
        "Worked on practical machine learning projects and implementations",
        "Enhanced teamwork and collaboration skills in agile environment",
        "Contributed to the development of scalable AI solutions"
      ],
      isRecent: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-muted-foreground">
              Professional experience in AI/ML development and innovation
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                    exp.isRecent 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'bg-card border-border'
                  }`}>
                    <Building className={`w-5 h-5 ${exp.isRecent ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                          {exp.isRecent && (
                            <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full w-fit">
                              Latest
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-full">
              <span className="text-muted-foreground">Looking for new opportunities in AI/ML development</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;