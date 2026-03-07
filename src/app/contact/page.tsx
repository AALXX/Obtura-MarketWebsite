import ContactPageClient from './ContactPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact | Deploy Any Tech Stack in Europe | Obtura',
    description: "Book a demo of Obtura's autonomous deployment platform. Deploy Node.js, Python, Go, PHP, React, Django & 15+ frameworks. 85%+ coverage. GDPR-compliant German hosting. No DevOps needed.",
    keywords: [
        'contact obtura',
        'book demo',
        'autonomous deployment demo',
        'deploy nextjs demo',
        'deploy python app demo',
        'gdpr hosting demo germany',
        'zero config deployment demo',
        'deploy any tech stack demo',
        'obtura waitlist',
        'european deployment platform',
        'german hosting provider',
        'eu data residency demo',
        'no devops deployment demo',
        'autonomous platform demo',
        'bucharest tech company'
    ],
    openGraph: {
        title: 'Contact Obtura | Deploy Any Tech Stack in Europe',
        description: "Book a demo of Obtura's autonomous deployment platform. 85%+ framework coverage with GDPR-compliant German hosting. No DevOps needed.",
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Contact Obtura - Deploy Any Tech Stack'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Obtura | Deploy Any Tech Stack in Europe',
        description: "Book a demo of Obtura's autonomous deployment platform. 85%+ framework coverage.",
        images: ['https://obtura.dev/Logo2.png']
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
                        name: 'Contact Obtura',
                        description: "Book a demo or join the waitlist for Obtura's zero-DevOps platform",
                        url: 'https://obtura.dev/contact',
                        mainEntity: {
                            '@type': 'Organization',
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
