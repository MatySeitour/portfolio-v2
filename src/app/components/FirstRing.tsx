"use cleint";

// components ----------------
import TechnologyItem from "./TechnologyItem";
import { motion } from "framer-motion";

export default function FirstRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 h-52 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[50%]">
      <TechnologyItem
        gradientColor="from-html"
        name="html"
        className="-left-2 bottom-0"
        svgImage={"html.svg"}
      />
      <TechnologyItem
        name="css"
        gradientColor="from-css"
        className="-right-2 bottom-0"
        svgImage={"css.svg"}
      />
      <TechnologyItem
        gradientColor="from-javascript"
        name="javascript"
        className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        svgImage={"js.svg"}
      />

      <TechnologyItem
        gradientColor="from-react"
        svgImage={"react.svg"}
        className="left-1 top-4"
        name="react"
      />
      <TechnologyItem
        gradientColor="from-typescript"
        svgImage={"typescript.svg"}
        className="-bottom-10 right-1/2 translate-x-1/2"
        name="typescript"
      />
      <TechnologyItem
        gradientColor="from-next"
        svgImage={"nextjs.svg"}
        className="right-1 top-4"
        name="nextjs"
      />

      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-title bg-clip-text text-2xl font-bold text-transparent">
        Frontend
      </p>
      <motion.div className="effect-radiant radiant-gray rounded-[50%]"></motion.div>
    </div>
  );
}
