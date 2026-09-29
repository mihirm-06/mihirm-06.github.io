import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // one line shown on the card
    summary: z.string(),
    // small blue label above the title, e.g. "Tracking · C++"
    kicker: z.string(),
    tags: z.array(z.string()).default([]),
    // also show this card on the home page
    featured: z.boolean().default(false),
    // card position on Home and Projects: higher numbers come first,
    // so a new project just gets the next number up
    order: z.number().default(0),
    // 'in progress' adds "· In progress" after the card's label
    status: z.enum(['active', 'in progress']).default('active'),
    // image on the project's card: a file name in src/assets/covers (svg, png, jpg, webp, avif).
    // It's cropped to fill a wide frame, so aim for roughly 2:1 (e.g. 1120×600).
    cover: z.string().optional(),
  }),
});

export const collections = { projects };
