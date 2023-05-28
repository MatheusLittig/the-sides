import { cx } from "class-variance-authority"
import { ComponentProps, HTMLAttributes } from "react"
import { Merriweather } from "next/font/google"

const title = Merriweather({
  subsets: ["latin"],
  weight: "700"
})

const Container = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLDivElement>, "children" | "onClick" | "className">>) => {
  return (
    <div className={cx("w-full flex items-start cursor-pointer", className)} {...props} />
  )
}

const Date = ({ day, month }: { day: string, month: string }) => {
  return (
    <div className="-rotate-90 -ml-4 mt-6 relative w-24" >
      <span className="text-cod-gray-700 w-24 text-end font-black text-4xl" >{month}</span>
      <span className="absolute text-lg bottom-0 -right-2 text-cod-gray-300 font-bold">{day}</span>
    </div>
  )
}

const Content = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLDivElement>, "children" | "onClick" | "className">>) => {
  return (
    <div className={cx("group", className)} {...props} />
  )
}

const Title = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLHeadingElement>, "children" | "onClick" | "className">>) => {
  return (
    <h1 className={cx("text-xl text-cod-gray-100 transition-all group-hover:text-opacity-75", title.className, className)} {...props} />
  )
}

const Description = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLHeadingElement>, "children" | "onClick" | "className">>) => {
  return (
    <p className={cx("text-cod-gray-400 transition-all group-hover:text-opacity-75", className)} {...props} />
  )
}

type PostComponent = {
  (props: ComponentProps<typeof Container>): JSX.Element;
  Content: (props: ComponentProps<typeof Content>) => JSX.Element;
  Date: (props: ComponentProps<typeof Date>) => JSX.Element;
  Title: (props: ComponentProps<typeof Title>) => JSX.Element;
  Description: (props: ComponentProps<typeof Description>) => JSX.Element;
}

const Post = Container as PostComponent
Post.Date = Date
Post.Title = Title
Post.Description = Description
Post.Content = Content

export default Post

