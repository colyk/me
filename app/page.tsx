import Image from "next/image";
import Menu from "@/components/Menu";
import Circle from "@/ui/Circle";
import LanguagePicker from "@/components/LanguagePicker";
import classNames from "classnames";

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
      <Logo />
      <div className="flex justify-between mx-24">
        <Greeting />
        <Menu />
      </div>
      <MeAsProgrammer />
      <Projects />
      <MeAsPerson />
    </main>
  );
}

function Logo() {
  return (
    <div className="flex items-end absolute top-4 right-24">
      <LanguagePicker />
      <Image
        alt="logo icon"
        src={"/me/icon.svg"}
        width={45}
        height={45}
      ></Image>
    </div>
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
  return (
    <PageBlock
      menuId="as-programmer"
      title="Me as a programmer"
      blockStyles="mt-52"
    >
      <div className="mt-8 text-justify">
        I am a fun guy, gnash my teeth in my sleep. I have lumps in my belly
        button that my girlfriend, who made this site, cleans up. I love
        philosophy. If you hire me, I will talk about philosophy to all
        employees. In three months they will fill up and retire with me, and we
        will go to Tibet to seek enlightenment. :)
      </div>
    </PageBlock>
  );
}

function Projects() {
  return (
    <PageBlock menuId="projects" title="Projects" >
      <div className="mt-8 text-justify">
      I am a fun guy, gnash my teeth in my sleep. I have lumps in my belly
        button that my girlfriend, who made this site, cleans up. I love
        philosophy. If you hire me, I will talk about philosophy to all
        employees. In three months they will fill up and retire with me, and we
        will go to Tibet to seek enlightenment. :)
      </div>
    </PageBlock>
  );
}
function MeAsPerson() {
  return (
    <PageBlock menuId="as-person" title="Me as a person" >
      <div className="mt-8 text-justify">
      I am a fun guy, gnash my teeth in my sleep. I have lumps in my belly
        button that my girlfriend, who made this site, cleans up. I love
        philosophy. If you hire me, I will talk about philosophy to all
        employees. In three months they will fill up and retire with me, and we
        will go to Tibet to seek enlightenment. :)
      </div>
      <Image alt="Mykola Yurchenko photo" src="/me/photo1.jpeg" width={620} height={427}></Image>
      <div className="mt-8 text-justify">
      I am a fun guy, gnash my teeth in my sleep. I have lumps in my belly
        button that my girlfriend, who made this site, cleans up. I love
        philosophy. If you hire me, I will talk about philosophy to all
        employees. In three months they will fill up and retire with me, and we
        will go to Tibet to seek enlightenment. :)
      </div>
    </PageBlock>
  );
}

function PageBlock({ menuId, title, children, blockStyles }: any) {
  return (
    <div
      id={menuId}
      className={classNames("flex flex-col justify-between mx-24 mb-16", blockStyles)}
    >
      <div className="flex items-end w-full">
        <Circle />
        <div className="ml-10 text-xl leading-9">{title}</div>
      </div>
      {children}
    </div>
  );
}
