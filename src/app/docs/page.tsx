import type { Metadata } from 'next'
import DocsClient from './DocsClient'

export const metadata: Metadata = {
    title: 'Documentation | Obtura API & Guides | DevOps Platform',
    description: "Complete documentation for Obtura's zero-DevOps platform. API references, deployment guides, and tutorials for European SMEs. GDPR-compliant with EU data residency.",
    keywords: ['obtura documentation', 'devops api', 'deployment guides', 'zero devops docs', 'cloud deployment api', 'european sme docs', 'GDPR api documentation', 'devops tutorials', 'obtura guides'],
    openGraph: {
        title: 'Obtura Documentation | API & DevOps Guides',
        description: "Complete documentation for Obtura's zero-DevOps platform. API references, guides, and tutorials.",
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura Documentation'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura Documentation | API & DevOps Guides',
        description: "Complete documentation for Obtura's zero-DevOps platform.",
        images: ['https://obtura.dev/Logo2.png']
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
                        '@type': 'WebPage',
                        name: 'Obtura Documentation',
                        description: "Complete documentation for Obtura's zero-DevOps platform. API references, deployment guides, and tutorials.",
                        url: 'https://obtura.dev/docs',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'Obtura',
                            url: 'https://obtura.dev'
                        },
                        inLanguage: 'en',
                        status: 'Under Construction'
                    })
                }}
            />
            <DocsClient />
        </>
    )
}
