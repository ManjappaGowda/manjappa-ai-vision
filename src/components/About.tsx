import { MapPin, Languages, Shield, Cpu, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate AI/ML engineer with a focus on real-world problem solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  AI Innovation & Problem Solving
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a final-year AI and Machine Learning engineering student, I'm passionate about 
                  building intelligent systems that solve real-world problems. My expertise spans 
                  across machine learning, computer vision, and natural language processing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I have a strong interest in privacy, security, and edge computing, always looking 
                  for ways to make AI more accessible and secure for everyday applications.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Shimoga, Karnataka, India</span>
              </div>

              {/* Languages */}
              <div className="flex items-start space-x-3">
                <Languages className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Languages Spoken</p>
                  <p className="text-muted-foreground">English, Kannada, Hindi, Japanese (Intermediate)</p>
                </div>
              </div>
            </div>

            {/* Right Content - Specializations */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Machine Learning & AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep learning, neural networks, and AI model development
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      Image processing, facial recognition, and real-time tracking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Cybersecurity tools, cryptography, and secure AI systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;