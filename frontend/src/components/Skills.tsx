import { Brain, Cloud, Code2, Database, Layers, Workflow, type LucideIcon } from 'lucide-react';
import { skillGroups, type SkillGroup } from '@/data/skills';

const iconMap: Record<SkillGroup['icon'], LucideIcon> = {
    code: Code2,
    brain: Brain,
    layers: Layers,
    cloud: Cloud,
    database: Database,
    workflow: Workflow,
};

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
                    {skillGroups.map((g) => {
                        const Icon = iconMap[g.icon];
                        return (
                            <div key={g.title} className="card">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-300">
                                        <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                                    </span>
                                    <h3 className="text-slate-900 dark:text-white font-semibold">{g.title}</h3>
                                </div>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {g.items.map((s) => (
                                        <li key={s} className="chip">{s}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
