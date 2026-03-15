import type { Metadata } from 'next'
import { Fraunces, DM_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

const fraunces = Fraunces({
    variable: '--font-fraunces',
    subsets: ['latin'],
    weight: ['300', '400', '700', '900']
})

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: {
        default: 'Obtura | Autonomous Deployment Platform for European SMEs',
        template: '%s | Obtura'
    },
    description: 'Ship code without a DevOps team. Obtura auto-deploys 15+ frameworks — GDPR-compliant EU hosting in Germany. Flat pricing from €79/month. No DevOps required.',
    keywords: [
        'autonomous deployment platform',
        'devops automation europe',
        'zero devops platform',
        'deploy any tech stack europe',
        'GDPR compliant hosting germany',
        'EU data residency hosting',
        'european sme deployment',
        'deploy nodejs europe',
        'deploy python django germany',
        'deploy golang app eu',
        'deploy php laravel germany',
        'deploy nextjs germany',
        'deploy react app eu',
        'ship code without devops',
        'git push deploy europe',
        'zero config deployment',
        'automated deployment platform',
        'cloud hosting germany gdpr',
        'PaaS europe GDPR',
        'kubernetes alternative europe'
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
        title: 'Obtura | Zero-DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster. Zero-config deployment, GDPR-compliant EU hosting, and built-in monitoring. No DevOps team required.',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Zero-DevOps Deployment Platform for European SMEs'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Zero-DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster. Zero-config deployment, GDPR-compliant EU hosting. No DevOps team required.',
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
        '@id': 'https://obtura.dev/#organization',
        name: 'Obtura',
        alternateName: 'Obtura Platform',
        url: 'https://obtura.dev',
        logo: {
            '@type': 'ImageObject',
            url: 'https://obtura.dev/Logo2.png',
            width: 512,
            height: 512
        },
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
            email: 'alexserbwork@gmail.com',
            availableLanguage: ['English', 'Romanian']
        },
        sameAs: ['https://twitter.com/obtura', 'https://linkedin.com/company/obtura', 'https://github.com/obtura'],
        areaServed: {
            '@type': 'GeoShape',
            name: 'Europe',
            description: 'European Union and European Economic Area'
        },
        audience: {
            '@type': 'Audience',
            audienceType: 'European SMEs, Startups, Software Development Teams'
        },
        serviceType: 'DevOps Platform, Cloud Hosting, Software Deployment',
        knowsAbout: [
            'DevOps automation',
            'Continuous deployment',
            'GDPR compliance',
            'EU data residency',
            'Cloud infrastructure',
            'Node.js deployment',
            'Python deployment',
            'Go deployment',
            'Rust deployment',
            'PHP deployment'
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Obtura Subscription Plans',
            itemListElement: [
                { '@type': 'Offer', name: 'Starter', price: '79', priceCurrency: 'EUR' },
                { '@type': 'Offer', name: 'Team', price: '199', priceCurrency: 'EUR' },
                { '@type': 'Offer', name: 'Business', price: '499', priceCurrency: 'EUR' },
                { '@type': 'Offer', name: 'Enterprise', price: '899', priceCurrency: 'EUR' }
            ]
        }
    }

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://obtura.dev/#website',
        name: 'Obtura',
        url: 'https://obtura.dev',
        publisher: {
            '@id': 'https://obtura.dev/#organization'
        },
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
        '@id': 'https://obtura.dev/#software',
        name: 'Obtura',
        url: 'https://obtura.dev',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'DevOps Platform',
        description:
            'Autonomous DevOps deployment platform for European SMEs. Zero-config deployment for 15+ frameworks (Node.js, Python, Go, Rust, PHP) with GDPR-compliant EU hosting in Germany.',
        operatingSystem: 'Web, Cloud',
        publisher: {
            '@id': 'https://obtura.dev/#organization'
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '79',
            highPrice: '899',
            offerCount: '4',
            availability: 'https://schema.org/PreOrder'
        },
        featureList: [
            'Zero-config autonomous deployment',
            'GDPR compliant EU hosting in Germany',
            'EU data residency',
            'Automatic SSL certificate management',
            'Git push deployment',
            'CI/CD pipeline automation',
            'Built-in application performance monitoring',
            'AI DevOps assistant',
            'Preview environments per branch',
            'Role-based access control',
            'One-click rollback',
            'Daily backups with 30-day retention'
        ],
        screenshot: {
            '@type': 'ImageObject',
            url: 'https://obtura.dev/og-image.png',
            width: 1200,
            height: 630,
            description: 'Obtura autonomous deployment platform interface'
        },
        softwareVersion: '1.0',
        releaseNotes: 'https://obtura.dev/blog',
        inLanguage: 'en',
        audience: {
            '@type': 'Audience',
            audienceType: 'European SMEs, Software Development Teams'
        }
    }

    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <head suppressHydrationWarning>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/Logo2.png" />
                <meta name="theme-color" content="#0d0c0b" />
                <meta name="msapplication-TileColor" content="#0d0c0b" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="alternate" type="application/rss+xml" title="Obtura Blog" href="https://obtura.dev/rss.xml" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPRPENGL4Z" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VPRPENGL4Z');`
                    }}
                />
            </head>
            <body className={`${fraunces.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}>
                <NavBar />
                {children}
                <Footer />
                <BreadcrumbSchema />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }} />
            </body>
        </html>
    )
}
