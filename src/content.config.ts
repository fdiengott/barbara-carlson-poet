import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hero = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/hero' }),
    schema: ({ image }) => z.object({ title: z.string() }),
});

const book = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/books' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publisher: z.string().optional(),
            date: z.string().or(z.date()),
            image: z.object({
                src: image(),
                alt: z.string(),
            }),
            url: z.string(),
        }),
});

const poem = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/poems' }),
    schema: z.object({
        title: z.string(),
        publication: z.string(),
        year: z.number().optional(),
        linkUrl: z.string().optional(), // for single poems or the main collection link
        poems: z
            .array(
                z.object({
                    title: z.string(),
                    linkUrl: z.string().optional(),
                }),
            )
            .optional(), // if included, is a collection of multiple poems
    }),
});

const translation = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/translations' }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string().optional(),
        publication: z.string().optional(),
        year: z.number().optional(),
        linkUrl: z.string().optional(),
        poems: z
            .array(
                z.object({
                    title: z.string(),
                    linkUrl: z.string().optional(),
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
        date: z.string().or(z.date()),
        description: z.string().optional(),
        linkUrl: z.string().optional(),
    }),
});

const event = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/events' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        time: z.string().optional(),
        address: z.string().optional(),
        description: z.string().optional(),
        linkUrl: z.string().optional(),
        eventType: z.enum(['reading', 'recording', 'interview']),
    }),
});

const about = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/about' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            image: z.object({
                src: image(),
                alt: z.string(),
            }),
        }),
});

export const collections = { about, hero, book, poem, translation, essay, press, interview, event };
