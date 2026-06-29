import { experience } from '@/data/experience';

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container-page">
                <div className="max-w-2xl">
                    <span className="section-eyebrow">Experience</span>
                    <h2 className="section-title">Where I've shipped</h2>
                </div>

                <ol className="mt-12 relative border-l border-slate-200 dark:border-white/10 ml-3 space-y-10">
                    {experience.map((role) => (
                        <li key={role.title + role.period} className="pl-8">
                            <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
                            <div className="card">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {role.title}{' '}
                                        <span className="text-slate-500 dark:text-slate-400 font-normal">
                                            · {role.company}
                                        </span>
                                    </h3>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">{role.period}</span>
                                </div>
                                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{role.location}</p>
                                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside marker:text-brand-500 dark:marker:text-brand-400">
                                    {role.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
