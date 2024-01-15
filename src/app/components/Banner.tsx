"use client";

// components ----------------
import ContactBanner from "./ContactBanner";
import IluminationEffect from "./IluminationEffect";
import { motion } from "framer-motion";

// hooks ----------------
import { useEffect, useState } from "react";

// fonts ----------------
import { inter } from "../assets/fonts";

// animations ----------------
import {
  bannerContainerAnimation,
  borderEffect,
  subtitleBannerAnimation,
  titleBannerAnimation,
} from "../utils/animations/animations";

// icons ----------------
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={bannerContainerAnimation}
      className="relative flex h-full flex-col-reverse items-center justify-between gap-8 bg-[#000a] px-8 pt-40 md:flex-row"
    >
      <IluminationEffect className="absolute -top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2  rotate-[200deg] rounded-full" />

      <motion.div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={titleBannerAnimation}
            className="w-auto overflow-hidden bg-gradient-title bg-clip-text text-center text-4xl font-semibold text-transparent md:text-left md:text-7xl"
          >
            Matias Seitour
          </motion.h1>
          <div className="flex items-center justify-start gap-2 text-center text-lg md:text-left md:text-2xl">
            <motion.h2
              variants={subtitleBannerAnimation}
              className={`w-auto overflow-hidden ${inter.className} text-banner text-center text-white/40 md:text-left`}
            >
              <b className="text-white">FullStack developer</b>
              {" (or so i think) from  "}
              <motion.b
                variants={subtitleBannerAnimation}
                className={`${inter.className} w-auto overflow-hidden bg-argentina bg-clip-text text-center text-transparent md:text-left`}
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
          <div className="relative rounded-lg bg-gradient-project px-4 py-2 text-white">
            <p className="bg-re">matias.seitour01@gmail.com</p>
            <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[2px] w-full translate-x-1/2"></div>
            <div className="effect-radiant radiant-gray"></div>
          </div>
          <div
            onClick={handleClick}
            className="relative z-30 cursor-pointer rounded-lg bg-gradient-button px-4 py-[8.5px] text-white"
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
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group-data relative h-72 w-72 rounded-lg bg-black md:h-96 md:w-96 "
      >
        <motion.div
          variants={borderEffect}
          className="effect-radiant"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
