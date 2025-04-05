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
  { name: 'Tailwind CSS', category: 'frontend' },
  {name: 'Material UI', category: 'frontend'},
  { name: 'Vite', category: 'frontend' },



  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Firebase', category: 'backend' },

  // Mobile
  { name: 'Android', category: 'mobile' },

  // DevOps
  { name: 'Git', category: 'devops' },
  

  // Design
  { name: 'Canva', category: 'design' },
  { name: 'UI/UX', category: 'design' },

  // Other
  { name: 'Eslint', category: 'other' },
  { name: 'Npm', category: 'other' },
  { name: 'Github', category: 'other' },
  { name: 'Vs Code', category: 'other' },
  
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};
