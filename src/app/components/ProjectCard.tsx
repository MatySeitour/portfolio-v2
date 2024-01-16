"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ThecnologyProject from "./TechnologyProject";
import { Project } from "../types/types";
import Image from "next/image";
import {
  appear,
  projectAnimationContainer,
} from "../utils/animations/animations";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <motion.div
      initial="offscreen"
      whileHover="onscreen"
      animate="offscreen"
      variants={projectAnimationContainer}
      className="relative  flex h-96 w-full max-w-xl flex-col rounded-b-md "
    >
      <div className="mb-4 flex h-full w-full flex-col gap-4">
        <Image
          alt={projectData.projectName}
          src={`/${projectData.imageSrc}`}
          width={1400}
          height={768}
          className="absolute top-0 -z-10 h-72 w-full rounded-t-md object-cover"
        ></Image>
        <motion.div
          variants={appear}
          className="relative z-10 flex h-full flex-col justify-end gap-4 px-4"
        >
          <div className="z-30 flex items-center gap-2">
            <p className="inline-block bg-gradient-title bg-clip-text text-3xl font-semibold text-transparent">
              {projectData.projectName}{" "}
              <Link href={`${projectData.demoLink}`}>
                <FaExternalLinkAlt className="mr-2 inline-block h-5 w-5 text-gray-500 transition-all hover:text-white"></FaExternalLinkAlt>
              </Link>
              <Link href={`${projectData.githubLink}`} target="_about">
                <FaGithub className="inline-block h-5 w-5 text-gray-500 transition-all hover:text-white"></FaGithub>
              </Link>
            </p>
          </div>

          <p className="text-sm text-gray-100">
            {projectData.projectDescription}
          </p>
          <ul className="relative z-10 flex h-auto w-full flex-wrap items-center justify-start gap-2">
            {projectData.technologies.map((technology) => (
              <ThecnologyProject key={technology} technologyName={technology} />
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="effect-radiant radiant-projects z-0 !rounded-md !pl-[1.3px] !pr-[1px] !pt-[1.3px]"></div>
    </motion.div>
  );
}
