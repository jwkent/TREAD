import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    coverImage: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    projectType: z.string().optional(),
    location: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, testimonials };
