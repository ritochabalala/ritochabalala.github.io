export default function NotFound() {
    return (
        <main className="min-h-screen grid place-items-center px-6 text-center">
            <div className="max-w-md">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">404</p>
                <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                    The page you're looking for doesn't exist or has moved.
                </p>
                <a href="/" className="btn-primary mt-8 inline-flex">
                    Back to home
                </a>
            </div>
        </main>
    );
}
