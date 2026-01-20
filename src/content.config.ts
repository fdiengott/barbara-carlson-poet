import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hero = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/hero' }),
    schema: ({ image }) => z.object({ title: z.string() }),
});

const book = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/books' }),
    schema: z.object({
        title: z.string(),
        publisher: z.string(),
        year: z.number(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        linkUrl: z.string(),
    }),
});

const poem = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/poems' }),
    schema: z.object({
        title: z.string(),
        publication: z.string(),
        year: z.number(),
        poems: z
            .array(
                z.object({
                    title: z.string(),
                    linkUrl: z.string(),
                }),
            )
            .optional(), // if included, is a collection
    }),
});

const translation = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/translations' }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        publication: z.string().optional(),
        year: z.number(),
        linkUrl: z.string().optional(),
        poems: z
            .array(
                z.object({
                    title: z.string(),
                    linkUrl: z.string(),
                }),
            )
            .optional(), // if included, is a collection
    }),
});

const essay = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/essays' }),
    schema: z.object({
        title: z.string(),
        year: z.number(),
        publication: z.string().optional(),
        linkUrl: z.string().optional(),
    }),
});

// aka: reviews
const press = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/press' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        linkUrl: z.string().optional(),
    }),
});

const interview = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/interviews' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        linkUrl: z.string().optional(),
    }),
});

const event = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/events' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        linkUrl: z.string().optional(),
    }),
});

export const collections = { hero, book, poem, translation, essay, press, interview, event };
