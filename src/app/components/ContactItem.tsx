"use client";

// components ----------------
import { motion } from "framer-motion";

// types ----------------
import { Contact } from "../types/types";

// animations ----------------
import {
  backgroundContactAnimation,
  borderEffect,
  contactItemsAnimation,
} from "../utils/animations/animations";

export default function ContactItem(contactProps: Contact) {
  return (
    <motion.li variants={contactItemsAnimation} key={contactProps.name}>
      <motion.a
        target="_blank"
        href={contactProps.link}
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
        aria-label="contact"
        className="relative flex min-w-[5rem] cursor-pointer justify-center rounded-2xl bg-black bg-gradient-button px-4 py-2 transition-all before:p-[0.6px]"
      >
        <contactProps.image className="h-8 w-8 text-white"></contactProps.image>
        <motion.div
          variants={borderEffect}
          className="effect-radiant radiant-gray"
        ></motion.div>
      </motion.a>
    </motion.li>
  );
}
