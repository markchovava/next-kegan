

export default function Page() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-slate-950 px-6 text-slate-100">
            <div className="flex max-w-xl flex-col items-center text-center">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-9 w-9 text-slate-400"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="12" y2="12.5" />
                        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
                    </svg>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                    Website Currently Down
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                    This website is currently unavailable due to suspension.
                </p>

                <div className="my-8 h-px w-24 bg-slate-800" />

                <p className="text-sm text-slate-500">
                    If you believe this is a mistake, please contact the site administrator.
                </p>
            </div>
        </main>
    );
}