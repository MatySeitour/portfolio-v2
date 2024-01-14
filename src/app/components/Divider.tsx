"use client";

import { motion } from "framer-motion";
import {
  appear,
  containerObserverAnimation,
} from "../utils/animations/animations";

export default function Divider() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={containerObserverAnimation}
      viewport={{ once: true, amount: 0.9 }}
      className="relative h-40 pt-20"
    >
      <motion.div
        variants={appear}
        className="border-effect__divider absolute bottom-0 right-1/2 h-[1.5px] w-full translate-x-1/2"
      >
        <div className="banner radiant-divider absolute -top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
