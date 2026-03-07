import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSchema from '@/components/FAQSchema'
import { Code2, Terminal, Braces, Settings, Globe, Gem, Coffee, Package, Layers, Cpu } from 'lucide-react'

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
        images: [
            {
                url: 'https://obtura.dev/Logo2.png',
                width: 1200,
                height: 630,
                alt: 'Obtura - Deploy Any Tech Stack Autonomously'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Deploy Any Tech Stack Autonomously | Obtura',
        description: 'Autonomous deployment for 15+ tech stacks with zero configuration.',
        images: ['https://obtura.dev/Logo2.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/tech-stacks'
    }
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
        iconColor: '#F7DF1E',
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
        iconColor: '#3776AB',
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
        iconColor: '#00ADD8',
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
        iconColor: '#DEA584',
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
        iconColor: '#777BB4',
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
        iconColor: '#CC342D',
        frameworks: [
            { name: 'Rails', description: 'Web-application framework' },
            { name: 'Sinatra', description: 'DSL for quickly creating web applications' },
            { name: 'Hanami', description: 'Modern web framework for Ruby' }
        ]
    },
    {
        category: 'Java',
        Icon: Coffee,
        iconColor: '#007396',
        frameworks: [
            { name: 'Spring Boot', description: 'Framework for production-grade apps' },
            { name: 'Quarkus', description: 'Kubernetes native Java stack' },
            { name: 'Micronaut', description: 'Modern, JVM-based framework' }
        ]
    },
    {
        category: 'Other',
        Icon: Layers,
        iconColor: '#ff6b35',
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
        name: 'Tech Stack Deployment - Obtura',
        description: 'Autonomous deployment platform supporting 15+ tech stacks with zero configuration',
        url: 'https://obtura.dev/tech-stacks',
        mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'Obtura Deployment Platform',
            applicationCategory: 'DeveloperApplication',
            applicationSubCategory: 'Deployment Platform',
            featureList: techStacks.flatMap(stack => stack.frameworks.map(f => f.name)),
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR'
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="min-h-screen bg-[#0a0a0a] pt-16 font-sans text-white">
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-sm text-gray-400">
                                <li>
                                    <a href="/" className="transition-colors hover:text-[#ff6b35]">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span>/</span>
                                </li>
                                <li className="text-white">Tech Stacks</li>
                            </ol>
                        </nav>

                        <header className="mb-16 text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-2 text-sm font-medium text-[#ff6b35]">
                                <span>85%+ App Coverage</span>
                            </div>
                            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                                Deploy Any Tech Stack <span className="text-[#ff6b35]">Autonomously</span>
                            </h1>
                            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">Zero configuration required. Just push your code, and we handle the rest. Auto-detection, smart provisioning, and GDPR-compliant EU hosting in Germany.</p>
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-8 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
                                Start Deploying
                            </Link>
                        </header>

                        {/* How it Works */}
                        <div className="mb-16 rounded-2xl border border-white/10 bg-[#1a1a1a] p-8">
                            <h2 className="mb-8 text-center text-2xl font-bold">How Autonomous Deployment Works</h2>
                            <div className="grid gap-6 sm:grid-cols-4">
                                {[
                                    { step: '1', title: 'Push Code', desc: 'Push to your Git repository' },
                                    { step: '2', title: 'Auto-Detect', desc: 'We identify your framework' },
                                    { step: '3', title: 'Configure', desc: 'Smart build configuration' },
                                    { step: '4', title: 'Live', desc: 'Deployed to Germany 🇩🇪' }
                                ].map(item => (
                                    <div key={item.step} className="text-center">
                                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b35]/20 text-xl font-bold text-[#ff6b35]">{item.step}</div>
                                        <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {techStacks.map(stack => {
                                const IconComponent = stack.Icon
                                return (
                                    <div key={stack.category} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 transition-all hover:border-[#ff6b35]/30">
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                                                <IconComponent className="h-6 w-6" style={{ color: stack.iconColor }} />
                                            </div>
                                            <h2 className="text-xl font-semibold text-white">{stack.category}</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {stack.frameworks.map(framework => (
                                                <li key={framework.name} className="flex items-start justify-between gap-2">
                                                    <span className="font-medium text-white">{framework.name}</span>
                                                    <span className="text-right text-xs text-gray-500">{framework.description}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid gap-6 sm:grid-cols-3">
                            {[
                                { value: '15+', label: 'Framework Categories' },
                                { value: '85%+', label: 'App Coverage' },
                                { value: '0', label: 'Config Files Required' }
                            ].map(stat => (
                                <div key={stat.label} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 text-center">
                                    <div className="mb-2 text-4xl font-bold text-[#ff6b35]">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-16 rounded-2xl border border-[#ff6b35]/30 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/5 p-8 text-center">
                            <h2 className="mb-4 text-2xl font-bold">Ready to deploy your stack?</h2>
                            <p className="mb-6 text-gray-400">Join European teams shipping code without DevOps overhead.</p>
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-8 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
                                Get Early Access
                            </Link>
                        </div>

                        {/* FAQ */}
                        <div className="mt-16">
                            <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
                            <FAQSchema faqs={faqData} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
