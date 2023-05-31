"use client"

import Button from "@/components/common/button"
import { Copy } from "lucide-react"
import { useEffect, useState } from "react"

export const CopyBtn = ({ content }: { content: string }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    if (text !== "") {
      setTimeout(() => {
        setText("")
      }, 1500);
    }
  }, [text])

  return (
    <Button
      size="sm"
      type="transparent"
      className="absolute top-4 right-4 font-sans text-app-text-alter z-10"
      onClick={() => {
        navigator.clipboard.writeText(content)
        setText("Copied!")
      }}
    >
      {text === "" ? <Copy size={18} className="text-app-text-alter" /> : text}
    </Button>
  )
}