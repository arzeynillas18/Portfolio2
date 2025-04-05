
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 4));
  const [showAllProjects, setShowAllProjects] = useState(false);
  
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
  );
}
