import type { Metadata } from 'next';
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
    },
    twitter: {
        card: 'summary_large_image',
        title: `${site.name} — ${site.role}`,
        description: site.summary,
        creator: '@rito_chabalala',
    },
    robots: { index: true, follow: true },
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <script
                    // Runs before paint to set the theme and avoid flash of wrong colour scheme.
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
            </head>
            <body className="min-h-screen antialiased">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
