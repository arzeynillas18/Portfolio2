
import { Button } from '@/components/ui/button';
import { Briefcase, Code } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Full Stack Developer with 6+ years of experience in building web applications that are not only functional but also user-friendly and accessible.
            </p>
            <p className="text-lg">
              My journey in web development started with a curiosity about how websites work. That curiosity evolved into a career where I get to build solutions that make a real impact.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new cooking recipes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="gap-2">
                <a href="#experience">
                  My Experience <Briefcase className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="#skills">
                  My Skills <Code className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="text-4xl font-bold text-primary mb-2">6+</p>
              <p className="text-lg font-medium">Years of Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-lg font-medium">Projects Completed</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-lg font-medium">Happy Clients</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-lg font-medium">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
