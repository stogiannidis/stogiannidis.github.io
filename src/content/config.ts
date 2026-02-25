import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		tags: z.array(z.string()).optional(),
		reading_time: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = {
	'blog': blogCollection,
};
