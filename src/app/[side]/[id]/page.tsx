import Image from "next/image";
import { Merriweather } from "next/font/google"
import { cx } from "class-variance-authority";
import { postService } from "@/services";
import { BlockRender, Button, Divider } from "@/components";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const title = Merriweather({
  subsets: ["latin"],
  weight: "700"
})

const end = Merriweather({
  subsets: ["latin"],
  weight: "700",
  style: "italic"
})

export default async function PostContent({ params }: { params: { id: string, side: string } }) {
  const content = await postService("the_sides").fetchById(params.id)


  return (
    <main className="w-full">
      <Link href={`${params.side}`}>
        <Button type="link" className="mb-4 group transition-all"><ArrowLeft className="transition-all group-hover:-translate-x-1" size={18} /> Back to posts</Button>
      </Link>
      <article className="w-full flex flex-col items-center">
        {content.cover?.file.url && (
          <figure style={{ WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,.5), transparent)" }} className="relative border border-white w-full h-44 rounded-xl">
            <Image src={content.cover.file.url} alt={String(content.properties.Name)} fill style={{ objectFit: "cover", objectPosition: "center", borderRadius: "inherit" }} />
          </figure>
        )}

        <header className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 text-sm">
            <span>{new Date(content.created_time).toLocaleDateString("en-US", { dateStyle: "medium" })}</span>
          </div>
          <h1 className={cx("text-4xl font-bold", title.className)}>{content.title}</h1>
        </header>

        <section className="mt-9">
          {content.blocks.map((block) => BlockRender({ block }))}
        </section>

        <footer className="w-full flex flex-col items-center mt-8">
          <Divider />

          <span className="w-full flex items-center justify-end mt-8">
            <p className={cx(end.className, "text-base")} >SEE YOU SPACE COWBOY...</p>
          </span>
        </footer>
      </article>
    </main>
  )
}