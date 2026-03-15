import ContactPageClient from './ContactPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book a Demo or Join Waitlist | Obtura',
    description: "Book a personalized demo of Obtura's zero-DevOps deployment platform. See how European SMEs save €71K+/year. Deploy 15+ frameworks with GDPR-compliant EU hosting in Germany.",
    keywords: [
        'book obtura demo',
        'join obtura waitlist',
        'autonomous deployment demo',
        'european devops platform demo',
        'gdpr hosting demo germany',
        'zero config deployment demo',
        'obtura early access',
        'european sme deployment waitlist',
        'devops platform europe demo',
        'no devops deployment contact'
    ],
    openGraph: {
        title: 'Book a Demo or Join the Waitlist | Obtura',
        description: "See how European SMEs save €71K+/year with Obtura's zero-DevOps platform. GDPR-compliant EU hosting, 15+ frameworks, no DevOps needed.",
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contact Obtura - Book a Demo or Join the Waitlist'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book a Demo or Join the Waitlist | Obtura',
        description: "Book a demo of Obtura's zero-DevOps platform. European SMEs save €71K+/year. GDPR-compliant EU hosting.",
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/contact'
    }
}

export default function Contact() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        '@id': 'https://obtura.dev/contact#webpage',
                        name: 'Contact Obtura',
                        description: "Book a demo or join the waitlist for Obtura's zero-DevOps platform",
                        url: 'https://obtura.dev/contact',
                        isPartOf: { '@id': 'https://obtura.dev/#website' },
                        mainEntity: {
                            '@type': 'Organization',
                            '@id': 'https://obtura.dev/#organization',
                            name: 'Obtura',
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'sales',
                                email: 'alexserbwork@gmail.com',
                                availableLanguage: 'English',
                                areaServed: 'Europe'
                            },
                            address: {
                                '@type': 'PostalAddress',
                                addressCountry: 'RO',
                                addressLocality: 'Bucharest'
                            }
                        }
                    })
                }}
            />
            <ContactPageClient />
        </>
    )
}
