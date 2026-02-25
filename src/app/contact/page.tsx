import ContactPageClient from './ContactPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Book a Demo or Join Waitlist | Obtura',
    description: "Book a personalized demo of Obtura's zero-DevOps platform or join our waitlist. See how European SMEs are saving €71K+ per year on DevOps costs. GDPR compliant with EU data residency.",
    keywords: ['contact obtura', 'book demo', 'devops demo', 'zero devops demo', 'obtura waitlist', 'european sme devops', 'GDPR demo', 'devops consultation', 'cloud deployment demo', 'contact roman devops', 'bucharest tech company'],
    openGraph: {
        title: 'Contact Obtura | Book a Demo or Join Waitlist',
        description: 'Book a personalized demo of our zero-DevOps platform. See how European SMEs save €71K+ per year.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Contact Obtura - Book a Demo'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Obtura | Book a Demo or Join Waitlist',
        description: 'Book a personalized demo of our zero-DevOps platform.',
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
