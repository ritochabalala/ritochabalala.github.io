import { skillGroups } from '@/data/skills';

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container-page">
                <div className="max-w-2xl">
                    <span className="section-eyebrow">Skills</span>
                    <h2 className="section-title">Tools I use to ship</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        A working stack across AI, full-stack development, cloud, and
                        DevSecOps — chosen for what gets reliable software into production.
                    </p>
                </div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillGroups.map((g) => (
                        <div key={g.title} className="card">
                            <h3 className="text-slate-900 dark:text-white font-semibold">{g.title}</h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {g.items.map((s) => (
                                    <li key={s} className="chip">{s}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
