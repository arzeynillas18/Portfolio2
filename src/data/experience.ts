
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
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "January 2022 - Present",
    description: "Led the frontend development of a SaaS platform that increased user engagement by 45%. Implemented performance optimizations resulting in a 30% improvement in load times. Mentored junior developers and established frontend best practices.",
    technologies: ["React", "TypeScript", "GraphQL", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Remote",
    period: "March 2020 - December 2021",
    description: "Developed responsive web applications with modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect interfaces. Participated in code reviews and contributed to the company's component library.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "REST APIs", "Jest"]
  },
  {
    title: "Full Stack Developer",
    company: "WebCraft Agency",
    location: "Boston, MA",
    period: "June 2018 - February 2020",
    description: "Built full-stack applications for various clients across industries. Designed and implemented database schemas. Created RESTful APIs and integrated third-party services. Deployed and maintained applications on cloud platforms.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "AWS"]
  },
  {
    title: "Junior Web Developer",
    company: "Creative Studios",
    location: "New York, NY",
    period: "August 2016 - May 2018",
    description: "Developed and maintained client websites. Collaborated with the design team to implement responsive layouts. Optimized website performance and ensured cross-browser compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
  }
];
