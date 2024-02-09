import Image from "next/image";

export default function ThecnologyProject({
  technologyName,
}: {
  technologyName: string;
}) {
  return (
    <li className="relative flex h-9 w-auto items-center justify-center gap-1 rounded-md bg-gradient-button px-2 pr-2">
      <Image
        alt={technologyName}
        src={`/${technologyName}.svg`}
        width={500}
        height={500}
        className="h-5 w-5"
      />
      <p className="text-sm text-white">{technologyName}</p>
      <div className="effect-radiant radiant-gray z-10 !rounded-lg bg-black !pl-[0.8px]"></div>
    </li>
  );
}
