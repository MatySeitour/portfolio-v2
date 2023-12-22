import { Tooltip } from "@nextui-org/tooltip";
import { contactItems } from "../utils/contact";
import { Button, Snippet } from "@nextui-org/react";
import { FaCheck, FaCopy } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactType } from "../types/contact";

export default function ContactItem(contactProps: ContactType) {
  const [isCopyLink, setIsCopyLink] = useState(false);

  const handleCopyLink = () => {
    setIsCopyLink(true);
    setTimeout(() => {
      setIsCopyLink(false);
    }, 1000);
  };
  return (
    <li key={contactProps.name}>
      <Tooltip
        content={
          <AnimatePresence initial={false}>
            <div className="min-w-[5rem] cursor-pointer rounded-md border border-white/20 bg-black px-3 py-1 text-slate-300 outline-none">
              {isCopyLink ? (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaCheck className="h-4 w-4 text-white" />
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="!data-[focus-visible=true]:outline-0 !data-focus:outline-0"
                  onClick={handleCopyLink}
                >
                  Copy Link
                </motion.button>
              )}
            </div>
          </AnimatePresence>
        }
      >
        <div className="relative flex min-w-[5rem] cursor-pointer justify-center rounded-2xl border border-white/20 bg-gray-950 px-4 py-2 transition-all hover:bg-zinc-800">
          <div className="border-effect__top rigth-0 absolute -top-0.5 h-0.5 w-16"></div>
          <div className="border-effect__bottom rigth-0 absolute bottom-0 h-[1px] w-16"></div>
          <contactProps.image className="h-8 w-8 text-white"></contactProps.image>
        </div>
      </Tooltip>
    </li>
  );
}
