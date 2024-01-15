"use client";

import Image from "next/image";

export default function TechnologyItem({
  svgImage,
  className,
  name,
  gradientColor,
}: {
  svgImage: string;
  className: string;
  name: string;
  gradientColor: string;
}) {
  return (
    <div
      className={`absolute z-10 flex h-20 flex-col items-center justify-center rounded-[50%] ${
        className && className
      }`}
    >
      <div
        className={`bg-gradient-to-45  ${gradientColor} relative h-14 w-14 rounded-[50%] bg-black p-[10px]`}
      >
        <Image
          src={`/${svgImage}`}
          alt={name}
          className="h-full w-full"
          width={400}
          height={400}
        />
        <div className="effect-radiant radiant-gray !pb-[0px] !pl-[0px]"></div>
        <div
          className={`shadow-effect__10 absolute left-0 top-0 -z-10 h-full w-full rounded-[50%] bg-gradient-icon  transition-all  from-${gradientColor} to-${gradientColor}`}
        ></div>
      </div>
      <p className="text-white">{name}</p>
    </div>
  );
}
