
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
    demo?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/projects/${project.id}`}>
            View Details
          </Link>
        </Button>
        <div className="flex space-x-2">
          {project.github && (
            <Button size="icon" variant="ghost" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="icon" variant="ghost" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
