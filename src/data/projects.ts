
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
    longDescription: "This AquaStore e-commerce platform provides a complete solution for selling fish and aquatic products online, featuring efficient product management, a smooth shopping cart experience, secure checkout, and integration with trusted payment gateways",
    features: [
      "Product catalog with categories and filtering",
      "User authentication and profile management",
      "Shopping cart and wishlist functionality",
      "Secure checkout with Stripe integration",
      "Admin dashboard for inventory management"
    ],
    tags: ["E-Commerce", "React", "Node.js", "MongoDB"],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS", "React Query","Fmer Motion"],
      backend: ["Node.js", "Express", "MongoDB", "JWT Authentication"],
      deployment: ["Vercel", "Github"],
  
    },
    image: "../../projects/ecom1.png",
    gallery: [
      "../../projects/ecom1.png", 
      "../../projects/ecom2.png",
      "../../projects/ecom3.png",
      "../../projects/ecom5.png",
      "../../projects/ecom7.png",
      "../../projects/ecom8.png",
      "../../projects/ecom9.png",
      "../../projects/ecom10.png",
      "../../projects/ecom11.png",

    ],
    github: "https://github.com/arzeynillas18",
    demo: ""
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
    id: "barangay-WebApp",
    title: "BARANGAY System Portal",
    description: "A comprehensive web application designed to streamline the management of barangay operations, enhancing efficiency and community engagement.",
    longDescription: "The Barangay System Portal is a web application designed to enhance the management and operations of local barangays. It provides a user-friendly interface for barangay officials and residents to access essential services, information, and resources. The portal includes features such as community announcements, event calendars, resident registration, and service requests. By digitizing these processes, the portal aims to improve communication, transparency, and efficiency within the barangay, fostering a more engaged and informed community.",
    features: [
      "User-Friendly Interface — Intuitive design for easy navigation.",
      "Community Announcements — Keep residents informed with updates and news.",
      "Event Calendar — Schedule and manage community events.",
      "Resident Registration — Streamlined process for new residents to register.",
      "Service Requests — Allow residents to submit requests for services online.",
      "Data Analytics Dashboard — Visualize community data for better decision-making."
    ],
    tags: ["Community Engagement", "Web System", "Local Governance", "User-Friendly", "PHP"],
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap5", "JQuery"],
      backend: ["PHP", "MySQL"],
      deployment: ["XAMPP", "WAMP"],
      other: ["Chart Js",]
    },

    image: "../../projects/brgy.png",
    gallery: [
      "../../projects/brgy.png",
      
    ],
    github: "https://github.com/arzeynillas18",
    demo: ""
  },
{
    id: "weather-app",
    title: "My Weather Grid ",
    description: "A responsive web app that delivers detailed weather forecasts and environmental data for cities globally, presented in a structured grid layout.",
    longDescription: "My Weather Grid is a feature-rich weather application that allows users to access a wide range of meteorological data for any city. By entering a city name, users can view current weather conditions, forecasts, and various environmental metrics. The application is designed with a clean, responsive interface, ensuring optimal usability across different devices. It leverages modern web technologies to fetch and display real-time data, providing users with accurate and up-to-date weather information.",
    features: [
      "City-Based Weather Search",
      "Comprehensive Weather Data",
      "Responsive Grid Layout",
      "File attachments and comments",
      "Project analytics and reporting",
      "Real-Time Data Updates"
    ],
    tags: ["Environmental Metrics", "Real-Time Data", "Weather API", "Responsive Design"],
    technologies: {
      frontend: ["Next Js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "JavaScript", "Radix UI",],
      backend: ["Node.js", "Open-Weather Api",],
      deployment: ["Vercel",  "GitHub "]
    },
    image: "../../projects/wt1.png",
    gallery: [
      "../../projects/wt1.png",
      "../../projects/wt2.png",
      
    ],
    github: "https://github.com/arzeynillas18",
    demo: "https://my-weather-grid.vercel.app/"
  },
  {
    id: "property-management system",
    title: "Property Ease Management System",
    description: "Property-Ease is a PHP-based apartment management dashboard that allows landlords to track tenants, rooms, payments, and income efficiently.",
    longDescription: "Property-Ease is a full-featured apartment and tenant management system developed using PHP. It streamlines administrative tasks for property owners by offering real-time insights into apartments, room occupancy, tenant records, and financials. With an intuitive dashboard, users can monitor income, apartment status, and tenant information, helping ensure better property oversight and decision-making. Ideal for small-scale landlords or property managers seeking a simplified and effective solution.",
    features: [
      " Dashboard overview for quick stats (apartments, tenants, rooms, income)",
      "Apartment and room management",
      " Tenant information tracking.",
      "Payment monitoring (expected vs. active income)",
      " User login and session management",
      
    ],
    tags: ["Tenant Tracker", "Property/Room Management", "CRUD", "User-Friendly", "PHP"],
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap5",],
      backend: ["PHP", "MySQL"],
      deployment: ["XAMPP"],
    },

    image: "../../projects/pe1.png",
    gallery: [
      "../../projects/pe1.png",
      "../../projects/pe2.png",
      "../../projects/pe3.png",
      "../../projects/pe4.png",
      "../../projects/pe5.png",
      "../../projects/pe6.png",
      "../../projects/pe7.png",


      
    ],
    github: "https://github.com/arzeynillas18",
    demo: ""
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
