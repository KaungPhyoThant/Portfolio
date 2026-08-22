
import project2 from "../assets/projects/project-2.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/project-12.png";

export const TYPEWRITER_PHRASES = [
  "Full Stack Developer",
  "React Engineer",
  "Product Builder",
];

export const HERO_CONTENT = `I build web apps with React, Next.js, Laravel, and MySQL—clean UI, solid backends, and polished features.`;

export const ABOUT_TEXT = `Full stack developer building efficient, user-friendly web apps with React, Next.js, PHP, Laravel, and MySQL. I like turning complex ideas into clear, reliable products.`;

export const ABOUT_PILLARS = [
  {
    title: "Product-minded",
    description: "I design flows that feel obvious—not just screens that look good.",
  },
  {
    title: "Full-stack depth",
    description: "Comfortable owning UI, APIs, databases, and deployment decisions.",
  },
  {
    title: "Ship with care",
    description: "Move fast, but keep code readable and products stable in production.",
  },
  {
    title: "Team player",
    description: "Clear communication, steady delivery, and honest trade-off calls.",
  },
];

export const ABOUT_APPROACH = [
  {
    step: "01",
    title: "Understand",
    description: "Clarify the problem, users, and constraints before writing code.",
  },
  {
    step: "02",
    title: "Build",
    description: "Ship iteratively with clean UI, solid APIs, and sensible architecture.",
  },
  {
    step: "03",
    title: "Refine",
    description: "Polish UX, tighten performance, and iterate from real feedback.",
  },
];

export const ABOUT_JOURNEY = [
  {
    year: "2024",
    title: "Started building seriously",
    detail: "Moved from learning to shipping real apps and open-source projects.",
  },
  {
    year: "2025",
    title: "Ultimate Solutions",
    detail: "Internship turned full-time—React, Next.js, and Laravel in production.",
  },
  {
    year: "2026",
    title: "App.com.mm",
    detail: "Mid-level role owning features across web, mobile, and cloud tooling.",
  },
];

export const ABOUT_FOCUS = [
  "React & Next.js",
  "Laravel APIs",
  "POS & LMS systems",
  "AWS video pipelines",
  "RBAC admin panels",
  "Product MVPs",
];

export const HERO_STATS = [
  {
    value: "13+",
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
  "Clean React & Next.js UI",
  "Laravel & MySQL backends",
  "Ideas into polished MVPs",
];

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Full-Stack Developer",
    company: "Ultimate Solutions.",
    description: `Junior full-stack developer at Ultimate Solutions, hired full-time after my internship. I ship features across React, Next.js, and Laravel while learning fast on real projects.`,
    technologies: ["React.js", "Next.js", "Php", "Laravel", "MySQL"],
  },
  {
    year: "2026 - Present",
    role: "Mid Level Full-Stack Developer",
    company: "App.com.mm",
    description: `Mid-level full-stack developer at App.com.mm. I own features from design to deployment—React, Laravel, React Native, and cloud tooling on production apps.`,
    technologies: ["React.js", "Laravel", "MySQL", "React Native", "AWS", "Docker"],
  },
];

export const PROJECTS = [
  {
    title: "Movie App",
    image: project2,
    category: "Frontend",
    status: "Interactive UI",
    description:
      "Search movies by title and browse plot, ratings, and cast details.",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
    highlights: ["Search UX", "API detail pages", "Responsive layout"],
    sourceCode: "https://github.com/KaungPhyoThant/MoviePj",
  },
  {
    title: "Clothing POS App",
    image: project4,
    category: "Operations",
    status: "Admin dashboard",
    description:
      "Clothing POS with a Filament-powered admin panel for inventory and sales.",
    technologies: ["HTML", "CSS", "Laravel", "AlpineJS", "FilamentPHP"],
    highlights: ["Inventory", "Sales workflow", "Admin panel"],
  },
  {
    title: "English Daily Academy",
    image: project5,
    category: "Education",
    status: "Live now",
    description:
      "LMS for English learners with courses, library, shop, and level tests. HLS streaming via AWS S3 and Media Converter for smooth video playback.",
    technologies: ["Laravel", "React", "NextJS", "MySQL", "HLS Player", "AWS S3", "AWS Media Converter"],
    highlights: ["HLS video streaming", "AWS S3 + Media Converter", "Course catalog & level test"],
    liveDemo: "https://englishdailyacademy.com/",
  },
  {
    title: "ZandoPOS",
    image: project8,
    category: "Operations",
    status: "Realtime workflow",
    description:
      "Restaurant POS with live kitchen updates, menu/table management, and sales reports.",
    technologies: ["Laravel", "Mui", "NextJs", "Axios", "SWR"],
    highlights: ["Kitchen sync", "Table management", "Sales reports"],
  },
  {
    title: "Satuditha",
    image: project9,
    category: "Impact",
    status: "Live now",
    description:
      "PWA to find and register free food spots during Myanmar's Thingyan festival, with map-based discovery.",
    technologies: ["NextJs (App Router)", "TypeScript", "MapBox", "TailwindCss", "Prisma", "NextAuth", "PWA"],
    highlights: ["Map discovery", "Community spots", "PWA install"],
    liveDemo: "https://satuditha.vercel.app/",
  },
  {
    title: "Aspectra",
    image: project10,
    category: "Platform",
    status: "Live now",
    description:
      "Print studio app—pick a format, upload, auto-crop, checkout, and print after approval.",
    technologies: ["NextJS", "TypeScript", "TailwindCss"],
    highlights: ["Format crops", "Upload flow", "Checkout & approval"],
    liveDemo: "https://aspectra-studio.vercel.app/en",
  },
  {
    title: "Gold Shop POS",
    image: project11,
    category: "Operations",
    status: "Admin dashboard",
    description:
      "Gold and jewelry POS admin with RBAC, gold currency handling, and quality measurement—supports any weight unit worldwide.",
    technologies: ["Laravel API", "NextJS", "TailwindCss", "ShadCN", "Zustand", "React Query"],
    highlights: ["Role based access control", "Gold currency & quality", "Global measurement units"],
  },
  {
    title: "Expenso",
    image: project12,
    category: "Finance",
    status: "Live now",
    description:
      "Expense tracker app that logs spending, sets budgets, and breaks down costs by category with clear visual insights.",
    technologies: ["React", "TypeScript", "TailwindCss", "Recharts"],
    highlights: ["Budget tracking", "AI Powered Receipt Scanner", "Spending insights"],
    liveDemo: "https://expenso-patronum.vercel.app"
  },
];

export const CONTACT = {
  address: "Yangon, Kamayut",
  phoneNo: "+95 977 586 5836",
  email: "terrythedev@gmail.com",
};

export const PROFILE = {
  name: "Kaung Phyo Thant",
  gender: "Male",
  dob: "10-3-2003",
  email: "terrythedev@gmail.com",
  phone: "09775865836",
  location: "Yangon, Kamayut",
  role: "Full Stack Developer",
  status: "Open to work",
  github: "github.com/KaungPhyoThant",
  linkedin: "linkedin.com/in/kaung-phyo-thant-926160338",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/KaungPhyoThant",
  linkedin: "https://www.linkedin.com/in/kaung-phyo-thant-926160338/",
};
