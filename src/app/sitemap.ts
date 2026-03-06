import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://obtura.dev'

    const posts = getAllPosts()

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6
        },
        {
            url: `${baseUrl}/gdpr`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        },
        {
            url: `${baseUrl}/cookies`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5
        },
        {
            url: `${baseUrl}/security`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        },
        {
            url: `${baseUrl}/open-source`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6
        }
    ]

    const blogPosts = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8
    }))

    return [...staticPages, ...blogPosts]
}
