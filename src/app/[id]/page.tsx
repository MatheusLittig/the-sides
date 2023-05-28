import postService from "@/services/posts";

const renderBlock = (block: any) => {
  switch (block.type) {
      case 'paragraph': 
      // For a paragraph
      return <p>{ block['paragraph']?.rich_text?.[0]?.text.content } </p>
    default: 
      return <p>Undefined type </p>
  }
}
export default async function PostContent({ params }: { params: { id: string } }) {
  const content = await postService("the_sides").fetchById(params.id)

  return (
    <main>
      <div>
        <img src={content.cover.file.url} alt="Sonny boy" width={200} />
        <h1>{content.title}</h1>
        {content.blocks.map((block) => renderBlock(block))}
      </div>
    </main>
  )
}