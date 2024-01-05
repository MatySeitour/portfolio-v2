"use cleint";

import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import TechnologyItem from "./TechnologyItem";
import { borderEffect } from "../utils/animations/animations";

export default function FirstRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 h-36 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[50%]">
      <TechnologyItem
        name="html"
        className="-left-6 top-1/2"
        IconComponent={FaHtml5}
      />
      <TechnologyItem
        name="css"
        className="-right-4 top-1/2"
        IconComponent={FaCss3Alt}
      />
      <TechnologyItem
        name="javascript"
        className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        IconComponent={FaJs}
      />
      <motion.div
        initial={borderEffect.rest}
        animate={borderEffect.hover}
        className="effect-radiant radiant-gray rounded-[50%]"
      ></motion.div>
    </div>
  );
}

{
  /* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */
}
