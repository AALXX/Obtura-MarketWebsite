import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Open Source | Obtura - DevOps Automation Platform',
    description: 'Obtura open source commitment. We contribute to and support the open source community. View our open source projects, licenses, and contributions to the DevOps ecosystem.',
    keywords: ['open source', 'devops open source', 'github', 'open source contribution', 'devops tools', 'automation platform'],
    alternates: {
        canonical: 'https://obtura.dev/open-source'
    }
}

export default function OpenSourcePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-20 font-sans text-white">
            <div className="container mx-auto max-w-4xl px-4 py-16">
                {/* Breadcrumb */}
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
                        <li className="text-white">Open Source</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-1 text-xs font-medium text-[#ff6b35]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
                        Community Driven · MIT Licensed · DevOps Ecosystem
                    </div>
                    <h1 className="mb-3 text-4xl font-bold tracking-tight">Open Source at Obtura</h1>
                    <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">We believe in the power of open source. Obtura is built on open source technologies, and we are committed to giving back to the community that powers modern DevOps.</p>
                </header>

                <div className="space-y-12 text-gray-400">
                    {/* Our Philosophy */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Our Open Source Philosophy</h2>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="mb-4 leading-relaxed">
                                Open source software is the foundation of modern infrastructure. From Linux to Kubernetes, from Git to Docker, the tools that power the cloud are built by communities. At Obtura, we recognize that our platform would not exist without the incredible work of open source contributors worldwide.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { title: 'Use', desc: 'We build on proven open source technologies' },
                                    { title: 'Contribute', desc: 'We upstream improvements and bug fixes' },
                                    { title: 'Give Back', desc: 'We sponsor and support open source projects' }
                                ].map(({ title, desc }) => (
                                    <div key={title} className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                                        <h3 className="mb-2 font-semibold text-white">{title}</h3>
                                        <p className="text-xs text-gray-500">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Open Source Projects */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Our Open Source Projects</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    name: 'Obtura CLI',
                                    description: 'Command-line interface for deploying applications to Obtura. Written in Go, designed for speed and simplicity.',
                                    language: 'Go',
                                    license: 'MIT',
                                    stars: '1.2k',
                                    href: 'https://github.com/obtura/cli'
                                },
                                {
                                    name: 'Obtura SDK',
                                    description: 'Official SDK for integrating with the Obtura platform. Available for JavaScript, Python, and Go.',
                                    language: 'TypeScript',
                                    license: 'MIT',
                                    stars: '856',
                                    href: 'https://github.com/obtura/sdk'
                                },
                                {
                                    name: 'DeployKit',
                                    description: 'Lightweight container orchestration toolkit for small to medium deployments. Kubernetes-compatible API.',
                                    language: 'Rust',
                                    license: 'Apache 2.0',
                                    stars: '2.4k',
                                    href: 'https://github.com/obtura/deploykit'
                                },
                                {
                                    name: 'EU-Compliant Terraform Modules',
                                    description: 'Terraform modules for deploying GDPR-compliant infrastructure in EU regions across major cloud providers.',
                                    language: 'HCL',
                                    license: 'MIT',
                                    stars: '623',
                                    href: 'https://github.com/obtura/terraform-eu'
                                }
                            ].map(project => (
                                <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#ff6b35]/30 hover:bg-white/[0.05]">
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                                        <span className="text-sm text-gray-500">⭐ {project.stars}</span>
                                    </div>
                                    <p className="mb-3 text-sm text-gray-400">{project.description}</p>
                                    <div className="flex gap-3 text-xs">
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{project.language}</span>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{project.license}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Technologies We Use */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Open Source Technologies We Depend On</h2>
                        <p className="mb-6 leading-relaxed">Obtura is built on a foundation of remarkable open source projects. We want to acknowledge and thank the maintainers and contributors of these critical tools:</p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {[
                                { name: 'Next.js', role: 'Frontend Framework', href: 'https://nextjs.org' },
                                { name: 'React', role: 'UI Library', href: 'https://react.dev' },
                                { name: 'Tailwind CSS', role: 'Styling', href: 'https://tailwindcss.com' },
                                { name: 'Kubernetes', role: 'Orchestration', href: 'https://kubernetes.io' },
                                { name: 'Docker', role: 'Containerization', href: 'https://docker.com' },
                                { name: 'PostgreSQL', role: 'Database', href: 'https://postgresql.org' },
                                { name: 'Redis', role: 'Caching', href: 'https://redis.io' },
                                { name: 'Nginx', role: 'Web Server', href: 'https://nginx.org' },
                                { name: 'Prometheus', role: 'Monitoring', href: 'https://prometheus.io' },
                                { name: 'Grafana', role: 'Visualization', href: 'https://grafana.com' },
                                { name: 'Terraform', role: 'Infrastructure', href: 'https://terraform.io' },
                                { name: 'Git', role: 'Version Control', href: 'https://git-scm.com' }
                            ].map(({ name, role, href }) => (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-[#ff6b35]/30 hover:bg-white/[0.05]">
                                    <div>
                                        <p className="text-sm font-medium text-white">{name}</p>
                                        <p className="text-xs text-gray-500">{role}</p>
                                    </div>
                                    <span className="text-xs text-[#ff6b35]">→</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Contributing */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Contributing</h2>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="mb-4 leading-relaxed">We welcome contributions from the community! Whether you are fixing a bug, adding a feature, improving documentation, or reporting an issue, your contribution matters.</p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                    <h3 className="mb-2 text-sm font-semibold text-white">Code Contributions</h3>
                                    <ul className="space-y-1 text-xs text-gray-400">
                                        <li>• Fork the repository</li>
                                        <li>• Create a feature branch</li>
                                        <li>• Write tests for your changes</li>
                                        <li>• Submit a pull request</li>
                                    </ul>
                                </div>
                                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                    <h3 className="mb-2 text-sm font-semibold text-white">Other Ways to Help</h3>
                                    <ul className="space-y-1 text-xs text-gray-400">
                                        <li>• Report bugs and issues</li>
                                        <li>• Improve documentation</li>
                                        <li>• Answer questions in discussions</li>
                                        <li>• Share the project</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="https://github.com/obtura" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-2 text-sm text-[#ff6b35] transition-colors hover:bg-[#ff6b35]/20">
                                    View Our GitHub →
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Sponsorship */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Supporting the Ecosystem</h2>
                        <p className="mb-4 leading-relaxed">We financially support the open source projects we depend on through the following programs:</p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { title: 'GitHub Sponsors', desc: 'Monthly sponsorship of critical maintainers and projects', amount: '€2,500/month' },
                                { title: 'Open Collective', desc: 'Contributions to project collectives and foundations', amount: '€1,000/month' },
                                { title: 'Bug Bounties', desc: 'Rewards for security researchers and bug reporters', amount: 'Up to €5,000' },
                                { title: 'Event Sponsorship', desc: 'Supporting open source conferences and meetups', amount: '€10,000/year' }
                            ].map(({ title, desc, amount }) => (
                                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="font-semibold text-white">{title}</h3>
                                        <span className="text-xs text-[#ff6b35]">{amount}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Licenses */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Licensing</h2>
                        <div className="space-y-4">
                            <p className="leading-relaxed">Our open source projects are released under permissive licenses to maximize their utility while respecting the work of contributors:</p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                    <h3 className="mb-2 text-sm font-semibold text-white">MIT License</h3>
                                    <p className="mb-2 text-xs text-gray-400">Permissive license allowing reuse with minimal restrictions. Used for most of our tools and SDKs.</p>
                                    <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-xs text-[#ff6b35] hover:underline">
                                        View License →
                                    </a>
                                </div>
                                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                    <h3 className="mb-2 text-sm font-semibold text-white">Apache 2.0</h3>
                                    <p className="mb-2 text-xs text-gray-400">Permissive license with patent protection. Used for larger infrastructure projects.</p>
                                    <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer" className="text-xs text-[#ff6b35] hover:underline">
                                        View License →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Community */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Join Our Community</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { name: 'GitHub', desc: 'Star our repos, report issues, contribute code', href: 'https://github.com/obtura', icon: '🐙' },
                                { name: 'Discord', desc: 'Chat with the team and community', href: 'https://discord.gg/obtura', icon: '💬' },
                                { name: 'Twitter/X', desc: 'Follow for updates and announcements', href: 'https://twitter.com/obtura', icon: '🐦' }
                            ].map(({ name, desc, href, icon }) => (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-[#ff6b35]/30 hover:bg-white/[0.05]">
                                    <div className="mb-2 text-2xl">{icon}</div>
                                    <h3 className="mb-1 font-semibold text-white">{name}</h3>
                                    <p className="text-xs text-gray-400">{desc}</p>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Related Links */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="mb-4 text-lg font-semibold text-white">Related Resources</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Documentation', href: '/docs' },
                                { label: 'Security', href: '/security' },
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' }
                            ].map(({ label, href }) => (
                                <a key={label} href={href} className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#ff6b35]/30 hover:text-[#ff6b35]">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
