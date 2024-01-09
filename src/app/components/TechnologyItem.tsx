"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologyItem({
  svgImage,
  className,
  name,
  gradientColor,
}: {
  svgImage: string;
  className: string;
  name: string;
  gradientColor: string;
}) {
  const hoverScale = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 2,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  // useEffect(() => {
  //   const itemsSkill = document.querySelectorAll(".skill-item");
  //   const cursor = document.querySelector(".cursor");

  //   itemsSkill.forEach((item: any) => {
  //     item.addEventListener("mousemove", (e: any) => {
  //       cursor?.classList.add("bg-edit");
  //     });
  //     item.addEventListener("mouseleave", (e: any) => {
  //       cursor?.classList.remove("bg-edit");
  //     });
  //   });
  // }, []);

  return (
    <div
      className={`skill-item w-2h-20 absolute z-10 flex h-20 flex-col items-center justify-center rounded-[50%] ${
        className && className
      }`}
    >
      <div
        // whileHover="hover"
        // animate="rest"
        className={`bg-gradient-to-45 hover:animate-skill__${name} ${gradientColor} relative h-14 w-14 rounded-[50%] bg-black p-[10px]`}
      >
        {/* <IconComponent className={`h-full w-full ${colorIcon}`}></IconComponent> */}
        <Image
          src={`/${svgImage}`}
          alt={name}
          className="h-full w-full"
          width={400}
          height={400}
        />
        <div className="effect-radiant radiant-gray !pb-[0px] !pl-[0px]"></div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full"></div>
      <p className="text-white">{name}</p>
    </div>
  );
}

// -left-6 top-1/2 z-10 flex h-16 w-16
