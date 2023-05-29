export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mt-12 w-full grid grid-cols-3 h-44 gap-8">
      {children}

      <section id="section-filters" className="col-span-1 w-full h-full bg-slate-600">
      </section>
    </main>
  )
}
