import Image from "next/image";
import Menu from "@/components/Menu";
import Circle from "@/ui/Circle";
import LanguagePicker from "@/components/LanguagePicker";
import classNames from "classnames";
import Link from "next/link";

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
      <div className="mx-32 flex justify-between">
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
    <div className="absolute right-32 top-4 flex items-end">
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
    <div className="mt-8 flex flex-col">
      <div className="text-6xl tracking-wider text-black">
        I am Mykola Yurchenko
      </div>
      <div className="mt-2 whitespace-nowrap text-2xl tracking-wide text-black">
        I write python code.
      </div>
      <div className="whitespace-nowrap text-2xl tracking-wide text-black">
        Make excellent UI.
      </div>
      <div className="whitespace-nowrap text-2xl tracking-wide text-black">
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
      <p className="p mt-8">
        I am a highly motivated and experienced Python Fullstack developer
        passionate about writing efficient and robust code. With over 4 years of
        professional experience, I have developed a strong skillset in
        technologies such as Python, Django, JavaScript, Vue, and MySQL. In
        addition, I have also mentored trainees in Python and frontend
        development, demonstrating my ability to effectively communicate and
        share my knowledge with others. In my spare time, I do self-improvement:
        take courses on Coursera, read books, and write articles on Wikipedia.
      </p>
      <SubHeader text="education" />
      <p className="font-bold">2016 — 2020</p>
      <p className="p">
        Bachelor&apos;s Degree, Computer Science, Lublin University of
        Technology, Poland
      </p>
      <SubHeader text="experience" />
      <p className="font-bold">2023 — present</p>
      <p className="p">Samsung Poland R&D Center</p>
      <p className="p">Software Developer</p>
      <p className="font-bold">2018 — 2023</p>
      <p className="p">Transition Technologies-Software</p>
      <p className="p">Python Fullstack Developer</p>
      <div className="mt-4">
        <Link
          className="mr-12 text-lg font-bold"
          href="https://www.linkedin.com/in/mikolaj-colyk/"
        >
          LinkedIn
        </Link>
        <Link
          className="mr-12 text-lg font-bold"
          href="/resume.pdf"
        >
          Resume
        </Link>
        <Link
          className="text-lg font-bold"
          href="https://github.com/colyk"
        >
          Github
        </Link>
      </div>
    </PageBlock>
  );
}

function Projects() {
  return (
    <PageBlock menuId="projects" title="Projects">
      <div className="flex flex-wrap items-baseline">
        <div className="mt-4 w-1/2 pr-2">
          <ProjectBlock>
            <SubHeader text="My custom header" color="text-violet" />
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              at eius fugit? Fugit, rem iusto? Quidem natus totam eligendi
              voluptates necessitatibus omnis a! Unde, inventore. Reiciendis,
              quas obcaecati. Beatae, inventore.
            </p>
          </ProjectBlock>
          <ProjectBlock>
            <SubHeader text="My custom header" color="text-violet" />
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              at eius fugit? Fugit, rem iusto? Quidem natus totam eligendi
              voluptates necessitatibus omnis a! Unde, inventore. Reiciendis,
              quas obcaecati. Beatae, inventore.
            </p>
          </ProjectBlock>
        </div>
        <div className="mt-4 w-1/2 pl-2">
          <ProjectBlock>
            <SubHeader text="My custom header" color="text-violet" />
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              at eius fugit? Fugit, rem iusto? Quidem natus totam eligendi
              voluptates necessitatibus omnis a! Unde, inventore. Reiciendis,
              quas obcaecati. Beatae, inventore.
            </p>
            <p className="mt-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              at eius fugit? Fugit, rem iusto? Quidem natus totam eligendi
              voluptates necessitatibus omnis a! Unde, inventore. Reiciendis,
              quas obcaecati. Beatae, inventore.
            </p>
          </ProjectBlock>
        </div>
      </div>
    </PageBlock>
  );
}
function MeAsPerson() {
  return (
    <PageBlock menuId="as-person" title="Me as a person">
      <p className="mt-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at
        eius fugit? Fugit, rem iusto? Quidem natus totam eligendi voluptates
        necessitatibus omnis a! Unde, inventore. Reiciendis, quas obcaecati.
        Beatae, inventore.
      </p>
      <Image
        alt="Mykola Yurchenko photo"
        src="/me/photo1.jpeg"
        width={620}
        height={427}
      ></Image>
      <p className="mt-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at
        eius fugit? Fugit, rem iusto? Quidem natus totam eligendi voluptates
        necessitatibus omnis a! Unde, inventore. Reiciendis, quas obcaecati.
        Beatae, inventore.
      </p>
    </PageBlock>
  );
}

function PageBlock({ menuId, title, children, blockStyles }: any) {
  return (
    <div
      id={menuId}
      className={classNames(
        "mx-32 mb-16 flex scroll-mt-4 flex-col justify-between",
        blockStyles
      )}
    >
      <div className="flex w-full items-end">
        <Circle />
        <div className="ml-10 text-xl leading-9">{title}</div>
      </div>
      {children}
    </div>
  );
}

function SubHeader({ text, color }: any) {
  return (
    <span
      className={classNames(
        "mt-4 text-lg font-bold",
        color ? color : "text-green"
      )}
    >
      {text}
    </span>
  );
}

function ProjectBlock({ children }: any) {
  return (
    <div className="my-4 border-2 border-violet bg-white p-4">{children}</div>
  );
}
