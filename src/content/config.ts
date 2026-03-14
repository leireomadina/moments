import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const albums = defineCollection({
	loader: glob({ pattern: ['*.md'], base: 'src/content/albums' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			type: z.enum(['trip', 'place', 'theme']),
			date: z.string(),
			cover: image().optional(),
		}),
})

const photos = defineCollection({
	loader: glob({ pattern: ['**/*.md'], base: 'src/content/photos' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			image: image(),
			collection: z.string(),
			favorite: z.boolean().default(false),
			date: z.date(),
			type: z.enum(['architecture', 'portrait', 'landscape']).optional(),
		}),
})

export const collections = { albums, photos }
