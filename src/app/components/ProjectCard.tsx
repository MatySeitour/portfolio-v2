"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThecnologyProject from "./TechnologyProject";
import { Project } from "../types/types";
import Image from "next/image";
import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";
import IluminationEffect from "./IluminationEffect";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <motion.li
      variants={containerObserverAnimation}
      viewport={{ once: true, amount: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      className="flex h-[30rem] w-full justify-center"
    >
      <motion.div
        variants={appear}
        className="relative z-30 flex h-full w-full max-w-xl flex-col rounded-md bg-black backdrop-blur-md"
      >
        <div className="flex h-full w-full flex-col overflow-hidden">
          <Image
            alt={projectData.projectName}
            src={`/${projectData.imageSrc}`}
            width={1400}
            height={768}
            className="relative h-full w-full rounded-t-md object-cover"
          ></Image>
          <motion.div className="relative flex h-full flex-col justify-between overflow-hidden rounded-b-md bg-[#111a] p-4">
            <div className="relative z-20 flex flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <Link
                  target="_blank"
                  href={projectData.demoLink}
                  className="inline-block bg-gradient-title bg-clip-text text-left text-2xl font-semibold text-transparent sm:hidden"
                >
                  {projectData.projectName}
                </Link>
                <p className="hidden bg-gradient-title bg-clip-text text-left text-2xl font-semibold text-transparent sm:inline-block">
                  {projectData.projectName}
                </p>
                <div className="group relative hidden overflow-hidden rounded-md border border-white/20 sm:inline-block sm:p-2">
                  <Link
                    target="_blank"
                    href={projectData.demoLink}
                    className="inline-block h-full w-full bg-gradient-title bg-clip-text text-center font-bold text-transparent"
                  >
                    View demo
                  </Link>
                  <IluminationEffect className="shadow-effect__7 absolute -left-5 top-0 -z-10 h-full w-2 !bg-gradient-to-r !from-white/10 !to-white/10 transition-all group-hover:animate-iluminateEffect" />
                </div>
              </div>
              <p className="pr-2 text-[0.9rem] text-gray-100">
                {projectData.projectDescription}
              </p>
            </div>

            <div className="flex max-w-xs justify-between md:max-w-full">
              <ul className="relative z-10 flex h-auto w-full max-w-full flex-wrap items-center justify-start gap-2">
                {projectData.technologies.map((technology) => (
                  <ThecnologyProject
                    key={technology}
                    technologyName={technology}
                  />
                ))}
              </ul>
            </div>
            <IluminationEffect className="shadow-effect__30 absolute -left-10 top-14 !-z-0 h-10 w-full -rotate-[27deg] !bg-gradient-to-r !from-white/10 !to-white/10" />
            {/* <IluminationEffect className="absolute -bottom-1/2 left-1/2 !-z-20 h-32 w-32 -translate-x-1/2 !bg-gradient-to-r !from-transparent !to-white" /> */}
          </motion.div>
          <Link
            className="absolute bottom-2 right-4 z-40 text-sm text-white underline"
            href={projectData.githubLink}
          >
            View code
          </Link>
        </div>

        <div className="effect-radiant radiant-projects z-10 !rounded-md !pl-[1.3px] !pr-[1px] !pt-[1.3px]"></div>
        <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[1px] w-full translate-x-1/2"></div>
      </motion.div>
      {/* <div className="shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full bg-gradient-purple-blur opacity-0 transition-all group-hover:opacity-100"></div> */}
    </motion.li>
  );
}
