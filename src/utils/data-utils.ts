import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'projects'>, itemB: CollectionEntry<'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export const removeTemplates = <T extends { id: string }>(collection: T[]): T[] => {
    return collection.filter((item) => !item.id.startsWith('-'));
};

export const sortWorksByDate = (workA: CollectionEntry<'book'>, workB: CollectionEntry<'book'>) => {
    const {
        data: { date: dateA },
    } = workA;
    const {
        data: { date: dateB },
    } = workB;

    //  TODO:

    return 0;
};

export const sortByFileName = (a: CollectionEntry<'event'>, b: CollectionEntry<'event'>) => {
    return a.id < b.id ? 1 : -1;
};
