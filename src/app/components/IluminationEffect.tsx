export default function IluminationEffect({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <span className={`banner ${className && className}`}></span>
    </>
  );
}
