import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        draft: z.boolean().default(false).optional(),
        tags: z.array(z.string()).default([]),
    })
})

export const collections = {
    writing,
}