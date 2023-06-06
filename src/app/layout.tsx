import { cx } from "class-variance-authority"
import { Public_Sans } from "next/font/google"

import "../styles/globals.css"
import "../styles/dracula-prism.css"

import { About, DailyTip, NavBar } from '@/components'

const baseFont = Public_Sans({ subsets: ["latin"] })

export const metadata = {
  title: 'The Sides',
  description: 'A dedicated blog to show my sides related to my presence online',
  icons: {
    icon: "favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(" bg-app-bg m-[0_auto] flex flex-col items-center gap-y-24 text-app-text", baseFont.className)}>
        <div className="max-w-screen-md flex flex-col gap-8">
          <NavBar />
          {children}
        </div>
        <About />
      </body>
    </html>
  )
}
