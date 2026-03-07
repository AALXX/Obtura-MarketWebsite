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
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura Team - Autonomous Deployment Platform'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Obtura | Autonomous Deployment Platform Team',
        description: 'Meet the team building the autonomous deployment platform with 85%+ tech stack coverage.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/about'
    }
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
            founders: [
                {
                    '@type': 'Person',
                    name: 'Alexandru-Nicolae Șerban',
                    jobTitle: 'Founder & CEO'
                },
            ],
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'RO',
                addressLocality: 'Bucharest'
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="min-h-screen bg-[#0a0a0a] pt-16 font-sans text-white">
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
                                <li className="text-white">About</li>
                            </ol>
                        </nav>

                        <header>
                            <h1 className="mb-6 text-center text-4xl font-bold sm:text-5xl lg:text-6xl">
                                About <span className="text-[#ff6b35]">Obtura</span>
                            </h1>
                            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-400">We\'re building the DevOps platform European SMEs deserve. Ship software 3x faster with zero DevOps overhead.</p>
                        </header>

                        <div className="space-y-8">
                            <article className="rounded-xl border border-white/10 bg-[#1a1a1a] p-8">
                                <h2 className="mb-4 text-2xl font-semibold text-white">Our Mission</h2>
                                <p className="leading-relaxed text-gray-400">
                                    "Ship code without a DevOps team" — We eliminate the DevOps bottleneck for European SME development teams by automating infrastructure, deployment, monitoring, and compliance. Our platform saves companies <strong className="text-white">€71,000+ per year</strong> on DevOps costs while ensuring GDPR compliance.
                                </p>
                            </article>

       

                            <article className="rounded-xl border border-white/10 bg-[#1a1a1a] p-8">
                                <h2 className="mb-4 text-2xl font-semibold text-white">EU-First Philosophy</h2>
                                <p className="leading-relaxed text-gray-400">
                                    We prioritize <strong className="text-white">EU compliance and GDPR-native design</strong>. Our European support team operates in your timezone. All pricing is in Euros with no FX risk. Your data never leaves European servers.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#ff6b35]">✓</span> GDPR compliant by design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#ff6b35]">✓</span> EU data residency guaranteed
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#ff6b35]">✓</span> Local European support
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#ff6b35]">✓</span> Pricing in Euros
                                    </li>
                                </ul>
                            </article>

                            <section className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-8">
                                <h2 className="mb-6 text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                                <FAQSchema faqs={faqData} />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
