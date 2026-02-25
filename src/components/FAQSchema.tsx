import React from 'react'

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
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group rounded-lg border border-white/10 bg-[#0a0a0a] p-4">
                        <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
                            {faq.question}
                            <span className="ml-2 text-[#ff6b35] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-gray-400">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </>
    )
}
