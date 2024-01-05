"use client";

import { motion } from "framer-motion";
import { appear } from "../utils/animations/animations";

export default function About() {
  const containerAnimation = {
    offscreen: {},
    onscreen: {
      transition: {
        duration: 0.5,
      },
    },
  };

  const aboutText = {
    offscreen: {
      backgroundImage: "linear-gradient(to bottom, #000 30%, #000 60%, #000)",
    },
    onscreen: {
      backgroundImage: "linear-gradient(to top, #0ff 30%, #02f)",
      transition: {
        duration: 0.5,
      },
    },
  };

  const aboutTitle = {
    offscreen: {
      backgroundImage: "linear-gradient(to bottom, #000 30%, #000 60%, #000)",
    },
    onscreen: {
      backgroundImage: "linear-gradient(to bottom, #ddd 30%, #fff 60%, #444)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.article className="min-g-screen relative flex w-full flex-col px-4 pt-40">
      <div className="fixed top-0 -z-10 h-full w-full bg-[#000a]"></div>
      <motion.div
        className="flex h-auto w-full flex-row justify-between px-4"
        initial="offscreen"
        whileInView="onscreen"
        variants={containerAnimation}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative z-10 flex h-auto w-full flex-col justify-center gap-16">
          <div className="flex items-center justify-center text-center">
            <div className="relative flex gap-2 rounded-md  px-6 py-4">
              <motion.h3
                variants={aboutTitle}
                className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent"
              >
                A little bit{"  "}
              </motion.h3>
              <motion.p
                variants={aboutText}
                className="subtitle-name inline-block pb-1 text-6xl font-semibold"
              >
                {"  "}
                my experience
              </motion.p>
              {/* <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1.5px] w-full translate-x-1/2"></div> */}
              {/* <motion.div
                variants={appear}
                className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full"
              ></motion.div> */}
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerAnimation}
            viewport={{ once: true, amount: 0.5 }}
            className="flex h-52 w-auto justify-center gap-4  px-4 py-2"
          >
            <motion.div
              variants={appear}
              className="group relative h-52 w-96 rounded-md bg-black bg-gradient-orange p-4"
            >
              <div className="scrollbar-none relative z-20 flex h-full w-full flex-col gap-4 overflow-y-scroll">
                <p className="bg-gradient-title bg-clip-text text-right text-2xl font-bold text-transparent">
                  2023
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                </div>
              </div>
              <div className="effect-radiant radiant-orange"></div>
              <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1px] w-full translate-x-1/2"></div>
              <div className="shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full bg-gradient-orange-blur opacity-0 transition-all group-hover:opacity-100"></div>
            </motion.div>
            <motion.div
              variants={appear}
              className="group relative h-52 w-96 rounded-md bg-black bg-gradient-blue p-4"
            >
              <div className="scrollbar-none relative z-20 flex h-full w-full flex-col gap-4 overflow-y-scroll">
                <p className="bg-gradient-title bg-clip-text text-right text-2xl font-bold text-transparent">
                  2022
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                </div>
              </div>
              <div className="effect-radiant radiant-blue"></div>
              <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1px] w-full translate-x-1/2"></div>
              <div className="shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full bg-gradient-blue-blur opacity-0 transition-all group-hover:opacity-100"></div>
            </motion.div>
            <motion.div
              variants={appear}
              className="group relative h-52 w-96 rounded-md bg-black bg-gradient-purple p-4"
            >
              <div className="scrollbar-none relative z-20 flex h-full w-full flex-col gap-4 overflow-y-scroll">
                <p className="bg-gradient-title bg-clip-text text-right text-2xl font-bold text-transparent">
                  2021
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                  <p className="text-white">
                    - Frontend Developer for DPSoftware
                  </p>
                  <p className="text-white/30">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis, modi doloribus sunt nisi,{" "}
                  </p>
                </div>
              </div>
              <div className="effect-radiant radiant-purple"></div>
              <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1px] w-full translate-x-1/2"></div>
              <div className="shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full bg-gradient-purple-blur opacity-0 transition-all group-hover:opacity-100"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
