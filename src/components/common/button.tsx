import { VariantProps, cva, cx } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const variants = cva("w-fit group flex items-center justify-center gap-1 transition-all border", {
  variants: {
    size: {
      md: ["h-9 rounded px-2"]
    },

    variant: {
      default: ["bg-cod-gray-100 text-cod-gray-50 border-cod-gray-100", "hover:bg-cod-gray-100"]
    },

    type: {
      filled: [
        "text-cod-gray-950",
        "-translate-x-1 -translate-y-1",
        "active:translate-x-0 active:translate-y-0",
      ],
      transparent: ["bg-opacity-0 border-none", "hover:bg-opacity-10"],
      link: ["px-0 bg-opacity-0 text-opacity-100 border-none", "hover:text-opacity-75 hover:bg-opacity-0"]
    },

    shape: {
      square: [""]
    }
  },
  compoundVariants: [
    {
      size: "md",
      shape: "square",
      class: "w-9"
    }
  ],

  defaultVariants: {
    size: "md",
    variant: "default",
    type: "filled"
  }
})

type ButtonProps = VariantProps<typeof variants> & Partial<Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "className" | "disabled">>

export default function Button({ size, type = "filled", shape, variant, className, ...rest }: ButtonProps) {
  return (
    <div className="relative">
      {type !== "filled" ? null : <span className="absolute -z-10 top-0 left-0 w-full h-full bg-cod-gray-950 border border-cod-gray-100 rounded" />}
      <button className={cx(variants({ size, type, shape, variant }), className)} {...rest}>
        {rest.children}
      </button>
    </div>
  )
}