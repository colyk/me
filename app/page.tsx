import Image from "next/image";
import Menu from "@/components/Menu";
import Circle from "@/ui/Circle";

export default function Home() {
  return (
    <main>
      <Image
        priority
        alt="lemon bacground image"
        src={"/me/lemons.png"}
        width={510}
        height={348}
      ></Image>
      <Image
        alt="logo icon"
        src={"/me/icon.svg"}
        width={45}
        height={45}
        className="absolute top-2 right-14"
      ></Image>

      <div className="flex justify-between mx-16">
        <Greeting />
        <Menu />
      </div>
      <MeAsProgrammer />
      <Projects />
      <MeAsPerson />

    </main>
  );
}

function Greeting() {
  return (
    <div className="flex flex-col mt-8">
      <div className="text-black text-6xl tracking-wider">
        I am Mykola Yurchenko
      </div>
      <div className="text-black text-2xl tracking-wide mt-2 whitespace-nowrap">
        I write python code.
      </div>
      <div className="text-black text-2xl tracking-wide whitespace-nowrap">
        Make excellent UI.
      </div>
      <div className="text-black text-2xl tracking-wide whitespace-nowrap">
        Solve complex problems.
      </div>
    </div>
  );
}

function MeAsProgrammer() {
  return <PageBlock title="Me as a programmer" styles="mt-52"></PageBlock>;
}

function Projects() {
  return <PageBlock title="Projects"></PageBlock>;
}
function MeAsPerson() {
  return <PageBlock title="Me as a person"></PageBlock>;
}

function PageBlock({ title, children, styles }: any) {
  if (styles) {
    styles = " " + styles;
  } else {
    styles = "";
  }
  return (
    <div className={"flex justify-between mx-16 " + styles}>
      <div className="flex items-end">
        <Circle />
        <div className="ml-10 text-xl leading-9">{title}</div>
      </div>
      {children}
    </div>
  );
}
