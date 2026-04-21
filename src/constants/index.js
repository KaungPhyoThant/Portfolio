import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I build responsive, scalable web apps with React, Next.js, Laravel, and MySQL. I care about clean product experiences, reliable backend architecture, and turning ideas into polished features that people actually enjoy using.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Laravel and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_STATS = [
  {
    value: "9+",
    label: "Shipped projects",
  },
  {
    value: "2",
    label: "Product teams",
  },
  {
    value: "Full stack",
    label: "From UI to APIs",
  },
];

export const FEATURED_FOCUS = [
  "Designing clean, responsive interfaces with React and Next.js",
  "Building maintainable Laravel and MySQL backends for real products",
  "Turning ideas into polished MVPs with strong product thinking",
];

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Full-Stack Developer",
    company: "Ultimate Solutions.",
    description: `I’m a passionate Junior Full-Stack Developer, currently working at Ultimate Solutions, where I was fortunate enough to be offered a full-time position after completing my internship. My dedication and skills impressed the team, and they saw potential in me to grow and contribute to exciting projects. I’m always eager to learn, experiment, and improve my craft, making sure I bring value to the projects I work on.`,
    technologies: ["React.js", "Next.js", "Php", "Laravel", "MySQL"],
  },
  {
    year: "2026 - Present",
    role: "Mid Level Full-Stack Developer",
    company: "App.com.mm",
    description: `As a Mid-Level Full-Stack Developer at App.com.mm, I am responsible for designing and developing scalable web applications. I take ownership of complex features from conception to deployment, ensuring clean architecture, code quality, and optimal performance. My role involves making technical decisions, collaborating closely with cross-functional teams to deliver robust solutions, and continuously adapting to modern development practices to drive product success.`,
    technologies: ["React.js", "Laravel", "MySQL", "React Native", "AWS", "Docker"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    category: "Commerce",
    status: "Production-ready",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Bootstrap", "JQuery", "Laravel", "MySQL"],
    highlights: ["Product catalog", "Cart flow", "Auth and checkout foundations"],
    sourceCode: "https://github.com/KaungPhyoThant/point_of_sale"
  },
  {
    title: "Movie App",
    image: project2,
    category: "Frontend",
    status: "Interactive UI",
    description:
      "Find any movie with ease! Search by title and get all the details—plot, ratings, cast, and more. Simple, fast, and perfect for discovering your next movie!",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
    highlights: ["Search-first UX", "API-driven detail pages", "Responsive layout"],
    sourceCode: "https://github.com/KaungPhyoThant/MoviePj",
  },
  {
    title: "YC_Directory Website",
    image: project3,
    category: "Platform",
    status: "Content workflow",
    description:
      "The YC Directory app lets users upload text content and track viewer counts. Share your content and easily monitor its reach, all in one place. Simple, efficient, and perfect for managing and measuring your content’s impact.",
    technologies: ["HTML", "CSS", "TailwindCss", "React", "NextJS"],
    highlights: ["Creator submissions", "View analytics", "Directory-style browsing"],
    sourceCode: "https://github.com/KaungPhyoThant/YC_Directory"
  },
  {
    title: "Clothing POS App",
    image: project4,
    category: "Operations",
    status: "Admin dashboard",
    description:
      "A clothing POS project with laravel and php admin panel framework AKA FIlament fully functional Admin Panel.",
    technologies: ["HTML", "CSS", "Laravel", "AlpineJS", "FilamentPHP"],
    highlights: ["Inventory handling", "Operational workflows", "Admin tooling"],
  },
  {
    title: "Job Board",
    image: project5,
    category: "Platform",
    status: "Modern SaaS UI",
    description:
      "A sleek and responsive job board web application built with Next.js, styled using ShadCN UI, and powered by Clerk authentication. This project showcases a modern developer workflow with full support for dark/light mode toggling, clean UI components, and a smooth user experience.",
    technologies: ["NextJS", "TailwindCss", "Prisma", "ShadCN", "ClerkAuth"],
    highlights: ["Authentication flows", "Role-based browsing", "Clean design system"],
  },
  {
    title: "CookCraft",
    image: project6,
    category: "Community",
    status: "Mentored build",
    description:
      "CookCraft is a modern web application built with Next.js that empowers users to share, discover, and manage recipes in a beautifully designed cooking community. As a mentor on this project, I guide the development process, ensuring clean architecture, secure authentication, and efficient database handling.",
    technologies: ["NextJS", "Mui", "Prisma", "NextAuth"],
    highlights: ["Recipe sharing", "Secure auth", "Mentored architecture"],
  },
  {
    title: "InernLink",
    image: project7,
    category: "Platform",
    status: "Multi-role system",
    description:
      "InternLink is a role-based internship management system designed to connect students, teachers, universities, and companies in one centralized platform. The system allows companies to post internships, universities to manage student participation, and students to apply for internship opportunities — all while giving admins full control over the entire ecosystem.",
    technologies: ["NextJS", "Mui", "Prisma", "NextAuth", "TailwindCSS"],
    highlights: ["Role permissions", "Application workflow", "Centralized admin controls"],
  },
  {
    title: "ZandoPOS",
    image: project8,
    category: "Operations",
    status: "Realtime workflow",
    description:
      "A full-stack POS system built with Laravel 12 and Next.js 14, featuring real-time order updates between cashier and kitchen, dynamic menu management, table management, and sales reporting. Designed for small restaurants to streamline order processing, improve workflow, and reduce manual errors.",
    technologies: ["Laravel", "Mui", "NextJs", "Axios", "SWR"],
    highlights: ["Kitchen sync", "Table management", "Sales reporting"],
  },
  {
    title: "Satuditha",
    image: project9,
    category: "Impact",
    status: "Live now",
    description:
      "A modern progressive web app (PWA) built to help festival-goers find nearby 'Satuditha' (free food/drink donation) spots during the Myanmar New Year water festival (Thingyan). Users can also register their own donation locations with interactive maps and real-time details.",
    technologies: ["NextJs (App Router)", "TypeScript", "MapBox", "TailwindCss", "Prisma", "NextAuth", "PWA"],
    highlights: ["Map-based discovery", "Community submissions", "PWA install support"],
    liveDemo: "https://satuditha.vercel.app/",
  },
];

export const CONTACT = {
  address: "Yangon, Kamayut",
  phoneNo: "+95 977 586 5836",
  email: "terrythedev@gmail.com",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/KaungPhyoThant",
  linkedin: "https://www.linkedin.com/in/kaung-phyo-thant-926160338/",
};
