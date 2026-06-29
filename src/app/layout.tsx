import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';
import { ThemeProvider, themeInitScript } from '@/components/ThemeProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} — ${site.role}`,
        template: `%s · ${site.name}`,
    },
    description: site.summary,
    keywords: [
        'Rito Chabalala',
        'AI Engineer',
        'Software Engineer',
        'Full Stack Developer',
        'Azure',
        'GenAI',
        'RAG',
        'LangChain',
        'Next.js',
        'Django',
        'South Africa',
    ],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    openGraph: {
        type: 'website',
        locale: 'en_ZA',
        url: site.url,
        siteName: site.name,
        title: `${site.name} — ${site.role}`,
        description: site.summary,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: `${site.name} — ${site.role}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${site.name} — ${site.role}`,
        description: site.summary,
        images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: ['/favicon.ico'],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f7f8fc' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        url: site.url,
        image: `${site.url}/og-image.png`,
        jobTitle: site.role,
        description: site.summary,
        email: `mailto:${site.email}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Johannesburg',
            addressCountry: 'ZA',
        },
        sameAs: [site.socials.github, site.socials.linkedin],
    };

    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <script
                    // Runs before paint to set the theme and avoid flash of wrong colour scheme.
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body className="min-h-screen antialiased">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
