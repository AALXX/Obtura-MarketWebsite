import { getAllPosts, getPostBySlug } from '@/lib/data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

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

    // Keep meta title under 60 chars — truncate at word boundary if needed
    const fullTitle = `${post.title} | Obtura`
    const metaTitle = fullTitle.length <= 60 ? fullTitle : (() => {
        const words = post.title.split(' ')
        let truncated = ''
        for (const word of words) {
            if ((truncated + ' ' + word + ' | Obtura').length > 60) break
            truncated = truncated ? truncated + ' ' + word : word
        }
        return `${truncated} | Obtura`
    })()

    return {
        title: metaTitle,
        description: post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + '...' : post.excerpt,
        keywords: [...post.tags, 'devops europe', 'obtura', 'european smes', 'gdpr deployment', 'autonomous deployment'],
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
        // H1 in content becomes H2 — the page <h1> is already the article title
        .replace(/^# (.*$)/gim, '<h2 class="text-3xl font-bold mb-4 mt-8" style="color:var(--fg-primary)">$1</h2>')
        .replace(/^## (.*$)/gim, '<h3 class="text-2xl font-bold mb-4 mt-8" style="color:var(--fg-primary)">$1</h3>')
        .replace(/^### (.*$)/gim, '<h4 class="text-xl font-bold mb-3 mt-6" style="color:var(--fg-primary)">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--fg-primary)">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2" style="color:var(--fg-secondary)">$1</li>')
        .replace(/(<li[^>]*>.*?<\/li>\n?)+/g, match => `<ul class="mb-4">${match}</ul>`)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="hover:underline" style="color:var(--brand)">$1</a>')
        .replace(/\n\n/g, `</p><p class="mb-4 leading-relaxed" style="color:var(--fg-secondary)">`)
        .replace(/^(.+)$/gim, `<p class="mb-4 leading-relaxed" style="color:var(--fg-secondary)">$1</p>`)
}

function getRelatedPosts(currentSlug: string, currentTags: string[], allPosts: ReturnType<typeof getAllPosts>, limit = 3) {
    return allPosts
        .filter(p => p.slug !== currentSlug)
        .map(p => ({
            post: p,
            score: p.tags.filter(t => currentTags.includes(t)).length
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.post)
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const allPosts = getAllPosts()
    const relatedPosts = getRelatedPosts(post.slug, post.tags, allPosts)
    const wordCount = post.content.trim().split(/\s+/).length

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `https://obtura.dev/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        url: `https://obtura.dev/blog/${post.slug}`,
        image: {
            '@type': 'ImageObject',
            url: post.image ? `https://obtura.dev${post.image}` : 'https://obtura.dev/og-image.png',
            width: 1200,
            height: 630
        },
        datePublished: post.date,
        dateModified: post.dateModified || post.date,
        inLanguage: 'en',
        wordCount,
        author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://obtura.dev/about'
        },
        publisher: {
            '@type': 'Organization',
            '@id': 'https://obtura.dev/#organization',
            name: 'Obtura',
            logo: {
                '@type': 'ImageObject',
                url: 'https://obtura.dev/Logo2.png',
                width: 512,
                height: 512
            }
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        isPartOf: { '@id': 'https://obtura.dev/blog#blog' },
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
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                            <li><Link href="/" className="transition-colors hover:text-brand">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="transition-colors hover:text-brand">Blog</Link></li>
                            <li>/</li>
                            <li style={{ color: 'var(--fg-secondary)' }} className="max-w-50 truncate">{post.title}</li>
                        </ol>
                    </nav>

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
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
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

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="border-t" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-subtle)' }}>
                        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
                            <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Continue Reading</p>
                            <h2 className="mb-8 text-2xl font-black leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Related Articles</h2>
                            <div className="grid gap-6 sm:grid-cols-3">
                                {relatedPosts.map(related => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group border p-5 transition-colors hover:border-brand" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>{related.category}</p>
                                        <h3 className="mb-3 text-sm font-semibold leading-snug transition-colors group-hover:text-brand">{related.title}</h3>
                                        <p className="mb-4 text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--fg-tertiary)' }}>{related.excerpt}</p>
                                        <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--brand)' }}>
                                            Read
                                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="border-t" style={{ borderColor: 'var(--border-subtle)', background: 'var(--brand)' }}>
                    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(13,12,11,0.55)', fontFamily: 'var(--font-mono)' }}>— Get started</p>
                        <h2 className="mb-4 text-3xl font-black leading-none tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: '#0d0c0b' }}>Ready to simplify your DevOps?</h2>
                        <p className="mb-8 text-lg" style={{ color: 'rgba(13,12,11,0.7)' }}>Join European SMEs shipping code 3x faster with Obtura&apos;s zero-DevOps platform.</p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 px-8 text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: '#0d0c0b', color: 'var(--brand)' }}>
                                Get Early Access
                            </Link>
                            <Link href="/tech-stacks" className="inline-flex h-12 items-center justify-center gap-2 border px-8 text-sm font-semibold transition-colors" style={{ borderColor: 'rgba(13,12,11,0.3)', color: 'rgba(13,12,11,0.75)' }}>
                                See Supported Stacks
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
