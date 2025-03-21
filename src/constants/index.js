import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With a year of hands-on experience, I have honed my skills in back-end technologies like PHP, Laravel, MySQL as well as front-end technologies like react.js and next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Laravel and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full-Stack Developer",
    company: "Ultimate Solutions.",
    description: `I’m a passionate Junior Web Developer, currently working at Ultimate Solutions, where I was fortunate enough to be offered a full-time position after completing my internship. My dedication and skills impressed the team, and they saw potential in me to grow and contribute to exciting projects. I’m always eager to learn, experiment, and improve my craft, making sure I bring value to the projects I work on.`,
    technologies: ["React.js", "Php" , "Laravel" , "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Bootstrap", "JQuery", "Laravel" , "MySQL"],
  },
  {
    title: "Movie App",
    image: project2,
    description:
      "Find any movie with ease! Search by title and get all the details—plot, ratings, cast, and more. Simple, fast, and perfect for discovering your next movie!",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
  },
  {
    title: "YC_Directory Website",
    image: project3,
    description:
      "The YC Directory app lets users upload text content and track viewer counts. Share your content and easily monitor its reach, all in one place. Simple, efficient, and perfect for managing and measuring your content’s impact.",
    technologies: ["HTML", "CSS", "TailwindCss", "React", "NextJS"],
  },
  {
    title: "Clothing POS App",
    image: project4,
    description:
      "A clothing POS project with laravel and php admin panel framework AKA FIlament fully functional Admin Panel.",
    technologies: ["HTML", "CSS", "Laravel", "AlpineJS", "FilamentPHP"],
  },
];

export const CONTACT = {
  address: "MICT Park , Building 4 , Hlaing Township",
  phoneNo: "+95 977 586 5836",
  email: "doomvicii@gmail.com",
};
