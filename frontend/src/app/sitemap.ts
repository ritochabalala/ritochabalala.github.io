import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const sections = [
        'about',
        'skills',
        'experience',
        'education',
        'projects',
        'credentials',
        'contact',
    ];
    return [
        {
            url: `${site.url}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...sections.map((id) => ({
            url: `${site.url}/#${id}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ];
}
