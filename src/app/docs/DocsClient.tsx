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
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4 pt-16 font-sans text-white">
            <div className="mx-auto max-w-2xl text-center">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <li>
                            <a href="/" className="transition-colors hover:text-[#ff6b35]">
                                Home
                            </a>
                        </li>
                        <li>
                            <span>/</span>
                        </li>
                        <li className="text-white">Docs</li>
                    </ol>
                </nav>

                <header>
                    <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                        Documentation <span className="text-[#ff6b35]">Coming Soon</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">Full API docs, deployment guides, and tutorials are in the works. Get notified when we publish our first comprehensive guide.</p>
                </header>

                {isSubmitted ? (
                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                        <span className="text-xl">✓</span> Thanks! We\'ll notify you when we publish our first guide.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                        <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="h-12 flex-1 rounded-lg border border-white/10 bg-[#2a2a2a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none" required />
                        <button type="submit" disabled={isLoading} className="h-12 rounded-lg bg-[#ff6b35] px-6 font-semibold whitespace-nowrap text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50">
                            {isLoading ? '...' : 'Notify Me'}
                        </button>
                    </form>
                )}

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {[
                        { title: 'API Reference', desc: 'Complete REST API documentation' },
                        { title: 'Deployment Guides', desc: 'Step-by-step deployment tutorials' },
                        { title: 'Best Practices', desc: 'DevOps optimization tips' }
                    ].map((item, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6">
                            <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
