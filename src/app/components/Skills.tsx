"use client";

import {
  appear,
  containerObserverAnimation,
  experienceLineContainer,
  experienceLines,
  experienceLinesReverse,
} from "../utils/animations/animations";
import FirstRing from "./FirstRing";
import IluminationEffect from "./IluminationEffect";
import SecondRing from "./SecondRing";
import { motion } from "framer-motion";
import TechnologyItem from "./TechnologyItem";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-auto w-full px-4 py-2 pb-10 pt-40"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={containerObserverAnimation}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-16"
      >
        <div className="top-30 absolute left-1/2 z-0 h-96 w-full max-w-3xl -translate-x-1/2 scale-150 scale-x-[2] rounded-t-full bg-black">
          <div className="effect-radiant radiant-skills !pb-0 !pl-0 !pr-0"></div>
        </div>
        <div className="shadow-effect__10 top-30 absolute left-1/2 -z-10 h-72 w-full max-w-2xl -translate-x-1/2 -translate-y-4 scale-150 scale-x-[2]  rounded-t-full bg-gradient-purple-blur transition-all"></div>
        <motion.div variants={appear} className="flex flex-col gap-10">
          <div className="relative z-10 flex w-full justify-center">
            <div className="relative">
              <motion.div className="gap-2 text-center text-5xl font-semibold text-transparent sm:text-5xl md:flex md:text-6xl">
                <h3 className="bg-gradient-title bg-clip-text text-transparent">
                  Some of
                </h3>
                <b className="subtitle-name inline-block pb-1 text-5xl font-semibold sm:text-5xl md:text-6xl">
                  {"  "}
                  my skills
                </b>
              </motion.div>
            </div>
          </div>
          <div className="relative mb-16 h-[30rem] w-full">
            <FirstRing />
            <SecondRing />
          </div>
          <div className="relative flex flex-col items-center justify-center gap-4">
            <p className="bg-gradient-title bg-clip-text text-2xl font-semibold text-transparent">
              I am currently learning
            </p>
            <motion.div
              variants={experienceLineContainer}
              initial={"hidden"}
              animate={"visible"}
              className="relative flex h-auto w-auto items-center justify-center"
            >
              <div className="!relative -left-0 -top-0.5 z-20 h-1 w-32 -translate-y-2 border-l border-t border-white/5 md:top-0">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLines}
                    className="!absolute -left-4 -top-4 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
              <div className="!absolute left-[1.1rem] top-4 z-20 h-1 w-28 -translate-y-2 border-l border-t border-white/5 md:top-8">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLines}
                    className="!absolute -left-4 -top-4 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
              <div className="!absolute left-[1.1rem] top-10 z-20 h-1 w-[7.25rem] -translate-y-2 border-l border-t border-white/5 md:top-[3.8rem]">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLines}
                    className="!absolute -left-4 -top-4 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
              <TechnologyItem
                name="php"
                svgImage="php.svg"
                gradientColor="from-php"
                className="relative object-cover"
              />
              <div className="!relative -left-0 -top-0.5 z-20 h-1 w-32 -translate-y-2 border-l border-t border-white/5 md:top-0">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLinesReverse}
                    className="!absolute -left-4 -top-0 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
              <div className="!absolute right-[1.1rem] top-4 z-20 h-1 w-28 -translate-y-2 border-l border-t border-white/5 md:top-8">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLinesReverse}
                    className="!absolute -left-4 -top-0 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
              <div className="!absolute right-[1.1rem] top-10 z-20 h-1 w-[7.25rem] -translate-y-2 border-l border-t border-white/5 md:top-[3.8rem]">
                <div className="lines-left bg-gradient-to-t from-transparent to-white/20 !p-[0px] !pt-[1.2px]">
                  <motion.div
                    variants={experienceLinesReverse}
                    className="!absolute -left-4 -top-0 z-20 h-32 w-52 md:-left-10 md:top-0 md:h-32"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
