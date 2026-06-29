import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { site } from '@/data/site';

const socials = [
    { key: 'github', label: 'GitHub', Icon: Github },
    { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
    { key: 'x', label: 'X (Twitter)', Icon: Twitter },
    { key: 'facebook', label: 'Facebook', Icon: Facebook },
    { key: 'instagram', label: 'Instagram', Icon: Instagram },
] as const;

const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative mt-20 border-t border-slate-200 dark:border-white/10">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
            />

            <div className="container-page pt-12 pb-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
                    {/* Brand + tagline */}
                    <div>
                        <a href="#top" className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold tracking-tight">
                            <img
                                src="/icon-32.png"
                                alt=""
                                aria-hidden="true"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-lg object-cover ring-1 ring-slate-200 dark:ring-white/10"
                            />
                            <span>{site.name}</span>
                        </a>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                            {site.role} · building AI-driven, full-stack and cloud solutions.
                        </p>
                        <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3.5 w-3.5" /> {site.location}
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            Explore
                        </h3>
                        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white link-underline"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials + email */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            Elsewhere
                        </h3>
                        <a
                            href={`mailto:${site.email}`}
                            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white link-underline"
                        >
                            <Mail className="h-4 w-4 text-brand-500 dark:text-brand-400" />
                            {site.email}
                        </a>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            {socials.map(({ key, label, Icon }) => (
                                <a
                                    key={key}
                                    href={site.socials[key]}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="icon-btn h-9 w-9"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <p>
                        © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
                    </p>
                    <p>
                        <a href="#top" className="link-underline hover:text-slate-900 dark:hover:text-white">
                            Back to top ↑
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
