
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
 /* {
  id: "",
  title: "",
  description: "",
  longDescription: "",
  features: [],
  tags: [],
  technologies: {
    frontend: [],
    backend: [],
    deployment: []
  },
  image: "",
  gallery: [],
  github: "",
  demo: ""
}
*/
{
  id: "student-portal-management-system",
  title: "Academia Access Student Portal",
  description: "Academia Access offers role-based access for admins, students, and teachers, streamlined course enrollment, and gradetracking, real-time notifications, and secure authentication built with Laravel and Vite.",
  longDescription: " Academia Access is a comprehensive student portal management system designed to enhance the educational experience for students, teachers, and administrators. The platform features role-based access control, allowing different user types to access specific functionalities tailored to their needs. Students can enroll in courses, track their grades, and receive real-time notifications about important updates. Teachers can manage course content and communicate with students effectively. The system is built using Laravel for the backend and Vite for the frontend, ensuring a modern and responsive user experience.",
  features: [],
  tags: ["Role-Based Access" ,"Laravel","Web Application", "Student Portal" ],
  technologies: {
    frontend: ["Tailwind Css", "Javascript", "React", "Vite" , "JQuery", "HTML", "CSS",],
    backend: ["PHP", "Laravel", "LiveWire", "MySQL" , "Blade"],
    deployment: []
  },
  image: "../../projects/aa1.png",
  gallery: [
    "../../projects/aa1.png",
    "../../projects/aa2.png",
    "../../projects/aa3.png",
    "../../projects/aa4.png",
    "../../projects/aa5.png",
    "../../projects/aa6.png",
    "../../projects/aa7.png",
    "../../projects/aa8.png",
    "../../projects/aa9.png",
    "../../projects/aa10.png",
    "../../projects/aa11.png",
    "../../projects/aa12.png",
    "../../projects/aa13.png",
    "../../projects/aa14.png",
    "../../projects/aa15.png",
    "../../projects/aa16.png",
    "../../projects/aa17.png",
    "../../projects/aa18.png",
    "../../projects/aa19.png",
    "../../projects/aa20.png",

  ],
  github: "",
  demo: ""
},
{
    id: "rental-management-system",
    title: "Lease Track Monitoring System",
    description: "Lease Track is a rental monitoring system designed to help landlords manage house rentals more efficiently. It streamlines rental management by optimizing tenant data, simplifying payment processes, and leveraging modern web technologies to ensure smooth processing and secure storage of tenant, payment, and property information.",
    longDescription: "Lease Track is a rental monitoring system designed to help landlords manage house rentals more efficiently. It streamlines rental management by optimizing tenant data, simplifying payment processes, and leveraging modern web technologies to ensure smooth processing and secure storage of tenant, payment, and property information. The system features a user-friendly interface for landlords to track tenants, payments, and properties, making it easier to manage multiple rentals and maintain accurate records.",
    features: [
      "Real-time chat box (Admin ↔ Tenant)",
      "Tenant management (CRUD operations)",
      "Payment tracking (CRUD operations)",
      "Property management (CRUD operations)",
      "User authentication (Admin and Tenant)",
      "Responsive design for mobile and desktop",
      "Data visualization with charts",
      "File attachments and comments",
      "Project analytics and reporting",
      "User-friendly interface",
      "Secure data storage",
      "Multiple payment methods (e.g., card, bank transfer)",
      "Search and filter functionality",
      "User roles and permissions",
      "Notifications and alerts",
      "Upload/store rental contracts",
      "User-friendly dashboard",
      "Late payment and delinquency list, Automated penalty calculation, Filter by date, unit, or tenant",
      "Tenant history and payment history",

    ],
    tags: ["Monitoring Sytem ", "Php", "Mysql", "Bootstrap", "Javascript"],
    technologies: {
      frontend: ["HTML", "CSS", "Bootstrap 5", "React Query","jQuery", "JavaScript", "AJAX"],
      backend: ["Php", "Mysql", "Mailer", "Chart.js","FPDF + FPDI"],
      deployment: ["XAMPP", "WAMP"],
      
  
    },
    image: "../../projects/rm1.png",
    gallery: [
      "../../projects/rm1.png",
      "../../projects/rm2.png",
      "../../projects/rm3.png",
      "../../projects/rm4.png",
      "../../projects/rm5.png",
      "../../projects/rm6.png",
      "../../projects/rm7.png",
      "../../projects/rm8.png",
      "../../projects/rm9.png",
      "../../projects/rm10.png",
      "../../projects/rm11.png",
      "../../projects/rm12.png",
      "../../projects/rm13.png",
      "../../projects/rm14.png",
      "../../projects/rm15.png",
      "../../projects/rm16.png",
      "../../projects/rm17.png",
      "../../projects/rm19.png",
      "../../projects/rm20.png",
      "../../projects/rm21.png",
      "../../projects/rm22.png",
      "../../projects/rm23.png",
      

    ],
    github: "https://github.com/arzeynillas18",
    demo: ""
  },
  
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
    tags: ["Environmental Metrics", "Real-Time Data","Bento-Box Design","Personal Project"],
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
  id: "info-management-system",
  title: "DigiBayan Information Management System",
  description: "A modern Barangay Information Management System designed to streamline barangay services such as permit processing, resident records, and essential data management. The system offers a user-friendly dashboard, analytics, and intuitive interfaces for efficient digital governance.",
  longDescription: "The Barangay Information Management System (BIMS) is a comprehensive web-based platform designed to digitize and enhance the operations of a barangay. It centralizes all essential barangay services—such as permit applications, resident data management, and record-keeping—into one seamless and accessible system. The system empowers barangay officials and staff with a dashboard that displays real-time insights, a list view for organized records, and analytics tools for data-driven decision-making. BIMS aims to reduce manual paperwork, minimize errors, and ensure faster processing of permits, certifications, and other barangay services. It also provides a modern and user-friendly interface that makes navigating the system simple for both staff and residents. By digitizing the barangay's core functions, the system supports improved transparency, efficiency, and service delivery for the community.",
  features: [
    "Digital Permit & Certification Requests – Apply for barangay permits and certificates online, reducing the need for in-person visits.",
    "Responsive and User-Friendly Design – Accessible across devices with an easy-to-navigate interface that ensures a seamless user experience.",
    "Dashboard & Analytics – Get real-time summaries of data, trends, and insights through an interactive and user-friendly dashboard.",
    " Resident Records Management – Maintain and manage a secure and organized database of residents, households, and community information.",
  ],
  tags: ["InformationManagement", "Php", "WebApp", "BarangayServices" ],
  technologies: {
    frontend: [ "Javascript","Bootsrap5", "Html", "CSS", "Jquery", "AJAX"],
    backend: [ "Php","Mysql","jsPDF","XLSXjs"],
    deployment: [ "XAMPP"]
  },
  image: "../../projects/db1.png",
  gallery: [
    "../../projects/db1.png",
    "../../projects/db2.png",
    "../../projects/db3.png",
    "../../projects/db4.png",
    "../../projects/db5.png",
    "../../projects/db6.png",
    "../../projects/db7.png",
    "../../projects/db8.png",
    "../../projects/db9.png",
    "../../projects/db10.png",
    "../../projects/db11.png",
    "../../projects/db12.png",
    
  ],
  github: "https://github.com/arzeynillas18",
  demo: ""
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
