import { spikeTips } from "@/content/spike-tip"
import { cx } from "class-variance-authority"
import Image from "next/image"
import { Merriweather } from "next/font/google"

const title = Merriweather({
  subsets: ["latin"],
  weight: "700",
  style: "italic"
})

const desc = Merriweather({
  subsets: ["latin"],
  weight: "300"
})


export default function DailyTip() {

  const spikeTipForTheDay = spikeTips[Math.floor(Math.random() * spikeTips.length)]

  return (
    <span className="w-full flex items-center gap-4">
      <div style={{ WebkitMask: "linear-gradient(to bottom, #fff, #fff, #fff, #fff, transparent, transparent)" }} className="w-20 h-44 relative">
        <Image src="/spike.png" alt="Spike daily tip" fill style={{ objectFit: "contain" }} />
      </div>

      <div className={cx(desc.className, "flex flex-1 flex-col gap-2")}>
        <p className="">Daily Spike's tip</p>
        <h2 className={cx(title.className, "font-semibold text-xl")}>{`"${spikeTipForTheDay}"`}</h2>
      </div>
    </span>
  )
}