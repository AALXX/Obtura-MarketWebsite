import { getAllPosts, getAllCategories, getAllTags } from '@/lib/data/blog-posts';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Blog | Tips, Guides & Insights | Obtura',
  description: 'Expert DevOps articles for European SMEs. Learn about zero-DevOps deployment, GDPR compliance, cost savings, and shipping code without a DevOps team.',
  keywords: [
    'devops blog',
    'devops guides',
    'european smes',
    'zero devops',
    'gdpr compliance',
    'deployment automation',
    'cost savings',
    'startup deployment',
    'obtura blog',
  ],
  openGraph: {
    title: 'DevOps Blog | Expert Tips & Guides | Obtura',
    description: 'Expert DevOps articles for European SMEs. Learn about zero-DevOps deployment, GDPR compliance, and shipping code without a DevOps team.',
    type: 'website',
    images: [
      {
        url: 'https://obtura.com/Logo2.png',
        width: 1200,
        height: 630,
        alt: 'Obtura DevOps Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Blog | Expert Tips & Guides | Obtura',
    description: 'Expert DevOps articles for European SMEs. Learn about zero-DevOps deployment, GDPR compliance, and shipping code without a DevOps team.',
    images: ['https://obtura.com/Logo2.png'],
  },
  alternates: {
    canonical: 'https://obtura.com/blog',
  },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const allTags = getAllTags();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Obtura DevOps Blog',
    description: 'Expert DevOps articles for European SMEs. Learn about zero-DevOps deployment, GDPR compliance, and shipping code without a DevOps team.',
    url: 'https://obtura.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Obtura',
      logo: {
        '@type': 'ImageObject',
        url: 'https://obtura.com/Logo2.png',
      },
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://obtura.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: post.author,
      },
      keywords: post.tags.join(', '),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/5 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
                DevOps Insights
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                DevOps Blog
              </h1>

              <p className="text-xl text-gray-400 mb-4">
                Expert guides and insights for European SMEs
              </p>

              <p className="text-lg text-gray-500 mb-8">
                Learn about zero-DevOps deployment, GDPR compliance, cost savings, and shipping code without a DevOps team.
              </p>

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm text-gray-500 self-center mr-2">Filter by category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white/5 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff6b35]/30 transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="p-8 sm:p-10">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#ff6b35] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center text-[#ff6b35] font-medium group-hover:translate-x-2 transition-transform">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Popular Topics</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-gradient-to-r from-[#ff6b35]/10 via-[#ff6b35]/5 to-transparent rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get DevOps Tips in Your Inbox
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join 1,000+ European developers receiving weekly insights on zero-DevOps deployment, GDPR compliance, and scaling without the overhead.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-12 px-4 rounded-lg bg-[#2a2a2a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="h-12 px-8 rounded-lg bg-[#ff6b35] text-black font-semibold hover:bg-[#ff7b45] transition-all shadow-lg shadow-[#ff6b35]/20 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
