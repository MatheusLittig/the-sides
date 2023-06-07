"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { cx } from "class-variance-authority";

const PAGES = [
  { href: "/", label: "About" },
  { href: "/geek", label: "Geek" },
  { href: "/tech", label: "Tech" },
  { href: "/life", label: "Life" },
]

export function NavBar() {
  const path = usePathname()

  console.log(path)

  return (
    <header className="w-full h-20 grid grid-cols-4 gap-4">
      <span className="col-span-1 w-full h-full flex items-center justify-start">
        <Image src="https://pbs.twimg.com/profile_images/1661501116838735873/1Qxg7r40_400x400.jpg" height={44} width={44} alt="The Sides" style={{ borderRadius: "50%" }} />
      </span>

      <nav className="col-span-3 w-full h-full flex items-center justify-end">
        <ul className="flex items-center justify-center">
          {PAGES.map(i => (
            <li
              key={i.href}
              className={cx(
                "h-10 w-16 transition-all flex items-center justify-center py-1 px-3 rounded hover:text-cod-gray-300 cursor-pointer",
                i.href !== "/" && path.includes(i.href) && "bg-app-alter-bg",
                path === "/" && path === i.href && "bg-app-alter-bg"
              )}
            >
              <Link href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}