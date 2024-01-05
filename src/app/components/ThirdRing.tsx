import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

import TechnologyItem from "./TechnologyItem";

export default function ThirdRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-[30rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
      <TechnologyItem
        svgImage={"mysql.svg"}
        className="-left-6 top-1/2 -translate-y-1/2"
        name="mysql"
      />
      <TechnologyItem
        svgImage={"postgresql.svg"}
        className="-right-6 top-1/2 -translate-y-1/2"
        name="postgresql"
      />
      <TechnologyItem
        svgImage={"postgresql.svg"}
        className="bottom-2 left-2 -translate-y-1/2 translate-x-1/2 "
        name="golang"
      />
      <TechnologyItem
        svgImage={"node.svg"}
        className="left-24 top-16 -translate-x-1/2 -translate-y-1/2 "
        name="nodejs"
      />
      <TechnologyItem
        svgImage={"express.svg"}
        className="right-14 top-16 -translate-x-1/2 -translate-y-1/2 "
        name="express"
      />
      <TechnologyItem
        svgImage={"docker.svg"}
        className="bottom-2 right-0 -translate-x-1/2 -translate-y-1/2 "
        name="docker"
      />
    </div>
  );
}
