
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors",
        "bg-primary/10 text-primary hover:bg-primary/20",
        className
      )}
    >
      {icon && (
        <img src={icon} alt={name} className="w-4 h-4 mr-2" />
      )}
      {name}
    </div>
  );
}
