import type { Metadata } from 'next'
import DocsClient from './DocsClient'

export const metadata: Metadata = {
    title: 'Documentation | Obtura Deployment Platform',
    description: 'Obtura documentation — deployment guides for Next.js, Django, React, Vue, Go, Python & 15+ frameworks. Zero-config deployment to GDPR-compliant EU servers. Coming soon.',
    keywords: [
        'obtura documentation',
        'deploy nextjs guide',
        'deploy django guide',
        'deploy react app docs',
        'deploy python api guide',
        'deploy golang app docs',
        'autonomous deployment docs',
        'zero config deployment guide',
        'gdpr hosting documentation',
        'european deployment docs',
        'framework deployment guides',
        'eu data residency docs'
    ],
    openGraph: {
        title: 'Obtura Documentation | Deployment Platform Guides',
        description: 'Deployment guides for 15+ frameworks. Zero-config, GDPR-compliant EU hosting. Coming soon.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obtura Documentation - Deployment Guides for 15+ Frameworks'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura Documentation | Deployment Platform Guides',
        description: 'Deployment guides for 15+ frameworks with GDPR-compliant EU hosting. Coming soon.',
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/docs'
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function Docs() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TechArticle',
                        '@id': 'https://obtura.dev/docs#webpage',
                        name: 'Obtura Documentation',
                        description:
                            "Documentation for Obtura's autonomous deployment platform. Deployment guides for Next.js, Django, React, Vue, Go, Python & 15+ frameworks with GDPR-compliant EU hosting.",
                        url: 'https://obtura.dev/docs',
                        isPartOf: { '@id': 'https://obtura.dev/#website' },
                        publisher: { '@id': 'https://obtura.dev/#organization' },
                        inLanguage: 'en',
                        breadcrumb: {
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://obtura.dev' },
                                { '@type': 'ListItem', position: 2, name: 'Documentation', item: 'https://obtura.dev/docs' }
                            ]
                        }
                    })
                }}
            />
            <DocsClient />
        </>
    )
}
