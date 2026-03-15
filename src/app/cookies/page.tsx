import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cookie Policy | Obtura',
    description: 'Obtura Cookie Policy - How we use cookies and tracking technologies on our DevOps automation platform. GDPR-compliant cookie usage for European users.',
    keywords: ['cookies', 'cookie policy', 'tracking', 'GDPR cookies', 'devops platform', 'EU data privacy'],
    openGraph: {
        title: 'Cookie Policy | Obtura',
        description: 'How Obtura uses cookies and tracking technologies. GDPR-compliant cookie usage for European users.',
        type: 'website',
        images: [{ url: 'https://obtura.dev/og-image.png', width: 1200, height: 630, alt: 'Obtura Cookie Policy - GDPR Compliant' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cookie Policy | Obtura',
        description: 'GDPR-compliant cookie policy for the Obtura DevOps platform.',
        images: ['https://obtura.dev/og-image.png']
    },
    alternates: {
        canonical: 'https://obtura.dev/cookies'
    }
}

const LAST_UPDATED = 'February 25, 2026'

export default function CookiesPage() {
    return (
        <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-10">
                    <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                        <li><a href="/" className="transition-colors hover:text-brand">Home</a></li>
                        <li>/</li>
                        <li>Cookie Policy</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b pb-10" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— GDPR Compliant · Privacy-First Analytics</p>
                    <h1 className="mb-3 text-4xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Cookie Policy</h1>
                    <p className="text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                        Last updated: <span style={{ color: 'var(--fg-secondary)' }}>{LAST_UPDATED}</span>
                    </p>
                    <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>This Cookie Policy explains how Obtura uses cookies and similar tracking technologies on our website and platform. We are committed to transparency and GDPR compliance.</p>
                </header>

                <div className="space-y-12" style={{ color: 'var(--fg-secondary)' }}>

                    {/* What are cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>What Are Cookies?</h2>
                        <div className="space-y-4 leading-relaxed">
                            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be &ldquo;persistent&rdquo; (stored until they expire or are deleted) or &ldquo;session&rdquo; (deleted when you close your browser).</p>
                            <p>At Obtura, we use cookies to enhance your experience, improve our services, and ensure the security of our platform.</p>
                        </div>
                    </section>

                    {/* Types of cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>Types of Cookies We Use</h2>

                        <div className="space-y-6">
                            {/* Strictly Necessary — brand highlight */}
                            <div className="border p-6" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)' }}>
                                <h3 className="mb-3 text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>1. Strictly Necessary Cookies</h3>
                                <p className="mb-4">These cookies are essential for the website to function properly. They enable core features like user authentication, security, and session management. The website cannot function properly without these cookies.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    {[
                                        ['Session Token', 'Authentication'],
                                        ['CSRF Token', 'Security'],
                                        ['Load Balancer', 'Routing'],
                                        ['Cookie Consent', 'Preference'],
                                    ].map(([name, type]) => (
                                        <div key={name} className="flex justify-between border px-4 py-3" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                                            <span style={{ color: 'var(--fg-tertiary)' }}>{name}</span>
                                            <span className="font-medium" style={{ color: 'var(--fg-primary)' }}>{type}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                    <strong style={{ color: 'var(--fg-primary)' }}>Duration:</strong> Session to 1 year | <strong style={{ color: 'var(--fg-primary)' }}>Consent Required:</strong> No
                                </p>
                            </div>

                            {/* Functional */}
                            <div className="border p-6" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                <h3 className="mb-3 text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>2. Functional Cookies</h3>
                                <p className="mb-4">These cookies enable enhanced functionality and personalization, such as remembering your preferences (language, theme) and custom settings. They may be set by us or by third-party providers whose services we use.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    {[
                                        ['Theme Preference', 'UI/UX'],
                                        ['Language', 'Localization'],
                                        ['Dashboard Layout', 'Customization'],
                                    ].map(([name, type]) => (
                                        <div key={name} className="flex justify-between border px-4 py-3" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                                            <span style={{ color: 'var(--fg-tertiary)' }}>{name}</span>
                                            <span className="font-medium" style={{ color: 'var(--fg-primary)' }}>{type}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                    <strong style={{ color: 'var(--fg-primary)' }}>Duration:</strong> 1 year | <strong style={{ color: 'var(--fg-primary)' }}>Consent Required:</strong> Yes
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="border p-6" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                <h3 className="mb-3 text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>3. Analytics Cookies</h3>
                                <p className="mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use privacy-respecting, EU-hosted analytics that do not track you across websites.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    {[
                                        ['Page Views', 'Usage Stats'],
                                        ['Session Duration', 'Engagement'],
                                        ['Feature Usage', 'Product Improvement'],
                                    ].map(([name, type]) => (
                                        <div key={name} className="flex justify-between border px-4 py-3" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                                            <span style={{ color: 'var(--fg-tertiary)' }}>{name}</span>
                                            <span className="font-medium" style={{ color: 'var(--fg-primary)' }}>{type}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                    <strong style={{ color: 'var(--fg-primary)' }}>Duration:</strong> 13 months | <strong style={{ color: 'var(--fg-primary)' }}>Consent Required:</strong> Yes
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What we don't use — brand-secondary (trust/compliance) */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>Cookies We Do NOT Use</h2>
                        <div className="border p-6" style={{ borderColor: 'var(--brand-secondary-border)', background: 'var(--brand-secondary-dim)' }}>
                            <p className="mb-4">We are committed to privacy-first practices. We do not use:</p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    ['Advertising/Marketing Cookies', 'No third-party ads or tracking'],
                                    ['Social Media Trackers', 'No Facebook, Twitter, or LinkedIn pixels'],
                                    ['Cross-Site Trackers', 'No tracking across different websites'],
                                    ['Third-Party Analytics', 'No Google Analytics or similar US-based tools'],
                                    ['Behavioral Profiling', 'No building of user profiles for targeting'],
                                    ['Fingerprinting', 'No device fingerprinting techniques']
                                ].map(([item, desc]) => (
                                    <div key={item} className="flex items-start gap-3 border px-4 py-3" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                                        <span className="mt-0.5 shrink-0" style={{ color: 'var(--brand-secondary)' }}>✓</span>
                                        <div>
                                            <p className="text-sm font-medium" style={{ color: 'var(--fg-primary)' }}>{item}</p>
                                            <p className="text-xs" style={{ color: 'var(--fg-tertiary)' }}>{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Managing cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>Managing Your Cookie Preferences</h2>
                        <div className="space-y-4 leading-relaxed">
                            <p>You can manage your cookie preferences at any time through our cookie consent banner, which appears when you first visit our site. You can also change your preferences by clicking the &ldquo;Cookie Settings&rdquo; link in the footer of any page.</p>
                            <p>Additionally, you can control cookies through your browser settings. Most browsers allow you to:</p>
                            <ul className="mt-3 list-none space-y-2">
                                {['View cookies stored on your device', 'Delete specific cookies or all cookies', 'Block cookies from specific websites', 'Block all cookies', 'Receive alerts when a cookie is being set'].map(item => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--brand)', opacity: 0.6 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4">Please note that blocking or deleting cookies may affect your experience on our platform. Essential cookies cannot be disabled as they are necessary for the website to function.</p>
                        </div>
                    </section>

                    {/* Browser instructions */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>How to Manage Cookies in Your Browser</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
                                { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                                { browser: 'Apple Safari', link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                                { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
                            ].map(({ browser, link }) => (
                                <a key={browser} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border px-4 py-3 transition-colors hover:text-brand" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                                    <span className="font-medium" style={{ color: 'var(--fg-primary)' }}>{browser}</span>
                                    <span className="text-sm" style={{ color: 'var(--brand)' }}>View Instructions →</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Updates */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>Changes to This Policy</h2>
                        <p className="leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. We will notify you of significant changes by posting the updated policy on this page with a new &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="mb-5 text-2xl font-semibold" style={{ color: 'var(--fg-primary)' }}>Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
                            <a href="mailto:privacy@obtura.dev" className="hover:underline" style={{ color: 'var(--brand)' }}>
                                privacy@obtura.dev
                            </a>
                            .
                        </p>
                    </section>

                    {/* Related Links */}
                    <div className="border p-6" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                        <h2 className="mb-4 text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>Related Legal Documents</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'GDPR Compliance', href: '/gdpr' }
                            ].map(({ label, href }) => (
                                <a key={label} href={href} className="inline-flex items-center gap-1 border px-4 py-2 text-sm transition-colors hover:text-brand" style={{ borderColor: 'var(--border-default)', color: 'var(--fg-secondary)' }}>
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
