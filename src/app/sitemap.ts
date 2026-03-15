import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://obtura.dev'

    const posts = getAllPosts()

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'weekly' as const,
            priority: 1.0
        },
        {
            url: `${baseUrl}/tech-stacks`,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.9
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'weekly' as const,
            priority: 0.9
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.6
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-02-25'),
            changeFrequency: 'yearly' as const,
            priority: 0.3
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-02-25'),
            changeFrequency: 'yearly' as const,
            priority: 0.3
        },
        {
            url: `${baseUrl}/gdpr`,
            lastModified: new Date('2026-02-25'),
            changeFrequency: 'yearly' as const,
            priority: 0.4
        },
        {
            url: `${baseUrl}/cookies`,
            lastModified: new Date('2026-02-25'),
            changeFrequency: 'yearly' as const,
            priority: 0.2
        },
        {
            url: `${baseUrl}/security`,
            lastModified: new Date('2026-02-25'),
            changeFrequency: 'yearly' as const,
            priority: 0.4
        }
    ]

    const blogPosts = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateModified || post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8
    }))

    return [...staticPages, ...blogPosts]
}
