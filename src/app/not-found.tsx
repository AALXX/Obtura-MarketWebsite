import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
            <div className="mx-auto max-w-2xl text-center">
                <div className="mb-8">
                    <h1 className="text-[150px] leading-none font-black sm:text-[200px]" style={{ color: 'var(--brand)', fontFamily: 'var(--font-display)' }}>404</h1>
                </div>

                <div className="mb-8 space-y-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Page Not Found</h2>
                    <p className="text-lg" style={{ color: 'var(--fg-secondary)' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                </div>

                <div className="mx-auto mb-10 max-w-lg">
                    <div className="overflow-hidden border" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                        <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="ml-3 font-mono text-sm" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>terminal</span>
                        </div>
                        <div className="space-y-1 p-6 text-left font-mono text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                            <div style={{ color: 'var(--fg-secondary)' }}>
                                <span style={{ color: 'var(--color-danger)' }}>✗</span> Error: Route not found
                            </div>
                            <div style={{ color: 'var(--fg-secondary)' }}>
                                <span style={{ color: 'var(--brand)' }}>→</span> Status: 404
                            </div>
                            <div style={{ color: 'var(--fg-secondary)' }}>
                                <span style={{ color: 'var(--brand)' }}>→</span> Suggestion: Check the URL or go home
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/" className="inline-flex h-12 items-center justify-center gap-2 bg-brand px-6 font-semibold text-black transition-colors hover:bg-brand-hover">
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                    <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 border px-6 font-semibold transition-colors hover:text-brand" style={{ borderColor: 'var(--border-default)', color: 'var(--fg-primary)' }}>
                        Contact Support
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-12 border-t pt-8" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="mb-4 text-sm" style={{ color: 'var(--fg-secondary)' }}>Looking for something?</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/docs" className="transition-colors hover:text-brand" style={{ color: 'var(--fg-secondary)' }}>
                            Documentation
                        </Link>
                        <span style={{ color: 'var(--border-default)' }}>•</span>
                        <Link href="/blog" className="transition-colors hover:text-brand" style={{ color: 'var(--fg-secondary)' }}>
                            Blog
                        </Link>
                        <span style={{ color: 'var(--border-default)' }}>•</span>
                        <Link href="/about" className="transition-colors hover:text-brand" style={{ color: 'var(--fg-secondary)' }}>
                            About
                        </Link>
                        <span style={{ color: 'var(--border-default)' }}>•</span>
                        <Link href="/contact" className="transition-colors hover:text-brand" style={{ color: 'var(--fg-secondary)' }}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
