import Button from "@/components/common/button"
import Post from "@/components/templates/post"
import postService from "@/services/posts"
import { ChevronRight } from "lucide-react"

export default async function SidePage({ params }: { params: { side: string } }) {
  const posts = await postService("the_sides").fetch({
    filter: { property: "Category", multi_select: { contains: params.side } }
  })

  return (
    <section id="posts" className="flex flex-col gap-8 col-span-2 w-full h-full">
      {posts.map(i => (
        <Post key={i.id}>
          <Post.Content>
            <Post.Title>{i.properties.title}</Post.Title>
            <Post.Description>{i.properties.headline}</Post.Description>
            <Button type="link">
              {"Read Article"}
              <ChevronRight size={20} className="transition-all group-hover:translate-x-[0.15rem]" />
            </Button>
          </Post.Content>
        </Post>
      ))}
    </section>
  )
}
