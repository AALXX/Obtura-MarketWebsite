import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cookie Policy | Obtura',
    description: 'Obtura Cookie Policy - How we use cookies and tracking technologies on our DevOps automation platform. GDPR-compliant cookie usage for European users.',
    keywords: ['cookies', 'cookie policy', 'tracking', 'GDPR cookies', 'devops platform', 'EU data privacy'],
    alternates: {
        canonical: 'https://obtura.dev/cookies'
    }
}

const LAST_UPDATED = 'February 25, 2026'

export default function CookiesPage() {
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
                        <li className="text-white">Cookie Policy</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-1 text-xs font-medium text-[#ff6b35]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
                        GDPR Compliant · Privacy-First Analytics
                    </div>
                    <h1 className="mb-3 text-4xl font-bold tracking-tight">Cookie Policy</h1>
                    <p className="text-sm text-gray-500">
                        Last updated: <span className="text-gray-400">{LAST_UPDATED}</span>
                    </p>
                    <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">This Cookie Policy explains how Obtura uses cookies and similar tracking technologies on our website and platform. We are committed to transparency and GDPR compliance.</p>
                </header>

                <div className="space-y-12 text-gray-400">
                    {/* What are cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">What Are Cookies?</h2>
                        <div className="space-y-4 leading-relaxed">
                            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" (stored until they expire or are deleted) or "session" (deleted when you close your browser).</p>
                            <p>At Obtura, we use cookies to enhance your experience, improve our services, and ensure the security of our platform.</p>
                        </div>
                    </section>

                    {/* Types of cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Types of Cookies We Use</h2>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-6">
                                <h3 className="mb-3 text-lg font-semibold text-white">1. Strictly Necessary Cookies</h3>
                                <p className="mb-4">These cookies are essential for the website to function properly. They enable core features like user authentication, security, and session management. The website cannot function properly without these cookies.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Session Token</span>
                                        <span className="font-medium text-white">Authentication</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">CSRF Token</span>
                                        <span className="font-medium text-white">Security</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Load Balancer</span>
                                        <span className="font-medium text-white">Routing</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Cookie Consent</span>
                                        <span className="font-medium text-white">Preference</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    <strong className="text-white">Duration:</strong> Session to 1 year | <strong className="text-white">Consent Required:</strong> No
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="mb-3 text-lg font-semibold text-white">2. Functional Cookies</h3>
                                <p className="mb-4">These cookies enable enhanced functionality and personalization, such as remembering your preferences (language, theme) and custom settings. They may be set by us or by third-party providers whose services we use.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Theme Preference</span>
                                        <span className="font-medium text-white">UI/UX</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Language</span>
                                        <span className="font-medium text-white">Localization</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Dashboard Layout</span>
                                        <span className="font-medium text-white">Customization</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    <strong className="text-white">Duration:</strong> 1 year | <strong className="text-white">Consent Required:</strong> Yes
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="mb-3 text-lg font-semibold text-white">3. Analytics Cookies</h3>
                                <p className="mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use privacy-respecting, EU-hosted analytics that do not track you across websites.</p>
                                <div className="grid gap-2 text-sm sm:grid-cols-2">
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Page Views</span>
                                        <span className="font-medium text-white">Usage Stats</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Session Duration</span>
                                        <span className="font-medium text-white">Engagement</span>
                                    </div>
                                    <div className="flex justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="text-gray-500">Feature Usage</span>
                                        <span className="font-medium text-white">Product Improvement</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    <strong className="text-white">Duration:</strong> 13 months | <strong className="text-white">Consent Required:</strong> Yes
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What we don't use */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Cookies We Do NOT Use</h2>
                        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
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
                                    <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                                        <span className="mt-0.5 shrink-0 text-green-500">✓</span>
                                        <div>
                                            <p className="text-sm font-medium text-white">{item}</p>
                                            <p className="text-xs text-gray-500">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Managing cookies */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
                        <div className="space-y-4 leading-relaxed">
                            <p>You can manage your cookie preferences at any time through our cookie consent banner, which appears when you first visit our site. You can also change your preferences by clicking the "Cookie Settings" link in the footer of any page.</p>
                            <p>Additionally, you can control cookies through your browser settings. Most browsers allow you to:</p>
                            <ul className="mt-3 list-none space-y-2">
                                {['View cookies stored on your device', 'Delete specific cookies or all cookies', 'Block cookies from specific websites', 'Block all cookies', 'Receive alerts when a cookie is being set'].map(item => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4">Please note that blocking or deleting cookies may affect your experience on our platform. Essential cookies cannot be disabled as they are necessary for the website to function.</p>
                        </div>
                    </section>

                    {/* Browser instructions */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">How to Manage Cookies in Your Browser</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
                                { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                                { browser: 'Apple Safari', link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                                { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
                            ].map(({ browser, link }) => (
                                <a key={browser} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-[#ff6b35]/30 hover:bg-white/[0.05]">
                                    <span className="font-medium text-white">{browser}</span>
                                    <span className="text-sm text-[#ff6b35]">View Instructions →</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Updates */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Changes to This Policy</h2>
                        <p className="leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. We will notify you of significant changes by posting the updated policy on this page with a new "Last updated" date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="mb-5 text-2xl font-bold text-white">Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
                            <a href="mailto:privacy@obtura.dev" className="text-[#ff6b35] hover:underline">
                                privacy@obtura.dev
                            </a>
                            .
                        </p>
                    </section>

                    {/* Related Links */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="mb-4 text-lg font-semibold text-white">Related Legal Documents</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'GDPR Compliance', href: '/gdpr' }
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
