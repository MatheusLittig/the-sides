import { cx } from "class-variance-authority"
import { ComponentProps, HTMLAttributes } from "react"
import { Text } from "../common/text"

const Container = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLDivElement>, "children" | "onClick" | "className">>) => {
  return (
    <div className={cx("w-full flex items-start cursor-pointer", className)} {...props} />
  )
}

const Date = ({ day, month }: { day: string, month: string }) => {
  return (
    <div className="-rotate-90 -ml-4 mt-6 relative w-24" >
      <span className="text-cod-gray-900 w-24 text-end font-black text-4xl" >{month}</span>
      <span className="absolute text-lg bottom-0 -right-2 text-cod-gray-400 font-bold">{day}</span>
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
    <Text type="h2" className={cx("group-hover:text-opacity-75", className)} {...props} />
  )
}

const Description = ({ className, ...props }: Partial<Pick<HTMLAttributes<HTMLHeadingElement>, "children" | "onClick" | "className">>) => {
  return (
    <Text type="p" className={cx("text-app-text-alter group-hover:text-opacity-75", className)} {...props} />
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

export { Post }

