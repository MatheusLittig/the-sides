import { blocksSchemas } from "@/schemas/blocks"
import { Schema, z } from "zod"

const PostListSchema = z.array(z.object({
  object: z.string(),
  id: z.string(),
  created_time: z.string(),
  last_edited_time: z.string(),
  created_by: z.object({
    object: z.string(),
    id: z.string(),
  }),
  last_edited_by: z.object({
    object: z.string(),
    id: z.string(),
  }),
  icon: z.object({
    type: z.string(),
    emoji: z.string(),
  }),
  archived: z.boolean(),
  properties: z.object({
    ["Tags"]: z.object({
      id: z.string(),
      multi_select: z.array(z.object({
        id: z.string(),
        name: z.string(),
      }))
    }),
    ["Name"]: z.object({
      id: z.string(),
      title: z.array(z.object({
        text: z.object({
          content: z.string()
        })
      }))
    }),
    ["Headline"]: z.object({
      id: z.string(),
      rich_text: z.array(z.object({
        text: z.object({
          content: z.string()
        })
      }))
    })
  }).transform(props => ({ tags: props["Tags"].multi_select, title: props["Name"].title[0].text.content, headline: props["Headline"].rich_text[0].text.content }))
}))

const TextContentSchema = z.object({
  rich_text: z.array(z.object({
    type: z.string(),
    text: z.object({
      content: z.string(),
      link: z.string().nullable()
    }),
    annotations: z.object({
      bold: z.boolean(),
      italic: z.boolean(),
      strikethrough: z.boolean(),
      underline: z.boolean(),
      code: z.boolean(),
      color: z.string(),
    }),
    plain_text: z.string(),
    href: z.string().nullable()
  }))
}).optional()


const PageSchema = z.object({
  object: z.string(),
  id: z.string(),
  created_time: z.string(),
  last_edited_time: z.string(),
  cover: z.object({
    type: z.string(),
    file: z.object({
      url: z.string(),
      expiry_time: z.string(),
    })
  }).optional().nullable(),
  archived: z.boolean(),
  properties: z.object({
    "Created by": z.object({
      id: z.string(),
      type: z.string(),
      created_by: z.object({ object: z.string(), id: z.string() })
    }),
    ["Name"]: z.object({
      id: z.string(),
      title: z.array(z.object({
        text: z.object({
          content: z.string()
        })
      }))
    }),
    // ["Headline"]: z.object({
    //   id: z.string(),
    //   title: z.array(z.object({
    //     text: z.object({
    //       content: z.string()
    //     })
    //   }))
    // })
  }),
  blocks: z.array(z.object({
    id: z.string(),
    type: z.string(),
    ...blocksSchemas,
  }))
}).transform(({ properties, ...rest }) => ({ title: properties.Name.title[0].text.content, properties, ...rest, }))

export type PostSchema = z.infer<typeof PageSchema>

export { PostListSchema, PageSchema }