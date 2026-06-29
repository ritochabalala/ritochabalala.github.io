import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="relative min-h-screen grid place-items-center px-6 text-center overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-brand-500/20 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            </div>
            <div className="max-w-md">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">404</p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    Page <span className="gradient-text">not found</span>
                </h1>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                    The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead:
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link href="/" className="btn-primary">Back to home</Link>
                    <Link href="/#projects" className="btn-ghost">Projects</Link>
                    <Link href="/#contact" className="btn-ghost">Contact</Link>
                </div>
            </div>
        </main>
    );
}
