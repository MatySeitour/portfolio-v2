import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

import TechnologyItem from "./TechnologyItem";

export default function SecondRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-[28rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
      <TechnologyItem
        gradientColor="from-react"
        svgImage={"mysql.svg"}
        className="-left-6 top-1/2 -translate-y-1/2"
        name="mysql"
      />
      <TechnologyItem
        gradientColor="from-postgresql"
        svgImage={"postgresql.svg"}
        className="-right-10 top-1/2 -translate-y-1/2"
        name="postgresql"
      />
      <TechnologyItem
        gradientColor="from-golang"
        svgImage={"golang.svg"}
        className="-bottom-10 left-12 -translate-y-1/2 translate-x-1/2 "
        name="golang"
      />
      <TechnologyItem
        gradientColor="from-node"
        svgImage={"node.svg"}
        className="left-24 top-16 -translate-x-1/2 -translate-y-1/2 "
        name="nodejs"
      />
      <TechnologyItem
        gradientColor="from-express"
        svgImage={"express.svg"}
        className="right-10 top-16 -translate-x-1/2 -translate-y-1/2 "
        name="express"
      />
      <TechnologyItem
        gradientColor="from-docker"
        svgImage={"docker.svg"}
        className="-bottom-10 right-12 -translate-x-1/2 -translate-y-1/2 "
        name="docker"
      />
      <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-title bg-clip-text text-2xl font-bold text-transparent">
        Backend
      </div>
    </div>
  );
}
