
import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin, ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 flex items-center">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-primary">Hi, I'm</span> 
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              I build accessible, user-friendly web applications with modern technologies.
              Passionate about creating digital experiences that are both functional and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@example.com" 
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="John Doe" 
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a href="#about" className="animate-bounce rounded-full p-1 bg-muted/50">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
