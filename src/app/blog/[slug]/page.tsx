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
            authors: [post.author],
            tags: post.tags,
            images: [
                {
                    url: post.image || 'https://obtura.dev/Logo2.png',
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
            images: [post.image || 'https://obtura.dev/Logo2.png']
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
        .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mb-6 mt-8">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mb-4 mt-8">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mb-3 mt-6">$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300">$1</li>')
        .replace(/<li.*<\/li>/g, match => `<ul class="mb-4">${match}</ul>`)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#ff6b35] hover:underline">$1</a>')
        .replace(/\n\n/g, '</p><p class="mb-4 text-gray-300 leading-relaxed">')
        .replace(/^(.+)$/gim, '<p class="mb-4 text-gray-300 leading-relaxed">$1</p>')
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
        image: post.image || 'https://obtura.dev/Logo2.png',
        datePublished: post.date,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: 'https://obtura.dev'
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
        articleSection: post.category
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <article className="min-h-screen bg-[#0a0a0a] font-sans text-white">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/5 to-transparent" />

                    <div className="relative mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
                        <Link href="/blog" className="mb-8 inline-flex items-center text-gray-400 transition-colors hover:text-[#ff6b35]">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>

                        {/* Category Badge */}
                        <div className="mb-6 inline-block">
                            <span className="rounded-full bg-[#ff6b35]/10 px-4 py-2 text-sm font-medium text-[#ff6b35]">{post.category}</span>
                        </div>

                        {/* Title */}
                        <h1 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">{post.title}</h1>

                        {/* Excerpt */}
                        <p className="mb-8 text-xl leading-relaxed text-gray-400">{post.excerpt}</p>

                        {/* Meta Info */}
                        <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Calendar className="mr-2 h-4 w-4" />
                                {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-400">By {post.author}</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm text-gray-400 transition-colors hover:bg-white/10">
                                    <Tag className="mr-1 h-3 w-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
                    <div className="prose prose-invert prose-lg prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#ff6b35] prose-strong:text-white prose-li:text-gray-300 max-w-none" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
                </div>

                {/* CTA Section */}
                <div className="border-t border-white/10">
                    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="rounded-2xl bg-gradient-to-r from-[#ff6b35]/10 to-transparent p-8 sm:p-12">
                            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ready to simplify your DevOps?</h2>
                            <p className="mb-6 text-lg text-gray-400">Join European SMEs shipping code 3x faster with Obtura's zero-DevOps platform.</p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#ff6b35] px-8 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
                                    Get Early Access
                                </Link>
                                <Link href="/" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 font-semibold text-white transition-all hover:bg-white/5">
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
