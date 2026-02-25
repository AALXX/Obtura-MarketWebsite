import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Obtura',
    description: 'Obtura Privacy Policy - How we collect, process, and protect your personal data in full compliance with GDPR and EU data residency requirements.',
    alternates: {
        canonical: 'https://obtura.dev/privacy'
    }
}

const LAST_UPDATED = 'February 25, 2026'
const EFFECTIVE_DATE = 'February 25, 2026'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-20 font-sans text-white">
            <div className="container mx-auto max-w-4xl px-4 py-16">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-gray-400">
                        <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                        <li><span>/</span></li>
                        <li className="text-white">Privacy Policy</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-1 text-xs font-medium text-[#ff6b35]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
                        GDPR Compliant · EU Data Residency
                    </div>
                    <h1 className="mb-3 text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="text-sm text-gray-500">
                        Last updated: <span className="text-gray-400">{LAST_UPDATED}</span>
                        &nbsp;&nbsp;·&nbsp;&nbsp;
                        Effective: <span className="text-gray-400">{EFFECTIVE_DATE}</span>
                    </p>
                    <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
                        Obtura (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform and services. As a European company, we are fully compliant with the General Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;).
                    </p>
                </header>

                {/* Table of Contents */}
                <nav className="mb-12 rounded-xl border border-white/10 bg-white/[0.03] p-6" aria-label="Table of contents">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Contents</h2>
                    <ol className="grid gap-1 text-sm sm:grid-cols-2">
                        {[
                            ['1', 'Data Controller Information'],
                            ['2', 'Data We Collect'],
                            ['3', 'Legal Basis for Processing'],
                            ['4', 'How We Use Your Data'],
                            ['5', 'EU Data Residency & Transfers'],
                            ['6', 'Data Retention'],
                            ['7', 'Your Rights Under GDPR'],
                            ['8', 'Cookies & Tracking'],
                            ['9', 'Third-Party Services'],
                            ['10', 'Security Measures'],
                            ['11', 'Children\'s Privacy'],
                            ['12', 'Changes to This Policy'],
                            ['13', 'Contact & DPO'],
                        ].map(([num, title]) => (
                            <li key={num}>
                                <a
                                    href={`#section-${num}`}
                                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-[#ff6b35]"
                                >
                                    <span className="font-mono text-xs text-gray-600">{num}.</span>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Content */}
                <div className="space-y-12 text-gray-400">

                    <Section id="1" title="1. Data Controller Information">
                        <p>The data controller responsible for your personal data is:</p>
                        <InfoBox>
                            <InfoRow label="Company">Obtura SRL</InfoRow>
                            <InfoRow label="Registered in">Romania, European Union</InfoRow>
                            <InfoRow label="Email"><a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a></InfoRow>
                            <InfoRow label="DPO Contact"><a href="mailto:dpo@obtura.dev" className="text-[#ff6b35] hover:underline">dpo@obtura.dev</a></InfoRow>
                        </InfoBox>
                        <p>As a data controller, we determine the purposes and means of processing your personal data and are responsible for ensuring it is handled lawfully, fairly, and transparently.</p>
                    </Section>

                    <Section id="2" title="2. Data We Collect">
                        <p>We collect and process the following categories of personal data:</p>

                        <SubSection title="2.1 Account & Identity Data">
                            <p>When you register for Obtura, we collect: full name, email address, company name, job title, and password (stored as a cryptographic hash). This data is necessary to create and manage your account.</p>
                        </SubSection>

                        <SubSection title="2.2 Billing & Payment Data">
                            <p>For paid subscriptions, we collect billing address, VAT number (for EU business customers), and payment method details. Payment card data is processed exclusively by our PCI-DSS compliant payment processor and is never stored on Obtura systems.</p>
                        </SubSection>

                        <SubSection title="2.3 Platform Usage Data">
                            <p>To provide our services and improve performance, we collect: deployment logs, application metrics, infrastructure events, error reports, API request metadata, and feature usage statistics. This data is used exclusively to operate and improve your deployments.</p>
                        </SubSection>

                        <SubSection title="2.4 Technical & Device Data">
                            <p>We automatically collect IP addresses, browser type and version, operating system, referring URLs, and session timestamps for security and service continuity purposes. IP addresses are anonymized after 30 days.</p>
                        </SubSection>

                        <SubSection title="2.5 Communications Data">
                            <p>If you contact our support team, we retain records of correspondence, including emails and support tickets, to resolve your issue and improve our services.</p>
                        </SubSection>

                        <SubSection title="2.6 Data You Deploy">
                            <p>Your application code, environment variables, and any data processed by applications you deploy on Obtura remain your property. We process this data solely as a data processor on your behalf, subject to a Data Processing Agreement (DPA) available upon request.</p>
                        </SubSection>
                    </Section>

                    <Section id="3" title="3. Legal Basis for Processing">
                        <p>Under GDPR Article 6, we rely on the following legal bases to process your personal data:</p>
                        <table className="mt-4 w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-3 pr-4 text-left font-semibold text-white">Processing Activity</th>
                                    <th className="py-3 text-left font-semibold text-white">Legal Basis</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    ['Account creation and management', 'Contract performance (Art. 6(1)(b))'],
                                    ['Providing deployment services', 'Contract performance (Art. 6(1)(b))'],
                                    ['Billing and payment processing', 'Contract performance (Art. 6(1)(b))'],
                                    ['Legal and tax compliance', 'Legal obligation (Art. 6(1)(c))'],
                                    ['Security monitoring and fraud prevention', 'Legitimate interest (Art. 6(1)(f))'],
                                    ['Product analytics and improvement', 'Legitimate interest (Art. 6(1)(f))'],
                                    ['Marketing communications', 'Consent (Art. 6(1)(a))'],
                                    ['Cookies (non-essential)', 'Consent (Art. 6(1)(a))'],
                                ].map(([activity, basis]) => (
                                    <tr key={activity}>
                                        <td className="py-3 pr-4 text-gray-400">{activity}</td>
                                        <td className="py-3 text-gray-300">{basis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-4">Where we rely on legitimate interests, we have conducted a Legitimate Interests Assessment (LIA) and determined that our interests do not override your fundamental rights. You may request a copy of our LIA by contacting us.</p>
                    </Section>

                    <Section id="4" title="4. How We Use Your Data">
                        <p>We use your personal data for the following purposes:</p>
                        <ul className="mt-4 space-y-3 list-none">
                            {[
                                ['Service Delivery', 'Provisioning, operating, and maintaining your Obtura deployments, environments, and infrastructure.'],
                                ['Account Management', 'Creating and managing your account, processing authentication, and managing team access controls.'],
                                ['Billing', 'Processing subscription payments, generating invoices, and managing your subscription plan.'],
                                ['Customer Support', 'Responding to your inquiries, diagnosing deployment issues, and resolving technical problems.'],
                                ['Security', 'Detecting and preventing fraud, unauthorized access, and abuse of our platform.'],
                                ['Service Improvement', 'Analyzing aggregated, anonymized usage patterns to improve platform reliability and develop new features.'],
                                ['Legal Compliance', 'Meeting our obligations under applicable laws, including tax regulations and court orders.'],
                                ['Communications', 'Sending transactional emails (deployment notifications, billing alerts) and, with your consent, product updates and newsletters.'],
                            ].map(([title, desc]) => (
                                <li key={title} className="flex gap-3">
                                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    <span><strong className="text-white">{title}:</strong> {desc}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">We will never sell your personal data to third parties, use it for advertising purposes, or process it in ways incompatible with the purposes described above.</p>
                    </Section>

                    <Section id="5" title="5. EU Data Residency & International Transfers">
                        <div className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-5 mb-6">
                            <p className="font-semibold text-white">All Obtura customer data is stored exclusively within the European Union.</p>
                            <p className="mt-2 text-sm">Our infrastructure is hosted in EU-based data centers. Your data does not leave the European Economic Area (EEA).</p>
                        </div>
                        <p>All primary infrastructure — including databases, object storage, and compute resources — is located in EU data centers (Frankfurt, Germany and Amsterdam, Netherlands).</p>
                        <p className="mt-4">In the limited cases where we engage sub-processors that may operate outside the EEA (e.g., email delivery providers), we ensure appropriate safeguards are in place, including:</p>
                        <ul className="mt-3 space-y-2 list-none">
                            {[
                                'Standard Contractual Clauses (SCCs) approved by the European Commission',
                                'Adequacy decisions where applicable',
                                'Binding Corporate Rules where applicable',
                                'Supplementary technical measures including end-to-end encryption',
                            ].map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">A full list of our sub-processors and their processing locations is available upon request at <a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a>.</p>
                    </Section>

                    <Section id="6" title="6. Data Retention">
                        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:</p>
                        <table className="mt-4 w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-3 pr-4 text-left font-semibold text-white">Data Category</th>
                                    <th className="py-3 text-left font-semibold text-white">Retention Period</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    ['Account data', 'Duration of account + 30 days after deletion request'],
                                    ['Billing records', '7 years (Romanian/EU tax law requirement)'],
                                    ['Deployment logs', '90 days (configurable in your account settings)'],
                                    ['Application metrics', '13 months rolling window'],
                                    ['Security & audit logs', '12 months'],
                                    ['Support correspondence', '3 years from ticket closure'],
                                    ['IP addresses (raw)', '30 days, then anonymized'],
                                    ['Marketing consent records', '3 years from last interaction or until withdrawn'],
                                ].map(([category, period]) => (
                                    <tr key={category}>
                                        <td className="py-3 pr-4 text-gray-400">{category}</td>
                                        <td className="py-3 text-gray-300">{period}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-4">Upon account deletion, we will delete or anonymize all personal data within 30 days, except where retention is required by law (e.g., billing records).</p>
                    </Section>

                    <Section id="7" title="7. Your Rights Under GDPR">
                        <p>As a data subject under GDPR, you have the following rights. We will respond to all verified requests within 30 days (extendable to 3 months for complex requests, with notice).</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    right: 'Right of Access (Art. 15)',
                                    desc: 'Request a copy of all personal data we hold about you, along with information about how it is processed.',
                                },
                                {
                                    right: 'Right to Rectification (Art. 16)',
                                    desc: 'Request correction of inaccurate or incomplete personal data we hold about you.',
                                },
                                {
                                    right: 'Right to Erasure (Art. 17)',
                                    desc: 'Request deletion of your personal data ("right to be forgotten"), subject to legal retention obligations.',
                                },
                                {
                                    right: 'Right to Restriction (Art. 18)',
                                    desc: 'Request that we restrict processing of your personal data in certain circumstances.',
                                },
                                {
                                    right: 'Right to Portability (Art. 20)',
                                    desc: 'Receive your personal data in a structured, machine-readable format (JSON/CSV) and transfer it to another controller.',
                                },
                                {
                                    right: 'Right to Object (Art. 21)',
                                    desc: 'Object to processing based on legitimate interests, including profiling. You may also opt out of direct marketing at any time.',
                                },
                                {
                                    right: 'Right to Withdraw Consent',
                                    desc: 'Withdraw consent at any time where processing is consent-based, without affecting prior lawful processing.',
                                },
                                {
                                    right: 'Right to Lodge a Complaint',
                                    desc: 'Lodge a complaint with the Romanian supervisory authority (ANSPDCP) or your local EU data protection authority.',
                                },
                            ].map(({ right, desc }) => (
                                <div key={right} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                                    <h4 className="mb-2 font-semibold text-white text-sm">{right}</h4>
                                    <p className="text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">To exercise any of these rights, submit a request to <a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a>. We may need to verify your identity before processing your request. There is no charge for exercising your rights.</p>
                        <p className="mt-4">You also have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP) at <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">www.dataprotection.ro</a>, or with the supervisory authority in your EU member state.</p>
                    </Section>

                    <Section id="8" title="8. Cookies & Tracking Technologies">
                        <p>We use cookies and similar tracking technologies on our website and platform. We categorize these as follows:</p>

                        <SubSection title="8.1 Strictly Necessary Cookies">
                            <p>These cookies are required for the platform to function and cannot be disabled. They include session authentication tokens, CSRF protection tokens, and load balancer routing cookies. No consent is required for these cookies.</p>
                        </SubSection>

                        <SubSection title="8.2 Functional Cookies">
                            <p>These cookies remember your preferences (e.g., theme settings, language) to improve your experience. They require your consent.</p>
                        </SubSection>

                        <SubSection title="8.3 Analytics Cookies">
                            <p>We use privacy-respecting analytics (hosted in the EU) to understand how our platform is used. These cookies collect anonymized, aggregated data and require your consent. We do not use Google Analytics or other US-based tracking services.</p>
                        </SubSection>

                        <SubSection title="8.4 Managing Cookies">
                            <p>You can manage your cookie preferences through our cookie consent banner or your browser settings. Note that disabling functional cookies may affect platform usability.</p>
                        </SubSection>
                    </Section>

                    <Section id="9" title="9. Third-Party Services & Sub-Processors">
                        <p>We engage trusted third-party service providers to operate our platform. All sub-processors are contractually bound to process data only on our instructions and in compliance with GDPR. Key categories of sub-processors include:</p>
                        <ul className="mt-4 space-y-3 list-none">
                            {[
                                ['Cloud Infrastructure', 'EU-based cloud providers for compute, storage, and networking. All data remains within EU data centers.'],
                                ['Payment Processing', 'PCI-DSS Level 1 certified payment processors. Card data is never stored on Obtura systems.'],
                                ['Email Delivery', 'Transactional email providers for sending deployment notifications and account communications.'],
                                ['Customer Support', 'Support ticketing systems for managing customer inquiries.'],
                                ['Error Monitoring', 'Application error tracking for diagnosing platform issues, operated with data minimization.'],
                            ].map(([category, desc]) => (
                                <li key={category} className="flex gap-3">
                                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    <span><strong className="text-white">{category}:</strong> {desc}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">We will notify you of any material changes to our sub-processors at least 30 days in advance. The complete, up-to-date list of sub-processors is available at <a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a>.</p>
                    </Section>

                    <Section id="10" title="10. Security Measures">
                        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, accidental loss, destruction, or damage:</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[
                                'SOC 2 Type II certified infrastructure',
                                '256-bit AES encryption at rest',
                                'TLS 1.3 for all data in transit',
                                'Multi-factor authentication (MFA)',
                                'Role-based access controls (RBAC)',
                                'Regular penetration testing',
                                'Continuous security monitoring',
                                'Automated vulnerability scanning',
                                'Encrypted backups with tested recovery',
                                'Employee security training & vetting',
                                'Incident response plan (72-hour notification)',
                                'Annual third-party security audits',
                            ].map(item => (
                                <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-sm">
                                    <span className="text-[#ff6b35]">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="mt-4">In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours of becoming aware, in accordance with GDPR Article 33.</p>
                    </Section>

                    <Section id="11" title="11. Children's Privacy">
                        <p>Obtura&apos;s services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at <a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a> and we will delete the data promptly.</p>
                    </Section>

                    <Section id="12" title="12. Changes to This Privacy Policy">
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:</p>
                        <ul className="mt-3 space-y-2 list-none">
                            {[
                                'Posting the updated policy with a new "Last Updated" date',
                                'Sending an email notification to your registered address at least 30 days before significant changes take effect',
                                'Displaying a prominent notice on our platform dashboard',
                            ].map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">Your continued use of Obtura after changes take effect constitutes acceptance of the updated policy. If you do not agree, you may close your account at any time.</p>
                    </Section>

                    <Section id="13" title="13. Contact & Data Protection Officer">
                        <p>For any questions, requests, or concerns regarding this Privacy Policy or our data practices, please contact us:</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <InfoBox title="General Privacy Inquiries">
                                <InfoRow label="Email"><a href="mailto:alexserbwork@gmail.com" className="text-[#ff6b35] hover:underline">alexserbwork@gmail.com</a></InfoRow>
                                <InfoRow label="Response time">Within 5 business days</InfoRow>
                            </InfoBox>
                            <InfoBox title="Data Protection Officer">
                                <InfoRow label="Email"><a href="mailto:dpo@obtura.dev" className="text-[#ff6b35] hover:underline">dpo@obtura.dev</a></InfoRow>
                                <InfoRow label="Scope">GDPR rights, DPA requests, complaints</InfoRow>
                            </InfoBox>
                        </div>
                        <p className="mt-6">If you are unsatisfied with our response, you have the right to lodge a complaint with the Romanian supervisory authority:</p>
                        <InfoBox>
                            <InfoRow label="Authority">ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal)</InfoRow>
                            <InfoRow label="Website"><a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">www.dataprotection.ro</a></InfoRow>
                        </InfoBox>
                    </Section>

                </div>
            </div>
        </div>
    )
}

// ─── Helper Components ────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={`section-${id}`} className="scroll-mt-24">
            <h2 className="mb-5 text-2xl font-bold text-white">{title}</h2>
            <div className="space-y-4 leading-relaxed">{children}</div>
        </section>
    )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-5">
            <h3 className="mb-3 text-base font-semibold text-gray-200">{title}</h3>
            <div className="space-y-3">{children}</div>
        </div>
    )
}

function InfoBox({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            {title && <p className="mb-3 text-sm font-semibold text-white">{title}</p>}
            <dl className="space-y-2">{children}</dl>
        </div>
    )
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-wrap gap-x-3 text-sm">
            <dt className="font-medium text-gray-500 shrink-0">{label}:</dt>
            <dd className="text-gray-300">{children}</dd>
        </div>
    )
}