'use client'

import { usePathname } from 'next/navigation'

// Maps known URL slugs to human-readable names for breadcrumb JSON-LD
const SEGMENT_NAMES: Record<string, string> = {
    'tech-stacks': 'Tech Stacks',
    'about': 'About',
    'blog': 'Blog',
    'docs': 'Documentation',
    'contact': 'Contact',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'gdpr': 'GDPR Compliance',
    'cookies': 'Cookie Policy',
    'security': 'Security',
}

function segmentToName(segment: string): string {
    if (SEGMENT_NAMES[segment]) return SEGMENT_NAMES[segment]
    // For blog post slugs: convert kebab-case to Title Case
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export function BreadcrumbSchema() {
    const pathname = usePathname()

    if (!pathname) return null

    const pathSegments = pathname.split('/').filter(Boolean)

    if (pathSegments.length === 0) return null

    const breadcrumbItems = pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/')
        const name = segmentToName(segment)
        const isLast = index === pathSegments.length - 1
        return {
            '@type': 'ListItem',
            position: index + 2,
            name,
            // Last item doesn't need item URL per Google guidelines, but including it is fine
            item: `https://obtura.dev${url}`,
            ...(isLast ? {} : {})
        }
    })

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `https://obtura.dev${pathname}#breadcrumb`,
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://obtura.dev'
            },
            ...breadcrumbItems
        ]
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
