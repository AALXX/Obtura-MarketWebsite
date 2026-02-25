import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Obtura | Zero DevOps Deployment for European SMEs',
    description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant hosting with EU data residency. Save €71K+ per year on DevOps costs.',
    keywords: ['devops', 'zero devops', 'deployment', 'european smes', 'GDPR', 'cloud development', 'software deployment', 'hosting', 'EU data residency', 'GDPR compliant', 'obtura'],
    openGraph: {
        title: 'Obtura | Zero DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Zero DevOps Deployment Platform'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Zero DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster. GDPR-compliant with EU data residency.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: {
        canonical: 'https://obtura.dev'
    }
}

export default function Home() {
    return <HomeClient />
}
