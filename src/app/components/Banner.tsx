"use client";

import { inter } from "../assets/fonts";
import ContactBanner from "./ContactBanner";
import { motion } from "framer-motion";
import IluminationEffect from "./IluminationEffect";
import { borderEffect } from "../utils/animations/animations";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", function (e: any) {
      const posX = e.clientX;
      const posY = e.clientY;
      cursor?.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        },
      );
    });
  }, []);

  const onboardingContainerAnimation = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const titleBannerAnimation = {
    hidden: { opacity: 0, translateY: -50 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  const subtitleBannerAnimation = {
    hidden: { opacity: 0, translateY: 50 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={onboardingContainerAnimation}
      className="relative flex h-full min-h-screen flex-row items-center justify-between gap-8 bg-[#000a] px-8"
    >
      <IluminationEffect className="absolute right-0 top-0 h-[26rem] w-[50rem]  translate-x-1/2  rotate-[200deg] rounded-full" />

      <motion.div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <motion.h1
            variants={titleBannerAnimation}
            className="w-auto overflow-hidden bg-gradient-title bg-clip-text text-7xl font-semibold text-transparent"
          >
            Matias Seitour
          </motion.h1>
          <div className="flex items-center justify-start">
            <motion.h2
              variants={subtitleBannerAnimation}
              className={`w-auto overflow-hidden text-2xl font-bold text-white ${inter.className} subtitle-name`}
            >
              FullStack developer
            </motion.h2>
            <motion.span
              variants={subtitleBannerAnimation}
              className={`${inter.className} w-auto overflow-hidden text-2xl font-bold text-white`}
            >
              ...or so i think.
            </motion.span>
          </div>
        </div>
        <ContactBanner />
      </motion.div>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group-data relative h-96 w-96 rounded-lg bg-black "
      >
        <motion.div
          variants={borderEffect}
          className="effect-radiant"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
