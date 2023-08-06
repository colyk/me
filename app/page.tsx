import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/ui/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        priority
        className={"lemon-image"}
        alt="lemon bacground image"
        src={"me/lemons.png"}
        width={510}
        height={348}
      ></Image>
      <Image
        className={styles.logo}
        alt="logo icon"
        src={"me/icon.svg"}
        width={45}
        height={45}
      ></Image>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <h1 id="projects">Projects</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 id="photos">Photos</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
      </div>
      <br />
      <br />
      <br />
      <br />

      <h1 id="blog">Blog</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        magni sed impedit sequi, eius nam. Porro necessitatibus labore adipisci
        fugit officiis ab sunt veniam, rerum, dolore vel voluptate delectus
        laborum.
      </div>
    </main>
  );
}
