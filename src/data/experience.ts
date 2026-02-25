
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
    title: "Web App Developer Intern",
    company: "Myt Soft Dev Solutions",
    location: "Philippines",
    period: "2026 – Present",
    description: [
      "Contributed to multiple active client systems including ERP, POS, Inventory, HR, and internal management tools.",
      "Developed and enhanced frontend features across modern and legacy applications using React and TypeScript.",
      "Built dynamic, reusable, and scalable UI components using various frontend libraries and frameworks.",
      "Integrated APIs and managed data flow across complex business modules.",
      "Created interactive dashboards, reports, tables, and forms for operational workflows.",
      "Implemented PDF generation, printing, and data export functionalities (Excel/CSV).",
      "Fixed UI/UX issues and improved system responsiveness and performance.",
      "Collaborated closely with Project Managers and backend developers to deliver new features and system improvements.",
      "Maintained and developed frontend code in accordance with the company’s required coding standards and development environment."
    ],
    technologies: [
      "React",
      "TypeScript",
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

