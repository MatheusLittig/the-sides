import { Text } from "@/components";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  { label: "Twitter", icon: <><Twitter size={16} /></>, url: "https://twitter.com/dev_littig" },
  { label: "LinkedIn", icon: <><Linkedin size={16} /></>, url: "https://www.linkedin.com/in/matheus-littig/" },
  { label: "GitHub", icon: <><Github size={16} /></>, url: "https://github.com/MatheusLittig" },
]

export default function About() {
  return (
    <main className="w-full flex flex-col items-start gap-8 z-10 mt-8">
      <Text type="h1">About LittiNg_</Text>

      <section className="flex items-start gap-4 ">
        <figure className="w-20 h-20 border border-app-alter-bg rounded bg-transparent relative">
          <Image src="/litting.png" fill style={{ objectFit: "contain" }} alt="LittiNg" />
        </figure>
        <div className="flex flex-1 flex-col h-full justify-between leading-tight">
          <p>Hi! Actually, my real name is <strong>Matheus Littig.</strong><br /></p>
          <p>I’m a Frontend developer and writer in my free time. Here you'll find some unpopular opinions and ironic observations from my daily life.</p>
        </div>
      </section>

      <nav id="socials" className="text-app-text-alter">
        <ul className="inline-flex gap-3">
          {SOCIALS.map(i => (
            <li className="flex items-center gap-1 transition-all hover:text-app-text">
              {i.icon}
              <Link href={i.url} target="_blank" >{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}