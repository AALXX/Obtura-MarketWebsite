import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Obtura | Autonomous Deployment Platform - Deploy Any Tech Stack in Europe',
    description: 'Deploy any tech stack autonomously with Obtura. Zero-config deployment for Node.js, Python, Go, PHP, Rust & 15+ frameworks. GDPR-compliant EU hosting in Germany. 85%+ app coverage. No DevOps team required.',
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
        'auto deploy any framework'
    ],
    openGraph: {
        title: 'Obtura | Autonomous Deployment for Any Tech Stack in Europe',
        description: 'Deploy Node.js, Python, Go, PHP, Rust & 15+ frameworks autonomously. GDPR-compliant EU hosting in Germany. 85%+ app coverage. No DevOps required.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Autonomous Deployment Platform for Any Tech Stack in Europe'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Autonomous Deployment for Any Tech Stack',
        description: 'Deploy any tech stack autonomously. GDPR-compliant EU hosting. 85%+ app coverage. No DevOps required.',
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
            lowPrice: '199',
            highPrice: '899',
            offerCount: '4',
            offers: [
                {
                    '@type': 'Offer',
                    name: 'Starter',
                    price: '199',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '199',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 3 developers, 5 projects, basic monitoring, community support'
                },
                {
                    '@type': 'Offer',
                    name: 'Team',
                    price: '250',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '250',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 10 developers, unlimited projects, full observability suite, priority support'
                },
                {
                    '@type': 'Offer',
                    name: 'Business',
                    price: '650',
                    priceCurrency: 'EUR',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '650',
                        priceCurrency: 'EUR',
                        unitCode: 'MON'
                    },
                    description: 'Up to 25 developers, unlimited projects, advanced security, SSO & SAML, dedicated support'
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
                    description: 'Unlimited developers, on-premise option, custom integrations, dedicated account manager'
                }
            ]
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
            <HomeClient />
        </>
    )
}
