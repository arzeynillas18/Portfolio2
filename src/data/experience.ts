
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
    description: "specializing in modern web technologies like React, TypeScript, JavaScript, Next.js, and Tailwind CSS. I build fast, responsive, and scalable web applications with clean, maintainable code. Whether you need a dynamic single-page app, a performant website, or a seamless user interface, I deliver high-quality solutions tailored to your needs. Lets bring your ideas to life!",
    technologies: ["React", "TypeScript","JavasSCript", , "Next.js", "Tailwind CSS", "HTML 5", "CSS"]
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Various Clients of the Internet",
    location: "Remote",
    period: "March 2024 - Present",
    description: "Developed responsive web applications with modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect interfaces.",
    technologies: ["Next.js", "JavaScript", "SCSS", "Firebase", "MongodB", "Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MySql" , "Java"], 
  },
  
];
