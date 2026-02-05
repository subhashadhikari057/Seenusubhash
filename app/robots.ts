import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        host: 'https://www.subhashadhikari.dev',
        sitemap: 'https://www.subhashadhikari.dev/sitemap.xml',
    };
}
