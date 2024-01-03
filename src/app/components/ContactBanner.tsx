"use client";

import { contactItems } from "../utils/contact";
import ContactItem from "./ContactItem";
import { motion } from "framer-motion";

export default function ContactBanner() {
  const contactContainer = {
    visible: {
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative h-auto w-full">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={contactContainer}
        className="flex w-full items-center justify-start gap-6"
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
    </div>
  );
}
