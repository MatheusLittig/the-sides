import postService from "@/services/posts";
import Block from "./(compose)/render-block";
import Image from "next/image";
import { Merriweather } from "next/font/google"
import { cx } from "class-variance-authority";

const title = Merriweather({
  subsets: ["latin"],
  weight: "700"
})

export default async function PostContent({ params }: { params: { id: string } }) {
  const content = await postService("the_sides").fetchById(params.id)

  return (
    <main className="w-full">
      <article>
        {content.cover?.file.url && (
          <figure style={{ WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,.5), transparent)" }} className="relative border border-white w-full h-44 rounded-xl">
            <Image src={content.cover.file.url} alt={String(content.properties.Name)} fill style={{ objectFit: "cover", objectPosition: "center", borderRadius: "inherit" }} />
          </figure>
        )}

        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <span>{new Date(content.created_time).toLocaleDateString("en-US", { dateStyle: "medium" })}</span>
          </div>
          <h1 className={cx("text-4xl font-bold", title.className)}>{content.title}</h1>
        </header>

        <section className="mt-9">
          {content.blocks.map((block) => Block({ block }))}
        </section>
      </article>
    </main>
  )
}