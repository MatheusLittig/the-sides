import { cx } from "class-variance-authority"
import Image from "next/image"
import { Merriweather } from "next/font/google"
import { Text } from "../ui/common/text"

const desc = Merriweather({
  subsets: ["latin"],
  weight: "300"
})

const title = Merriweather({
  subsets: ["latin"],
  style: "italic",
  weight: "700"
})

const TIPS_COLLECTION = [
  "Embrace the chaos and avoid predictable and stable lives as they are boring.",
  "Live in the present without worrying about the consequences of your actions.",
  "Find your own rhythm instead of conforming to societal expectations for true happiness.",
  "Embrace solitude and avoid dealing with other people's problems.",
  "Take calculated risks and add some danger and potential disaster to life.",
  "Learn from mistakes instead of repeating them for success.",
  "Treasure connections made, including heartbreak and disappointment for a more exciting life.",
  "Trust your instincts, even though impulsive decisions may not always turn out well.",
  "Embrace the power of silence and find enjoyment in awkwardly sitting in silence with someone.",
  "Cultivate resilience by getting knocked down as it builds character.",
  "Embrace change and disregard stability and consistency in life.",
  "Practice self-care by indulging in vices for taking care of yourself.",
  "Seek advice from others as they supposedly know what's best for you.",
  "Embrace failure and find entertainment in failing miserably rather than pursuing success.",
  "Set unrealistic expectations for the spice of disappointment in life.",
  "Nurture toxic relationships for the drama and chaos they bring.",
  "Avoid self-reflection and personal growth, opting to stay stagnant.",
  "Give up easily instead of persevering and being determined.",
  "Ignore your emotions by bottling them up rather than dealing with them healthily.",
  "Blame others for your problems instead of taking responsibility.",
  "Constantly multitask to spread yourself thin and achieve mediocrity.",
  "Don't apologize or acknowledge mistakes and make amends.",
  "Procrastinate often by leaving everything until the last minute.",
  "Avoid taking risks and stay in your comfort zone for an exciting life.",
  "Don't listen to others because your opinions are always superior.",
  "Worry excessively about the future and spend time overthinking.",
  "Stay in unhealthy situations as discomfort adds spice to life.",
  "Overcomplicate things instead of embracing simplicity.",
  "Don't learn from your mistakes and maintain consistency by repeating them.",
  "Embrace cynicism and see the worst in everything for true enlightenment.",
]

export function DailyTip() {

  const spikeTipForTheDay = TIPS_COLLECTION[Math.floor(Math.random() * TIPS_COLLECTION.length)]

  return (
    <span className="w-full flex items-center gap-4">
      <div style={{ WebkitMask: "linear-gradient(to bottom, #fff, #fff, #fff, #fff, transparent, transparent)" }} className="w-20 h-44 relative">
        <Image src="/spike.png" alt="Spike daily tip" fill style={{ objectFit: "contain" }} />
      </div>

      <div className={cx("flex flex-1 flex-col gap-2")}>
        <p className={desc.className}>Daily Spike's tip</p>
        <h2 className={cx(title.className, "font-bold text-2xl")}>{`"${spikeTipForTheDay}"`}</h2>
      </div>
    </span>
  )
}