import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="h-40 w-full pt-10 md:h-32">
      <div className="relative h-full w-full overflow-hidden px-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:gap-0">
          <p className="order-2 text-sm text-white md:order-1">
            2024 - Casi todos los derechos reservados.
          </p>
          <div className="order-1 flex gap-4 text-sm text-white md:order-1">
            <Link aria-label="contact" href="/">
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link aria-label="contact" href="/">
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link aria-label="contact" href="/">
              {" "}
              <IoMail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="shadow-effect__10 absolute -top-10 right-1/2 z-0 h-20 w-32 translate-x-1/2 rounded-full bg-gray-400/10"></div>
        <div className="border-effect__bottom absolute right-1/2 top-[0px] h-[1px] w-full translate-x-1/2"></div>
      </div>
    </footer>
  );
}
