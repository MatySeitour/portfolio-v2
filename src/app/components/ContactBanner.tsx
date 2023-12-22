"use client";

import { contactItems } from "../utils/contact";
import ContactItem from "./ContactItem";

export default function ContactBanner() {
  return (
    <div className="relative h-auto w-full">
      <ul className="flex w-full items-center justify-center gap-8">
        {contactItems.map((contactItem) => (
          <ContactItem
            key={contactItem.name}
            image={contactItem.image}
            link={contactItem.link}
            name={contactItem.name}
          />
        ))}
      </ul>
    </div>
  );
}
