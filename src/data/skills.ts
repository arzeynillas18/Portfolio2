export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'design' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },

  // Mobile
  { name: 'React Native', category: 'mobile' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'iOS', category: 'mobile' },
  { name: 'Android', category: 'mobile' },

  // DevOps
  { name: 'Git', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },

  // Design
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX', category: 'design' },
  { name: 'Adobe XD', category: 'design' },

  // Other
  { name: 'Agile', category: 'other' },
  { name: 'Scrum', category: 'other' },
  { name: 'TDD', category: 'other' },
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};
