"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import { Sun } from "lucide-react"
import { usePathname } from "next/navigation"
import { cx } from "class-variance-authority";

const pages = [
  { href: "/geek", label: "Geek" },
  { href: "/tech", label: "Tech" },
  { href: "/life", label: "Life" }
]

export default function NavBar() {
  const path = usePathname()

  return (
    <header className="w-full h-20 grid grid-cols-4 gap-4">
      <span className="col-span-1 w-full h-full flex items-center justify-start">
        <Image src="the-sides-dark.svg" height={44} width={88} alt="The Sides" />
      </span>

      <nav className="col-span-2 w-full h-full flex items-center justify-center">
        <ul className="flex items-center justify-center">
          {pages.map(i => (
            <li
              key={i.href}
              className={cx(
                "h-10 w-16 transition-all flex items-center justify-center py-1 px-3 rounded hover:text-cod-gray-300 cursor-pointer",
                path.includes(i.href) && "bg-app-alter-bg"
              )}
            >
              <Link href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="col-span-1 w-full h-full flex items-center justify-end gap-8">
        <Button shape="square"><Sun size={18} /></Button>
      </section>
    </header>
  )
}