import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
    question: string
    answer: string
}

interface FAQSchemaProps {
    faqs: FAQ[]
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                {faqs.map((faq, index) => (
                    <details key={index} className="group border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                        <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-sm font-medium" style={{ color: 'var(--fg-primary)' }}>
                            {faq.question}
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--brand)' }} />
                        </summary>
                        <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </>
    )
}
