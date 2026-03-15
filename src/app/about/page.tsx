import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import Link from 'next/link'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = {
    title: 'About Obtura | Zero-DevOps Deployment for European SMEs',
    description: "Obtura is a Romanian tech startup building the DevOps platform European SMEs deserve — zero-config deployment for 15+ frameworks, GDPR-compliant EU hosting, and €71K+/year in savings.",
    keywords: [
        'about obtura',
        'obtura team',
        'autonomous deployment company',
        'zero devops platform',
        'european sme deployment',
        'bucharest tech startup',
        'eu deployment company',
        'deploy any tech stack',
        'software deployment company europe',
        'eu data residency company',
        'european devops company',
        'GDPR compliant deployment company'
    ],
    openGraph: {
        title: 'About Obtura | Zero-DevOps Deployment for European SMEs',
        description: 'Romanian tech startup building zero-config deployment for European SMEs. 85%+ framework coverage, GDPR-compliant EU hosting, €71K+/year savings.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/og-image.png', width: 1200, height: 630, alt: 'About Obtura - Zero-DevOps Platform for European SMEs' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Obtura | Zero-DevOps Deployment for European SMEs',
        description: 'Romanian startup building zero-config deployment for European SMEs. 85%+ framework coverage, GDPR-compliant EU hosting.',
        images: ['https://obtura.dev/og-image.png']
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
        '@id': 'https://obtura.dev/about#webpage',
        name: 'About Obtura | Zero-DevOps Deployment for European SMEs',
        description:
            'Obtura is a Romanian tech startup building autonomous DevOps deployment for European SMEs. Zero-config, GDPR-compliant EU hosting, 15+ framework support.',
        url: 'https://obtura.dev/about',
        isPartOf: { '@id': 'https://obtura.dev/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://obtura.dev' },
                { '@type': 'ListItem', position: 2, name: 'About', item: 'https://obtura.dev/about' }
            ]
        },
        mainEntity: {
            '@type': 'Organization',
            '@id': 'https://obtura.dev/#organization',
            name: 'Obtura',
            description:
                'Autonomous DevOps deployment platform saving European SMEs €71,000+ per year. Supports 15+ frameworks with GDPR-compliant EU hosting in Germany.',
            founders: [
                {
                    '@type': 'Person',
                    name: 'Alexandru-Nicolae Șerban',
                    jobTitle: 'Founder & CEO',
                    worksFor: { '@id': 'https://obtura.dev/#organization' },
                    knowsAbout: ['DevOps', 'Cloud Infrastructure', 'Software Deployment', 'GDPR Compliance']
                }
            ],
            address: { '@type': 'PostalAddress', addressCountry: 'RO', addressLocality: 'Bucharest' },
            foundingDate: '2026',
            numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 10 }
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
                                <li><Link href="/" className="transition-colors hover:text-brand">Home</Link></li>
                                <li>/</li>
                                <li aria-current="page">About</li>
                            </ol>
                        </nav>

                        <header className="mb-16">
                            <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— About us</p>
                            <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                                About <span style={{ color: 'var(--brand)' }}>Obtura.</span>
                            </h1>
                            <p className="max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                We&apos;re building the DevOps platform European SMEs deserve. Ship software 3x faster with zero DevOps overhead — and save €71K+ per year.
                            </p>
                        </header>

                        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
                                <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    &ldquo;Ship code without a DevOps team&rdquo; &mdash; We eliminate the DevOps bottleneck for European SME development teams by automating infrastructure, deployment, monitoring, and compliance. Our{' '}
                                    <Link href="/tech-stacks" className="underline decoration-dotted hover:text-brand" style={{ color: 'var(--fg-primary)' }}>autonomous deployment platform</Link>{' '}
                                    saves companies <strong style={{ color: 'var(--fg-primary)' }}>€71,000+ per year</strong> on DevOps costs while ensuring GDPR compliance.
                                </p>
                            </article>

                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">EU-First Philosophy</h2>
                                <p className="mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    We prioritize <strong style={{ color: 'var(--fg-primary)' }}>EU compliance and GDPR-native design</strong>. Our European support team operates in your timezone. All pricing is in Euros with no FX risk. Your data never leaves European servers hosted in Germany.
                                </p>
                                <ul className="space-y-2">
                                    {['GDPR compliant by design', 'EU data residency guaranteed — Frankfurt, Germany', 'Local European support in your timezone', 'Predictable flat pricing in Euros'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-secondary)' }}>
                                            <Check className="h-3 w-3 shrink-0" style={{ color: 'var(--brand)' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">What We Support</h2>
                                <p className="mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    Obtura covers 85%+ of modern web applications with auto-detection for{' '}
                                    <Link href="/tech-stacks" className="underline decoration-dotted hover:text-brand" style={{ color: 'var(--fg-primary)' }}>
                                        15+ tech stacks
                                    </Link>{' '}
                                    including Node.js, Python, Go, Rust, PHP, Ruby on Rails, Java, and more — all deployed to GDPR-compliant EU infrastructure with zero configuration.
                                </p>
                                <Link
                                    href="/tech-stacks"
                                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand"
                                    style={{ color: 'var(--brand)' }}
                                >
                                    View all supported tech stacks →
                                </Link>
                            </article>

                            <article className="border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                <h2 className="mb-4 text-xl font-semibold">Get Involved</h2>
                                <p className="mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                    Obtura is currently in the final stages of MVP development. Join our waitlist to get early access, exclusive pricing, and direct input on the platform roadmap.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex h-11 items-center gap-2 bg-brand px-7 text-sm font-semibold text-black transition-colors hover:bg-brand-hover"
                                >
                                    Join the Waitlist
                                </Link>
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
