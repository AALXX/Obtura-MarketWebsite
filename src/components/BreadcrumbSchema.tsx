'use client'

import { usePathname } from 'next/navigation'

export function BreadcrumbSchema() {
    const pathname = usePathname()

    if (!pathname) return null

    const pathSegments = pathname.split('/').filter(Boolean)

    if (pathSegments.length === 0) return null

    const breadcrumbItems = pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/')
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
        return {
            '@type': 'ListItem',
            position: index + 2,
            name,
            item: `https://obtura.dev${url}`
        }
    })

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
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
