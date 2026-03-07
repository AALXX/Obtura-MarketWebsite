import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: {
        default: 'Obtura | Autonomous Deployment Platform - Deploy Any Tech Stack in Europe',
        template: '%s | Obtura'
    },
    description: 'Deploy any tech stack autonomously with Obtura. Zero-config deployment for Node.js, Python, Go, Rust, PHP & 15+ frameworks. 85%+ app coverage. GDPR-compliant EU hosting in Germany. No DevOps team required. Ship code in minutes.',
    keywords: [
        'Obtura',
        'devops',
        'devops automation',
        'devops platform',
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
        'GDPR compliant',
        'cloud development',
        'hosting europe',
        'EU data residency',
        'GDPR hosting',
        'GDPR devops',
        'GDPR cloud',
        'PaaS europe',
        'cloud hosting',
        // Long-tail keywords for tech stack deployment
        'deploy nextjs app europe',
        'deploy react app germany',
        'deploy nodejs app eu',
        'deploy python app europe',
        'deploy django app germany',
        'deploy flask app eu',
        'deploy fastapi app europe',
        'deploy golang app germany',
        'deploy rust app eu',
        'deploy php app europe',
        'deploy laravel app germany',
        'deploy ruby app eu',
        'deploy rails app europe',
        'deploy vue app germany',
        'deploy svelte app eu',
        'deploy angular app europe',
        'deploy astro app germany',
        'deploy remix app eu',
        'deploy express app europe',
        'deploy nestjs app germany',
        'autonomous deployment platform',
        'auto deploy any tech stack',
        'deploy without devops team',
        'zero config deployment europe',
        'git push deploy europe',
        // GDPR and hosting specific
        'GDPR compliant hosting germany',
        'GDPR compliant hosting europe',
        'EU data residency hosting',
        'GDPR cloud hosting germany',
        'EU hosting for startups',
        'GDPR compliant paas',
        'european cloud hosting',
        'EU based hosting',
        'GDPR safe hosting',
        'data residency germany',
        'data residency europe',
        // Tech stack coverage
        'nodejs deployment europe',
        'python deployment germany',
        'go deployment eu',
        'rust deployment europe',
        'php deployment germany',
        'java deployment eu',
        'typescript deployment europe',
        'javascript deployment germany'
    ],
    authors: [{ name: 'Obtura' }],
    creator: 'Obtura',
    publisher: 'Obtura',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://obtura.dev',
        siteName: 'Obtura',
        title: 'Obtura | Zero DevOps Deployment Platform for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Zero DevOps Deployment Platform for European SMEs'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Zero DevOps Deployment Platform for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        images: ['https://obtura.dev/og-image.png'],
        creator: '@obtura',
        site: '@obtura'
    },
    alternates: {
        canonical: 'https://obtura.dev',
        languages: {
            en: 'https://obtura.dev'
        }
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ''
    },
    category: 'technology',
    classification: 'Software Development Platform, DevOps, Cloud Hosting',
    other: {
        'X-UA-Compatible': 'IE=edge',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-title': 'Obtura',
        'format-detection': 'telephone=no'
    },
    applicationName: 'Obtura',
    appLinks: {
        web: {
            url: 'https://obtura.dev',
            should_fallback: true
        }
    },
    bookmarks: ['https://obtura.dev'],
    archives: ['https://obtura.dev/blog']
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Obtura',
        alternateName: 'Obtura Platform',
        url: 'https://obtura.dev',
        logo: 'https://obtura.dev/Logo2.png',
        description: 'Obtura empowers European SMEs to deploy any tech stack autonomously with zero DevOps overhead. Supports 15+ frameworks including Node.js, Python, Go, Rust, PHP with 85%+ app coverage. GDPR-compliant with EU data residency in Germany.',
        foundingDate: '2026',
        founders: [
            {
                '@type': 'Person',
                name: 'Alexandru-Nicolae Șerban',
                jobTitle: 'Founder & CEO'
            }
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'RO',
            addressLocality: 'Bucharest'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contact@obtura.dev',
            availableLanguage: ['English', 'Romanian']
        },
        sameAs: ['https://twitter.com/obtura', 'https://linkedin.com/company/obtura', 'https://github.com/obtura'],
        areaServed: 'Europe',
        audience: {
            '@type': 'Audience',
            audienceType: 'European SMEs, Startups, Software Development Teams'
        },
        serviceType: 'DevOps Platform, Cloud Hosting, Software Deployment'
    }

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Obtura',
        url: 'https://obtura.dev',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://obtura.dev/blog?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        },
        description: 'Autonomous deployment platform for European SMEs. Deploy 15+ tech stacks with zero configuration. GDPR-compliant EU hosting in Germany.',
        inLanguage: 'en'
    }

    const softwareApplicationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Obtura',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'DevOps Platform',
        description: 'All-in-one zero-DevOps platform for European SMEs with GDPR-compliant hosting and EU data residency',
        operatingSystem: 'Cloud',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR'
        },
        featureList: ['One-click deployment', 'GDPR compliant hosting', 'EU data residency', 'Automatic SSL', 'Git integration', 'CI/CD pipeline', 'Application monitoring'],
        screenshot: 'https://obtura.dev/Logo2.png',
        softwareVersion: '1.0'
    }

    return (
        <html lang="en" dir="ltr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/Logo2.png" />
                <meta name="theme-color" content="#0a0a0a" />
                <meta name="msapplication-TileColor" content="#0a0a0a" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="manifest" href="/manifest.json" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }} />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavBar />
                {children}
                <Footer />
                <BreadcrumbSchema />
            </body>
        </html>
    )
}
