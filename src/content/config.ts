import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

const albums = defineCollection({
    loader: glob({ pattern: ['*.md'], base: 'src/content/albums' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        type: z.enum(['trip', 'place', 'theme']),
        cover: z.string(),
        date: z.string(),
    })
})

const photos = defineCollection({
    loader: glob({ pattern: ['**/*.md'], base: 'src/content/photos' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string(),
        collection: z.string(),
        favorite: z.boolean().default(false),
        date: z.date(),
        type: z.enum(['architecture', 'portrait', 'landscape']).optional(),
    })

})

export const collections = { albums, photos };