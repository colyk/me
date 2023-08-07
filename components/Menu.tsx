import Link from "next/link";
import Circle from "../ui/Circle";

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
  {
    href: "#blog",
    title: "Blog",
  },
];

export default function Menu() {
  const items = MENU_ITEMS.map((menuItem) => (
    <MenuItem key={menuItem.href}>
      <Link href={menuItem.href}>{menuItem.title}</Link>
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
  return (
    <li className="text-xl leading-9 whitespace-nowrap tracking-wide">
      {children}
    </li>
  );
}
