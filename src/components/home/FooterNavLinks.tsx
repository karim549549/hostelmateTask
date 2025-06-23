import Link from "next/link";

const defaultNavLinks = [
  { href: "/", label: "About us" },
  { href: "/", label: "Services" },
  { href: "/", label: "Use Cases" },
  { href: "/", label: "Pricing" },
  { href: "/", label: "Blog" },
];

export default function FooterNavLinks({ className = "", color = "white", underline = true, navLinks }: { className?: string, color?: "black" | "white", underline?: boolean, navLinks?: { href: string, label: string }[] }) {
  const links = navLinks || defaultNavLinks;
  return (
    <ul className={`flex gap-[20px] ${color === "black" ? "text-black" : "text-white"} ${className}`}>
      {links.map((link) => (
        <li
          key={link.label}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Link href={link.href} className={underline ? "underline" : ""}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
} 