import { getAllPosts, getAllCategories, getAllTags } from '@/lib/data/blog-posts'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
    title: 'Blog | Deploy Any Tech Stack in Europe | Obtura',
    description: 'Expert guides on deploying Next.js, Django, React, Python, Go & 15+ frameworks. Learn autonomous deployment, GDPR compliance, German hosting, and shipping without DevOps.',
    keywords: [
        'deploy nextjs guide',
        'deploy django tutorial',
        'deploy react app europe',
        'deploy python app germany',
        'autonomous deployment blog',
        'gdpr compliant hosting',
        'german hosting guide',
        'zero config deployment',
        'deploy any framework',
        'european deployment tips',
        'no devops deployment',
        'deploy nodejs eu',
        'deploy golang app guide',
        'framework deployment blog',
        'eu data residency guide'
    ],
    openGraph: {
        title: 'Obtura Blog | Deploy Any Tech Stack in Europe',
        description: 'Expert guides on deploying 15+ frameworks. Learn autonomous deployment, GDPR compliance, and German hosting.',
        type: 'website',
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura Blog - Deploy Any Tech Stack'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura Blog | Deploy Any Tech Stack in Europe',
        description: 'Expert guides on deploying 15+ frameworks autonomously with GDPR-compliant German hosting.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/blog'
    }
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export default function BlogPage() {
    const posts = getAllPosts()
    const categories = getAllCategories()
    const allTags = getAllTags()

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Obtura DevOps Blog',
        description: 'Expert DevOps articles for European SMEs. Learn about zero-DevOps deployment, GDPR compliance, and shipping code without a DevOps team.',
        url: 'https://obtura.dev/blog',
        publisher: {
            '@type': 'Organization',
            name: 'Obtura',
            logo: {
                '@type': 'ImageObject',
                url: 'https://obtura.dev/Logo2.png'
            }
        },
        blogPost: posts.map(post => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            url: `https://obtura.dev/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            author: {
                '@type': 'Person',
                name: post.author,
                url: 'https://obtura.dev/about'
            },
            keywords: post.tags.join(', ')
        }))
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/5 to-transparent" />

                    <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ff6b35]/10 px-4 py-2 text-sm font-medium text-[#ff6b35]">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6b35]" />
                                DevOps Insights
                            </div>

                            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">DevOps Blog</h1>

                            <p className="mb-4 text-xl text-gray-400">Expert guides and insights for European SMEs</p>

                            <p className="mb-8 text-lg text-gray-500">Learn about zero-DevOps deployment, GDPR compliance, cost savings, and shipping code without a DevOps team.</p>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{posts.length}</div>
                                    <div className="text-gray-500">Articles</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{categories.length}</div>
                                    <div className="text-gray-500">Categories</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{allTags.length}</div>
                                    <div className="text-gray-500">Topics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="border-y border-white/10">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="mr-2 self-center text-sm text-gray-500">Filter by category:</span>
                            {categories.map(category => (
                                <button key={category} className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all hover:bg-white/10 hover:text-white">
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8">
                            {posts.map((post, index) => (
                                <article key={post.slug} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#ff6b35]/30">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <div className="p-8 sm:p-10">
                                            <div className="mb-4 flex flex-wrap items-center gap-4">
                                                <span className="rounded-full bg-[#ff6b35]/10 px-3 py-1 text-sm font-medium text-[#ff6b35]">{post.category}</span>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center">
                                                        <Calendar className="mr-1 h-4 w-4" />
                                                        {formatDate(post.date)}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Clock className="mr-1 h-4 w-4" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                            </div>

                                            <h2 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#ff6b35] sm:text-3xl">{post.title}</h2>

                                            <p className="mb-6 text-lg leading-relaxed text-gray-400">{post.excerpt}</p>

                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.slice(0, 4).map(tag => (
                                                        <span key={tag} className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm text-gray-400">
                                                            <Tag className="mr-1 h-3 w-3" />
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <span className="inline-flex items-center font-medium text-[#ff6b35] transition-transform group-hover:translate-x-2">
                                                    Read Article
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Tags */}
                <section className="border-t border-white/10">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-center text-2xl font-bold text-white">Popular Topics</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {allTags.map(tag => (
                                <span key={tag} className="cursor-pointer rounded-full bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all hover:bg-white/10 hover:text-white">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="border-t border-white/10">
                    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="rounded-2xl bg-gradient-to-r from-[#ff6b35]/10 via-[#ff6b35]/5 to-transparent p-8 text-center sm:p-12">
                            <h2 className="mb-4 text-3xl font-bold text-white">Get DevOps Tips in Your Inbox</h2>
                            <p className="mx-auto mb-8 max-w-xl text-gray-400">Join European developers receiving insights on zero-DevOps deployment, GDPR compliance, and scaling without the overhead.</p>
                            <NewsletterForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
