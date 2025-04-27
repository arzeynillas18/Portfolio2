
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    deployment?: string[];
    other?: string[];
  };
  image: string;
  gallery?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription: "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. The platform includes robust product management, shopping cart functionality, secure checkout, and integration with popular payment gateways.",
    features: [
      "Product catalog with categories and filtering",
      "User authentication and profile management",
      "Shopping cart and wishlist functionality",
      "Secure checkout with Stripe integration",
      "Order history and tracking",
      "Admin dashboard for inventory management"
    ],
    tags: ["E-Commerce", "React", "Node.js", "MongoDB"],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS", "React Query"],
      backend: ["Node.js", "Express", "MongoDB", "JWT Authentication"],
      deployment: ["AWS", "Docker", "CI/CD Pipeline"],
      other: ["Stripe API", "Cloudinary"]
    },
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    longDescription: "This task management application helps teams collaborate efficiently by providing a centralized platform for tracking projects and tasks. With real-time updates, team members can stay informed about progress and changes as they happen.",
    features: [
      "Kanban board for visual task management",
      "Real-time collaboration with WebSockets",
      "Task assignments, due dates, and priorities",
      "File attachments and comments",
      "Project analytics and reporting",
      "Email notifications for important updates"
    ],
    tags: ["Productivity", "React", "WebSockets", "PostgreSQL"],
    technologies: {
      frontend: ["React", "TypeScript", "Chakra UI", "React DnD"],
      backend: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
      deployment: ["Vercel", "Heroku", "GitHub Actions"]
    },
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80"
    ],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "tatto site",
    title: "Eternal Canvas A TOUCH OF INK",
    description: "Eternal Canvas is a tattoo shop web app for booking appointments, exploring designs, and connecting with skilled tattoo artists.",
    longDescription: "Eternal Canvas is a modern tattoo shop web app that makes it easy for clients to discover tattoo designs, view artist portfolios, and book appointments online. Built for convenience and creativity, it helps users find the perfect artist, schedule sessions, and get inspired — all in one sleek platform. Eternal Canvas enhances the traditional tattoo shop experience by making it faster, easier, and more connected for both clients and artists.",
    features: [
      "Online Appointment Booking — Quickly schedule sessions with tattoo artists.",
      "Artist Portfolios — View artist profiles with sample works and specialties.",
      "Tattoo Design Gallery — Browse a curated collection of tattoo ideas and inspirations.",
      "Contact and Consultation Forms — Easy client-artist communication setup.",
      
    ],
    tags: ["Tattoo Shop", "Vite", "Shop Portfolio", "Web Design"],
    technologies: {
      frontend: ["TypeScript", "TailwindCSS", "Framer Motion", "Vite","ShadCn UI" ],
      backend: ["Node.js", "Express", "Firebase",],
      deployment: ["Vercel"],
      other: ["Gthub", "Figma"]
    },
    image: "../../projects/et1.png",
    gallery: [
      "../../projects/et1.png",
      "../../projects/et2.png",
      "../../projects/et3.png",
      "../../projects/et4.png",
      "../../projects/et5.png",
      "../../projects/et6.png",
      "../../projects/et7.png", 
      "../../projects/et8.png",
    ],
    github: "https://github.com/arzeynillas18",
    demo: "https://eternal-canvas.vercel.app/"
  },
  {
    id: "digital marketing site",
    title: "Apex Studio ",
    description: "APEX Studio is a digital marketing agency helping businesses grow through data-driven strategies, stunning websites, and engaging content.",
    longDescription: "APEX Studio is a results-driven digital marketing agency specializing in brand strategy, web development, digital marketing, content creation, UI/UX design, and social media management. Since 2020, they’ve empowered small businesses to achieve enterprise-level success by delivering transparent, innovative, and measurable solutions. Their expert team combines creativity and technology to transform brands, increase visibility, and drive real growth through strategic campaigns and user-centered design.",
    features: [
      "Responsive Design — Fully optimized for mobile, tablet, and desktop devices.",
      "Next.js Framework — Built with server-side rendering for faster loading and SEO benefits.",
      "SEO Optimized — Structured with best practices in meta tags, accessibility, and page performance.",
      "Modern UI/UX — Clean, minimalistic, and user-friendly design.",
      "Reusable Components — Modular code structure for easy maintenance and scaling.",
      "API Integration Ready — Setup for quick connection to external services or CMS platforms."
    ],
    tags: ["Marketing", "Digital", "Content", "Comprehensive Services"],
    technologies: {
      frontend: ["React", "TypeScript", "ShadCn UI", "Next.js", "Tailwind CSS", "Radix UI ", "Framer Motion" ],
      backend: ["Node.js", "Express"],
      deployment: ["Vercel", "Firebase Hosting"],
    },
    image: "../../projects/apex1.png",
    gallery: [
      "../../projects/apex1.png",
      "../../projects/apex2.png",
      "../../projects/apex3.png",
      "../../projects/apex4.png",
      "../../projects/apex5.png",
      "../../projects/apex6.png",
      "../../projects/apex7.png",
      "../../projects/apex8.png",
      "../../projects/apex9.png",
      "../../projects/apex0.png",
    ],
    github: "https://github.com/arzeynillas18",
    demo: "https://apex-web-five.vercel.app/"
  },

  {
    id: "trucking-rental-services",
    title: "Trucking Rental Services Web App",
    description: " JDTS is a reliable trucking services provider offering efficient, timely, and secure transportation solutions for businesses and individuals.",
    longDescription: "JDTS is a professional trucking services company committed to delivering goods safely and on time. Whether for businesses needing regular cargo transport or individuals moving large items, JDTS ensures each delivery is handled with care and precision. Their team of skilled drivers and well-maintained trucks guarantees dependable service across various routes. With a focus on customer satisfaction and logistics efficiency, JDTS continues to be a trusted partner in the transportation industry.",
    features: [
      "Timely Deliveries – Ensures all shipments arrive on schedule through efficient route planning and coordination.",
      "Safe & Secure Transport – Goods are handled with care and transported securely using well-maintained trucks.",
      "Professional Drivers – Experienced and licensed drivers committed to providing top-notch service.",
      "Flexible Services – Offers transportation solutions tailored to different cargo sizes and customer needs.",
   
    ],
    tags: ["Service", "PostCSS", "Firebase", "CSS", "React", "Javascript"],
    technologies: {
      frontend: ["React", "Tailwind.Css", "Html", "Css", "Vite"],
      backend: ["Firebase", "Json", "Javascript"],
      deployment: ["Vercel"]
    },
    image: "../../projects/jdts1.png",
    gallery: [
      "../../projects/jdts1.png",
      "../../projects/jdts2.png",
      "../../projects/jdts3.png",
      "../../projects/jdts4.png",
      "../../projects/jdts5.png",
      "../../projects/jdts6.png",
    ],
    github: "https://github.com/arzeynillas18/JDTS-Trucking-Web-Application.git",
    demo: "https://jdts-trucking-web-application-r.vercel.app/"
  },

  {
    id: "resort-website",
    title: "Resort Website",
    description: " JDTS is a reliable trucking services provider offering efficient, timely, and secure transportation solutions for businesses and individuals.",
    longDescription: "JDTS is a professional trucking services company committed to delivering goods safely and on time. Whether for businesses needing regular cargo transport or individuals moving large items, JDTS ensures each delivery is handled with care and precision. Their team of skilled drivers and well-maintained trucks guarantees dependable service across various routes. With a focus on customer satisfaction and logistics efficiency, JDTS continues to be a trusted partner in the transportation industry.",
    features: [
      "Timely Deliveries – Ensures all shipments arrive on schedule through efficient route planning and coordination.",
      "Safe & Secure Transport – Goods are handled with care and transported securely using well-maintained trucks.",
      "Professional Drivers – Experienced and licensed drivers committed to providing top-notch service.",
      "Flexible Services – Offers transportation solutions tailored to different cargo sizes and customer needs.",
   
    ],
    tags: ["HTML", "CSS", "Tailwind Css","Javascript"],
    technologies: {
      frontend: ["HTML", "CSS", "Tailwind Css","Javascript"],
      backend: [ ],
      deployment: ["Vercel"]
    },
    image: "../../projects/mvr.png",
    gallery: [

      "../../projects/mvr.png",
      "../../projects/mvr2.png",
      "../../projects/mvr3.png",
      "../../projects/mvr4.png",
      "../../projects/mvr5.png",
      "../../projects/mvr6.png",
      
    ],
    github: "https://github.com/arzeynillas18/Majestique-View-Resort-Website.git",
    demo: "https://majestique-view-resort.vercel.app/"
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
