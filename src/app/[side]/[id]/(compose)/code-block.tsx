"use client"

import Prism from "prismjs"
import { ReactNode, useEffect } from "react"

import "./dracula-prism.css";
import { cx } from "class-variance-authority";

export const CodeBlock = ({ children, language }: { children: ReactNode, language: string }) => {

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  console.log(language)

  return (
    <code className={cx(`language-${language ?? "javascript"}`)}>
      {children}
    </code>
  )
}