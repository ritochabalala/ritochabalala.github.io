import { GraduationCap } from 'lucide-react';
import { education } from '@/data/education';

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container-page">
                <div className="max-w-2xl">
                    <span className="section-eyebrow">Education</span>
                    <h2 className="section-title">Academic background</h2>
                </div>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {education.map((e) => (
                        <article key={e.qualification} className="card flex flex-col">
                            <div className="flex items-start gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300 shrink-0">
                                    <GraduationCap className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-semibold leading-snug">
                                        {e.qualification}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        {e.institution}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                                        {e.period}
                                    </p>
                                </div>
                            </div>

                            {e.modules && e.modules.length > 0 && (
                                <div className="mt-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                        {e.note ?? 'Key modules'}
                                    </p>
                                    <ul className="flex flex-wrap gap-2">
                                        {e.modules.map((m) => (
                                            <li key={m} className="chip">{m}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {e.research && (
                                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {e.research}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
