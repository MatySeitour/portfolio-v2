import TechnologyItem from "./TechnologyItem";

export default function SecondRing() {
  return (
    <div className="relative left-1/2 top-1/2 z-10 h-96 w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20 min-[570px]:h-[25rem] min-[570px]:w-[30rem] min-[570px]:max-w-xl md:h-[30rem] md:w-[42rem] md:max-w-none">
      <TechnologyItem
        gradientColor="from-react"
        svgImage={"mysql.svg"}
        className="-left-6 top-1/2 -translate-y-1/2"
        name="mysql"
      />
      <TechnologyItem
        gradientColor="from-express"
        svgImage={"express.svg"}
        className="-right-6 top-1/2 -translate-y-1/2 md:-right-10"
        name="express"
      />
      <TechnologyItem
        gradientColor="from-golang"
        svgImage={"golang.svg"}
        className="-bottom-10 left-14 -translate-x-1/2 -translate-y-1/2 min-[570px]:left-28 md:-bottom-10 "
        name="golang"
      />
      <TechnologyItem
        gradientColor="from-node"
        svgImage={"node.svg"}
        className="left-14 top-10 -translate-x-1/2 -translate-y-1/2 min-[570px]:left-28 md:left-24 md:top-16 "
        name="nodejs"
      />
      <TechnologyItem
        gradientColor="from-postgresql"
        svgImage={"postgresql.svg"}
        className="-right-6 top-9 -translate-x-1/2 -translate-y-1/2 min-[570px]:right-14 md:right-10 md:top-16 "
        name="postgresql"
      />
      <TechnologyItem
        gradientColor="from-docker"
        svgImage={"docker.svg"}
        className="-bottom-10 right-0 -translate-x-1/2 -translate-y-1/2 md:-bottom-10 md:right-12 "
        name="docker"
      />
      <TechnologyItem
        gradientColor="from-prisma"
        svgImage={"prisma.svg"}
        className="-bottom-[92px] right-1/2 -translate-y-1/2 translate-x-1/2 "
        name="prisma"
      />
      <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-title bg-clip-text text-2xl font-bold text-transparent">
        Backend
      </div>
    </div>
  );
}
