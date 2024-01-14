import Banner from "./components/Banner";

import Nav from "./components/Nav";
import { inter } from "./assets/fonts";
import Experience from "./components/Experience";
import { useEffect } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import IluminationEffect from "./components/IluminationEffect";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <main
      className={`overflow-hidden ${inter.className} flex flex-col items-center justify-center`}
    >
      <Nav />
      <div className="fixed top-0 -z-10 h-full w-full bg-[#000a]"></div>

      <div className="w-full max-w-7xl">
        <Banner />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
      </div>
      <div className="cursor"></div>
    </main>
  );
}
