import { Public_Sans } from 'next/font/google'
import { cx } from "class-variance-authority"
import "./globals.css"
import NavBar from '@/components/layouts/navbar'

const inter = Public_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'The Sides',
  description: 'Matheus personal blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "max-w-screen-md bg-cod-gray-950 m-[0_auto] text-cod-gray-100")}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
