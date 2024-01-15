import { Project } from "../types/types";

export const projects: Project[] = [
  {
    projectName: "Que me están cobrando",
    projectDescription: "Know the price of digital services in Argentina.",
    technologies: ["nextjs", "typescript", "prisma", "gsap", "react"],
    imageSrc: "que-me-cobran.webp",
    demoLink: "https://que-me-estan-cobrando-v2.vercel.app/",
    githubLink: "https://github.com/MatySeitour/que-me-estan-cobrando",
  },
  {
    projectName: "Que me están cobrando (backend)",
    projectDescription: "Know the price of digital services in Argentina.",
    technologies: ["puppeteer", "prisma", "docker", "node"],
    imageSrc: "que-me-cobran.webp",
    demoLink: "https://que-me-estan-cobrando-v2.vercel.app/",
    githubLink: "https://github.com/MatySeitour/que-me-estan-cobrando",
  },
  {
    projectName: "Resident evil games",
    projectDescription:
      "This is a landing page about some resident evil games.",
    technologies: ["nextjs", "typescript", "gsap", "react"],
    imageSrc: "resident-evil.webp",
    demoLink: "https://resident-evil-games.vercel.app/",
    githubLink: "https://github.com/MatySeitour/resident-evil-games",
  },
  {
    projectName: "Books store",
    projectDescription:
      "Midudev technical test with the aim of testing my skills in managing user interactions, state management, data filtering and code structuring.",
    technologies: ["nextjs", "gsap", "react"],
    imageSrc: "books-store.webp",
    demoLink: "https://01-reading-list-gray.vercel.app/",
    githubLink: "https://github.com/MatySeitour/01-reading-list",
  },
];
