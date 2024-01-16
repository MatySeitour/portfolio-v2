"use client";

import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";
import FirstRing from "./FirstRing";
import SecondRing from "./SecondRing";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="relative h-auto min-h-screen w-full px-4 py-2 pb-10 pt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={containerObserverAnimation}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-16"
      >
        <div className="flex w-full justify-center">
          <motion.div variants={appear} className="relative flex gap-2  ">
            <h3 className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent">
              Some of
            </h3>
            <p className="subtitle-name inline-block pb-1 text-6xl font-semibold">
              {"  "}
              my skills
            </p>
          </motion.div>
        </div>
        <div className="relative h-[30rem] w-full">
          <FirstRing />
          <SecondRing />
        </div>
      </motion.div>
    </section>
  );
}
