"use client";

// components ----------------
import ContactItem from "./ContactItem";
import { motion } from "framer-motion";

// contact items data ----------------
import { contactItems } from "../utils/contact";

// animations ----------------
import { contactContainer } from "../utils/animations/animations";

export default function ContactBanner() {
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
