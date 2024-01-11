import Image from "next/image";

export default function ThecnologyProject({
  technologyName,
}: {
  technologyName: string;
}) {
  return (
    <div className="flex h-9 w-auto items-center justify-center gap-1 rounded-md border border-white/20 px-1 pr-2">
      <Image
        alt="lala"
        src={`/${technologyName}.svg`}
        width={500}
        height={500}
        className="h-6 w-6"
      />
      <p className="text-white">{technologyName}</p>
    </div>
  );
}
