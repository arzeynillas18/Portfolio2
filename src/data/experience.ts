
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string | string [];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Freelance Frontend Developer",
    company: "Client of the Internet",
    location: "Remote",
    period: "January 2023 - Present",
    description: [
      "Completed commissions for students struggling with programming or development tasks.",
      "Created websites for small businesses, portfolios for students, and digital brand platforms for professionals seeking to showcase their work and services.",
      "Built modern, responsive UIs using React, Next.js, TypeScript, and JavaScript.",
      "Styled interfaces with Tailwind CSS, Material UI, Radix UI, Shadcn UI, and standard HTML5/CSS.",
      
    ],
    technologies: ["React", "Vite", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML 5", "CSS", "Material UI", "Radix UI", "Shadcn UI"],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Various Clients of the Internet",
    location: "Remote",
    period: "March 2024 - Present",
    description: [
      "Built full-stack web applications for businesses, schools, and organizations, including websites, systems, and digital platforms.",
      "Developed modern, scalable solutions using Next.js, JavaScript, Node.js, Express.js,and PHP.",
      "Integrated MongoDB, PostgreSQL, MySQL, and Firebase to handle dynamic data and provide real-time functionality.",
      "Focused on clean, maintainable code, performance optimization, and user-friendly design to meet diverse client needs."
    ],
    technologies: ["Next.js", "Vite", "JavaScript", "SCSS", "Firebase", "MongoDB", "Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MySQL", "Java", "PHP"],
  },
];

