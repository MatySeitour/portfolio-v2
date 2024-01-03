import Banner from "./components/Banner";

import Nav from "./components/Nav";
import { inter } from "./assets/fonts";
import About from "./components/About";
import { useEffect } from "react";

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
      <About />
      <div className="h-screen"></div>
      <div className="cursor"></div>
    </main>
  );
}
