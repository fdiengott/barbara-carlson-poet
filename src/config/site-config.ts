type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

type Link = {
    text: string;
    href: string;
};

type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    newsPerPage?: number;
    eventsPerPage?: number;
    worksPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Barbara Siegel Carlson',
    description: 'Barbara Siegel Carlson, poet',
    image: {
        src: '../assets/Barbara-Siegel-Carlson-photo-1.webp',
        alt: 'Barbara Siegel Carlson, poet',
    },
    headerNavLinks: [
        {
            text: 'About',
            href: '/about',
        },
        {
            text: 'Publications',
            href: '/publications',
        },
        {
            text: 'Events',
            href: '/events',
        },
        {
            text: 'News',
            href: '/news',
        },
        {
            text: 'Contact',
            href: '/contact',
        },
    ],
    footerNavLinks: [],
};

export default siteConfig;
