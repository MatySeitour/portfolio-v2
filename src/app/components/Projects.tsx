"use client";

import { motion } from "framer-motion";
import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
import Link from "next/link";
import IluminationEffect from "./IluminationEffect";

export default function Projects() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={containerObserverAnimation}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex h-auto w-full flex-col pt-40 "
    >
      <div className="flex w-full justify-center">
        <motion.div variants={appear} className="relative z-10 flex gap-2">
          <h3 className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent">
            Some of
          </h3>
          <p className="subtitle-name inline-block pb-1 text-6xl font-semibold">
            {"  "}
            my projects
          </p>
        </motion.div>
      </div>
      <div className="relative h-auto w-full px-2 pt-20">
        <ul className="grid h-full w-full grid-cols-2 place-items-center gap-10 pb-8">
          {projects.map((project) => (
            <ProjectCard key={project.projectName} projectData={project} />
          ))}
        </ul>
        <IluminationEffect className="absolute left-0 top-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute right-0 top-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute left-1/2 top-1/2 h-44 w-full -translate-x-1/2 translate-y-1/2" />
        <IluminationEffect className="absolute bottom-0 left-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute bottom-0 right-0 h-44 w-[30rem]" />
        {/* <IluminationEffect className="absolute right-0 top-0 h-96 w-96 rounded-full" /> */}
      </div>
      <div className="relative flex h-auto w-full items-center justify-center pt-9">
        <div className="relative -left-2 top-0 z-20 h-[130px] w-[112px] -translate-y-1/2 rounded-bl-md border-b border-l border-white/5">
          <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
            <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
          </div>
        </div>

        <div className="relative flex h-auto w-auto flex-col">
          <div className="absolute -left-0 -top-full z-20 h-[72px] w-1/2 -translate-y-full rounded-bl-md border-b border-l border-white/5">
            <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
              <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
            </div>
          </div>
          <div className="absolute -right-0 -top-full z-20 h-[72px] w-1/2 -translate-y-full rounded-br-md border-b border-r border-white/5">
            <div className="lines-left bg-gradient-to-b from-transparent to-white/20 !pl-0 !pr-[1px]">
              <div className="radiant-lines__br absolute -left-32 -top-32 h-96 w-96"></div>
            </div>
          </div>
          <div className="absolute -bottom-0 -right-0 z-20 h-[72px] w-1/2 -translate-y-2 rounded-br-md">
            <div className="lines-left bg-gradient-to-b from-white/20 to-white/20 !pb-0 !pl-[1px] !pr-0">
              <div className="radiant-lines__br absolute -left-32 -top-32 h-96 w-96"></div>
            </div>
          </div>
          <Link
            className="relative z-30 scale-110 rounded-full bg-black bg-gradient-button px-4 py-2 text-white"
            href={"/"}
          >
            See more projects
            <div className="effect-radiant radiant-purple z-10 !rounded-full bg-black !pl-[0.8px]"></div>
          </Link>
        </div>

        <div className="relative -right-2 top-0 z-20 h-[130px] w-[112px] -translate-y-1/2 rounded-br-md border-b border-r border-white/5">
          <div className="lines-left bg-gradient-to-b from-transparent to-white/20 !pl-0 !pr-[1px]">
            <div className="radiant-lines__br absolute -left-32 -top-32 h-96 w-96"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-48 w-full ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-4 top-4 h-[1.5px] w-[1.5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-[32rem] top-10 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-[31rem] top-24 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-[32rem] top-4 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-[34rem] top-24 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-16 left-10 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-20 top-10 h-[6px] w-[6px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-10 left-32 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-36 top-10 h-[1.5px] w-[1.5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-52 top-1/2 h-[6px] w-[6px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-64 top-4 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-4 left-72 h-[2px] w-[2px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-4 top-4 h-[1.5px] w-[1.5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-16 right-10 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-20 top-10 h-[6px] w-[6px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-10 right-32 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-36 top-10 h-[1.5px] w-[1.5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-52 top-1/2 h-[6px] w-[6px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute right-64 top-4 h-[4px] w-[4px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-4 right-72 h-[2px] w-[2px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-4 left-1/2 h-[2px] w-[2px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute left-96 top-20 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute -bottom-4 left-96 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-2 right-96 h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-4 right-[30rem] h-[3px] w-[3px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-4 left-[30rem] h-[3px] w-[3px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute -bottom-2 left-[34rem] h-[3px] w-[3px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute -bottom-4 right-[30rem] h-[5px] w-[5px] rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-0 right-[34rem] h-[3px] w-[3px] rounded-full bg-white"
        ></motion.div>
      </div>
    </motion.section>
  );
}
