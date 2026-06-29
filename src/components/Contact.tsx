import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { site } from '@/data/site';

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container-page">
                <div className="card relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

                    <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="section-eyebrow">Contact</span>
                            <h2 className="section-title">Let's build something.</h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-md">
                                Open to collaborations on AI, full-stack, and cloud projects —
                                or just a good chat about engineering. The fastest way to reach
                                me is email or LinkedIn.
                            </p>
                            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <MapPin className="h-4 w-4" /> {site.location}
                            </p>
                        </div>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${site.email}`}
                                    className="card flex items-center justify-between hover:border-brand-400/40"
                                >
                                    <span className="inline-flex items-center gap-3 text-slate-900 dark:text-white">
                                        <Mail className="h-5 w-5 text-brand-500 dark:text-brand-400" /> {site.email}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Email</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={site.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="card flex items-center justify-between hover:border-brand-400/40"
                                >
                                    <span className="inline-flex items-center gap-3 text-slate-900 dark:text-white">
                                        <Linkedin className="h-5 w-5 text-brand-500 dark:text-brand-400" /> Rito Chabalala
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={site.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="card flex items-center justify-between hover:border-brand-400/40"
                                >
                                    <span className="inline-flex items-center gap-3 text-slate-900 dark:text-white">
                                        <Github className="h-5 w-5 text-brand-500 dark:text-brand-400" /> @ritochabalala
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={site.socials.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="card flex items-center justify-between hover:border-brand-400/40"
                                >
                                    <span className="inline-flex items-center gap-3 text-slate-900 dark:text-white">
                                        <Twitter className="h-5 w-5 text-brand-500 dark:text-brand-400" /> @rito_chabalala
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">X / Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
