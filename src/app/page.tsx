import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Obtura | #1 DevOps Automation & Autonomous Deployment Platform for European SMEs',
    description: 'Obtura is the leading autonomous deployment platform that eliminates DevOps complexity. Ship software 3x faster with AI-powered deployments, zero configuration CI/CD, and GDPR-compliant EU hosting. Save €71K+ annually on DevOps costs.',
    keywords: [
        'devops',
        'devops platform',
        'devops automation',
        'autonomous deployment',
        'automated deployment',
        'zero devops',
        'deployment platform',
        'continuous deployment',
        'CI/CD automation',
        'CI/CD platform',
        'devops tools',
        'devops software',
        'deployment automation',
        'infrastructure automation',
        'cloud deployment',
        'application deployment',
        'software deployment',
        'kubernetes alternative',
        'docker deployment',
        'gitops',
        'devops europe',
        'devops SME',
        'devops small business',
        'devops startup',
        'platform engineering',
        'site reliability engineering',
        'SRE tools',
        'infrastructure as code',
        'IaC',
        'cloud native',
        'microservices deployment',
        'container deployment',
        'serverless deployment',
        'web deployment',
        'app deployment',
        'european smes',
        'GDPR compliant hosting',
        'EU data residency',
        'GDPR devops',
        'GDPR cloud',
        'obtura'
    ],
    openGraph: {
        title: 'Obtura | #1 DevOps Automation & Autonomous Deployment Platform',
        description: 'Eliminate DevOps complexity. Ship software 3x faster with AI-powered autonomous deployments, zero-config CI/CD, and GDPR-compliant EU hosting.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - #1 DevOps Automation and Autonomous Deployment Platform for European SMEs'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | #1 DevOps Automation & Autonomous Deployment Platform',
        description: 'Eliminate DevOps complexity. Ship software 3x faster with AI-powered autonomous deployments and GDPR-compliant EU hosting.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: {
        canonical: 'https://obtura.dev'
    }
}

export default function Home() {
    return <HomeClient />
}
