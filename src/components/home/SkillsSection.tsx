
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SkillBadge } from '@/components/SkillBadge';
import { skills, getSkillsByCategory } from '@/data/skills';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : getSkillsByCategory(activeCategory as any);
    
  return (
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
  );
}
