import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container-page">
                <div className="max-w-2xl">
                    <span className="section-eyebrow">Projects</span>
                    <h2 className="section-title">Selected work</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        A mix of enterprise systems, AI experiments, and side projects.
                        More on{' '}
                        <a
                            className="link-underline text-slate-900 dark:text-white"
                            href="https://github.com/ritochabalala?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((p) => (
                        <article key={p.title} className="card group flex flex-col">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-slate-900 dark:text-white font-semibold leading-snug">
                                    {p.title}
                                </h3>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    {p.year && <span className="chip">{p.year}</span>}
                                    {p.highlight && (
                                        <span className="chip !border-brand-400/40 !text-brand-700 dark:!text-brand-300">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                                {p.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <li key={t} className="chip">{t}</li>
                                ))}
                            </ul>
                            <div className="mt-5 flex items-center gap-4 text-sm">
                                {p.repo && (
                                    <a
                                        href={p.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                                    >
                                        <Github className="h-4 w-4" /> Code
                                    </a>
                                )}
                                {p.href && (
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                                    >
                                        Live <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
