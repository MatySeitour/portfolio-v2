"use client";
// components ----------------
import { motion } from "framer-motion";
import { SiPlatzi, SiPhp } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

// animations ----------------
import {
  appear,
  contactContainer,
  containerObserverAnimation,
  experienceLineContainer,
  experienceLines,
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
            <div className="relative flex h-full w-full items-center justify-center gap-2">
              <div className="relative h-full w-full max-w-[120px]">
                <div className="absolute right-0 z-20 h-full w-full -translate-y-1/2 rounded-bl-md border-b border-l border-white/5 ">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute right-3 top-3 z-20 h-full w-full -translate-y-1/2 rounded-bl-md border-b border-l border-white/5">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
                <div className="absolute right-6 top-6 z-20 h-full w-full -translate-y-1/2 rounded-bl-md border-b border-l border-white/5">
                  <div className="lines-left bg-gradient-to-b from-transparent to-white/20">
                    <div className="radiant-lines__left absolute -left-32 -top-32 h-96 w-96"></div>
                  </div>
                </div>
              </div>
              <motion.h3
                variants={appear}
                className="inline-block bg-gradient-title bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl"
              >
                A little bit{"  "}
                <br />
                <b className="subtitle-name inline-block pb-1 text-4xl font-semibold sm:text-5xl md:text-6xl">
                  my experience
                </b>
              </motion.h3>
              <div className="relative h-full w-full max-w-[120px]">
                <div className="absolute left-7 top-1/2 z-20 h-full max-h-[120px] w-full rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 hidden h-52 w-96 sm:inline-block sm:h-96"></div>
                    <div className="radiant-lines__right__mobile absolute -left-32 -top-32 h-52 w-96 sm:hidden sm:h-96"></div>
                  </div>
                </div>
                <div className="absolute left-4 top-1/2 z-20 h-full max-h-[110px] w-full translate-y-3 rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 hidden h-52 w-96 sm:inline-block sm:h-96"></div>
                    <div className="radiant-lines__right__mobile absolute -left-32 -top-32 h-52 w-96 sm:hidden sm:h-96"></div>
                  </div>
                </div>
                <div className="absolute left-1 top-1/2 z-20 h-full max-h-[100px] w-full translate-y-6 rounded-tr-md border-r border-t border-white/5">
                  <div className="lines-right bg-gradient-to-t from-transparent to-white/20">
                    <div className="radiant-lines__right absolute -left-32 -top-32 hidden h-52 w-96 sm:inline-block sm:h-96"></div>
                    <div className="radiant-lines__right__mobile absolute -left-32 -top-32 h-52 w-96 sm:hidden sm:h-96"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-auto justify-center">
            <div className="relative flex h-full w-full flex-col gap-6 md:grid md:grid-cols-10 md:gap-0">
              <div className="relative z-20 col-start-1 col-end-6 grid h-full overflow-hidden rounded-lg  px-2 py-4">
                <h4 className="flex items-center gap-2 px-2 py-2 pl-4 text-2xl text-white">
                  💼 Experience
                </h4>
                <div className="relative h-96 w-full">
                  <motion.ul
                    variants={experienceLineContainer}
                    initial={"hidden"}
                    animate={"visible"}
                    className="scrollbar-none relative z-50 flex h-full w-full flex-col gap-0 overflow-hidden overflow-y-scroll"
                  >
                    {experienceItems.map((experience) => (
                      <li
                        key={experience.title}
                        className="relative flex h-auto w-full items-center gap-4 pt-6"
                      >
                        <div className="!relative -left-0 z-20 h-1/2 w-full max-w-[100px] border-b border-l border-white/5">
                          <div className="lines-left bg-gradient-to-b from-transparent to-white/20 !pl-[0px]">
                            <motion.div
                              variants={experienceLines}
                              className="!absolute -left-0 -top-0 z-20 h-full w-[110%]"
                            ></motion.div>
                          </div>
                        </div>

                        <div className="flex h-auto flex-col gap-4 text-white">
                          <h5 className="">{experience.title}</h5>
                          <p className="text-white/40">
                            {experience.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </motion.ul>

                  <div className="absolute !left-0 !top-1/2 z-20 !h-[110%] !w-4 -translate-y-1/2 !rounded-b-none !rounded-r-none !rounded-tl-md border-r-0 border-t !pb-[0px] !pr-[0px]">
                    <div className="lines-left bg-bottom-transparent z-20 !pb-0 !pl-[1px] !pr-0">
                      <div className="radiant-lines__bottom absolute -left-32 -top-8 z-20 h-[32rem] w-[30rem]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="z-20 col-start-7 col-end-11 grid">
                <article className="relative z-20 flex h-full w-auto flex-col gap-2 overflow-hidden rounded-lg bg-[#111c] px-4 py-2 pt-4 md:max-h-96">
                  <IluminationEffect className="absolute right-0 top-0  h-28 w-28 !bg-gradient-to-r !from-transparent !to-white" />

                  <div>
                    <h4 className="px-2 text-center text-2xl text-white md:text-left">
                      🎓 About me
                    </h4>
                  </div>
                  <div>
                    <p className="text-banner py-2 text-center text-white/40 md:text-left lg:text-lg">
                      I have <b className="text-white">+2 years</b> of
                      <b className="text-white"> experience</b> with the mern
                      stack (MySql, express, react, node), in my daily life I
                      use <b className="text-white"> NextJS</b> with frameworks
                      like <b className="text-white">NextUI</b> or{" "}
                      <b className="text-white">ShadcnUI</b> for the frontend
                      and <b className="text-white">golang</b> for the backend,
                      and I´m currently learning{" "}
                      <b className="text-white">PHP</b>.
                      <br />
                      <br />I am a{" "}
                      <b className="text-white">
                        business administration student
                      </b>{" "}
                      at the University of Moreno, and a Platzi student since
                      2020.
                    </p>
                  </div>
                  <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[1px] w-full translate-x-1/2"></div>
                  <div className="shadow-effect__10 absolute -bottom-20 right-1/2 z-0 h-20 w-32 translate-x-1/2 bg-gray-400/30"></div>
                  <motion.div className="effect-radiant radiant-gray -z-10 !pb-[0.5px]"></motion.div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
