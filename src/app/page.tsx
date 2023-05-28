import Button from "@/components/common/button"
import Post from "@/components/templates/post"
import postService from "@/services/posts"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default async function Home() {
  const posts = await postService("the_sides").fetch({
    filter: { property: "Category", multi_select: { contains: "tech" } }
  })

  return (
    <main className="mt-12 w-full grid grid-cols-3 h-44 gap-8">
      <section id="posts" className="flex flex-col gap-8 col-span-2 w-full h-full">
        {posts.map(i => (
          <Post key={i.id}>
            <Post.Date day={new Date(i.created_time).toLocaleDateString("en", { day: "numeric" })} month={new Date(i.created_time).toLocaleDateString("en", { month: "short" })} />
            <Post.Content>
              <Post.Title>{i.properties.title}</Post.Title>
              <Post.Description>Lorem ipsum dolor sit amet consectetur. Sed nisl facilisi vitae sagittis tincidunt eget tortor.</Post.Description>
              <Button type="link">
                {"Read Article"}
                <ChevronRight size={20} className="transition-all group-hover:translate-x-[0.15rem]" />
              </Button>
            </Post.Content>
          </Post>
        ))}
      </section>

      <section id="section-filters" className="col-span-1 w-full h-full bg-slate-600">
      </section>
    </main>
  )
}
