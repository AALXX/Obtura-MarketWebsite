import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Obtura',
    description: 'Obtura Privacy Policy - How we handle your data with GDPR compliance and EU data residency.',
    alternates: {
        canonical: 'https://obtura.dev/privacy'
    }
}

export default function PrivacyPage() {
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
                        <li className="text-white">Privacy Policy</li>
                    </ol>
                </nav>

                <header className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="prose prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">Our Commitment</h2>
                        <p className="mb-4 text-gray-400">At Obtura, we take your privacy seriously. As a European company headquartered in Romania, we are fully committed to GDPR compliance and protecting your data.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">EU Data Residency</h2>
                        <p className="mb-4 text-gray-400">All your data is stored exclusively within the European Union. We guarantee:</p>
                        <ul className="list-inside list-disc space-y-2 text-gray-400">
                            <li>Data never leaves EU servers</li>
                            <li>Full GDPR compliance</li>
                            <li>SOC 2 certified infrastructure</li>
                            <li>Right to data portability</li>
                            <li>Right to be forgotten</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                        <p className="mb-4 text-gray-400">
                            For privacy-related inquiries, contact us at:{' '}
                            <a href="mailto:privacy@obtura.dev" className="text-[#ff6b35] hover:underline">
                                privacy@obtura.dev
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
