"use client";

import { motion } from "framer-motion";
import { inter } from "../assets/fonts";

export default function Nav() {
  return (
    <motion.nav className="fixed top-4 z-50 h-14 w-full">
      <div className={`flex h-full w-auto justify-center ${inter.className}`}>
        <ul className="bg-gradient-project relative flex gap-4 rounded-full bg-[#000a] px-2 py-1 backdrop-blur-sm">
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-3 text-white/70 transition-all hover:text-white">
            Home
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-3 text-white/70 transition-all hover:text-white">
            About
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-3 text-white/70 transition-all hover:text-white">
            Experience
          </li>
          <li className="relative z-10 flex cursor-pointer items-center rounded-full px-3 text-white/70 transition-all hover:text-white">
            Skills
          </li>
          <motion.div className="effect-radiant radiant-gray"></motion.div>
        </ul>
      </div>
    </motion.nav>
  );
}
