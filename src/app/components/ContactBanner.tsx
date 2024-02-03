"use client";

// components ----------------
import ContactItem from "./ContactItem";
import { motion } from "framer-motion";

// contact items data ----------------
import { contactItems } from "../utils/contact";

// animations ----------------
import {
  contactContainer,
  subtitleBannerAnimation,
} from "../utils/animations/animations";

import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function ContactBanner() {
  const [copyEmailState, setCopyEmailState] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
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
    }
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
    <div className="relative z-30 flex h-auto w-full flex-col gap-6">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={contactContainer}
        className="flex w-full items-center justify-center gap-6 md:justify-start"
      >
        {contactItems.map((contactItem) => (
          <ContactItem
            key={contactItem.name}
            image={contactItem.image}
            link={contactItem.link}
            name={contactItem.name}
          />
        ))}
      </motion.ul>
      <motion.div
        variants={subtitleBannerAnimation}
        className="flex flex-col items-center gap-4 md:flex-row"
      >
        <div className="relative hidden rounded-lg bg-gradient-button px-4 py-3 text-white md:inline-block">
          <p className="">matias.seitour01@gmail.com</p>
          <div className="border-effect__bottom absolute bottom-[0px] right-1/2 h-[2px] w-full translate-x-1/2"></div>
          <div className="effect-radiant radiant-gray"></div>
        </div>
        <div
          onClick={handleClick}
          className="relative z-30 cursor-pointer rounded-lg bg-gradient-button px-4 py-3 text-white"
        >
          <FaCopy
            className={`absolute z-10 hidden h-6 w-6 md:inline-block ${
              copyEmailState ? `opacity-0` : `opacity-100`
            } transition-all`}
          />
          <p
            className={`inline-block md:hidden ${
              copyEmailState ? `opacity-0` : `opacity-100`
            } transition-all`}
          >
            Copy email
          </p>
          <FaCheck
            onClick={handleClick}
            className={`absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 md:relative md:left-0 md:translate-x-0 md:translate-y-0 ${
              !copyEmailState ? `opacity-0` : `opacity-100`
            } text-green-600 transition-all`}
          />
          <div className="effect-radiant radiant-gray"></div>
        </div>
      </motion.div>
    </div>
  );
}
