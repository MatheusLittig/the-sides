"use client"

import Prism from "prismjs"
import { ReactNode, useEffect } from "react"

import "./dracula-prism.css";
import { cx } from "class-variance-authority";

export const CodeBlock = ({ children }: { children: ReactNode }) => {

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <code className={cx(`language-javascript`, "bg-app-alter-bg")}>
      {children}
    </code>
  )
}