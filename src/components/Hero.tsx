import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-20 geometric-circle w-32 h-32 animate-float" />
      <div className="absolute bottom-40 right-10 geometric-circle w-16 h-16 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-4 geometric-circle w-8 h-8 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-lg text-muted-foreground">Hi,</h2>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-primary">Manjappa Gowda GR</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Final-Year AI/ML Engineering Student
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>AI Innovator | Problem Solver</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about building AI tools and solving real-world problems with expertise in 
              Python, Java, machine learning, and computer vision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://github.com/manjappagowda16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/manjappa-gowda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:manjappagowda16@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Area */}
          <div className="relative animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-primary font-mono">Expert on</span>
                </div>
                <h3 className="text-2xl font-semibold">Based in Shimoga, Karnataka</h3>
                <p className="text-lg text-muted-foreground">
                  I'm developer and UI/UX designer.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Hey are looking for developer to build your brand and grow your business? 
                  let's shake hands with me.
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Languages</span>
                    <span className="text-sm">English, Kannada, Hindi, Japanese</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Let's Chat
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;