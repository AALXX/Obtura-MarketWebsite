import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Obtura | Autonomous Deployment Platform for European SMEs',
    description: 'Ship code without a DevOps team. Obtura deploys Node.js, Python, Go, PHP, Rust & 15+ frameworks automatically. GDPR-compliant EU hosting in Germany. Save €71K/year. No config required.',
    keywords: [
        'deploy any tech stack europe',
        'autonomous deployment platform',
        'deploy nextjs germany',
        'deploy react app eu',
        'deploy nodejs europe',
        'deploy python django germany',
        'deploy golang app eu',
        'deploy rust app europe',
        'deploy php laravel germany',
        'zero config deployment',
        'gdpr compliant hosting germany',
        'eu data residency hosting',
        'devops automation europe',
        'automated deployment platform',
        'ship code without devops',
        'git push deploy europe',
        'deploy without devops team',
        'european sme deployment',
        'cloud hosting germany gdpr',
        'auto deploy any framework',
        'devops platform european smes',
        'no devops deployment europe',
        'paas europe gdpr',
        'zero devops platform'
    ],
    openGraph: {
        title: 'Obtura | Ship Code Without a DevOps Team — EU Hosting',
        description: 'Deploy Node.js, Python, Go, PHP, Rust & 15+ frameworks automatically. GDPR-compliant EU hosting in Germany. Save €71K/year. No DevOps required.',
        type: 'website',
        url: 'https://obtura.dev',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Autonomous Deployment Platform for European SMEs'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Ship Code Without a DevOps Team',
        description: 'Deploy any tech stack automatically. GDPR-compliant EU hosting. Save €71K/year. No DevOps required.',
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: {
        canonical: 'https://obtura.dev'
    }
}

export default function Home() {
    const pricingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Obtura DevOps Platform',
        description: 'Autonomous deployment platform for European SMEs. Zero-config deployment with GDPR-compliant EU hosting.',
        brand: {
            '@type': 'Brand',
            name: 'Obtura'
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '79',
            highPrice: '899',
            offerCount: '4',
            offers: [
                {
                    '@type': 'Offer',
                    name: 'Starter',
                    price: '79',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '79',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 3 developers, 3 services, zero-config deployment, AI DevOps Agent, custom domains, SSL'
                },
                {
                    '@type': 'Offer',
                    name: 'Team',
                    price: '199',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '199',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 10 developers, 15 services, preview environments, APM, uptime monitoring, priority support'
                },
                {
                    '@type': 'Offer',
                    name: 'Business',
                    price: '499',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '499',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 25 developers, unlimited services, deployment approval workflows, distributed tracing, live chat support'
                },
                {
                    '@type': 'Offer',
                    name: 'Enterprise',
                    price: '899',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '899',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 50 developers, unlimited everything, custom AI remediation playbooks, dedicated account manager'
                }
            ]
        }
    }

    const webPageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://obtura.dev/#webpage',
        url: 'https://obtura.dev',
        name: 'Obtura | Autonomous Deployment Platform for European SMEs',
        description: 'Ship code without a DevOps team. Obtura deploys Node.js, Python, Go, Rust, PHP & 15+ frameworks automatically. GDPR-compliant EU hosting in Germany. Save €71K/year.',
        isPartOf: { '@id': 'https://obtura.dev/#website' },
        about: { '@id': 'https://obtura.dev/#organization' },
        inLanguage: 'en',
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://obtura.dev' }
            ]
        }
    }

    const homeFaqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is Obtura?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Obtura is an autonomous DevOps deployment platform for European SMEs. It automatically detects your tech stack, provisions infrastructure, and deploys your application with zero configuration. It supports 15+ frameworks including Node.js, Python, Go, Rust, and PHP, with GDPR-compliant EU hosting in Germany.'
                }
            },
            {
                '@type': 'Question',
                name: 'How much does Obtura cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Obtura offers flat monthly pricing starting at €79/month for the Starter plan (1–3 developers), €199/month for Team (up to 10 developers), €499/month for Business (up to 25 developers), and €899/month for Enterprise (up to 50 developers). No usage-based surprises.'
                }
            },
            {
                '@type': 'Question',
                name: 'Is Obtura GDPR compliant?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Obtura is fully GDPR compliant with EU data residency. All customer data is stored exclusively in European data centers (Frankfurt, Germany and Amsterdam, Netherlands). Your data never leaves the EEA.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do I need a DevOps engineer to use Obtura?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. Obtura eliminates the need for a dedicated DevOps engineer. The platform automatically handles infrastructure provisioning, SSL certificates, CI/CD pipelines, monitoring, and scaling. Your developers push code to Git and Obtura handles everything else.'
                }
            },
            {
                '@type': 'Question',
                name: 'What tech stacks does Obtura support?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Obtura supports 85%+ of modern web applications across 15+ frameworks: JavaScript/TypeScript (Next.js, React, Vue, Angular, Node.js, NestJS, Express), Python (Django, Flask, FastAPI), Go (Gin, Echo, Fiber), Rust (Actix, Axum, Rocket), PHP (Laravel, Symfony), Ruby on Rails, Java (Spring Boot), and more.'
                }
            }
        ]
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
            <HomeClient />
        </>
    )
}
