import type { Metadata } from 'next'
import DocsClient from './DocsClient'

export const metadata: Metadata = {
    title: 'Documentation | Deploy Any Framework | Obtura',
    description: 'Complete docs for deploying Next.js, Django, React, Vue, Go, Python & 15+ frameworks autonomously. GDPR-compliant German hosting. 85%+ app coverage. Zero config required.',
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
        'app deployment tutorials',
        'german hosting setup',
        'eu data residency docs'
    ],
    openGraph: {
        title: 'Obtura Documentation | Deploy Any Framework',
        description: 'Complete docs for deploying 15+ frameworks autonomously. GDPR-compliant German hosting. 85%+ coverage.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura Documentation - Deploy Any Framework'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura Documentation | Deploy Any Framework',
        description: 'Complete docs for deploying 15+ frameworks autonomously with GDPR-compliant German hosting.',
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
