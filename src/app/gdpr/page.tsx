import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GDPR Compliance | Obtura',
    description: 'Obtura GDPR compliance information - How we protect your data with EU data residency and privacy rights.',
    alternates: {
        canonical: 'https://obtura.dev/gdpr'
    }
}

export default function GDPRPage() {
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
                        <li className="text-white">GDPR</li>
                    </ol>
                </nav>

                <header className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold">GDPR Compliance</h1>
                    <p className="text-gray-400">How we protect your data and privacy rights.</p>
                </header>

                <div className="space-y-8 text-gray-400">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">EU Data Residency</h2>
                        <p>All customer data is stored exclusively within European Union data centers. Your data never leaves the EU.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">Your Rights Under GDPR</h2>
                        <ul className="mt-4 list-inside list-disc space-y-2">
                            <li>
                                <strong className="text-white">Right to Access</strong> - Request a copy of your data
                            </li>
                            <li>
                                <strong className="text-white">Right to Rectification</strong> - Correct inaccurate data
                            </li>
                            <li>
                                <strong className="text-white">Right to Erasure</strong> - Request data deletion ("right to be forgotten")
                            </li>
                            <li>
                                <strong className="text-white">Right to Portability</strong> - Export your data in machine-readable format
                            </li>
                            <li>
                                <strong className="text-white">Right to Object</strong> - Opt out of certain processing
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">Data Protection Officer</h2>
                        <p>
                            Contact our DPO at{' '}
                            <a href="mailto:dpo@obtura.dev" className="text-[#ff6b35] hover:underline">
                                dpo@obtura.dev
                            </a>{' '}
                            for any GDPR-related inquiries.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-white">Infrastructure Security</h2>
                        <ul className="mt-4 list-inside list-disc space-y-2">
                            <li>SOC 2 Type II certified infrastructure</li>
                            <li>256-bit AES encryption at rest</li>
                            <li>TLS 1.3 for data in transit</li>
                            <li>Regular security audits</li>
                            <li>Incident response procedures</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
