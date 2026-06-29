import { site } from '@/data/site';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-slate-200 dark:border-white/10 mt-10">
            <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
                <p>
                    © {year} {site.name}. Built with Next.js & Tailwind CSS.
                </p>
                <p>
                    <a href="#top" className="link-underline hover:text-slate-900 dark:hover:text-white">
                        Back to top ↑
                    </a>
                </p>
            </div>
        </footer>
    );
}
