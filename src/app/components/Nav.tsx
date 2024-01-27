"use client";

import { motion } from "framer-motion";
import { inter } from "../assets/fonts";

export default function Nav() {
  return (
    <motion.nav className="fixed top-4 z-50 h-14 w-full md:h-14">
      <div className={`flex h-full w-auto justify-center ${inter.className}`}>
        <ul className="relative flex gap-4 rounded-lg bg-[#000a] bg-gradient-project px-4 py-1 backdrop-blur-sm md:px-2">
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
            Home
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
            About
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
            Experience
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-1 text-white/70 transition-all hover:text-white md:px-3">
            Skills
          </li>
          <motion.div className="effect-radiant radiant-gray"></motion.div>
        </ul>
      </div>
    </motion.nav>
  );
}
