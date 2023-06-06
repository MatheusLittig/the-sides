import { VariantProps, cva } from "class-variance-authority"

const variants = cva("w-fit group flex items-center", {
  variants: {
    size: {
      md: ["h-10 px-2 py-1 rounded gap-2"]
    },

    full: {
      true: ["w-full"]
    },

    variant: {
      default: ["bg-app-alter-bg"]
    }
  },

  defaultVariants: {
    size: "md",
    variant: "default",
  }
})

const inputVariants = cva("w-full h-full bg-transparent outline-none", {
  variants: {
    variant: {
      default: ["text-app-text placeholder:text-app-text-alter"]
    }
  }
})

type InputProps = Partial<React.InputHTMLAttributes<HTMLInputElement>> & VariantProps<typeof variants> & {
  prefix?: React.ReactNode
  sufix?: React.ReactNode
}

export function Input({ size, variant, full, sufix, prefix, ...props }: InputProps) {
  return (
    <div className={variants({ size, variant, full })}>
      {prefix ?? null}
      <input className={inputVariants({ variant })} {...props} />
      {sufix ?? null}
    </div>
  )
}