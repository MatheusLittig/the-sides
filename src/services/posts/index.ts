import notion, { databases } from "@/integrations/notion";
import { PageSchema, PostListSchema } from "./schema";

const postService = (db: keyof typeof databases) => ({
  fetch: async (params: Partial<Omit<Parameters<typeof notion.databases.query>[0], "database_id">>) => {
    const response = await notion.databases
      .query({ database_id: databases[db], ...params })
      .then(res => PostListSchema.parse(res.results))

    return response
  },

  fetchById: async (id: string) => {
    const [page, blocks] = await Promise.all([
      notion.pages.retrieve({ page_id: id }),
      notion.blocks.children.list({ block_id: id })
    ])

    const data = PageSchema.parse({ ...page, blocks: blocks.results })

    return data
  }
})

export default postService