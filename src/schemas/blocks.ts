import { z } from "zod";

const blocksSchemas = {
  bookmark: z.object({
    url: z.string()
  }).optional(),

  bulleted_list_item: z.object({
    id: z.string(),
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null(),
      }),
      plain_text: z.string()
    })),
  }).optional(),

  callout: z.object({
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null()
      })
    })),
    icon: z.object({
      emoji: z.string()
    }),
    color: z.string()
  }).optional(),

  code: z.object({
    caption: z.array(z.any()),
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
      })
    })),
    language: z.string(),
  }).optional(),

  embed: z.object({
    url: z.string(),
  }).optional(),

  heading_1: z.object({
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null()
      })
    })),
    color: z.string(),
    is_toggleable: z.boolean().default(false)
  }).optional(),

  heading_2: z.object({
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null()
      })
    })),
    color: z.string(),
    is_toggleable: z.boolean().default(false)
  }).optional(),

  heading_3: z.object({
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null()
      })
    })),
    color: z.string(),
    is_toggleable: z.boolean().default(false)
  }).optional(),

  image: z.object({
    type: z.string(),
    external: z.object({
      url: z.string()
    })
  }).optional(),

  numbered_list_item: z.object({
    rich_text: z.array(
      z.object({
        type: z.string(),
        text: z.object({
          content: z.string(),
          link: z.null()
        })
      })
    ),
    color: z.string(),
  }).optional(),

  paragraph: z.object({
    rich_text: z.array(z.object({
      type: z.string(),
      text: z.object({
        content: z.string(),
        link: z.null()
      })
    })),
    color: z.string(),
  }).optional(),
}

export { blocksSchemas }