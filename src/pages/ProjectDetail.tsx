
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getProjectById } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project not found, redirect to projects page
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Image */}
        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12">
          <Button 
            variant="outline" 
            asChild 
            className="mb-8"
            size="sm"
          >
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground">
                  {project.longDescription}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2 list-disc pl-5">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
              
              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg shadow-sm hover:shadow-md transition-all"
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-muted-foreground">Technologies</h4>
                    
                    {project.technologies.frontend && (
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Frontend:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.frontend.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.technologies.backend && (
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Backend:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.backend.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.technologies.deployment && (
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Deployment:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.deployment.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.technologies.other && (
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">Other:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.other.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    {project.github && (
                      <Button asChild variant="outline" className="w-full gap-2 justify-start">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    
                    {project.demo && (
                      <Button asChild className="w-full gap-2 justify-start">
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Interested in similar work?</h3>
                <p className="mb-4 text-muted-foreground">
                  If you like this project and need something similar, I'd love to help bring your ideas to life.
                </p>
                <Button asChild className="w-full">
                  <Link to="/#contact">
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
