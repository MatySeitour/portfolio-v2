import Image from "next/image";
import EffectBackground from "./components/EffectBackground";
import Header from "./components/Header";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="fixed top-0 h-full w-full bg-[#0002]"></div>
      <span className="banner fixed -translate-x-36 -translate-y-1/4 rotate-[200deg]"></span>
      {/* <span className="banner__2"></span> */}
      {/* <Header /> */}
      <Banner />
    </main>
  );
}
