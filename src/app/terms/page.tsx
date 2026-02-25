import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | Obtura',
    description: 'Obtura Terms of Service - Terms and conditions for using the Obtura platform.',
    alternates: {
        canonical: 'https://obtura.dev/terms'
    }
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-20 font-sans text-white">
            <div className="container mx-auto max-w-4xl px-4 py-16">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-gray-400">
                        <li>
                            <a href="/" className="transition-colors hover:text-[#ff6b35]">
                                Home
                            </a>
                        </li>
                        <li>
                            <span>/</span>
                        </li>
                        <li className="text-white">Terms of Service</li>
                    </ol>
                </nav>

                <header className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
                        <p>By accessing and using Obtura, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">2. Service Description</h2>
                        <p>Obtura provides zero-DevOps deployment platform services for European SMEs, including code deployment, hosting, and related infrastructure services.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">3. EU Data Compliance</h2>
                        <p>All services are provided in compliance with GDPR. Data is stored exclusively within EU data centers.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">4. Contact</h2>
                        <p>
                            For questions about these terms, contact us at{' '}
                            <a href="mailto:legal@obtura.dev" className="text-[#ff6b35] hover:underline">
                                legal@obtura.dev
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
