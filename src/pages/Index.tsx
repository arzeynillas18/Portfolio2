import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactForm } from '@/components/ContactForm';
import { SkillBadge } from '@/components/SkillBadge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowDown,
  Calendar,
  MapPin,
  Code,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { skills, getSkillsByCategory } from '@/data/skills';
import { experiences } from '@/data/experience';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 4));
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    // For smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : getSkillsByCategory(activeCategory as any);

  // Handle view more/less for projects
  const toggleProjects = () => {
    if (showAllProjects) {
      setVisibleProjects(projects.slice(0, 4));
      setShowAllProjects(false);
    } else {
      setVisibleProjects(projects);
      setShowAllProjects(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
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

        {/* About Section */}
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
        
        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
              <div className="w-24 h-1 bg-primary rounded"></div>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-8">
                <Button 
                  variant={activeCategory === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('all')}
                  className="rounded-full"
                >
                  All
                </Button>
                <Button 
                  variant={activeCategory === 'frontend' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('frontend')}
                  className="rounded-full"
                >
                  Frontend
                </Button>
                <Button 
                  variant={activeCategory === 'backend' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('backend')}
                  className="rounded-full"
                >
                  Backend
                </Button>
                <Button 
                  variant={activeCategory === 'mobile' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('mobile')}
                  className="rounded-full"
                >
                  Mobile
                </Button>
                <Button 
                  variant={activeCategory === 'devops' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('devops')}
                  className="rounded-full"
                >
                  DevOps
                </Button>
                <Button 
                  variant={activeCategory === 'design' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('design')}
                  className="rounded-full"
                >
                  Design
                </Button>
                <Button 
                  variant={activeCategory === 'other' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveCategory('other')}
                  className="rounded-full"
                >
                  Other
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 animate-fade-in">
                {filteredSkills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              <div className="w-24 h-1 bg-primary rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 mr-4 text-primary" />
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                </div>
                <p className="text-muted-foreground">University of Technology, San Francisco</p>
                <p className="text-muted-foreground mt-2">Graduated: May 2020</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">GPA: 3.8/4.0</Badge>
                  <Badge variant="secondary">Magna Cum Laude</Badge>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 mr-4 text-primary" />
                  <h3 className="text-xl font-bold">Certification in Web Development</h3>
                </div>
                <p className="text-muted-foreground">Online Coding Bootcamp</p>
                <p className="text-muted-foreground mt-2">Completed: December 2019</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Full Stack Development</Badge>
                  <Badge variant="secondary">Modern Web Technologies</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-20 bg-muted/20">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">My Experience</h2>
              <div className="w-24 h-1 bg-primary rounded"></div>
            </div>
            
            <div className="relative border-l border-muted-foreground/30 pl-6 ml-3 space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="mb-10 relative animate-fade-in">
                  <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                    <Briefcase className="h-3 w-3" />
                  </div>
                  
                  <div className="bg-card shadow-sm rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-lg font-medium text-primary">{experience.company}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                    
                    <p className="mt-4">{experience.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
              <div className="w-24 h-1 bg-primary rounded"></div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Here are some of my recent projects. Each one was carefully crafted to solve a specific problem or meet a particular need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {projects.length > 4 && (
              <div className="flex justify-center mt-12">
                <Button onClick={toggleProjects}>
                  {showAllProjects ? 'Show Less' : 'View More Projects'}
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/20">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <div className="w-24 h-1 bg-primary rounded"></div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Have a project in mind or just want to chat? Feel free to reach out.
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">
                          hello@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          linkedin.com/in/johndoe
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Github className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <a 
                          href="https://github.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          github.com/johndoe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Current Status</h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
                    </div>
                    <p>Available for freelance work</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
