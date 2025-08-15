import { Trophy, Medal, Award, Users, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Place - TechXcelerate Hackathon",
      organizer: "BITS Pilani Hyderabad",
      project: "Cybersecurity Toolkit",
      description: "Developed comprehensive cybersecurity toolkit for remote sensing and web security applications.",
      icon: Trophy,
      position: "2nd Place",
      category: "Hackathon",
      isRecent: true
    },
    {
      title: "2nd Place - Design Impact Movement",
      organizer: "Titan & IKP EDEN",
      project: "FarmTooDoor Platform",
      description: "Created innovative agricultural platform connecting farmers directly with consumers.",
      icon: Medal,
      position: "2nd Place",
      category: "Innovation",
      isRecent: true
    },
    {
      title: "SHE Secure 2025 Hackathon",
      organizer: "Women's Safety Initiative",
      project: "SafeSphere AI",
      description: "Developed AI-powered women's safety application with real-time threat detection.",
      icon: Award,
      position: "Participant",
      category: "Social Impact",
      isRecent: true
    },
    {
      title: "HackTech Fusion 3.0",
      organizer: "Tech Community",
      project: "Real-time Bengaluru Traffic App",
      description: "Built intelligent traffic management system for real-time traffic optimization.",
      icon: Users,
      position: "Participant",
      category: "Smart City",
      isRecent: false
    },
    {
      title: "FOSS Hack 2025",
      organizer: "Open Source Community",
      project: "AI Research Companion",
      description: "Created AI research tool with offline search and YouTube summarization capabilities.",
      icon: Trophy,
      position: "Participant",
      category: "Open Source",
      isRecent: true
    }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("1st")) return "text-yellow-500";
    if (position.includes("2nd")) return "text-primary";
    if (position.includes("3rd")) return "text-orange-500";
    return "text-tech-accent";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Hackathon": "bg-primary/10 text-primary",
      "Innovation": "bg-tech-accent/10 text-tech-accent",
      "Social Impact": "bg-success/10 text-success",
      "Smart City": "bg-primary/10 text-primary",
      "Open Source": "bg-muted text-muted-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Achievements & Volunteering</h2>
            <p className="text-xl text-muted-foreground">
              Recognition for innovation and contribution to the tech community
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${achievement.position.includes("2nd") ? 'bg-primary/10' : 'bg-muted'}`}>
                      <IconComponent className={`w-6 h-6 ${getPositionColor(achievement.position)}`} />
                    </div>
                    {achievement.isRecent && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Recent
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{achievement.organizer}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                      <span className={`text-sm font-medium ${getPositionColor(achievement.position)}`}>
                        {achievement.position}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-primary">{achievement.project}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Certifications</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">NPTEL Certifications</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Data Structure & Algorithms using Java</li>
                      <li>• Cloud Computing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-tech-accent/10 rounded-lg">
                    <Users className="w-5 h-5 text-tech-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Professional Learning</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Networking Foundations - LinkedIn Learning</li>
                      <li>• Data Structures & Algorithms in C - Great Learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Second Places</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;