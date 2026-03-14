import type { Metadata } from 'next'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = {
    title: 'About Us | Autonomous Deployment Platform Team | Obtura',
    description: "Meet the team behind Obtura. We're building the autonomous deployment platform that lets European SMEs deploy any tech stack with zero DevOps. 85%+ framework coverage with GDPR-compliant EU hosting in Germany.",
    keywords: [
        'about obtura',
        'obtura team',
        'autonomous deployment company',
        'zero devops platform',
        'european sme deployment',
        'GDPR company germany',
        'bucharest tech startup',
        'eu deployment company',
        'deploy any tech stack',
        'software deployment company europe',
        'eu data residency company',
        'german hosting provider',
        'tech stack deployment experts',
        'european devops company'
    ],
    openGraph: {
        title: 'About Obtura | Autonomous Deployment Platform Team',
        description: 'Meet the team building the autonomous deployment platform. 85%+ tech stack coverage with GDPR-compliant EU hosting.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/Logo2.png', width: 1200, height: 630, alt: 'Obtura Team - Autonomous Deployment Platform' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Obtura | Autonomous Deployment Platform Team',
        description: 'Meet the team building the autonomous deployment platform with 85%+ tech stack coverage.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: { canonical: 'https://obtura.dev/about' }
}

const faqData = [
    {
        question: 'What is Obtura?',
        answer: 'Obtura is an all-in-one zero-DevOps platform that empowers European SMEs to ship software 3x faster. We combine code editing, Git workflows, one-click deployment, and GDPR-compliant hosting with EU data residency.'
    },
    {
        question: 'Where is Obtura based?',
        answer: 'Obtura is headquartered in Bucharest, Romania, and serves European SMEs across the EU with local support and EU data residency.'
    },
    {
        question: 'Is Obtura GDPR compliant?',
        answer: 'Yes, Obtura is fully GDPR compliant with native EU data residency. Your data never leaves Europe, and we prioritize EU compliance in our platform design.'
    },
    {
        question: 'Who are the founders of Obtura?',
        answer: 'Obtura was founded by Alexandru-Nicolae Șerban (Founder & CEO) in 2026.'
    }
]

export default function About() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Obtura',
        description: "Meet the team behind Obtura. We're building the DevOps platform European SMEs deserve.",
        url: 'https://obtura.dev/about',
        mainEntity: {
            '@type': 'Organization',
            name: 'Obtura',
            description: 'Zero DevOps platform for European SMEs',
            founders: [{ '@type': 'Person', name: 'Alexandru-Nicolae Șerban', jobTitle: 'Founder & CEO' }],
            address: { '@type': 'PostalAddress', addressCountry: 'RO', addressLocality: 'Bucharest' }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
                <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
                    <div className="mx-auto max-w-4xl">

                        <nav aria-label="Breadcrumb" className="mb-10">
                            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                                <li>/</li>
                                <li>About</li>
                            </ol>
                        </nav>

                        <header className="mb-16">
                            <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— About us</p>
                            <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                                About <span style={{ color: 'var(--brand)' }}>Obtura.</span>
                            </h1>
                            <p className="max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                We&apos;re building the DevOps platform European SMEs deserve. Ship software 3x faster with zero DevOps overhead.
                            </p>
                        </header>

                        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
                                <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    &ldquo;Ship code without a DevOps team&rdquo; &mdash; We eliminate the DevOps bottleneck for European SME development teams by automating infrastructure, deployment, monitoring, and compliance. Our platform saves companies{' '}
                                    <strong style={{ color: 'var(--fg-primary)' }}>€71,000+ per year</strong> on DevOps costs while ensuring GDPR compliance.
                                </p>
                            </article>

                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">EU-First Philosophy</h2>
                                <p className="mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    We prioritize <strong style={{ color: 'var(--fg-primary)' }}>EU compliance and GDPR-native design</strong>. Our European support team operates in your timezone. All pricing is in Euros with no FX risk. Your data never leaves European servers.
                                </p>
                                <ul className="space-y-2">
                                    {['GDPR compliant by design', 'EU data residency guaranteed', 'Local European support', 'Pricing in Euros'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-secondary)' }}>
                                            <span style={{ color: 'var(--brand)' }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <section className="pt-10">
                                <h2 className="mb-8 text-xl font-semibold">Frequently Asked Questions</h2>
                                <FAQSchema faqs={faqData} />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
