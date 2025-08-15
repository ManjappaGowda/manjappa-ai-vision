import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in AI & ML",
      institution: "JNNCE, Shimoga",
      period: "2022 - Present",
      grade: "CGPA 8.7",
      status: "Final Year",
      isCurrently: true
    },
    {
      degree: "Pre-University (PCMB)",
      institution: "MKCPM PU College",
      period: "2020 - 2022",
      grade: "91%",
      status: "Completed",
      isCurrently: false
    },
    {
      degree: "10th Grade",
      institution: "DCMC CBSE School",
      period: "2019 - 2020",
      grade: "85.4%",
      status: "Completed",
      isCurrently: false
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">
              Academic journey in AI, Machine Learning, and Engineering
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg ${edu.isCurrently ? 'bg-primary/10' : 'bg-muted'}`}>
                    <GraduationCap className={`w-6 h-6 ${edu.isCurrently ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      {edu.isCurrently && (
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full w-fit">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg text-muted-foreground mb-3">{edu.institution}</h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{edu.grade}</span>
                      </div>

                      <span className={`px-2 py-1 rounded-full text-xs ${
                        edu.status === 'Completed' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-card border border-border rounded-full">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Specializing in AI & Machine Learning Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;