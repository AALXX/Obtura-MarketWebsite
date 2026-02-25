import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        default: 'Obtura | Zero DevOps Deployment for European SMEs',
        template: '%s | Obtura'
    },
    description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform combining code editing, Git workflows, one-click deployment, and GDPR-compliant hosting with EU data residency.',
    keywords: [
        'Obtura',
        'devops',
        'zero devops',
        'deployment',
        'european smes',
        'GDPR',
        'cloud development',
        'software deployment',
        'hosting',
        'EU data residency',
        'GDPR compliant',
        'small business',
        'startups',
        'automation',
        'CI/CD',
        'continuous deployment',
        'infrastructure',
        'web hosting',
        'application deployment',
        'serverless',
        'platform as a service',
        'PaaS',
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
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://obtura.com',
        siteName: 'Obtura',
        title: 'Obtura | Zero DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        images: [
            {
                url: 'https://obtura.com/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Zero DevOps Deployment Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura | Zero DevOps Deployment for European SMEs',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform. GDPR-compliant with EU data residency.',
        images: ['https://obtura.com/Logo2.png'],
        creator: '@obtura',
    },
    alternates: {
        canonical: 'https://obtura.com',
        languages: {
            'en-US': 'https://obtura.com',
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
    category: 'technology',
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Obtura',
        url: 'https://obtura.com',
        logo: 'https://obtura.com/Logo2.png',
        description: 'Obtura empowers European SMEs to ship software 3x faster through an all-in-one zero-DevOps platform.',
        foundingDate: '2024',
        founders: [
            {
                '@type': 'Person',
                name: 'Obtura Team',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'RO',
            addressLocality: 'Bucharest',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contact@obtura.com',
        },
        sameAs: [
            'https://twitter.com/obtura',
            'https://linkedin.com/company/obtura',
            'https://github.com/obtura',
        ],
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="theme-color" content="#0a0a0a" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
