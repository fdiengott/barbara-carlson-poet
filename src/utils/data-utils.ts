import { type CollectionEntry, type CollectionKey } from 'astro:content';

export const sortByFileName = <T extends CollectionKey>(a: CollectionEntry<T>, b: CollectionEntry<T>) => {
    return a.id < b.id ? 1 : -1;
};
