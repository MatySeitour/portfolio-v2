import ContactBanner from "./ContactBanner";

export default function Banner() {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center gap-14">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-shadow__desktop title-name w-auto overflow-hidden text-6xl font-bold tracking-widest text-black">
          MATIAS SEITOUR
        </h1>
        <h2 className="text-shadow__desktop title-name w-auto overflow-hidden text-2xl font-bold tracking-widest text-black">
          FullStack developer {"(or so I think)"}
        </h2>
      </div>
      <div>
        <ContactBanner />
      </div>
    </div>
  );
}
