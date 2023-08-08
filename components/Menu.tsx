import Link from "next/link";
import Circle from "../ui/Circle";
import Underline from "@/ui/Underline";

const MENU_ITEMS = [
  {
    href: "#as-programmer",
    title: "Me as a programer",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#as-person",
    title: "Me as a person",
  },
];

export default function Menu() {
  const items = MENU_ITEMS.map((menuItem) => (
    <MenuItem key={menuItem.href}>
      <Link
        className="whitespace-nowrap text-xl leading-9 tracking-wide"
        href={menuItem.href}
      >
        {menuItem.title}
        <Underline />
      </Link>
    </MenuItem>
  ));
  return (
    <nav style={{ marginTop: -40 }}>
      <ul className="flex flex-col items-end">
        <MenuItem key="circle">
          <Circle />
        </MenuItem>
        {items}
      </ul>
    </nav>
  );
}

function MenuItem({ children }: any) {
  return <li className="menu">{children}</li>;
}
