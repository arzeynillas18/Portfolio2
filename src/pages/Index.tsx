
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
  Twitter,
  Facebook, 
  Download, 
  ArrowDown,
  Calendar,
  MapPin,
  Code,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { skills, getSkillsByCategory } from '@/data/skills';
import { experiences } from '@/data/experience';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 6));
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
      setVisibleProjects(projects.slice(0, 6));
      setShowAllProjects(false);
    } else {
      setVisibleProjects(projects);
      setShowAllProjects(true);
    }
  };

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2016",
    },
    {
      degree: "Bachelor of Science in Web Development",
      institution: "Digital Arts College",
      year: "2014",
    },
  ];

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
                  Nepomuceno Arzey 
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                  Full Stack Software Engineer
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  I create modern, accessible web applications that combine usability, performance, and visual appeal. 
                  My focus is on delivering seamless digital experiences that work for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="gap-2">
                <a
                  href="#contact"
                  className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-950 text-slate-400 border border-slate-400 border-b-4 rounded-md group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-slate-600 rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Get in Touch
                  </span>
                  <Mail className="ml-2 h-4 w-4" />
                  <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                </a>
              </Button>

              <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg bg-transparent hover:bg-blue-300 hover:text-blue-700 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Resume <Download className="h-4 w-4" />

                {/* Tooltip */}
                <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
                  <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center text-sm text-slate-300">
                    <div className="rounded-sm bg-transparent py-1 px-2">
                      <p className="whitespace-nowrap text-black">Download my resume</p>
                    </div>
                    <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black" />
                  </div>
                </div>
              </a>
            </Button>

                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://github.com/arzeynillas18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/arzey-nepomuceno-038322250/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="mailto:arzeynepomuceno@gmail.com" 
                    aria-label="Email"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://x.com/ArzeyNepomuceno" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://web.facebook.com/arzeynilllas2025?_rd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-96 h-96 md:w-[500px] md:h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <img 
              src="../../pic.gif" 
              alt="ARZ Dev" 
              className="w-80 h-80 md:w-[350px] md:h-[470px] rounded-full object-cover border-4 border-background"
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
                My name is Arzey Nepomuceno. I am an aspiring professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude.
                 I love to learn and explore new technologies and am passionate about problem-solving. 
                </p>
                <p className="text-lg">
                I love almost all the stacks of web application development and love to make the web more open to the world. 
                </p>
                <p className="text-lg">
                My core skill is based on JavaScript, and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="gap-2">
              <a
                href="#experience"
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-950 text-slate-400 border border-slate-400 border-b-4 rounded-md group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-slate-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  My Experience
                </span>
                <Briefcase className="ml-2 h-4 w-4" />
                <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
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
                  <p className="text-4xl font-bold text-primary mb-2">2+</p>
                  <p className="text-lg font-medium">Years of Experience</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <p className="text-4xl font-bold text-primary mb-2">16+</p>
                  <p className="text-lg font-medium">Projects Delivered</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <p className="text-4xl font-bold text-primary mb-2">13+</p>
                  <p className="text-lg font-medium">Satisfied Clients</p>
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
              <h2 className="text-3xl font-bold tracking-tight">My Skills & ToolKit</h2>
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
            
            {projects.length > 6 && (
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
                        <a href="mailto:arzeynepomuceno@gmail.com" className="text-muted-foreground hover:text-primary">
                          arzeynepomuceno@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/arzey-nepomuceno-038322250/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          linkedin.com/in/arzey-nepomuceno
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Github className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <a 
                          href="https://github.com/arzeynillas18" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          github.com/arzeynillas18
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Twitter className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Twitter</p>
                        <a 
                          href="https://x.com/ArzeyNepomuceno" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          x.com/ArzeyNepomuceno
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
                      <div className="w-3 h-3 bg-secondary rounded-full absolute top-0 left-0 animate-ping opacity-95"></div>
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

// Import Badge from shadcn components
import { Badge } from '@/components/ui/badge';
