import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

import TechnologyItem from "./TechnologyItem";

export default function SecondRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-80 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
      <TechnologyItem
        gradientColor="from-react"
        svgImage={"react.svg"}
        className="left-6 top-5"
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
        className="right-6 top-5"
        name="nextjs"
      />
    </div>
  );
}
