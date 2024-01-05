"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import FirstRing from "./FirstRing";
import SecondRing from "./SecondRing";
import IluminationEffect from "./IluminationEffect";

{
  /* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */
}
{
  /* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */
}
{
  /* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */
}

export default function Skills() {
  return (
    <section className="relative h-auto min-h-screen w-full px-4 py-2 pb-10 pt-40">
      <div className="flex flex-col gap-20">
        <div className="flex w-full justify-center">
          <div className="relative flex gap-2 rounded-md border-t border-white/40 bg-black px-6 py-4">
            <h3 className="mr-1 inline-block bg-gradient-title bg-clip-text text-6xl font-semibold text-transparent">
              Some of
            </h3>
            <p className="subtitle-name inline-block pb-1 text-6xl font-semibold">
              {"  "}
              my skills
            </p>
            <div className="border-effect__bottom absolute bottom-0 right-1/2 h-[1.5px] w-full translate-x-1/2"></div>
            <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div>
          </div>
        </div>
        <div className="relative h-[30rem] w-full">
          <FirstRing />
          {/* <div className="absolute left-1/2 top-1/2 z-10 h-36 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[50%]">
            <div className="absolute -left-6 top-1/2 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaHtml5 className="h-full w-full text-white"></FaHtml5>
                <div className="effect-radiant radiant-gray"></div>
              </div>
              <p className="text-white">html</p>
            </div>
            <div className="absolute -right-4 top-1/2 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaCss3Alt className="h-full w-full text-white"></FaCss3Alt>
                <div className="effect-radiant radiant-gray"></div>
              </div>
              <p className="text-white">css</p>
            </div>
            <div className="absolute left-1/2 top-0 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaJs className="h-full w-full text-white"></FaJs>
                <div className="effect-radiant radiant-gray"></div>
              </div>
              <p className="text-white">javascript</p>
            </div>
            <motion.div
              initial={borderEffect.rest}
              animate={borderEffect.hover}
              className="effect-radiant radiant-gray rounded-[50%]"
            ></motion.div>
          </div> */}
          <SecondRing />
          {/* <div className="absolute left-1/2 top-1/2 z-10 h-80 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
            <div className="absolute left-6 top-5 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%]">
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
            </div>
          </div> */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[30rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20">
            <div className="absolute -left-6 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <GrMysql className="h-full w-full text-white"></GrMysql>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">mysql</p>
            </div>
            <div className="absolute -right-6 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <DiPostgresql className="h-full w-full text-white"></DiPostgresql>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">postgresql</p>
            </div>
            <div className="absolute bottom-2 left-2 z-10 flex h-16 w-16 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaGolang className="h-full w-full text-white"></FaGolang>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">golang</p>
            </div>
            <div className="absolute left-24 top-16 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaNodeJs className="h-full w-full text-white"></FaNodeJs>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">nodejs</p>
            </div>
            <div className="absolute right-14 top-16 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <SiExpress className="h-full w-full text-white"></SiExpress>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">express</p>
            </div>
            <div className="absolute bottom-2 right-0 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%]">
              <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
                <FaDocker className="h-full w-full text-white"></FaDocker>
                <div className="effect-radiant radiant-gray"></div>
                {/* <div className="shadow-effect__30 absolute left-0 top-0 -z-10 h-full w-full "></div> */}
              </div>
              <p className="text-white">docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
