"use client";

import { motion } from "framer-motion";
import { inter } from "../assets/fonts";

export default function Nav() {
  return (
    <motion.nav
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      className="fixed top-0 z-50 h-14 w-full"
    >
      <ul
        className={`flex h-full w-full justify-center gap-4 px-4 py-1 ${inter.className} bg-[#000a] py-2`}
      >
        <li className="flex cursor-pointer items-center rounded-full border border-white/10 px-4 text-white/70 transition-all hover:text-white">
          Home
        </li>
        <li className="flex cursor-pointer items-center rounded-full  border border-white/10 px-4 text-white/70 transition-all hover:text-white">
          About
        </li>
        <li className="flex cursor-pointer items-center rounded-full  border border-white/10 px-4 text-white/70 transition-all hover:text-white">
          Experience
        </li>
        <li className="flex cursor-pointer items-center rounded-full  border border-white/10 px-4 text-white/70 transition-all hover:text-white">
          Skills
        </li>
      </ul>
      <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1px] w-full translate-x-1/2"></div>
    </motion.nav>
  );
}
