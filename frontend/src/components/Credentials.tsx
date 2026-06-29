import { Award, ShieldCheck } from 'lucide-react';
import { awards, certifications } from '@/data/credentials';

export default function Credentials() {
    return (
        <section id="credentials" className="section">
            <div className="container-page">
                <div className="max-w-2xl">
                    <span className="section-eyebrow">Certifications & Awards</span>
                    <h2 className="section-title">Recognition & credentials</h2>
                </div>

                <div className="mt-12 grid lg:grid-cols-2 gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                            <ShieldCheck className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                            <h3 className="font-semibold">Certifications</h3>
                        </div>
                        <ul className="space-y-4">
                            {certifications.map((c) => (
                                <li key={c.title} className="card">
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="text-slate-900 dark:text-white font-medium leading-snug">
                                            {c.title}
                                        </h4>
                                        <span className="chip shrink-0">{c.year}</span>
                                    </div>
                                    {c.issuer && (
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                            {c.issuer}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                            <Award className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                            <h3 className="font-semibold">Awards</h3>
                        </div>
                        <ul className="space-y-4">
                            {awards.map((a) => (
                                <li key={a.title} className="card">
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="text-slate-900 dark:text-white font-medium leading-snug">
                                            {a.title}
                                        </h4>
                                        <span className="chip shrink-0">{a.year}</span>
                                    </div>
                                    {a.issuer && (
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                            {a.issuer}
                                        </p>
                                    )}
                                    {a.description && (
                                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                                            {a.description}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
