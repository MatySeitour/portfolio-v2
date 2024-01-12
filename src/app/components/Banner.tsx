"use client";

import { inter } from "../assets/fonts";
import ContactBanner from "./ContactBanner";
import { motion } from "framer-motion";
import IluminationEffect from "./IluminationEffect";
import { bgContactGitHub, borderEffect } from "../utils/animations/animations";
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function Banner() {
  const [copyEmailState, setCopyEmailState] = useState(false);

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

  const handleClick = () => {
    if (copyEmailState) return;
    setCopyEmailState(true);
    navigator.clipboard.writeText("matias.seitour01@gmail.com");
    console.log("entra");
    setTimeout(() => {
      setCopyEmailState(false);
    }, 1000);
  };

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
      className="relative flex h-full flex-row items-center justify-between gap-8 bg-[#000a] px-8 pt-40"
    >
      <IluminationEffect className="absolute right-0 top-0 h-[26rem] w-[50rem]  translate-x-1/2  rotate-[200deg] rounded-full" />

      <motion.div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={titleBannerAnimation}
            className="w-auto overflow-hidden bg-gradient-title bg-clip-text text-7xl font-semibold text-transparent"
          >
            Matias Seitour
          </motion.h1>
          <div className="flex items-center justify-start gap-2 text-2xl">
            <motion.h2
              variants={subtitleBannerAnimation}
              className={`w-auto overflow-hidden ${inter.className} text-banner text-white/40`}
            >
              <b className="text-white">FullStack developer</b>
              {" (or so i think) from  "}
              <motion.b
                variants={subtitleBannerAnimation}
                className={`${inter.className} w-auto overflow-hidden bg-argentina bg-clip-text text-transparent`}
              >
                Argentina
              </motion.b>
              <b className="text-white">🧉</b>.
              <br />
              turning ideas into visual experiences.
            </motion.h2>
          </div>
        </div>

        <ContactBanner />
        <motion.div
          variants={subtitleBannerAnimation}
          className="flex max-w-xs items-center gap-4"
        >
          <div className="relative rounded-lg px-4 py-2 text-white">
            <p className="bg-re">matias.seitour01@gmail.com</p>
            <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[2px] w-full translate-x-1/2"></div>
            <div className="effect-radiant radiant-gray"></div>
          </div>
          <motion.div
            initial={{
              backgroundImage: "linear-gradient(45deg, #000,  transparent)",
            }}
            whileHover={{
              backgroundImage: bgContactGitHub,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            onClick={handleClick}
            className="relative cursor-pointer rounded-lg px-4 py-[8.5px] text-white"
          >
            <FaCopy
              className={`absolute z-10 h-6 w-6 ${
                copyEmailState ? `opacity-0` : `opacity-100`
              } transition-all`}
            />
            <FaCheck
              onClick={handleClick}
              className={`relative z-10 h-6 w-6 ${
                !copyEmailState ? `opacity-0` : `opacity-100`
              } text-green-600 transition-all`}
            />
            <div className="effect-radiant radiant-gray"></div>
          </motion.div>
        </motion.div>
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
