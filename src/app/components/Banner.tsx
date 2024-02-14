"use client";

// components ----------------
import ContactBanner from "./ContactBanner";
import IluminationEffect from "./IluminationEffect";
import { motion } from "framer-motion";

// fonts ----------------
import { inter } from "../assets/fonts";

// animations ----------------
import {
  bannerContainerAnimation,
  borderEffect,
  contactItemsAnimation,
  subtitleBannerAnimation,
  titleBannerAnimation,
} from "../utils/animations/animations";

export default function Banner() {
  return (
    <motion.div
      id="home"
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
              className={`w-auto overflow-hidden ${inter.className} text-banner text-center text-white/70 md:text-left`}
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
          initial="hidden"
          animate="visible"
          variants={bannerContainerAnimation}
          className="flex justify-center gap-4 md:justify-start"
        >
          <motion.div
            variants={contactItemsAnimation}
            className="flex h-auto w-auto cursor-pointer gap-4"
          >
            <motion.a
              about="_target"
              href="/cv.pdf"
              download
              initial={{
                backgroundImage:
                  "linear-gradient(45deg, #222 30%,  #a0f0, transparent, #000)",
              }}
              whileHover={{
                backgroundImage:
                  "linear-gradient(45deg, #a0fa 30%,  #a0f5, transparent,#000)",
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
              }}
              className="relative z-30 rounded-lg bg-black px-4 py-3 text-white md:inline-block"
            >
              <p className="">Download CV</p>
              <motion.div
                initial={{
                  backgroundImage:
                    "conic-gradient(from 220deg at 50% 50%,transparent 0deg,#333 186deg,#777 203deg,#333 217deg,#111 230deg,transparent 260deg)",
                }}
                whileHover={{
                  backgroundImage:
                    "conic-gradient(from 220deg at 50% 50%,transparent 0deg,#333 186deg,#a0ff 203deg,#a0ff 217deg,#111 230deg,transparent 260deg)",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                className="effect-radiant"
              ></motion.div>
            </motion.a>
          </motion.div>

          <motion.div
            variants={contactItemsAnimation}
            className="flex h-auto w-auto cursor-pointer gap-4"
          >
            <motion.a
              target="_blank"
              href="/cv.pdf"
              initial={{
                backgroundImage:
                  "linear-gradient(45deg, #222 30%,  #a0f0 40%, transparent, #000)",
              }}
              whileHover={{
                backgroundImage:
                  "linear-gradient(45deg, #a0fa 30%,  #a0f5 40%, transparent,#000)",
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
              }}
              className="relative z-30 rounded-lg bg-black px-4 py-3 text-white md:inline-block"
            >
              <p className="">Open CV</p>
              <motion.div
                initial={{
                  backgroundImage:
                    "conic-gradient(from 220deg at 50% 50%,transparent 0deg,#333 186deg,#777 203deg,#333 217deg,#111 230deg,transparent 260deg)",
                }}
                whileHover={{
                  backgroundImage:
                    "conic-gradient(from 220deg at 50% 50%,transparent 0deg,#333 186deg,#a0ff 203deg,#a0ff 217deg,#111 230deg,transparent 260deg)",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                className="effect-radiant"
              ></motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="group-data relative z-20 h-72 w-72 rounded-lg bg-black md:h-96 md:w-96 ">
        <motion.div
          variants={titleBannerAnimation}
          className="effect-radiant radiant-gray"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
