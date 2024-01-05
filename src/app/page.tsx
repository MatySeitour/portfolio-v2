import Banner from "./components/Banner";

import Nav from "./components/Nav";
import { inter } from "./assets/fonts";
import Experience from "./components/Experience";
import { useEffect } from "react";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main
      className={`overflow-hidden ${inter.className} flex flex-col items-center justify-center`}
    >
      <Nav />
      <div className="fixed top-0 h-full w-full"></div>
      <div className="w-full max-w-7xl">
        <Banner />
      </div>
      <Experience />
      <div className="cursor"></div>
      <Skills />
    </main>
  );
}
