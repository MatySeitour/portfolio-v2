import Banner from "./components/Banner";

import Nav from "./components/Nav";
import { inter } from "./assets/fonts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import IluminationEffect from "./components/IluminationEffect";

export default function Home() {
  return (
    <main
      className={`overflow-hidden ${inter.className} flex flex-col items-center justify-center`}
    >
      <Nav />
      <div className="fixed top-0 -z-10 h-full w-full bg-[#000a]"></div>

      <div className="w-full max-w-[90rem]">
        <Banner />
        <Divider />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
      <div className="cursor"></div>
    </main>
  );
}
