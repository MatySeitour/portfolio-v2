"use client";

import { motion } from "framer-motion";
import { inter } from "../assets/fonts";

export default function Nav() {
  return (
    <motion.nav
      initial={{ translateY: -100 }}
      animate={{
        translateY: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
        },
      }}
      className="fixed top-4 z-50 h-14 w-full md:h-12"
    >
      <div className={`flex h-full w-auto justify-center ${inter.className}`}>
        <div className="relative flex h-full rounded-lg bg-[#000a] bg-gradient-bottom from-[#333] backdrop-blur-sm md:px-2">
          <ul className="flex gap-4 px-2 py-1">
            <li className="relative z-20 flex items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
              <a className="cursor-pointer" href="#home">
                Home
              </a>
            </li>
            <li className="relative z-20 flex items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
              <a className="cursor-pointer" href="#about">
                About
              </a>
            </li>
            <li className="relative z-20 flex items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
              <a className="cursor-pointer" href="#projects">
                Projects
              </a>
            </li>
            <li className="relative z-20 flex items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
              <a className="cursor-pointer" href="#skills">
                Skills
              </a>
            </li>
          </ul>
          <motion.div className="effect-radiant radiant-gray z-10"></motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
