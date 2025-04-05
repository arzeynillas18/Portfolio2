
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';

export function ExperienceSection() {
  return (
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
  );
}
