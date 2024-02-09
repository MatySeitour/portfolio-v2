"use client";

import { motion } from "framer-motion";
import {
  appear,
  backgroundContactAnimation,
  containerObserverAnimation,
} from "../utils/animations/animations";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
import Link from "next/link";
import IluminationEffect from "./IluminationEffect";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="offscreen"
      whileInView="onscreen"
      variants={containerObserverAnimation}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex h-auto w-full flex-col pt-20 "
    >
      <div className="flex w-full justify-center pt-20">
        <div className="relative z-10 flex gap-2">
          <motion.div
            variants={appear}
            className=" inline-block text-center text-5xl font-semibold text-transparent md:text-6xl"
          >
            <h3 className="bg-gradient-title bg-clip-text text-transparent">
              Some of
            </h3>
            <b className="subtitle-name inline-block pb-1 text-5xl font-semibold md:text-6xl">
              {"  "}
              my projects
            </b>
          </motion.div>
        </div>
      </div>
      <div className="relative h-auto w-full px-2 pt-20">
        <ul className="grid h-full w-full place-items-center gap-10 pb-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.projectName} projectData={project} />
          ))}
        </ul>
        <IluminationEffect className="absolute left-0 top-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute right-0 top-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute left-1/2 top-1/2 h-44 w-full -translate-x-1/2 translate-y-1/2" />
        <IluminationEffect className="absolute bottom-0 left-0 h-44 w-[30rem]" />
        <IluminationEffect className="absolute bottom-0 right-0 h-44 w-[30rem]" />
      </div>
      <div className="relative flex h-auto w-full items-center justify-center pt-9">
        <div className="relative -left-2 top-0 z-20 h-[130px] w-[112px] -translate-y-1/2 rounded-bl-md border-b border-l border-white/5">
          <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
            <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
          </div>
        </div>

        <motion.div className="relative flex h-auto w-auto flex-col">
          <div className="absolute -left-0 -top-full z-20 h-[72px] w-1/2 -translate-y-full rounded-bl-md border-b border-l border-white/5">
            <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
              <motion.div
                initial={{
                  background:
                    "conic-gradient(#fff,#a0f 3%,#a0f 6%,#a0f7 10%,transparent 12.9%)",
                  rotate: "-60deg",
                }}
                animate={{
                  background:
                    "conic-gradient(#fff,#a0f 3%,#a0f 6%,#a0f7 10%,transparent 12.9%)",
                  rotate: "-270deg",
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute -left-24 -top-32 h-60 w-60"
              ></motion.div>
            </div>
          </div>
          <div className="absolute -right-0 -top-full z-20 h-[72px] w-1/2 -translate-y-full rounded-br-md border-b border-r border-white/5">
            <div className="lines-left bg-gradient-to-b from-transparent to-white/20 !pl-0 !pr-[1px]">
              <motion.div
                initial={{
                  background:
                    "conic-gradient(transparent,#a0f7 3%,#a0f 6%,#a0f 10%,#fff 11%, transparent 12.9%)",

                  rotate: "0deg",
                }}
                animate={{
                  background:
                    "conic-gradient(transparent,#a0f7 3%,#a0f 6%,#a0f 10%,#fff 11%, transparent 12.9%)",
                  rotate: "200deg",
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute -left-24 -top-32 h-60 w-60"
              ></motion.div>
            </div>
          </div>
          <div className="absolute -bottom-0 -right-0 z-20 h-[72px] w-1/2 -translate-y-2 rounded-br-md">
            <div className="lines-left bg-gradient-to-b from-white/20 to-white/20 !pb-0 !pl-[1px] !pr-0">
              <motion.div
                initial={{
                  background:
                    "conic-gradient(#fff,#a0f 3%,#a0f 6%,#a0f7 10%,transparent 12.9%)",
                  rotate: "-60deg",
                }}
                animate={{
                  background:
                    "conic-gradient(#fff,#a0f 3%,#a0f 6%,#a0f7 10%,transparent 12.9%)",
                  rotate: "-270deg",
                  transition: {
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute -left-24 -top-32 h-60 w-60"
              ></motion.div>
            </div>
          </div>
          <motion.a
            initial={{
              backgroundImage: "linear-gradient(45deg, #222,  transparent)",
            }}
            whileHover={{
              backgroundImage: backgroundContactAnimation,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            target="_blank"
            className="text-pretty relative z-30 w-44 scale-110 rounded-full bg-black bg-gradient-button px-4 py-2 text-center text-white sm:w-auto"
            href={"https://github.com/MatySeitour?tab=repositories"}
          >
            See more projects
            <div className="effect-radiant radiant-purple z-10 !rounded-full bg-black !pl-[0.8px]"></div>
          </motion.a>
        </motion.div>

        <div className="relative -right-2 top-0 z-20 h-[130px] w-[112px] -translate-y-1/2 rounded-br-md border-b border-r border-white/5">
          <div className="lines-left bg-gradient-to-b from-transparent to-white/20 !pl-0 !pr-[1px]">
            <div className="radiant-lines__br absolute -left-32 -top-32 h-96 w-96"></div>
          </div>
        </div>
        <div className="absolute bottom-40 h-auto w-full ">
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
      </div>
    </motion.section>
  );
}
