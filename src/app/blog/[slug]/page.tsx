import { getAllPosts, getPostBySlug } from '@/lib/data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map(post => ({
        slug: post.slug
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found | Obtura Blog',
            description: 'The requested blog post could not be found.'
        }
    }

    return {
        title: `${post.title} | Obtura Blog`,
        description: post.excerpt,
        keywords: [...post.tags, 'devops', 'obtura', 'european smes', 'gdpr', 'deployment'],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.dateModified || post.date,
            authors: [post.author],
            tags: post.tags,
            images: [
                {
                    url: post.image ? `https://obtura.dev${post.image}` : 'https://obtura.dev/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image ? `https://obtura.dev${post.image}` : 'https://obtura.dev/og-image.png']
        },
        alternates: {
            canonical: `https://obtura.dev/blog/${post.slug}`
        }
    }
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

function renderMarkdown(content: string) {
    return content
        .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6 mt-8" style="color:var(--fg-primary)">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-4 mt-8" style="color:var(--fg-primary)">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-3 mt-6" style="color:var(--fg-primary)">$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--fg-primary)">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2" style="color:var(--fg-secondary)">$1</li>')
        .replace(/(<li[^>]*>.*?<\/li>\n?)+/g, match => `<ul class="mb-4">${match}</ul>`)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="hover:underline" style="color:var(--brand)">$1</a>')
        .replace(/\n\n/g, `</p><p class="mb-4 leading-relaxed" style="color:var(--fg-secondary)">`)
        .replace(/^(.+)$/gim, `<p class="mb-4 leading-relaxed" style="color:var(--fg-secondary)">$1</p>`)
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image || 'https://obtura.dev/og-image.png',
        datePublished: post.date,
        dateModified: post.dateModified || post.date,
        author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://obtura.dev/about'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Obtura',
            logo: {
                '@type': 'ImageObject',
                url: 'https://obtura.dev/Logo2.png'
            }
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://obtura.dev/blog/${post.slug}`
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <article className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
                {/* Header */}
                <div className="mx-auto max-w-4xl px-6 pt-12 pb-16 sm:px-8 lg:px-12">
                    <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm transition-colors hover:text-brand" style={{ color: 'var(--fg-secondary)' }}>
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    {/* Category label */}
                    <p className="mb-5 mt-6 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>
                        — {post.category}
                    </p>

                    {/* Title */}
                    <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>{post.title}</h1>

                    {/* Excerpt */}
                    <p className="mb-8 text-xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="mb-8 flex flex-wrap items-center gap-6 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                        <div>By {post.author}</div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center gap-1 border px-3 py-1 text-sm transition-colors" style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)' }}>
                                <Tag className="h-3 w-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
                        <div className="prose prose-invert prose-lg prose-headings:font-black prose-a:text-brand max-w-none" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
                        <div className="border p-8 sm:p-12" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)' }}>
                            <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Get started</p>
                            <h2 className="mb-4 text-2xl font-black sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>Ready to simplify your DevOps?</h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--fg-secondary)' }}>Join European SMEs shipping code 3x faster with Obtura&apos;s zero-DevOps platform.</p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-brand px-8 font-semibold text-black transition-colors hover:bg-brand-hover">
                                    Get Early Access
                                </Link>
                                <Link href="/" className="inline-flex h-12 items-center justify-center border px-8 font-semibold transition-colors hover:text-brand" style={{ borderColor: 'var(--border-default)', color: 'var(--fg-primary)' }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
