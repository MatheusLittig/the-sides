import { cx } from "class-variance-authority";

export default function Divider({ className }: { className: string }) {
  return (
    <span className={cx("flex items-center gap-1", className)}>
      <div className="w-1 h-1 rounded-full bg-app-alter-bg" />
      <div className="w-1 h-1 rounded-full bg-app-alter-bg" />
      <div className="w-1 h-1 rounded-full bg-app-alter-bg" />
    </span>
  )
}