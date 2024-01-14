export type Contact = {
  name: string;
  link: string;
  image: React.ComponentType<{
    className?: string;
  }>;
};

export interface Project {
  projectName: string;
  projectDescription: string;
  technologies: Array<string>;
  imageSrc: string;
  demoLink?: string;
  githubLink: string;
}

// {
//     name: "GitHub",
//     link: "https://github.com/MatySeitour",
//     // color: "#fff",
//     image: FaGithub,
//   },
