export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string | string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Software Developer",
    company: "MYT SoftDev Solutions, Inc.",
    location: "Cebu, Philippines",
    period: "April 2026 – June 2026",
    description: [
      "Built and maintained ERP systems for 12+ enterprise clients — supporting 300+ employees each, including a nationwide deployment spanning 27 branches.",
      "Developed full-stack features serving 3,500+ end users across ERP, POS, Inventory, and HR platforms — owning frontend and backend end-to-end.",
      "Built reusable, scalable UI components in React and TypeScript across modern and legacy enterprise applications.",
      "Designed and implemented RESTful APIs and server-side business logic integrating third-party and internal services across multi-module systems.",
      "Administered backend systems, databases, and server infrastructure ensuring enterprise-level stability, security, and performance.",
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
    title: "Software Developer Intern",
    company: "MYT SoftDev Solutions, Inc.",
    location: "Cebu, Philippines",
    period: "February 2026 – March 2026",
    description: [
      "Contributed to enterprise ERP, POS, Inventory, and HR systems across the full stack.",
      "Built reusable frontend components using React, TypeScript, and various UI libraries.",
      "Maintained backend systems, RESTful APIs, database administration, and server infrastructure.",
      "Built interactive dashboards, reports, data tables, and operational forms for enterprise workflows.",
      "Wrote clean, maintainable code aligned with project architecture and organizational coding standards.",
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
    company: "Remote — Various Clients",
    location: "Remote",
    period: "January 2023 – Present",
    description: [
      "Delivered frontend work for an international startup — developed UI themes and contributed to their e-commerce web application as a remote frontend developer.",
      "Designed and built modern, performant websites for small businesses, portfolio owners, and digital professionals.",
      "Built responsive, accessible UIs using React, Next.js, TypeScript, Tailwind CSS, Material UI, Shadcn UI, and Radix UI.",
      "Developed component-based UI architectures with a focus on accessibility, clean design, and mobile-first performance.",
    ],
    technologies: ["React", "Vite", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS", "Material UI", "Radix UI", "Shadcn UI"],
  },
  {
    title: "Freelance Full-Stack Web Developer",
    company: "Remote — Various Clients",
    location: "Remote",
    period: "March 2022 – Present",
    description: [
      "Delivered 13+ full-stack systems for university clients including student portals, capstone platforms, and institutional management systems (client names withheld per NDA).",
      "Built tailored, production-grade versions of applications customized to meet each institution's specific requirements.",
      "Developed scalable solutions using Next.js, JavaScript, Node.js, Express.js, and PHP.",
      "Integrated MongoDB, PostgreSQL, MySQL, and Firebase to handle dynamic data and real-time functionality.",
      "Managed multiple concurrent projects with timely delivery, clear documentation, and client-focused communication.",
    ],
    technologies: ["Next.js", "Vite", "JavaScript", "SCSS", "Firebase", "MongoDB", "Node.js", "Express.js", "Python", "PostgreSQL", "MySQL", "Java", "PHP"],
  },
  {
    title: "Faculty Associate — Facilities & Administrative Services",
    company: "Southwestern University PHINMA",
    location: "Cebu City, Philippines",
    period: "May 2023 – December 2023",
    description: [
      "Managed procurement workflows, property management, and inventory tracking in compliance with university regulations.",
      "Oversaw administrative processes including records management, supply encoding, and inter-department coordination.",
      "Demonstrated strong organizational and data management skills by handling multiple administrative workflows simultaneously.",
    ],
    technologies: [],
  },
];