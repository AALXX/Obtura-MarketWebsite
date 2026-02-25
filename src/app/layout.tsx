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
        default: 'Obtura | Zero DevOps Deployment Platform for European SMEs',
        template: '%s | Obtura'
    },
    description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant hosting with EU data residency. Save €71K+ per year on DevOps costs.',
    keywords: [
        'Obtura',
        'devops platform',
        'zero devops',
        'deployment platform',
        'european smes',
        'GDPR compliant',
        'cloud development',
        'software deployment',
        'hosting europe',
        'EU data residency',
        'GDPR hosting',
        'small business devops',
        'startup deployment',
        'automation platform',
        'CI/CD platform',
        'continuous deployment',
        'infrastructure automation',
        'web hosting europe',
        'application deployment',
        'serverless platform',
        'PaaS europe',
        'DevOps tools',
        'deployment automation',
        'cloud hosting',
        'kubernetes alternative'
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
        alternateLocale: ['en_GB', 'de_DE', 'fr_FR'],
        url: 'https://obtura.dev',
        siteName: 'Obtura',
        title: 'Obtura | Zero DevOps Deployment Platform for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
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
        images: ['https://obtura.dev/Logo2.png'],
        creator: '@obtura',
        site: '@obtura'
    },
    alternates: {
        canonical: 'https://obtura.dev',
        languages: {
            en: 'https://obtura.dev',
            'en-US': 'https://obtura.dev',
            'en-GB': 'https://obtura.dev'
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
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform combining code editing, Git workflows, one-click deployment, and GDPR-compliant hosting with EU data residency.',
        foundingDate: '2026',
        founders: [
            {
                '@type': 'Person',
                name: 'Alexandru-Nicolae Șerban',
                jobTitle: 'Founder & CEO'
            },
            {
                '@type': 'Person',
                name: 'Rareș Ștefan Miu',
                jobTitle: 'Co-Founder & Head of Marketing'
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
        description: 'Zero DevOps deployment platform for European SMEs',
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
