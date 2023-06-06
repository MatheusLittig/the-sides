import Image from "next/image";
import { Text } from "../ui/common/text";

export function About() {
  return (
    <main className="relative w-full overflow-x-hidden flex flex-col items-center h-64 before:absolute before:w-screen before:h-full before:content-app-bg-gradient before:bg-gradient-to-t before:bottom-0 before:left-0 before:from-app-bg-gradient before:to-transparent">
      <div className="max-w-screen-md w-full flex flex-col items-start gap-8 z-10">
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
    </main>
  )
}