"use client";

import { ContactType } from "../types/contact";
import { motion } from "framer-motion";
import { bgContactGitHub, borderEffect } from "../utils/animations/animations";

export default function ContactItem(contactProps: ContactType) {
  const navItems = {
    hidden: { opacity: 0, translateX: -50 },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.li variants={navItems} key={contactProps.name}>
      <motion.div
        initial={{
          backgroundImage: "linear-gradient(45deg, #222,  transparent)",
        }}
        whileHover={{
          backgroundImage: bgContactGitHub,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
        // animate="rest"
        className="relative flex min-w-[5rem] cursor-pointer justify-center rounded-2xl bg-black bg-gradient-nav px-4 py-2 transition-all before:p-[0.6px]"
      >
        <contactProps.image className="h-8 w-8 text-white"></contactProps.image>
        <motion.div
          variants={borderEffect}
          className="effect-radiant radiant-gray"
        ></motion.div>
      </motion.div>
    </motion.li>
  );
}
