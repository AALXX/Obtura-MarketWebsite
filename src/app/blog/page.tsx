import { getAllPosts, getAllCategories, getAllTags } from '@/lib/data/blog-posts'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
    title: 'DevOps Blog for European SMEs | Obtura',
    description: 'Expert guides on zero-DevOps deployment, GDPR-compliant EU hosting, and shipping code faster. Deploy Next.js, Django, Python, Go, Rust & 15+ frameworks without a DevOps team.',
    keywords: [
        'devops blog european smes',
        'zero devops deployment guides',
        'deploy nextjs guide europe',
        'deploy django tutorial germany',
        'deploy python app europe',
        'autonomous deployment blog',
        'gdpr compliant hosting guide',
        'german hosting setup',
        'zero config deployment tutorial',
        'deploy nodejs eu guide',
        'deploy golang app europe',
        'eu data residency guide',
        'ship code without devops',
        'european sme devops tips',
        'deployment automation guides'
    ],
    openGraph: {
        title: 'Obtura DevOps Blog | Guides for European SMEs',
        description: 'Expert guides on zero-DevOps deployment, GDPR hosting, and shipping code faster. Next.js, Django, Python, Go & 15+ frameworks covered.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/og-image.png', width: 1200, height: 630, alt: 'Obtura Blog - DevOps Guides for European SMEs' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obtura DevOps Blog | Guides for European SMEs',
        description: 'Expert guides on zero-DevOps deployment and GDPR-compliant EU hosting for 15+ frameworks.',
        images: ['https://obtura.dev/og-image.png']
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
        '@type': ['Blog', 'CollectionPage'],
        '@id': 'https://obtura.dev/blog#blog',
        name: 'Obtura DevOps Blog',
        description: 'Expert guides on zero-DevOps deployment, GDPR-compliant EU hosting, and shipping code faster without a DevOps team. Covers 15+ frameworks including Next.js, Django, Python, Go, and Rust.',
        url: 'https://obtura.dev/blog',
        inLanguage: 'en',
        isPartOf: { '@id': 'https://obtura.dev/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://obtura.dev' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://obtura.dev/blog' }
            ]
        },
        publisher: {
            '@id': 'https://obtura.dev/#organization'
        },
        blogPost: posts.map(post => ({
            '@type': 'BlogPosting',
            '@id': `https://obtura.dev/blog/${post.slug}#article`,
            headline: post.title,
            description: post.excerpt,
            url: `https://obtura.dev/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            inLanguage: 'en',
            author: {
                '@type': 'Person',
                name: post.author,
                url: 'https://obtura.dev/about'
            },
            publisher: { '@id': 'https://obtura.dev/#organization' },
            image: {
                '@type': 'ImageObject',
                url: post.image ? `https://obtura.dev${post.image}` : 'https://obtura.dev/og-image.png',
                width: 1200,
                height: 630
            },
            keywords: post.tags.join(', '),
            articleSection: post.category
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
                                <li><Link href="/" className="transition-colors hover:text-brand">Home</Link></li>
                                <li>/</li>
                                <li aria-current="page">Blog</li>
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
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand)' }}>{posts.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Articles</span>
                            </div>
                            <div>
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand)' }}>{categories.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Categories</span>
                            </div>
                            <div>
                                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand)' }}>{allTags.length}</span>
                                <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>Topics</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories filter */}
                <section className="border-y px-6 py-5 sm:px-8 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                    <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>Categories:</span>
                        {categories.map(category => (
                            <span key={category} className="border px-3 py-1 text-sm"
                                style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)' }}>
                                {category}
                            </span>
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

                                        <h2 className="mb-3 text-2xl font-black leading-tight tracking-tight transition-colors group-hover:text-brand sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
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
                                <span key={tag} className="border px-3 py-1 text-sm"
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
