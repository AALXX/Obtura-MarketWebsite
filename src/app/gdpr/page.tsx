import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GDPR Compliance | Obtura',
    description: 'Obtura GDPR compliance center — EU data residency, your rights, DPA, security certifications, and sub-processor information.',
    openGraph: {
        title: 'GDPR Compliance | Obtura',
        description: 'Obtura GDPR compliance center: EU data residency guaranteed, full rights under GDPR, DPA included, SOC 2 Type II infrastructure.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/og-image.png', width: 1200, height: 630, alt: 'Obtura GDPR Compliance - EU Data Residency' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GDPR Compliance | Obtura',
        description: 'EU data residency, your GDPR rights, DPA, and SOC 2 Type II security at Obtura.',
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/gdpr'
    }
}

export default function GDPRPage() {
    return (
        <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-10">
                    <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                        <li><a href="/" className="transition-colors hover:text-brand">Home</a></li>
                        <li>/</li>
                        <li>GDPR Compliance</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b pb-10" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— GDPR (EU) 2016/679 · EU Data Residency · SOC 2 Type II</p>
                    <h1 className="mb-3 text-4xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>GDPR Compliance</h1>
                    <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                        Obtura is built from the ground up as a GDPR-first platform. As a Romanian company operating within the European Union, GDPR compliance is not a checkbox for us — it is a core architectural and operational principle. This page explains how we protect your data and support your own GDPR obligations.
                    </p>
                </header>

                {/* Key commitments at-a-glance */}
                <div className="mb-12 grid gap-4 sm:grid-cols-3">
                    {[
                        { title: 'EU Data Residency', desc: '100% of customer data stored in EU data centers (Frankfurt & Amsterdam). Data never leaves the EEA.' },
                        { title: 'SOC 2 Type II', desc: 'Infrastructure certified to SOC 2 Type II standards, audited annually by independent third parties.' },
                        { title: 'DPA Included', desc: 'GDPR-compliant Data Processing Agreement included with all plans. Available upon request.' },
                    ].map(({ title, desc }) => (
                        <div key={title} className="border p-6" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                            <h3 className="mb-2 font-semibold" style={{ color: 'var(--fg-primary)' }}>{title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-12" style={{ color: 'var(--fg-secondary)' }}>

                    {/* EU Data Residency */}
                    <Section title="EU Data Residency">
                        <div className="border p-5 mb-5" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)' }}>
                            <p className="font-semibold" style={{ color: 'var(--fg-primary)' }}>All customer data is stored exclusively within European Union territory. Your data never leaves the EEA.</p>
                        </div>
                        <p>Obtura operates its entire infrastructure within EU-based data centers. Our primary region is Frankfurt, Germany (eu-central-1), with failover capacity in Amsterdam, Netherlands (eu-west-1). We do not route, process, or replicate customer data outside the European Economic Area.</p>
                        <p className="mt-4">This matters because many competing DevOps platforms are US-headquartered and operate under US law — including the CLOUD Act — which may require them to disclose your data to US government agencies regardless of where the data is stored. As a fully European company, Obtura is not subject to US data access laws.</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                ['Primary Region', 'Frankfurt, Germany (EU)'],
                                ['Failover Region', 'Amsterdam, Netherlands (EU)'],
                                ['Backups', 'Encrypted, stored in EU only'],
                                ['CDN Edge Nodes', 'EU PoPs only for EU customers'],
                                ['Data Sovereignty', 'Romanian & EU law exclusively'],
                                ['US CLOUD Act', 'Not applicable — EU company'],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between border px-4 py-3 text-sm" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                                    <span style={{ color: 'var(--fg-tertiary)' }}>{label}</span>
                                    <span className="font-medium" style={{ color: 'var(--fg-primary)' }}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Data Processing Agreement */}
                    <Section title="Data Processing Agreement (DPA)">
                        <p>Under GDPR, when you use Obtura to deploy applications that process personal data of your end users, you are the data controller and Obtura acts as a data processor. This requires a Data Processing Agreement (DPA) between us — as mandated by GDPR Article 28.</p>
                        <p className="mt-4">Our standard DPA:</p>
                        <ul className="mt-3 space-y-2 list-none">
                            {[
                                'Is incorporated by reference into our Terms of Service for all customers.',
                                'Covers Obtura\'s obligations as a data processor, including security measures, sub-processor management, breach notification, and deletion obligations.',
                                'Includes Standard Contractual Clauses (SCCs) for any data that may be processed by sub-processors outside the EEA.',
                                'Is provided as a standalone executed document upon request for customers who require it for compliance or audit purposes.',
                            ].map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--brand)', opacity: 0.6 }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">To request a signed DPA, contact <a href="mailto:dpo@obtura.dev" className="hover:underline" style={{ color: 'var(--brand)' }}>dpo@obtura.dev</a>.</p>
                    </Section>

                    {/* Your Rights */}
                    <Section title="Your Rights Under GDPR">
                        <p>GDPR grants individuals significant rights over their personal data. As a data subject, you can exercise these rights with respect to the personal data Obtura holds about you as a customer.</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    right: 'Right of Access (Art. 15)',
                                    how: 'Request a complete export of your account data via the dashboard under Settings → Privacy, or email alexserbwork@gmail.com.',
                                },
                                {
                                    right: 'Right to Rectification (Art. 16)',
                                    how: 'Update most account data directly in Settings. For corrections to billing or other records, email alexserbwork@gmail.com.',
                                },
                                {
                                    right: 'Right to Erasure (Art. 17)',
                                    how: 'Delete your account from Settings → Account → Delete Account. Full data deletion within 30 days (billing records retained 7 years per law).',
                                },
                                {
                                    right: 'Right to Portability (Art. 20)',
                                    how: 'Export all your account data and deployment configurations in JSON/CSV format from Settings → Privacy → Export Data.',
                                },
                                {
                                    right: 'Right to Restriction (Art. 18)',
                                    how: 'Request restriction of processing in specific circumstances. Contact dpo@obtura.dev with details of your request.',
                                },
                                {
                                    right: 'Right to Object (Art. 21)',
                                    how: 'Opt out of marketing at any time via email preferences. Object to legitimate-interest processing by contacting dpo@obtura.dev.',
                                },
                                {
                                    right: 'Right to Withdraw Consent',
                                    how: 'Withdraw consent for analytics cookies via the cookie banner. Withdraw marketing consent via email unsubscribe or account settings.',
                                },
                                {
                                    right: 'Right to Complain',
                                    how: 'Lodge a complaint with ANSPDCP (Romania) at dataprotection.ro or with your local EU supervisory authority.',
                                },
                            ].map(({ right, how }) => (
                                <div key={right} className="border p-4" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                    <h4 className="mb-2 text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>{right}</h4>
                                    <p className="text-sm leading-relaxed">{how}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm">We respond to all rights requests within <strong style={{ color: 'var(--fg-primary)' }}>30 days</strong>. Identity verification is required. There is <strong style={{ color: 'var(--fg-primary)' }}>no charge</strong> for exercising your rights.</p>
                    </Section>

                    {/* Security */}
                    <Section title="Technical & Organizational Security Measures">
                        <p>GDPR Article 32 requires data controllers and processors to implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. Here is what we have in place:</p>

                        <div className="mt-6 space-y-6">
                            {[
                                {
                                    category: 'Encryption',
                                    items: [
                                        '256-bit AES encryption for all data at rest',
                                        'TLS 1.3 for all data in transit (TLS 1.2 minimum enforced)',
                                        'Encrypted database backups with separate key management',
                                        'End-to-end encrypted secrets management (environment variables)',
                                    ],
                                },
                                {
                                    category: 'Access Controls',
                                    items: [
                                        'Role-based access control (RBAC) with principle of least privilege',
                                        'Multi-factor authentication (MFA) required for all Obtura staff',
                                        'Privileged access management (PAM) for infrastructure access',
                                        'Access reviews conducted quarterly',
                                        'Zero-trust network architecture',
                                    ],
                                },
                                {
                                    category: 'Infrastructure & Certifications',
                                    items: [
                                        'SOC 2 Type II certified infrastructure',
                                        'ISO 27001 aligned security management (certification in progress)',
                                        'Regular third-party penetration testing (annual minimum)',
                                        'Automated vulnerability scanning (continuous)',
                                        'DDoS protection and Web Application Firewall (WAF)',
                                    ],
                                },
                                {
                                    category: 'Operational Security',
                                    items: [
                                        'Documented incident response plan',
                                        '72-hour breach notification procedure (GDPR Art. 33 compliant)',
                                        'Employee security awareness training (annual)',
                                        'Background checks for staff with data access',
                                        'Segregation of duties for sensitive operations',
                                    ],
                                },
                                {
                                    category: 'Business Continuity',
                                    items: [
                                        'Automated backups with tested restore procedures',
                                        'Multi-region disaster recovery capability',
                                        'Recovery Time Objective (RTO): < 4 hours',
                                        'Recovery Point Objective (RPO): < 1 hour',
                                    ],
                                },
                            ].map(({ category, items }) => (
                                <div key={category}>
                                    <h3 className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>{category}</h3>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        {items.map(item => (
                                            <div key={item} className="flex items-start gap-2 border px-3 py-2 text-sm" style={{ borderColor: 'var(--border-subtle)' }}>
                                                <span className="mt-0.5 shrink-0" style={{ color: 'var(--brand)' }}>✓</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Sub-processors */}
                    <Section title="Sub-Processor Transparency">
                        <p>GDPR requires that we inform you of the sub-processors we engage to provide our services. We maintain strict contractual controls over all sub-processors and ensure they operate in compliance with GDPR.</p>
                        <p className="mt-4">Categories of sub-processors we use:</p>
                        <table className="mt-4 w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b" style={{ borderColor: 'var(--border-default)' }}>
                                    <th className="py-3 pr-4 text-left font-semibold" style={{ color: 'var(--fg-primary)' }}>Category</th>
                                    <th className="py-3 pr-4 text-left font-semibold" style={{ color: 'var(--fg-primary)' }}>Location</th>
                                    <th className="py-3 text-left font-semibold" style={{ color: 'var(--fg-primary)' }}>Safeguard</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Cloud Infrastructure (compute/storage)', 'EU (Germany, Netherlands)', 'EU-based, contractual'],
                                    ['Payment Processing', 'EU / EEA', 'SCCs + adequacy decision'],
                                    ['Transactional Email Delivery', 'EU preferred / SCCs where outside', 'SCCs + TOMs'],
                                    ['Customer Support Platform', 'EU', 'Contractual + EU data residency'],
                                    ['Application Error Monitoring', 'EU', 'EU hosted, contractual'],
                                ].map(([category, location, safeguard]) => (
                                    <tr key={category} className="border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                                        <td className="py-3 pr-4">{category}</td>
                                        <td className="py-3 pr-4 text-xs" style={{ color: 'var(--fg-primary)' }}>{location}</td>
                                        <td className="py-3 text-xs" style={{ color: 'var(--fg-primary)' }}>{safeguard}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-4 text-sm">We will notify customers of any material changes to our sub-processor list at least <strong style={{ color: 'var(--fg-primary)' }}>30 days in advance</strong>. The complete, up-to-date sub-processor list with named entities is available upon request at <a href="mailto:dpo@obtura.dev" className="hover:underline" style={{ color: 'var(--brand)' }}>dpo@obtura.dev</a>.</p>
                    </Section>

                    {/* Breach Notification */}
                    <Section title="Data Breach Notification">
                        <p>In the event of a personal data breach, Obtura follows a strict incident response and notification procedure in compliance with GDPR Articles 33 and 34:</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {[
                                { time: '< 1 hour', label: 'Internal detection & triage', desc: 'Security team assesses severity and scope of the incident.' },
                                { time: '< 24 hours', label: 'Customer notification', desc: 'Affected customers notified with available details, even if investigation is ongoing.' },
                                { time: '< 72 hours', label: 'Authority notification', desc: 'ANSPDCP (supervisory authority) notified as required by GDPR Art. 33.' },
                            ].map(({ time, label, desc }) => (
                                <div key={time} className="border p-4" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                    <div className="mb-2 font-mono text-lg font-bold" style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>{time}</div>
                                    <div className="mb-1 text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>{label}</div>
                                    <p className="text-xs">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-5">Breach notifications to customers will include: the nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken or proposed. We maintain a breach register in accordance with GDPR Article 33(5).</p>
                    </Section>

                    {/* Data Protection Officer */}
                    <Section title="Data Protection Officer">
                        <p>Obtura has appointed a Data Protection Officer (DPO) as required under GDPR Article 37. Our DPO is responsible for overseeing compliance with GDPR, advising on data protection obligations, and acting as the point of contact for supervisory authorities and data subjects.</p>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="border p-5" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                <p className="mb-3 text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>Data Protection Officer</p>
                                <dl className="space-y-2 text-sm">
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Email:</dt><dd><a href="mailto:dpo@obtura.dev" className="hover:underline" style={{ color: 'var(--brand)' }}>dpo@obtura.dev</a></dd></div>
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Scope:</dt><dd>GDPR rights requests, DPA inquiries, regulatory matters</dd></div>
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Response:</dt><dd>Within 5 business days</dd></div>
                                </dl>
                            </div>
                            <div className="border p-5" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                <p className="mb-3 text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>Supervisory Authority</p>
                                <dl className="space-y-2 text-sm">
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Name:</dt><dd>ANSPDCP</dd></div>
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Website:</dt><dd><a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--brand)' }}>dataprotection.ro</a></dd></div>
                                    <div className="flex gap-3"><dt style={{ color: 'var(--fg-tertiary)' }} className="shrink-0">Right to complain:</dt><dd>Available to all EU residents</dd></div>
                                </dl>
                            </div>
                        </div>
                    </Section>

                    {/* For your customers */}
                    <Section title="How Obtura Helps You Stay GDPR Compliant">
                        <p>When you use Obtura to deploy applications that process your own customers&apos; personal data, you become a data controller. Obtura helps you meet your own GDPR obligations:</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                ['DPA on Request', 'Signed Data Processing Agreement available instantly, suitable for your own GDPR documentation.'],
                                ['EU-Only Data Flows', 'Guarantee to your customers that their data is processed exclusively in the EU.'],
                                ['Data Export Tools', 'Built-in tools to export application data and logs to support your data subject access requests.'],
                                ['Audit Logs', 'Complete audit trail of all platform actions to support your accountability obligations.'],
                                ['Environment Isolation', 'Strict isolation between deployments to prevent cross-customer data leakage.'],
                                ['Encryption by Default', 'All data encrypted at rest and in transit — no configuration required from you.'],
                                ['Secrets Management', 'Encrypted environment variables and secrets vault — no plaintext credentials stored.'],
                                ['Access Controls', 'Granular RBAC so only authorized team members can access production data.'],
                            ].map(([title, desc]) => (
                                <div key={title} className="border p-4" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                    <h4 className="mb-1 text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>{title}</h4>
                                    <p className="text-xs leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Related Links */}
                    <div className="border p-6" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                        <h2 className="mb-4 text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>Related Legal Documents</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'Cookie Policy', href: '/cookies' },
                                { label: 'Data Processing Agreement', href: 'mailto:dpo@obtura.dev', note: '(request via email)' },
                                { label: 'Security Overview', href: '/security' },
                            ].map(({ label, href, note }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="inline-flex items-center gap-1 border px-4 py-2 text-sm transition-colors hover:text-brand"
                                    style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)' }}
                                >
                                    {label}
                                    {note && <span className="text-xs" style={{ color: 'var(--fg-tertiary)' }}>{note}</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// ─── Helper Component ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>{title}</h2>
            <div className="space-y-4 leading-relaxed">{children}</div>
        </section>
    )
}
