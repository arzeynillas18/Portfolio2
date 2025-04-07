
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
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "An application that uses AI to generate unique images based on text descriptions.",
    longDescription: "This innovative application harnesses the power of artificial intelligence to create unique, high-quality images from text descriptions. Users can describe what they want to see, and the AI will generate corresponding visuals, perfect for creative projects, marketing materials, or artistic inspiration.",
    features: [
      "Text-to-image generation using advanced AI models",
      "Customizable image parameters (style, size, color palette)",
      "Gallery of generated images with sharing options",
      "User accounts to save favorite generations",
      "Batch processing for multiple images",
      "Commercial usage licensing options"
    ],
    tags: ["AI", "Next.js", "OpenAI", "AWS"],
    technologies: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      backend: ["Python", "Flask", "AWS Lambda", "MongoDB"],
      deployment: ["AWS", "S3", "CloudFront"],
      other: ["OpenAI API", "Stable Diffusion"]
    },
    image: "https://images.unsplash.com/photo-1669644843070-b4e34477a9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1669644843070-b4e34477a9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1684391283098-1cd9ebef70f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness goals.",
    longDescription: "This comprehensive fitness tracking application helps users monitor their exercise routines, nutrition intake, and progress toward health goals. With intuitive interfaces and data visualization, users can easily track their fitness journey and make informed decisions about their health.",
    features: [
      "Workout logger with custom exercise creation",
      "Nutrition tracking with calorie and macro calculations",
      "Goal setting and progress visualization",
      "Integration with wearable fitness devices",
      "Community features for motivation and accountability",
      "Personalized workout recommendations"
    ],
    tags: ["Health", "React Native", "Firebase", "GraphQL"],
    technologies: {
      frontend: ["React Native", "Expo", "Redux", "Victory Charts"],
      backend: ["Firebase", "Cloud Functions", "GraphQL"],
      deployment: ["App Store", "Google Play", "Firebase Hosting"]
    },
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ],
    github: "https://github.com",
    demo: "https://example.com"
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
