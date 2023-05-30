import Button from "@/components/common/button"
import Post from "@/components/templates/post"
import { Suspense } from 'react';
import postService from "@/services/posts"
import { ChevronRight } from "lucide-react"
import PageFilters from "./(compose)/page-filters"

export default async function SidePage({ params, searchParams }: { params: { side: string }, searchParams: { tag: string, search: string } }) {

  const searchObj = []

  if (!!searchParams.tag) searchObj.push({
    property: "Tags", multi_select: { contains: searchParams.tag }
  })

  if (!!searchParams.search && searchParams.search !== "") searchObj.push({
    property: "Name", rich_text: { contains: searchParams.search }
  })

  const posts = await postService("the_sides").fetch({
    filter: {
      property: "Category", multi_select: { contains: params.side },
      and: searchObj.length >= 1 ? searchObj : undefined
    }
  })

  const tags = new Set<string>()

  posts.forEach(i => i.properties.tags.map(tag => tags.add(tag.name)))

  return (
    <main className="mt-12 w-full grid grid-cols-3 h-44 gap-8">
      <Suspense fallback={<p>Loading feed...</p>}>
        <section id="posts" className="flex flex-col gap-8 col-span-2 w-full h-full">
          {posts.map(i => (
            <Post className="animate-top-in" key={i.id}>
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
      </Suspense>

      <PageFilters tags={Array.from(tags)} />
    </main>
  )
}
