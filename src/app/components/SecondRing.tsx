import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

import TechnologyItem from "./TechnologyItem";

export default function SecondRing() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-80 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
      <TechnologyItem
        IconComponent={FaReact}
        className="left-6 top-5"
        name="react"
      />
      <TechnologyItem
        IconComponent={TbBrandNextjs}
        className="-bottom-10 right-1/2 translate-x-1/2"
        name="nextjs"
      />
      <TechnologyItem
        IconComponent={BiLogoTypescript}
        className="right-6 top-5"
        name="typescript"
      />

      {/* <div className="absolute left-6 top-5 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%]">
        <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
          <FaReact className="h-full w-full text-white"></FaReact>
          <div className="effect-radiant radiant-gray"></div>
        </div>
        <p className="text-white">react</p>
      </div>
      <div className="absolute -bottom-10 right-1/2 z-10 flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-[50%]">
        <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
          <TbBrandNextjs className="h-full w-full text-white"></TbBrandNextjs>
          <div className="effect-radiant radiant-gray"></div>
        </div>
        <p className="text-white">nextjs</p>
      </div>
      <div className="absolute right-6 top-5 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%]">
        <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
          <BiLogoTypescript className="h-full w-full text-white"></BiLogoTypescript>
          <div className="effect-radiant radiant-gray"></div>
        </div>
        <p className="text-white">typescript</p>
      </div> */}
    </div>
  );
}
