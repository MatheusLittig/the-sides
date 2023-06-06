import { PostSchema } from "@/services/posts/schema"

const renderRichText = (props: Partial<PostSchema["blocks"][number]["paragraph"] & PostSchema["blocks"][number]["code"]>) => {
  return props?.rich_text?.map((text, index) => {
    switch (text.type) {
      case "text":
        return <>{text.text.content}</>

      default:
        return null
    }
  })
}

export { renderRichText }