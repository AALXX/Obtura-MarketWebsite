'use client'

import { useState } from 'react'

export default function DocsClient() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
        setIsSubmitted(true)

        setTimeout(() => {
            setEmail('')
            setIsSubmitted(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
            <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12">
                <div className="mx-auto max-w-2xl">

                    <nav aria-label="Breadcrumb" className="mb-10">
                        <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                            <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                            <li>/</li>
                            <li>Docs</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Documentation</p>
                        <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                            Docs <span style={{ color: 'var(--brand)' }}>coming soon.</span>
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                            Full API docs, deployment guides, and tutorials are in the works. Get notified when we publish our first comprehensive guide.
                        </p>
                    </header>

                    {isSubmitted ? (
                        <div className="border p-4 text-sm" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)', color: 'var(--brand)' }}>
                            ✓ Thanks! We&apos;ll notify you when we publish our first guide.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="h-12 flex-1 border px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                                style={{ borderColor: 'var(--border-default)', background: 'var(--bg-elevated)', color: 'var(--fg-primary)' }}
                                required
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="h-12 bg-[#ff6b35] px-6 text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isLoading ? '...' : 'Notify Me'}
                            </button>
                        </form>
                    )}

                    <div className="mt-16 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        {[
                            { title: 'API Reference', desc: 'Complete REST API documentation' },
                            { title: 'Deployment Guides', desc: 'Step-by-step deployment tutorials' },
                            { title: 'Best Practices', desc: 'DevOps optimization tips' }
                        ].map((item, i) => (
                            <div key={i} className="border-b py-6" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h3 className="mb-1 font-semibold">{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--fg-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
