import { Project } from "../types/types";

export const projects: Project[] = [
  {
    projectName: "Que me están cobrando",
    projectDescription:
      "Know the prices of the most used digital services in Argentina along with their taxes.",
    technologies: ["nextjs", "typescript", "prisma", "gsap", "react"],
    imageSrc: "que-me-cobran.webp",
    demoLink: "https://que-me-estan-cobrando-v2.vercel.app/",
    githubLink: "https://github.com/MatySeitour/que-me-estan-cobrando",
  },
  {
    projectName: "Que me están cobrando (backend)",
    projectDescription:
      "Que me están cobrando backend that scrapes the services websites and takes their prices.",
    technologies: ["puppeteer", "prisma", "docker", "node"],
    imageSrc: "que-me-cobran.webp",
    demoLink: "https://que-me-estan-cobrando-v2.vercel.app/",
    githubLink: "https://github.com/MatySeitour/que-me-estan-cobrando",
  },
  {
    projectName: "Seilop",
    projectDescription:
      "Website of an Argentine financial company.",
    technologies: ["nextjs", "typescript"],
    imageSrc: "seilop.png",
    demoLink: "https://www.seilop.com.ar/",
  },
  {
    projectName: "Resident evil games",
    projectDescription:
      "Learn about the world of resident evil, the history of each game and character in the franchise.",
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
