import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { site } from '@/data/site';

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 pb-20">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-brand-500/20 blur-3xl" />
                <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            </div>

            <div className="container-page">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-5 animate-fade-up">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    </span>
                    Available for collaboration
                    <span className="mx-2 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <MapPin className="h-3.5 w-3.5" /> {site.location}
                </div>

                <h1 className="animate-fade-up text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                    Hi, I'm <span className="gradient-text">Rito Chabalala</span>.
                    <br />
                    I build <span className="gradient-text">AI-powered</span> products.
                </h1>

                <p className="animate-fade-up mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                    {site.role} · {site.tagline}. I design, build, and ship full-stack and
                    AI-driven solutions on <span className="text-slate-900 dark:text-white">Azure</span> using
                    modern <span className="text-slate-900 dark:text-white">React / TypeScript</span> and
                    <span className="text-slate-900 dark:text-white"> Python</span> — with strong DevSecOps
                    fundamentals.
                </p>

                <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3">
                    <a href="#projects" className="btn-primary">
                        View my work <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="btn-ghost">
                        <Mail className="h-4 w-4" /> Contact me
                    </a>
                    <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="btn-ghost"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="btn-ghost"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                </div>

                <dl className="animate-fade-up mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
                    {[
                        { k: '3+', v: 'Years building software' },
                        { k: 'Azure', v: 'Cloud-native delivery' },
                        { k: 'GenAI', v: 'LLMs & RAG in production' },
                        { k: 'SA / DE', v: 'Cross-region teams' },
                    ].map((s) => (
                        <div key={s.v} className="card">
                            <dt className="text-2xl font-semibold text-slate-900 dark:text-white">{s.k}</dt>
                            <dd className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
