export default function EffectBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full">
      <div
        className={`relative top-0 flex h-full w-full place-items-center before:absolute before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:rounded-full after:absolute after:z-0 after:h-40 after:w-[34rem] after:-rotate-12  after:bg-gradient-conic after:from-black/100 after:via-black/70 after:to-black after:blur-2xl after:content-[''] ${
          className && className
        }`}
      />
    </div>
  );
}
