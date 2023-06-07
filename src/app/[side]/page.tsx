import Link from "next/link";
import { BlogFilter, Divider, Post } from '@/components';
import { postService } from '@/services';

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
    <main className="mt-12 w-full grid grid-cols-3 gap-8">
        <section id="posts" className="flex flex-col items-center gap-8 col-span-2 w-full h-full">
          {posts.map(i => (
            <Post className="animate-top-in" key={i.id}>
              <Post.Content className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm">
                  <span>{new Date(i.created_time).toLocaleDateString("en-US", { dateStyle: "medium" })}</span>
                </div>
                <Link href={`/${params.side}/${i.id}`} >
                  <Post.Title>{i.properties.title}</Post.Title>
                  <Post.Description>{i.properties.headline}</Post.Description>
                </Link>
              </Post.Content>
            </Post>
          ))}
          <Divider className="mt-24 mb-12" />
        </section>

      <BlogFilter tags={Array.from(tags)} />
    </main>
  )
}
