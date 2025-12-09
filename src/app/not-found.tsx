import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4 font-sans text-white">
            <div className="mx-auto max-w-2xl text-center">
                <div className="mb-8">
                    <h1 className="bg-linear-to-r from-[#ff6b35] to-[#ff8c5a] bg-clip-text text-[150px] leading-none font-bold text-transparent sm:text-[200px]">404</h1>
                </div>

                <div className="mb-8 space-y-4">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Page Not Found</h2>
                    <p className="text-lg text-gray-400">The page you're looking for doesn't exist or has been moved. Maybe it's still being deployed? 🚀</p>
                </div>

                <div className="mx-auto mb-10 max-w-lg">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f0f0f] px-4 py-3">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="ml-3 font-mono text-sm text-gray-400">terminal</span>
                        </div>
                        <div className="space-y-1 p-6 text-left font-mono text-sm">
                            <div className="text-gray-400">
                                <span className="text-red-400">✗</span> Error: Route not found
                            </div>
                            <div className="text-gray-400">
                                <span className="text-[#ff6b35]">→</span> Status: 404
                            </div>
                            <div className="text-gray-400">
                                <span className="text-[#ff6b35]">→</span> Suggestion: Check the URL or go home
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-6 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                    <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 text-white transition-all hover:bg-white/10">
                        Contact Support
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="mb-4 text-sm text-gray-400">Looking for something?</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/features" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                            Features
                        </Link>
                        <span className="text-white/10">•</span>
                        <Link href="/pricing" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                            Pricing
                        </Link>
                        <span className="text-white/10">•</span>
                        <Link href="/docs" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                            Documentation
                        </Link>
                        <span className="text-white/10">•</span>
                        <Link href="/blog" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
