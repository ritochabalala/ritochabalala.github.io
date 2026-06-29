'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import ThemeToggle from './ThemeToggle';

const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#credentials', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition ${scrolled
                ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container-page flex h-16 items-center justify-between">
                <a href="#top" className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold tracking-tight">
                    <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-violet-500 grid place-items-center text-sm text-white">
                        R
                    </span>
                    <span className="hidden sm:inline">{site.name}</span>
                </a>

                <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600 dark:text-slate-300">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="link-underline hover:text-slate-900 dark:hover:text-white">
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />
                    <a href="#contact" className="btn-primary">
                        Get in touch
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="icon-btn"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-950/90 backdrop-blur-md">
                    <nav className="container-page py-4 flex flex-col gap-3 text-slate-700 dark:text-slate-200">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="py-1"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setOpen(false)} className="btn-primary self-start">
                            Get in touch
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
