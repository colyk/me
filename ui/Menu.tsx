import Link from "next/link";
import styles from "./Menu.module.css";
import Circle from "./Circle";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                <Circle />
        </li>
    

        <li className={styles.menuItem}>
          <Link href="#projects">Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#photos">Photos</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
