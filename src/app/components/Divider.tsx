export default function Divider() {
  return (
    <div className="relative h-40 pt-20">
      <div className="border-effect__divider absolute bottom-0 right-1/2 h-[1.5px] w-full translate-x-1/2">
        <div className="banner radiant-divider absolute -top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </div>
  );
}
