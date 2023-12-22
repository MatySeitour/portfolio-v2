"use client";

import { motion } from "framer-motion";

const Header = (): JSX.Element => {
  const onboardingContainerAnimation = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.2,
        duration: 0.5,
        Infinity,
      },
    },
  };

  return (
    <header
      id="contact"
      className="relative flex flex-col items-center justify-center pl-5 pr-5"
    >
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          {/* <Image
            alt="Matias Seitour"
            width={300}
            height={300}
            className="w-[300px] h-[300px] animate-wiggle shadow-xl rounded-[700px] object-cover"
            src={"/images.jpg"}
          /> */}
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="relative text-center">
              <h1 className="animate-wiggle text-shadow__desktop title-name mb-8 w-auto overflow-hidden text-6xl font-bold tracking-widest text-black">
                MATIAS SEITOUR
              </h1>
              <div className="bottom-0-0 absolute left-1/2 h-[3.8rem] w-0.5 -translate-x-1/2 -translate-y-[2.20rem] overflow-hidden bg-slate-900">
                <motion.span
                  initial={{ translateY: "-100%" }}
                  animate={{
                    translateY: "300%",
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      repeatDelay: 10,
                    },
                  }}
                  className="absolute left-0 top-0 h-6 w-full -translate-y-full bg-gradient-to-b from-transparent to-blue-500"
                ></motion.span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={onboardingContainerAnimation}
                className="flex items-center justify-center"
              >
                <motion.div className="relative z-20 min-w-[196px] rounded-lg border border-white/20 bg-black p-2">
                  <div className="border-effect__top rigth-0 absolute -top-0.5 h-0.5 w-20"></div>

                  <motion.p
                    animate={{
                      backgroundClip: "text",
                      // -webkit-background-clip: text;
                      // -webkit-text-fill-color: transparent;
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: [
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                      ],
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className=" animate-wiggle text-shadow__desktop title-name relative z-30 w-full text-2xl font-bold tracking-widest text-white"
                  >
                    FRONTEND
                  </motion.p>
                  <motion.div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black"></motion.div>
                  <motion.div
                    animate={{
                      opacity: [0, 1, 1, 1, 0],
                      backgroundImage: [
                        "linear-gradient(transparent 30%, transparent)",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                      ],
                      filter: "blur(20px)",
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className="absolute left-0 top-0 -z-10 h-full w-full "
                  ></motion.div>
                </motion.div>
                <div className="relative h-0.5 w-16 bg-slate-900">
                  <motion.span
                    initial={{ translateY: "-50%", translateX: "100%" }}
                    animate={{
                      translateX: ["400%", "-400%"],

                      transition: {
                        repeat: Infinity,
                        delay: 0.5,
                        duration: 2,
                      },
                    }}
                    className="absolute right-0 top-1/2 h-full w-6 -translate-y-1/2 bg-gradient-to-l from-transparent to-blue-500"
                  ></motion.span>
                </div>
                <div className="relative h-0.5 w-16 overflow-hidden bg-slate-900">
                  <motion.span
                    initial={{ translateY: "-50%", translateX: "-100%" }}
                    animate={{
                      translateX: ["-400%", "400%"],
                      transition: {
                        repeat: Infinity,
                        delay: 0.5,
                        duration: 2,
                      },
                    }}
                    className="absolute left-0 top-1/2 h-full w-6 -translate-y-1/2 bg-gradient-to-r from-transparent to-blue-500"
                  ></motion.span>
                </div>
                <motion.div className="relative z-20 min-w-[196px] rounded-lg border border-white/20 bg-black p-2">
                  <div className="border-effect__top rigth-0 absolute -top-0.5 h-0.5 w-20"></div>
                  <motion.p
                    animate={{
                      backgroundClip: "text",
                      // -webkit-background-clip: text;
                      // -webkit-text-fill-color: transparent;
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: [
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                      ],
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className=" animate-wiggle text-shadow__desktop title-name relative z-30 w-full text-2xl font-bold tracking-widest text-white"
                  >
                    BACKEND
                  </motion.p>
                  <motion.div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black"></motion.div>
                  <motion.div
                    animate={{
                      opacity: [0, 1, 1, 1, 0],
                      backgroundImage: [
                        "linear-gradient(transparent 30%, transparent)",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                        "linear-gradient(rgb(255 43 43) 30%, rgb(255, 165, 0))",
                      ],
                      filter: "blur(20px)",
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className="absolute left-0 top-0 -z-10 h-full w-full "
                  ></motion.div>
                </motion.div>
              </motion.div>
              <div className="flex -translate-y-6 flex-col items-center justify-center">
                <div className="bottom-0-0 relative h-[3.8rem] w-0.5 overflow-hidden bg-slate-900">
                  <motion.span
                    initial={{ translateY: "-100%" }}
                    animate={{
                      translateY: "300%",
                      transition: {
                        repeat: Infinity,
                        duration: 2,
                        delay: 5.8,
                        repeatDelay: 10,
                      },
                    }}
                    className="absolute left-0 top-0 h-6 w-full -translate-y-full bg-gradient-to-b from-transparent to-blue-500"
                  ></motion.span>
                </div>
                <motion.div className="relative z-20 min-w-[196px] rounded-lg border border-white/20 bg-black p-2">
                  <div className="border-effect__top rigth-0 absolute -top-0.5 h-0.5 w-20"></div>

                  <motion.p
                    animate={{
                      backgroundClip: "text",
                      // -webkit-background-clip: text;
                      // -webkit-text-fill-color: transparent;
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: [
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(to bottom, #fff 30%, hsla(0, 0%, 100%, 0.5))",
                      ],
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className=" animate-wiggle text-shadow__desktop title-name relative z-30 w-full text-2xl font-bold tracking-widest text-white"
                  >
                    FULLSTACK
                  </motion.p>
                  <motion.div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black"></motion.div>
                  <motion.div
                    animate={{
                      opacity: [0, 1, 1, 1, 0],
                      backgroundImage: [
                        "linear-gradient(transparent 30%, transparent)",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                        "linear-gradient(rgb(0, 225, 219) 30%, rgb(0, 98, 255))",
                      ],
                      filter: "blur(20px)",
                      transition: {
                        duration: 4,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                    className="absolute left-0 top-0 -z-10 h-full w-full "
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
