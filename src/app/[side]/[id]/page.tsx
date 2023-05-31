import postService from "@/services/posts";
import Block from "./(compose)/render-block";

export default async function PostContent({ params }: { params: { id: string } }) {
  const content = await postService("the_sides").fetchById(params.id)

  return (
    <main>
      <div>
        <img src={content?.cover?.file.url} alt="Sonny boy" width={200} />
        <h1>{content.title}</h1>
        {content.blocks.map((block) => Block({ block }))}
      </div>
    </main>
  )
}