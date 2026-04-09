
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
    title: "Software Developer Intern",
    company: "Myt Soft Dev Solutions",
    location: "Philippines",
    period: "2026 – Present",
    description: [
      "Contributed to and collaborated on major enterprise systems and personal software projects, including ERP, POS, Inventory, HR, and internal management platforms, working across the full stack on both frontend and backend layers.",
      "Developed and delivered frontend features across modern and legacy applications using React, TypeScript, and various UI libraries and frameworks, building dynamic, reusable, and scalable UI components.",
      "Managed and maintained backend systems, APIs, database management, and server administration at myt, ensuring stability and performance across enterprise-level environments.",
      "Designed and implemented server-side logic and APIs, managing data flow across complex, multi-module business systems and integrating third-party and internal services.",
      "Created interactive dashboards, reports, data tables, and operational forms for complex enterprise workflows.",
      "Implemented PDF generation, printing, and data export functionalities (Excel/CSV).",
      "Optimized system responsiveness and performance, and resolved UI/UX issues across multiple platforms.",
      "Collaborated closely with Project Managers, developers, and cross-functional teams to deliver features and system improvements.",
      "Wrote and maintained clean, scalable code aligned with project architecture and organizational coding standards."
    ],
    technologies: [
      "React",
      "TypeScript",
      "PHP",
      "CodeIgniter",
      "Material UI",
      "Ant Design",
      "Bootstrap",
      "Styled Components",
      "Sass",
      "Axios",
      "Formik",
      "Yup",
      "Chart.js",
      "React Data Table",
      "jsPDF",
      "html2pdf",
      "xlsx"
    ]
  },
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
    title: "Freelance Web App Developer",
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
  {
    title: "Facility, Faculty Associate ",
    company: "Southwestern University Cebu",
    location: "Cebu City, Philippines",
    period: "May 2023 - December 2023 ",
    description: [
      "Formulated policies, plans, and programs related to procurement, property management, and  maintenance.",
      "Managed inventory and encoded supplies, ensuring compliance with university regulations and  standards. ",
      "Oversaw general administrative services, including handling queries and ensuring effective implementation of departmental processes.",
      "Demonstrated strong organizational and time-management skills by managing multiple tasks simultaneously. ",
    ],
    technologies: [],
  },
  
];

