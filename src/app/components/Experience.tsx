"use client";
// components ----------------
import { motion } from "framer-motion";
import { SiPlatzi } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

// animations ----------------
import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";

// experience data ----------------
import { experienceItems } from "../utils/experience";
import IluminationEffect from "./IluminationEffect";

export default function Experience() {
  return (
    <motion.section className="relative flex h-auto w-full flex-col px-10 pb-20 pt-40">
      <motion.div
        className="flex h-auto w-full px-4"
        initial="offscreen"
        whileInView="onscreen"
        variants={containerObserverAnimation}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative z-10 flex h-auto w-full flex-col justify-center gap-16">
          <div className="flex items-center justify-center text-center">
            <div className="relative flex gap-2 rounded-md px-6 py-4">
              <motion.h3
                variants={appear}
                className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent"
              >
                A little bit{"  "}
              </motion.h3>
              <motion.p
                variants={appear}
                className="subtitle-name inline-block pb-1 text-6xl font-semibold"
              >
                {"  "}
                my experience
              </motion.p>
              <div className="absolute left-0 top-1/2 h-[112px] w-[112px]">
                <div className="absolute -left-12 -top-full z-20 h-[112px] w-[112px] -translate-x-1/2 translate-y-3 rounded-bl-md border-b border-l border-white/5">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute -left-10 -top-full z-20 h-[98px] w-[98px] -translate-x-1/2 translate-y-3 rounded-bl-md border-b border-l border-white/5">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute -left-8 -top-full z-20 h-[84px] w-[84px] -translate-x-1/2 translate-y-3 rounded-bl-md border-b border-l border-white/5">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-64 top-full h-[112px] w-[112px] -translate-x-1/2 translate-y-1/2">
                <div className="absolute -left-12 -top-full z-20 h-[112px] w-[112px] -translate-x-1/2 translate-y-0 rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute -left-[3.4rem] -top-full z-20 h-[98px] w-[98px] -translate-x-1/2 translate-y-3 rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute -left-[3.7rem] -top-full z-20 h-[84px] w-[84px] -translate-x-1/2 translate-y-6 rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-[24rem] w-auto justify-center ">
            <div className="flex h-full w-full justify-center">
              <div className="relative z-20 flex h-full min-w-[24rem] max-w-lg flex-1 flex-col justify-between overflow-hidden rounded-lg  px-2 py-4">
                <IluminationEffect className="absolute right-0 top-0 h-32 w-32 !bg-gradient-to-r !from-transparent !to-white" />

                <h4 className="flex items-center gap-2 px-2 text-2xl text-white">
                  {/* <BsSuitcaseLgFill className="h-full text-white" /> */}
                  💼 Experience
                </h4>
                <motion.div className="relative h-72 w-full overflow-hidden rounded-lg border border-white/20">
                  <motion.div className="scrollbar-none scrollGradient relative z-50 h-full w-full overflow-hidden overflow-y-scroll">
                    <motion.ul className="flex h-auto w-full flex-col gap-8 p-2 py-4">
                      {experienceItems.map((experience) => (
                        <li key={experience.title} className="h-auto w-full">
                          <h6 className="text-pretty mb-2 max-w-sm text-lg text-white">
                            {experience.title} - {experience.year}
                          </h6>
                          <p className="text-banner text-white/40">
                            {experience.description}
                          </p>
                        </li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
                <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[1px] w-full translate-x-1/2"></div>
                <div className="shadow-effect__10 absolute -bottom-20 right-1/2 h-20 w-32 translate-x-1/2 bg-gray-400/30"></div>

                <motion.div className="effect-radiant radiant-gray -z-0 !pb-[0.5px]"></motion.div>
              </div>
              <motion.div
                initial={{
                  backgroundImage:
                    "conic-gradient(from 0deg at 50% 50%,#333 0deg,#333 190deg,#fff 191deg,#a0f 193deg,#333 217deg)",
                }}
                animate={{
                  backgroundImage: [
                    "conic-gradient(from 0deg at 50% 50%,#333 0deg,#333 190deg,#fff 191deg,#a0f 193deg,#333 217deg)",
                    "conic-gradient(from -280deg at 50% 50%,#333 0deg,#333 190deg,#fff 191deg,#a0f 193deg,#333 217deg)",
                  ],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                  },
                }}
                className="effect-radiant !relative -z-0 w-12 translate-y-28 !pb-[0.5px] !pl-[0] !pr-[0]"
              ></motion.div>

              <div className=" relative z-20 flex h-52 w-96 flex-col overflow-hidden rounded-lg bg-black px-2 py-4">
                <IluminationEffect className="absolute right-0 top-0 h-28 w-28 !bg-gradient-to-r !from-transparent !to-white" />

                <h4 className="flex items-center gap-2 px-2 text-2xl text-white">
                  {/* <ImBooks className="h-full text-white" /> */}
                  🎓 About me
                </h4>
                <div className="h-auto w-full">
                  <p className="text-pretty mb-2 flex max-w-sm items-center gap-2 p-2 text-lg text-white">
                    <SiPlatzi className="h-6 w-6 text-white" />
                    {"Student of Platzi from 2020."}
                  </p>
                  <p className="text-pretty mb-2 flex max-w-sm items-center gap-2 p-2 text-lg text-white">
                    <FaUniversity className="h-12 w-12 text-white" />
                    {
                      "Business administration student at the national university of Moreno."
                    }
                  </p>
                </div>
                <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[1px] w-full translate-x-1/2"></div>
                <div className="shadow-effect__10 absolute -bottom-20 right-1/2 z-0 h-20 w-32 translate-x-1/2 bg-gray-400/30"></div>
                <motion.div className="effect-radiant radiant-gray -z-0 !pb-[0.5px]"></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
