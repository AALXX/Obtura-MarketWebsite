import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSchema from '@/components/FAQSchema'
import { Code2, Terminal, Settings, Globe, Gem, Coffee, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Deploy Any Tech Stack Autonomously | 85%+ Framework Coverage | Obtura',
    description: 'Autonomous deployment for 15+ tech stacks. Deploy Node.js, Next.js, React, Python Django, Go, Rust, PHP Laravel, Ruby on Rails & more with zero configuration. GDPR-compliant EU hosting in Germany.',
    keywords: [
        'deploy nextjs app',
        'deploy react app europe',
        'deploy nodejs app germany',
        'deploy python app eu',
        'deploy django app',
        'deploy flask app',
        'deploy fastapi app',
        'deploy golang app',
        'deploy rust app',
        'deploy php laravel',
        'deploy ruby on rails',
        'deploy vue app',
        'deploy angular app',
        'deploy svelte app',
        'deploy astro app',
        'deploy remix app',
        'deploy express app',
        'deploy nestjs app',
        'autonomous deployment',
        'zero config deployment',
        'auto detect framework',
        'gdpr compliant hosting germany',
        'eu data residency',
        'european deployment platform',
        'tech stack deployment',
        'multi framework deployment',
        'deploy without devops',
        'git push deploy',
        'automated deployment europe'
    ],
    openGraph: {
        title: 'Deploy Any Tech Stack Autonomously | Obtura',
        description: 'Autonomous deployment for 15+ tech stacks. Zero configuration required. GDPR-compliant EU hosting.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/og-image.png', width: 1200, height: 630, alt: 'Obtura - Deploy Any Tech Stack Autonomously in Europe' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Deploy Any Tech Stack Autonomously | Obtura',
        description: 'Autonomous deployment for 15+ tech stacks with zero configuration.',
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: { canonical: 'https://obtura.dev/tech-stacks' }
}

const faqData = [
    {
        question: 'What tech stacks does Obtura support?',
        answer: 'Obtura supports 85%+ of modern web applications across 15+ frameworks including: JavaScript/TypeScript (Next.js, React, Vue, Angular, Node.js, Express, NestJS), Python (Django, Flask, FastAPI, Streamlit), Go (Gin, Echo, Fiber), Rust (Actix, Axum, Rocket), PHP (Laravel, Symfony), Ruby (Rails), Java (Spring Boot), and more. We auto-detect your framework from your code.'
    },
    {
        question: 'How does autonomous deployment work?',
        answer: 'When you push code to your Git repository, Obtura automatically detects your tech stack and framework, analyzes your dependencies, configures the build process, provisions the right infrastructure, and deploys your application. No configuration files needed.'
    },
    {
        question: 'Is my app GDPR compliant when deployed?',
        answer: 'Yes. All apps deployed on Obtura are GDPR compliant by default. We host in Germany with EU data residency, provide SSL certificates, daily backups, and all necessary security measures to ensure compliance.'
    },
    {
        question: 'Can I deploy custom or legacy applications?',
        answer: 'Yes. For applications outside our auto-detection coverage, you can use custom Docker containers or provide a simple configuration file. Our platform supports any application that can run in a container.'
    },
    {
        question: 'Do I need a DevOps team to use Obtura?',
        answer: 'No. Obtura is designed for teams without dedicated DevOps engineers. The entire deployment process is automated, including infrastructure provisioning, SSL, monitoring, and scaling. Your developers can deploy directly from Git.'
    }
]

const techStacks = [
    {
        category: 'JavaScript / TypeScript',
        Icon: Code2,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Next.js', description: 'React framework for production' },
            { name: 'React', description: 'Library for web user interfaces' },
            { name: 'Vue.js', description: 'Progressive JavaScript framework' },
            { name: 'Angular', description: 'Platform for building mobile and desktop web apps' },
            { name: 'Svelte', description: 'Cybernetically enhanced web apps' },
            { name: 'Node.js', description: 'JavaScript runtime' },
            { name: 'Express', description: 'Fast, unopinionated web framework' },
            { name: 'NestJS', description: 'Progressive Node.js framework' },
            { name: 'Remix', description: 'Full stack web framework' },
            { name: 'Astro', description: 'All-in-one web framework' }
        ]
    },
    {
        category: 'Python',
        Icon: Terminal,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Django', description: 'High-level Python web framework' },
            { name: 'Flask', description: 'Lightweight WSGI web application framework' },
            { name: 'FastAPI', description: 'Modern, fast web framework' },
            { name: 'Streamlit', description: 'Turn data scripts into shareable web apps' },
            { name: 'Celery', description: 'Distributed task queue' },
            { name: 'Tornado', description: 'Web framework and async networking library' }
        ]
    },
    {
        category: 'Go',
        Icon: Cpu,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Gin', description: 'High-performance HTTP web framework' },
            { name: 'Echo', description: 'High performance, minimalist Go web framework' },
            { name: 'Fiber', description: 'Express inspired web framework' },
            { name: 'Standard Library', description: 'net/http for custom apps' }
        ]
    },
    {
        category: 'Rust',
        Icon: Settings,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Actix', description: 'Actor framework and powerful web server' },
            { name: 'Axum', description: 'Ergonomic and modular web framework' },
            { name: 'Rocket', description: 'Web framework for Rust' },
            { name: 'Warp', description: 'Super-easy, composable web server framework' }
        ]
    },
    {
        category: 'PHP',
        Icon: Globe,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Laravel', description: 'PHP web application framework' },
            { name: 'Symfony', description: 'PHP framework for web applications' },
            { name: 'WordPress', description: 'Content management system' },
            { name: 'Drupal', description: 'Content management platform' }
        ]
    },
    {
        category: 'Ruby',
        Icon: Gem,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Rails', description: 'Web-application framework' },
            { name: 'Sinatra', description: 'DSL for quickly creating web applications' },
            { name: 'Hanami', description: 'Modern web framework for Ruby' }
        ]
    },
    {
        category: 'Java',
        Icon: Coffee,
        iconColor: 'var(--fg-secondary)',
        frameworks: [
            { name: 'Spring Boot', description: 'Framework for production-grade apps' },
            { name: 'Quarkus', description: 'Kubernetes native Java stack' },
            { name: 'Micronaut', description: 'Modern, JVM-based framework' }
        ]
    },
    {
        category: 'Other',
        Icon: Layers,
        iconColor: 'var(--brand)',
        frameworks: [
            { name: 'Static Sites', description: 'HTML, CSS, JavaScript' },
            { name: 'Docker', description: 'Custom container images' },
            { name: 'Hugo', description: 'Static site generator' },
            { name: 'Jekyll', description: 'Simple, blog-aware static sites' }
        ]
    }
]

export default function TechStacksPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://obtura.dev/tech-stacks#webpage',
        name: 'Deploy Any Tech Stack Autonomously | Obtura',
        description:
            'Obtura supports autonomous deployment for 15+ tech stacks including Node.js, Python, Go, Rust, PHP, Ruby, and Java — all with zero configuration and GDPR-compliant EU hosting.',
        url: 'https://obtura.dev/tech-stacks',
        inLanguage: 'en',
        isPartOf: { '@id': 'https://obtura.dev/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://obtura.dev' },
                { '@type': 'ListItem', position: 2, name: 'Tech Stacks', item: 'https://obtura.dev/tech-stacks' }
            ]
        },
        mainEntity: {
            '@type': 'ItemList',
            name: 'Supported Tech Stacks',
            description: 'Tech stacks and frameworks supported by the Obtura autonomous deployment platform',
            numberOfItems: techStacks.reduce((acc, stack) => acc + stack.frameworks.length, 0),
            itemListElement: techStacks.flatMap((stack, si) =>
                stack.frameworks.map((f, fi) => ({
                    '@type': 'ListItem',
                    position: si * 10 + fi + 1,
                    name: f.name,
                    description: f.description
                }))
            )
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>

                {/* Header */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-8 sm:py-28 lg:px-12">
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', inset: 0, pointerEvents: 'none',
                            backgroundImage: 'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                            WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 5% 20%, black 10%, transparent 70%)',
                            maskImage: 'radial-gradient(ellipse 60% 80% at 5% 20%, black 10%, transparent 70%)',
                            opacity: 0.5
                        }}
                    />
                    <div className="relative mx-auto max-w-6xl">

                        <nav aria-label="Breadcrumb" className="mb-10">
                            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                <li><Link href="/" className="transition-colors hover:text-brand">Home</Link></li>
                                <li>/</li>
                                <li aria-current="page">Tech Stacks</li>
                            </ol>
                        </nav>

                        <div className="mb-12">
                            <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— 85%+ app coverage</p>
                            <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                                Deploy any<br />
                                <span style={{ color: 'var(--brand)' }}>tech stack.</span>
                            </h1>
                            <div style={{ width: '3rem', height: '3px', background: 'var(--brand)', marginBottom: '1.5rem' }} />
                            <p className="mb-8 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                                Zero configuration required. Push your code — we auto-detect your framework, provision the right infrastructure, and deploy to GDPR-compliant EU servers in Germany.
                            </p>
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 bg-brand px-8 text-sm font-semibold text-black transition-colors hover:bg-brand-hover">
                                Start Deploying
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex items-baseline gap-10 border-t pt-8" style={{ borderColor: 'var(--border-subtle)' }}>
                            {[
                                { value: '15+', label: 'Framework Categories' },
                                { value: '85%+', label: 'App Coverage' },
                                { value: '0', label: 'Config Files Required' }
                            ].map(stat => (
                                <div key={stat.label}>
                                    <span className="text-3xl font-black" style={{ color: 'var(--brand)', fontFamily: 'var(--font-display)' }}>{stat.value}</span>
                                    <span className="ml-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="border-y px-6 py-16 sm:px-8 sm:py-20 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— How it works</p>
                        <h2 className="mb-10 text-2xl font-black leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Autonomous Deployment</h2>
                        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                            {[
                                { step: '01', title: 'Push Code', desc: 'Push to your Git repository as usual.' },
                                { step: '02', title: 'Auto-Detect', desc: 'We identify your framework and dependencies.' },
                                { step: '03', title: 'Configure', desc: 'Smart build configuration — no YAML required.' },
                                { step: '04', title: 'Live in Germany', desc: 'Deployed to GDPR-compliant EU infrastructure.' }
                            ].map(item => (
                                <div key={item.step} className="flex items-start gap-8 border-b py-6" style={{ borderColor: 'var(--border-subtle)' }}>
                                    <span className="w-8 shrink-0 font-mono text-xs" style={{ color: 'var(--brand-secondary)', fontFamily: 'var(--font-mono)' }}>{item.step}</span>
                                    <div>
                                        <h3 className="mb-1 font-semibold">{item.title}</h3>
                                        <p className="text-sm" style={{ color: 'var(--fg-secondary)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Grid */}
                <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Supported stacks</p>
                        <h2 className="mb-10 text-2xl font-black leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Every Framework You Need</h2>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {techStacks.map(stack => {
                                const IconComponent = stack.Icon
                                return (
                                    <div key={stack.category} className="border p-6 transition-colors hover:border-brand"
                                        style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                        <div className="mb-4 flex items-center gap-3">
                                            <IconComponent className="h-5 w-5 shrink-0" style={{ color: stack.iconColor }} />
                                            <h3 className="font-semibold">{stack.category}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {stack.frameworks.map(framework => (
                                                <li key={framework.name}>
                                                    <span className="text-sm font-medium">{framework.name}</span>
                                                    <p className="text-xs leading-snug" style={{ color: 'var(--fg-tertiary)' }}>{framework.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12" style={{ background: 'var(--brand)' }}>
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(13,12,11,0.55)', fontFamily: 'var(--font-mono)' }}>— Get started</p>
                        <h2 className="mb-4 text-3xl font-black leading-none tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: '#0d0c0b' }}>Ready to deploy your stack?</h2>
                        <p className="mb-8 max-w-xl" style={{ color: 'rgba(13,12,11,0.7)' }}>
                            Join European teams shipping code without DevOps overhead.
                        </p>
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 px-8 text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: '#0d0c0b', color: 'var(--brand)' }}>
                            Get Early Access
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— FAQ</p>
                        <h2 className="mb-8 text-2xl font-black leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
                        <FAQSchema faqs={faqData} />
                    </div>
                </section>
            </div>
        </>
    )
}
