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
import IluminationEffect from "./IluminationEffect";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <motion.div className="group relative z-10 flex h-[30rem] w-full max-w-xl flex-col rounded-md bg-black backdrop-blur-md">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <Image
          alt={projectData.projectName}
          src={`/${projectData.imageSrc}`}
          width={1400}
          height={768}
          className="relative h-full w-full rounded-t-md object-cover"
        ></Image>
        <motion.div className="relative z-0 flex h-full flex-col justify-center gap-4 overflow-hidden rounded-b-md bg-[#111a] p-4">
          <div className="z-30 flex items-center gap-2">
            <p className="inline-block bg-gradient-title bg-clip-text text-2xl font-semibold text-transparent">
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
          <IluminationEffect className="shadow-effect__30 absolute -left-10 top-14 !-z-0 h-10 w-full -rotate-[27deg] !bg-gradient-to-r !from-white/10 !to-white/10" />
          {/* <IluminationEffect className="absolute -bottom-1/2 left-1/2 !-z-20 h-32 w-32 -translate-x-1/2 !bg-gradient-to-r !from-transparent !to-white" /> */}
        </motion.div>
      </div>

      <div className="effect-radiant radiant-projects z-10 !rounded-md !pl-[1.3px] !pr-[1px] !pt-[1.3px]"></div>
      <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[1px] w-full translate-x-1/2"></div>
      {/* <div className="shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full bg-gradient-purple-blur opacity-0 transition-all group-hover:opacity-100"></div> */}
    </motion.div>
  );
}
