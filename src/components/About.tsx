import { site } from '@/data/site';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container-page grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
                <div>
                    <span className="section-eyebrow">About</span>
                    <h2 className="section-title">Engineer behind the work</h2>
                </div>
                <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{site.summary}</p>
                    <p>
                        At <span className="text-slate-900 dark:text-white">Sasol</span>, I lead end-to-end
                        delivery of enterprise AI platforms — from architecture through
                        production — building knowledge assistants and data products that
                        improve decision-making across the business. I work across teams in
                        <span className="text-slate-900 dark:text-white"> South Africa</span> and{' '}
                        <span className="text-slate-900 dark:text-white">Germany</span> to standardise AI
                        architecture patterns and engineering practices.
                    </p>
                    <p>
                        I care about shipping reliable, observable software:{' '}
                        <span className="text-slate-900 dark:text-white">CI/CD</span>, security scanning with
                        Snyk &amp; SonarQube, and runtime monitoring with New Relic are
                        part of every project I lead. Outside enterprise work, I tinker with
                        RAG, agent workflows, and OCR pipelines.
                    </p>
                </div>
            </div>
        </section>
    );
}
