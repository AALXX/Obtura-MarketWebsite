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
        images: [{ url: 'https://obtura.dev/Logo2.png', width: 1200, height: 630, alt: 'Obtura Blog - Deploy Any Tech Stack' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura Blog | Deploy Any Tech Stack in Europe',
        description: 'Expert guides on deploying 15+ frameworks autonomously with GDPR-compliant German hosting.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: { canonical: 'https://obtura.dev/blog' }
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
            logo: { '@type': 'ImageObject', url: 'https://obtura.dev/Logo2.png' }
        },
        blogPost: posts.map(post => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            url: `https://obtura.dev/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            author: { '@type': 'Person', name: post.author, url: 'https://obtura.dev/about' },
            keywords: post.tags.join(', ')
        }))
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>

                {/* Header */}
                <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12">
                    <div className="mx-auto max-w-6xl">

                        <nav aria-label="Breadcrumb" className="mb-10">
                            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                                <li>/</li>
                                <li>Blog</li>
                            </ol>
                        </nav>

                        <div className="mb-10">
                            <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— DevOps insights</p>
                            <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                                DevOps Blog.
                            </h1>
                            <p className="max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                Expert guides and insights for European SMEs. Deploy smarter, ship faster, stay compliant.
                            </p>
                        </div>

                        <div className="flex items-baseline gap-8">
                            <div>
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)' }}>{posts.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Articles</span>
                            </div>
                            <div>
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)' }}>{categories.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Categories</span>
                            </div>
                            <div>
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)' }}>{allTags.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Topics</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories filter */}
                <section className="border-y px-6 py-5 sm:px-8 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                    <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>Filter:</span>
                        {categories.map(category => (
                            <button key={category} className="border px-3 py-1 text-sm transition-colors hover:text-[#ff6b35]"
                                style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)', background: 'transparent' }}>
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-6xl">
                        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                            {posts.map((post) => (
                                <article key={post.slug} className="group border-b py-10" style={{ borderColor: 'var(--border-subtle)' }}>
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <div className="mb-3 flex flex-wrap items-center gap-4">
                                            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>{post.category}</span>
                                            <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--fg-tertiary)' }}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(post.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>

                                        <h2 className="mb-3 text-2xl font-black leading-tight tracking-tight transition-colors group-hover:text-[#ff6b35] sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                                            {post.title}
                                        </h2>

                                        <p className="mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{post.excerpt}</p>

                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.slice(0, 4).map(tag => (
                                                    <span key={tag} className="inline-flex items-center gap-1 border px-2 py-0.5 text-xs"
                                                        style={{ borderColor: 'var(--border-subtle)', color: 'var(--fg-tertiary)' }}>
                                                        <Tag className="h-3 w-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <span className="inline-flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: 'var(--brand)' }}>
                                                Read Article
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Topics */}
                <section className="border-t px-6 py-16 sm:px-8 sm:py-20 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Topics</p>
                        <h2 className="mb-8 text-2xl font-black" style={{ fontFamily: 'var(--font-display)' }}>Popular Topics</h2>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <span key={tag} className="cursor-pointer border px-3 py-1 text-sm transition-colors hover:text-[#ff6b35]"
                                    style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)' }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="border-t px-6 py-20 sm:px-8 sm:py-24 lg:px-12" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="mx-auto max-w-6xl">
                        <div className="border p-8 sm:p-12" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)' }}>
                            <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Newsletter</p>
                            <h2 className="mb-3 text-3xl font-black" style={{ fontFamily: 'var(--font-display)' }}>Get DevOps Tips in Your Inbox</h2>
                            <p className="mb-8 max-w-xl" style={{ color: 'var(--fg-secondary)' }}>
                                Join European developers receiving insights on zero-DevOps deployment, GDPR compliance, and scaling without the overhead.
                            </p>
                            <NewsletterForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
