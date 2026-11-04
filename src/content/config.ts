import { defineCollection, z } from 'astro:content';

const base = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

const resources = defineCollection({
  type: 'content',
  schema: base.extend({
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});
const blog = defineCollection({ type: 'content', schema: base });

export const collections = { resources, blog };
