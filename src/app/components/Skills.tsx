"use client";

import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";
import FirstRing from "./FirstRing";
import IluminationEffect from "./IluminationEffect";
import SecondRing from "./SecondRing";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="relative h-auto w-full px-4 py-2 pb-10 pt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={containerObserverAnimation}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-16"
      >
        <div className="top-30 absolute left-1/2 z-0 h-96 w-full max-w-3xl -translate-x-1/2 scale-150 scale-x-[2] rounded-t-full bg-black">
          <div className="effect-radiant radiant-skills !pb-0 !pl-0 !pr-0"></div>
          {/* <div className="lines-left bg-gradient-to-b from-transparent !pb-[1.8px] !pl-0 !pr-[0px]">

              </div> */}
        </div>
        <div className="shadow-effect__10 top-30 absolute left-1/2 -z-10 h-72 w-full max-w-2xl -translate-x-1/2 -translate-y-4 scale-150 scale-x-[2]  rounded-t-full bg-gradient-purple-blur transition-all"></div>

        <div className="relative z-10 flex w-full justify-center">
          <div className="relative">
            <motion.div
              variants={appear}
              className="gap-2 text-center text-5xl font-semibold text-transparent sm:text-5xl md:flex md:text-6xl"
            >
              <h3 className="bg-gradient-title bg-clip-text text-transparent">
                Some of
              </h3>
              <b className="subtitle-name inline-block pb-1 text-5xl font-semibold sm:text-5xl md:text-6xl">
                {"  "}
                my skills
              </b>
            </motion.div>
            {/* <div className="absolute -left-4 top-2 z-20 h-[72px] w-56">
              <div className="lines-left bg-gradient-to-b from-transparent !pb-[1.8px] !pl-0 !pr-[0px]">
                <motion.div
                  initial={{
                    background:
                      "conic-gradient(transparent,#a0f2 6%,#a0f 12%,#a0f 20%,#fff 22%, transparent 22.2%)",

                    rotate: "0deg",
                  }}
                  animate={{
                    background:
                      "conic-gradient(transparent,#a0f2 6%,#a0f 12%,#a0f 20%,#fff 22%, transparent 22.2%)",

                    rotate: "145deg",
                    // transition: {
                    //   duration: 2,
                    //   // repeat: Infinity,
                    //   ease: "linear",
                    // },
                  }}
                  className="absolute -left-0 -top-32 h-60 w-60"
                ></motion.div>
              </div>
            </div> */}
            {/* <div className="absolute -left-0 top-2 z-20 h-[72px] w-56 -translate-x-full">
              <div className="lines-left bg-gradient-to-b from-transparent !pb-[1.8px] !pl-0 !pr-[0px]">
                <motion.div
                  initial={{
                    background:
                      "conic-gradient(transparent 0.2%,#fff, #a0f 3.2%, #a0f 12.2%, #a0f7 20%, transparent 22.2%)",

                    rotate: "0deg",
                  }}
                  animate={{
                    background:
                      "conic-gradient(transparent 0.2%,#fff, #a0f 3.2%, #a0f 12.2%, #a0f7 20%, transparent 22.2%)",

                    rotate: "145deg",
                    // transition: {
                    //   duration: 2,
                    //   // repeat: Infinity,
                    //   ease: "linear",
                    // },
                  }}
                  className="absolute -left-0 -top-32 h-60 w-60"
                ></motion.div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative h-[30rem] w-full">
          <FirstRing />
          <SecondRing />
        </div>
      </motion.div>
    </section>
  );
}
