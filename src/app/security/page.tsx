import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Security | Obtura - DevOps Automation Platform',
    description: 'Obtura Security Overview - Enterprise-grade security for autonomous deployment. SOC 2 Type II, GDPR compliance, encryption at rest and in transit, EU data residency.',
    keywords: ['security', 'devops security', 'deployment security', 'SOC 2', 'GDPR security', 'EU data residency', 'encryption', 'infrastructure security'],
    alternates: {
        canonical: 'https://obtura.dev/security'
    }
}

export default function SecurityPage() {
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
                        <li className="text-white">Security</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-1 text-xs font-medium text-[#ff6b35]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
                        SOC 2 Type II · ISO 27001 Aligned · GDPR Compliant
                    </div>
                    <h1 className="mb-3 text-4xl font-bold tracking-tight">Security at Obtura</h1>
                    <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">Security is not an afterthought at Obtura—it is foundational to everything we build. Our autonomous deployment platform is built with enterprise-grade security controls to protect your applications, data, and infrastructure.</p>
                </header>

                <div className="space-y-12 text-gray-400">
                    {/* Security Overview */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Security Overview</h2>
                        <div className="mb-8 grid gap-4 sm:grid-cols-3">
                            {[
                                { icon: '🔒', title: 'Encryption Everywhere', desc: '256-bit AES at rest, TLS 1.3 in transit' },
                                { icon: '🛡️', title: 'SOC 2 Type II', desc: 'Independently audited annually' },
                                { icon: '🇪🇺', title: 'EU Data Residency', desc: '100% EU-hosted, GDPR compliant' }
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                    <div className="mb-3 text-2xl">{icon}</div>
                                    <h3 className="mb-2 font-semibold text-white">{title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="leading-relaxed">Obtura operates a defense-in-depth security architecture. From infrastructure hardening to application security, we implement multiple layers of protection to ensure your deployments are secure by default.</p>
                    </section>

                    {/* Encryption */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Encryption & Data Protection</h2>
                        <div className="space-y-6">
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="mb-4 text-lg font-semibold text-white">Encryption at Rest</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {['256-bit AES encryption for all stored data', 'Encrypted database volumes with rotating keys', 'Encrypted backups in geographically separated locations', 'Hardware Security Modules (HSMs) for key management', 'Automatic key rotation every 90 days', 'End-to-end encrypted secrets vault'].map(item => (
                                        <div key={item} className="flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-sm">
                                            <span className="mt-0.5 shrink-0 text-[#ff6b35]">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="mb-4 text-lg font-semibold text-white">Encryption in Transit</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {['TLS 1.3 enforced for all connections', 'TLS 1.2 minimum supported', 'HSTS (HTTP Strict Transport Security) enabled', 'Perfect Forward Secrecy (PFS) with ECDHE', 'Certificate pinning for API connections', 'Automatic certificate renewal and monitoring'].map(item => (
                                        <div key={item} className="flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-sm">
                                            <span className="mt-0.5 shrink-0 text-[#ff6b35]">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Infrastructure Security */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Infrastructure Security</h2>
                        <div className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="mb-3 text-lg font-semibold text-white">Network Security</h3>
                                    <ul className="space-y-2 text-sm">
                                        {['Zero-trust network architecture', 'Network segmentation and micro-segmentation', 'DDoS protection and mitigation', 'Web Application Firewall (WAF)', 'Intrusion Detection/Prevention Systems (IDS/IPS)', 'VPC isolation per customer'].map(item => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="mt-0.5 shrink-0 text-[#ff6b35]">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="mb-3 text-lg font-semibold text-white">Access Controls</h3>
                                    <ul className="space-y-2 text-sm">
                                        {['Role-Based Access Control (RBAC)', 'Multi-Factor Authentication (MFA)', 'Single Sign-On (SSO) support', 'Principle of least privilege', 'Just-in-time (JIT) access for sensitive operations', 'Privileged Access Management (PAM)'].map(item => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="mt-0.5 shrink-0 text-[#ff6b35]">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-5">
                                <p className="font-semibold text-white">Data Residency</p>
                                <p className="mt-2 text-sm">All customer data is stored exclusively within EU data centers (Frankfurt and Amsterdam). Your data never leaves the European Economic Area (EEA).</p>
                            </div>
                        </div>
                    </section>

                    {/* Application Security */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Application Security</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Secure Development Lifecycle (SDLC)',
                                    items: ['Security requirements in design phase', 'Automated static application security testing (SAST)', 'Dependency vulnerability scanning', 'Code review with security focus', 'Secure coding training for developers']
                                },
                                {
                                    title: 'Runtime Protection',
                                    items: ['Runtime Application Self-Protection (RASP)', 'Input validation and sanitization', 'Output encoding to prevent XSS', 'CSRF protection on all state-changing requests', 'Rate limiting and throttling']
                                },
                                {
                                    title: 'Secrets Management',
                                    items: ['Encrypted environment variables', 'Secrets rotation automation', 'No plaintext secrets in code or logs', 'Hardware security module integration', 'Audit logging of all secret access']
                                }
                            ].map(({ title, items }) => (
                                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        {items.map(item => (
                                            <div key={item} className="flex items-start gap-2 text-sm">
                                                <span className="mt-0.5 shrink-0 text-[#ff6b35]">✓</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Compliance & Certifications */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Compliance & Certifications</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    title: 'SOC 2 Type II',
                                    desc: 'Independent audit of our security controls, availability, and confidentiality. Audited annually by a third-party firm.',
                                    status: 'Certified'
                                },
                                {
                                    title: 'ISO 27001',
                                    desc: 'Information Security Management System (ISMS) certification for comprehensive security management.',
                                    status: 'In Progress'
                                },
                                {
                                    title: 'GDPR Compliance',
                                    desc: 'Full compliance with EU General Data Protection Regulation. EU data residency, data subject rights, breach notification.',
                                    status: 'Compliant'
                                },
                                {
                                    title: 'PCI DSS',
                                    desc: 'Payment Card Industry Data Security Standard compliance for secure payment processing.',
                                    status: 'Level 1 Service Provider'
                                }
                            ].map(({ title, desc, status }) => (
                                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-semibold text-white">{title}</h3>
                                        <span className={`rounded-full px-2 py-1 text-xs ${status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>{status}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Monitoring & Incident Response */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Monitoring & Incident Response</h2>
                        <div className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { title: '24/7 Monitoring', desc: 'Continuous security monitoring with automated alerting for anomalies.' },
                                    { title: 'Threat Intelligence', desc: 'Integration with threat intelligence feeds for proactive protection.' },
                                    { title: 'Log Retention', desc: '12-month retention of security logs with tamper-proof storage.' }
                                ].map(({ title, desc }) => (
                                    <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                        <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
                                        <p className="text-xs text-gray-400">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-6">
                                <h3 className="mb-4 text-lg font-semibold text-white">Incident Response Timeline</h3>
                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { time: '< 1 hour', label: 'Detection & Triage', desc: 'Automated alerts trigger immediate investigation by on-call security team.' },
                                        { time: '< 4 hours', label: 'Containment', desc: 'Affected systems isolated, impact assessed, containment measures deployed.' },
                                        { time: '< 72 hours', label: 'Notification', desc: 'Affected customers and supervisory authorities notified per GDPR requirements.' }
                                    ].map(({ time, label, desc }) => (
                                        <div key={time} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                            <div className="mb-2 font-mono text-lg font-bold text-[#ff6b35]">{time}</div>
                                            <div className="mb-1 text-sm font-semibold text-white">{label}</div>
                                            <p className="text-xs text-gray-500">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vulnerability Disclosure */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Vulnerability Disclosure</h2>
                        <p className="mb-4 leading-relaxed">We welcome security researchers to report vulnerabilities in a responsible manner. If you discover a security issue, please report it to us privately so we can address it promptly.</p>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                            <h3 className="mb-3 text-lg font-semibold text-white">How to Report</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2">
                                    <span className="text-[#ff6b35]">•</span>
                                    Email:{' '}
                                    <a href="mailto:security@obtura.dev" className="text-[#ff6b35] hover:underline">
                                        security@obtura.dev
                                    </a>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#ff6b35]">•</span>
                                    Encrypt sensitive reports using our{' '}
                                    <a href="/.well-known/security.txt" className="text-[#ff6b35] hover:underline">
                                        PGP key
                                    </a>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#ff6b35]">•</span>
                                    Allow up to 48 hours for initial response
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500">We commit to: Acknowledging reports within 48 hours, providing regular updates on remediation progress, and not taking legal action against researchers who follow responsible disclosure practices.</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Contact Our Security Team</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                <h3 className="mb-3 text-lg font-semibold text-white">Security Inquiries</h3>
                                <p className="mb-3 text-sm text-gray-400">For general security questions or to request security documentation:</p>
                                <a href="mailto:security@obtura.dev" className="text-[#ff6b35] hover:underline">
                                    security@obtura.dev
                                </a>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                <h3 className="mb-3 text-lg font-semibold text-white">Compliance & DPA</h3>
                                <p className="mb-3 text-sm text-gray-400">For Data Processing Agreements and compliance inquiries:</p>
                                <a href="mailto:dpo@obtura.dev" className="text-[#ff6b35] hover:underline">
                                    dpo@obtura.dev
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="mb-4 text-lg font-semibold text-white">Related Resources</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'GDPR Compliance', href: '/gdpr' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'Cookie Policy', href: '/cookies' }
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
