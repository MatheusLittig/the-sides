import Image from "next/image";
import { Text } from "../ui/common/text";

export function About() {
  return (
      <div className="w-full flex flex-col items-start gap-8 z-10 mt-8">
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
      </div>
  )
}