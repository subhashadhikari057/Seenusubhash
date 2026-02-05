import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="min-h-[70svh] flex items-center">
            <div className="container">
                <p className="text-sm text-muted-foreground uppercase tracking-[0.4em]">
                    404
                </p>
                <h1 className="mt-4 text-4xl sm:text-6xl font-anton">
                    Page not found
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-[520px]">
                    The page you are looking for doesn&apos;t exist or was moved.
                    Try one of the links below.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 px-5 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                    >
                        Go home
                    </Link>
                    <Link
                        href="/#selected-projects"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 px-5 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                    >
                        View projects
                    </Link>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 px-5 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
}
