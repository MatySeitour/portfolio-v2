"use client";

import { motion } from "framer-motion";
import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={containerObserverAnimation}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex h-auto w-full flex-col gap-16 pb-20 pt-40"
    >
      <div className="flex w-full justify-center">
        <motion.div variants={appear} className="relative flex gap-2">
          <h3 className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent">
            Some of
          </h3>
          <p className="subtitle-name inline-block pb-1 text-6xl font-semibold">
            {"  "}
            my projects
          </p>
        </motion.div>
      </div>
      <div className="h-auto w-full px-2">
        <ul className="grid h-full w-full grid-cols-2 place-items-center gap-10 pb-8">
          {projects.map((project) => (
            <ProjectCard key={project.projectName} projectData={project} />
          ))}
        </ul>
      </div>
      <div className="flex h-auto w-full items-center justify-center">
        <Link
          className="relative scale-110 rounded-full bg-gradient-button px-4 py-2 text-white"
          href={"/"}
        >
          See more projects
          <div className="effect-radiant radiant-purple z-10 !rounded-full bg-black !pl-[0.8px]"></div>
        </Link>
      </div>
    </motion.section>
  );
}
