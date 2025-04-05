
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function EducationSection() {
  return (
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
  );
}
