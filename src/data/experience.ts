
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Freelance Frontend Developer",
    company: "Client of the Internet",
    location: "Remote",
    period: "January 2023 - Present",
    description: "Built modern, responsive UIs using React, Next.js, TypeScript, and JavaScript. Styled interfaces with Tailwind CSS, Material UI, Radix UI, Shadcn UI, and standard HTML5/CSS. Focused on clean design, accessibility, and performance.",
    technologies: ["React","Vite", "TypeScript","JavasSCript", , "Next.js", "Tailwind CSS", "HTML 5", "CSS", "Material UI", "Radix UI", "Shadcn Ui"]
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Various Clients of the Internet",
    location: "Remote",
    period: "March 2024 - Present",
    description: "Built responsive, full-stack web applications using Next.js, JavaScript, SCSS, Node.js, Express.js, Python, Django, and PHP. Integrated MongoDB, PostgreSQL, MySQL, and Firebase for dynamic data handling. Delivered scalable, mobile-friendly solutions with clean, maintainable code.",
    technologies: ["Next.js", "Vite", "JavaScript", "SCSS", "Firebase", "MongodB", "Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MySql" , "Java", "Php"], 
  },
  
];
