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

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        year: z.string(),
        category: z.string(),
        summary: z.string(),
        challenge: z.string(),
        outcome: z.string(),
        techStack: z.array(z.string()),
        draft: z.boolean().default(false).optional(),
    })
})

export const collections = {
    writing,
    projects,
}