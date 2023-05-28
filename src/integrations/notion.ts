import { Client } from "@notionhq/client"

const dbs = {
  the_sides: process.env.NOTION_DATABASE_ID
}

const databases = dbs as Record<keyof typeof dbs, string>

const notion = new Client({ auth: process.env.NOTION_KEY })

export default notion
export { databases }