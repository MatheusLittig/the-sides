"use client"

import { cx } from "class-variance-authority"
import Prism from "prismjs"
import { useEffect, useState } from "react"


export function CodeBlock({ code, language = "javascript" }: { code: any, language?: string }) {
  const [copied, setCopied] = useState(false)


  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre style={{ marginBottom: "2rem" }} className="border border-app-alter-bg p-4 rounded-lg relative flex flex-col gap-3">
      <ul className="inline-flex gap-1">
        {[1, 2, 3].map(i => (
          <li key={i} className="w-3 h-3 rounded-full bg-app-alter-bg" />
        ))}
      </ul>
      <code className={cx(`language-${language}`)} >
        {code}
      </code>
    </pre>
  )
}