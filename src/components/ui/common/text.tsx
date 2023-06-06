import { VariantProps, cva, cx } from "class-variance-authority";
import { Merriweather, Public_Sans } from "next/font/google"
import Link from "next/link";
import { HTMLAttributes, createElement } from "react";

const headingFont = Merriweather({ subsets: ["latin"], weight: "700" })
const baseFont = Public_Sans({ subsets: ["latin"] })

const variants = cva(["transition-all leading-normal"], {
  variants: {
    type: {
      h1: ["text-2xl font-bold leading-loose text-app-text", headingFont.className],
      h2: ["text-xl font-semibold text-app-text leading-relaxed", headingFont.className],
      h3: ["text-lg font-medium text-app-text-alter", baseFont.className],

      p: ["text-app-text", baseFont.className],
      a: ["underline text-app-text-alter", baseFont.className]
    },
  }
})

type TextProps = Partial<HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLHeadingElement>> & VariantProps<typeof variants>

export function Text({ type, className, ...props }: TextProps) {
  return createElement(type === "a" ? Link : type as string, { className: cx(variants({ type }), className), ...props as any })
}