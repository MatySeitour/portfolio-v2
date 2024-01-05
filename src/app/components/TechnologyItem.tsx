"use client";

import { useEffect } from "react";

export default function TechnologyItem({
  IconComponent,
  className,
  name,
}: {
  IconComponent: React.ComponentType<{ className?: string }>;
  className: string;
  name: string;
}) {
  return (
    <div
      className={`skill-item absolute z-10 flex h-16 w-16 flex-col items-center justify-center rounded-[50%] ${
        className && className
      }`}
    >
      <div className="relative h-12 w-12 rounded-[50%] bg-black bg-gradient-nav p-[10px]">
        <IconComponent className="h-full w-full text-white"></IconComponent>
        <div className="effect-radiant radiant-gray"></div>
      </div>
      <div className="radial-effect__bg absolute left-0 top-0 -z-10 h-full w-full"></div>
      <p className="text-white">{name}</p>
    </div>
  );
}

// -left-6 top-1/2 z-10 flex h-16 w-16
