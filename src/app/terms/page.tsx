import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | Obtura',
    description: 'Obtura Terms of Service - The complete terms and conditions governing use of the Obtura autonomous DevOps platform.',
    alternates: {
        canonical: 'https://obtura.dev/terms'
    }
}

const LAST_UPDATED = 'February 25, 2026'
const EFFECTIVE_DATE = 'February 25, 2026'

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-20 font-sans text-white">
            <div className="container mx-auto max-w-4xl px-4 py-16">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-gray-400">
                        <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                        <li><span>/</span></li>
                        <li className="text-white">Terms of Service</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-1 text-xs font-medium text-[#ff6b35]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35]" />
                        Governed by Romanian & EU Law
                    </div>
                    <h1 className="mb-3 text-4xl font-bold tracking-tight">Terms of Service</h1>
                    <p className="text-sm text-gray-500">
                        Last updated: <span className="text-gray-400">{LAST_UPDATED}</span>
                        &nbsp;&nbsp;·&nbsp;&nbsp;
                        Effective: <span className="text-gray-400">{EFFECTIVE_DATE}</span>
                    </p>
                    <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
                        Please read these Terms of Service carefully before using the Obtura platform. By creating an account or using any part of our services, you agree to be bound by these terms. If you do not agree, do not use Obtura.
                    </p>
                </header>

                {/* Table of Contents */}
                <nav className="mb-12 rounded-xl border border-white/10 bg-white/[0.03] p-6" aria-label="Table of contents">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Contents</h2>
                    <ol className="grid gap-1 text-sm sm:grid-cols-2">
                        {[
                            ['1', 'Definitions'],
                            ['2', 'Acceptance & Eligibility'],
                            ['3', 'Services Description'],
                            ['4', 'Account Registration'],
                            ['5', 'Subscription Plans & Billing'],
                            ['6', 'Acceptable Use Policy'],
                            ['7', 'Your Content & Data'],
                            ['8', 'Intellectual Property'],
                            ['9', 'Service Level Agreement (SLA)'],
                            ['10', 'Data Protection & GDPR'],
                            ['11', 'Confidentiality'],
                            ['12', 'Warranties & Disclaimers'],
                            ['13', 'Limitation of Liability'],
                            ['14', 'Indemnification'],
                            ['15', 'Termination'],
                            ['16', 'Dispute Resolution'],
                            ['17', 'Changes to Terms'],
                            ['18', 'General Provisions'],
                            ['19', 'Contact Information'],
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

                    <Section id="1" title="1. Definitions">
                        <p>For the purposes of these Terms, the following definitions apply:</p>
                        <dl className="mt-4 space-y-3">
                            {[
                                ['"Obtura," "we," "us," "our"', 'Obtura SRL, a company registered in Romania, EU, and operator of the Obtura platform.'],
                                ['"Platform"', 'The Obtura autonomous DevOps platform, including all software, APIs, dashboards, and related services available at obtura.dev.'],
                                ['"Customer," "you," "your"', 'The individual or legal entity that has accepted these Terms and uses the Platform.'],
                                ['"User"', 'Any individual authorized by a Customer to access the Platform under a Customer\'s account.'],
                                ['"Customer Data"', 'All data, code, content, and information submitted to, stored on, or processed by the Platform by or on behalf of the Customer.'],
                                ['"Services"', 'All features and functionality offered through the Platform, including deployment automation, infrastructure management, monitoring, and AI DevOps assistance.'],
                                ['"Subscription"', 'A paid or free-tier plan granting access to the Services for a specified billing period.'],
                                ['"Documentation"', 'The technical and operational documentation available at docs.obtura.dev.'],
                            ].map(([term, def]) => (
                                <div key={term} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                                    <dt className="shrink-0 font-semibold text-white text-sm">{term}</dt>
                                    <dd className="text-sm">{def}</dd>
                                </div>
                            ))}
                        </dl>
                    </Section>

                    <Section id="2" title="2. Acceptance & Eligibility">
                        <p>By accessing or using the Platform, you confirm that:</p>
                        <ul className="mt-3 space-y-2 list-none">
                            {[
                                'You are at least 18 years of age.',
                                'You have the legal capacity and authority to enter into this agreement, either on your own behalf or on behalf of the organization you represent.',
                                'If acting on behalf of a company, you are authorized to bind that company to these Terms.',
                                'Your use of the Platform complies with all applicable laws in your jurisdiction.',
                            ].map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">These Terms constitute a binding legal agreement between you and Obtura SRL. If you are entering into these Terms on behalf of a legal entity, that entity is bound by these Terms.</p>
                    </Section>

                    <Section id="3" title="3. Services Description">
                        <p>Obtura provides an autonomous DevOps platform designed for European SMEs. Our Services include:</p>

                        <SubSection title="3.1 Core Platform Services">
                            <ul className="space-y-2 list-none">
                                {[
                                    ['Zero-Config Deployment', 'Automated deployment pipelines that deploy production-ready code from Git repositories in 5–10 minutes with no DevOps knowledge required.'],
                                    ['AI DevOps Agent', 'Autonomous AI-powered agent that monitors application logs, detects anomalies, optimizes performance, and responds to critical incidents.'],
                                    ['Environment Management', 'Automated provisioning and management of development, staging, and production environments, including preview environments for pull requests.'],
                                    ['Observability Suite', 'Built-in monitoring, logging, error tracking, alerting, and analytics for all deployed applications.'],
                                    ['Team Management', 'Role-based access controls, team onboarding, deployment approval workflows, and audit logs.'],
                                ].map(([name, desc]) => (
                                    <li key={name} className="flex gap-3">
                                        <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                        <span><strong className="text-white">{name}:</strong> {desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </SubSection>

                        <SubSection title="3.2 Service Modifications">
                            <p>We continuously improve our Platform. We reserve the right to add, modify, or discontinue features at any time. For material changes that adversely affect existing functionality, we will provide at least 30 days&apos; notice.</p>
                        </SubSection>

                        <SubSection title="3.3 Beta Features">
                            <p>Features labeled &ldquo;Beta,&rdquo; &ldquo;Preview,&rdquo; or &ldquo;Experimental&rdquo; are provided as-is without warranty and may be changed or discontinued without notice. We strongly recommend not using Beta features in production-critical workflows.</p>
                        </SubSection>
                    </Section>

                    <Section id="4" title="4. Account Registration & Security">
                        <p>To use the Platform, you must register for an account. You agree to:</p>
                        <ul className="mt-3 space-y-2 list-none">
                            {[
                                'Provide accurate, current, and complete information during registration.',
                                'Maintain and promptly update your account information.',
                                'Keep your password confidential and use a strong, unique password.',
                                'Enable multi-factor authentication (MFA), which we strongly recommend for all accounts.',
                                'Immediately notify us at security@obtura.dev of any unauthorized account access or security breach.',
                                'Accept responsibility for all activities that occur under your account credentials.',
                            ].map(item => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">One person may not maintain multiple free accounts. Each organization requires one account; additional team members are added as Users within that account according to your Subscription plan.</p>
                    </Section>

                    <Section id="5" title="5. Subscription Plans & Billing">
                        <SubSection title="5.1 Pricing & Plans">
                            <p>Obtura offers tiered Subscription plans with flat monthly pricing. Current pricing is available at <a href="https://obtura.dev/pricing" className="text-[#ff6b35] hover:underline">obtura.dev/pricing</a>. We are committed to predictable, transparent pricing — there are no usage-based surprise charges.</p>
                        </SubSection>

                        <SubSection title="5.2 Billing Cycle">
                            <p>Subscriptions are billed monthly or annually in advance, depending on the plan selected. Annual subscriptions are billed in full at the start of each annual term and receive a discounted rate compared to monthly billing.</p>
                        </SubSection>

                        <SubSection title="5.3 Payment">
                            <p>Fees are due in advance and must be paid by the due date. We accept major credit/debit cards and bank transfers (for annual plans). EU VAT is applied where applicable in accordance with EU VAT Directive 2006/112/EC. Customers with valid EU VAT registration numbers may provide them for B2B reverse charge purposes.</p>
                        </SubSection>

                        <SubSection title="5.4 Price Changes">
                            <p>We will provide at least 60 days&apos; notice before changing subscription pricing for existing customers. Price changes take effect at the start of the next billing cycle following the notice period.</p>
                        </SubSection>

                        <SubSection title="5.5 Refund Policy">
                            <p>Monthly subscriptions are non-refundable once the billing period has begun. Annual subscriptions are eligible for a pro-rated refund within the first 30 days if the Platform does not meet the service levels described in Section 9. Refund requests must be submitted to <a href="mailto:billing@obtura.dev" className="text-[#ff6b35] hover:underline">billing@obtura.dev</a>.</p>
                        </SubSection>

                        <SubSection title="5.6 Overdue Payments">
                            <p>Accounts with overdue payments will receive a 14-day grace period. If payment is not received within the grace period, we may suspend access to the Platform. Accounts suspended for non-payment for more than 60 days may be terminated and data deleted in accordance with our retention policy.</p>
                        </SubSection>

                        <SubSection title="5.7 Free Tier">
                            <p>Obtura may offer a free tier subject to usage limits as described in the Documentation. Free tier limits may be changed at any time with 30 days&apos; notice.</p>
                        </SubSection>
                    </Section>

                    <Section id="6" title="6. Acceptable Use Policy">
                        <p>You agree to use the Platform only for lawful purposes and in accordance with these Terms. You must not use the Platform to:</p>

                        <SubSection title="6.1 Prohibited Activities">
                            <ul className="space-y-2 list-none">
                                {[
                                    'Deploy, host, or distribute malware, viruses, ransomware, or other malicious code.',
                                    'Conduct unauthorized penetration testing, vulnerability scanning, or attacks against third-party systems.',
                                    'Host content that infringes intellectual property rights.',
                                    'Send unsolicited communications (spam) or engage in phishing attacks.',
                                    'Mine cryptocurrency or perform other resource-intensive computations outside the Platform\'s intended use.',
                                    'Violate any applicable law, regulation, or third-party rights.',
                                    'Attempt to gain unauthorized access to the Platform, other accounts, or Obtura\'s infrastructure.',
                                    'Use the Platform to process, store, or transmit Sensitive Personal Data (as defined under GDPR Article 9) without executing a supplementary Data Processing Agreement with Obtura.',
                                    'Resell, sublicense, or provide Platform access to third parties outside of your organization without prior written consent.',
                                    'Reverse engineer, decompile, or attempt to extract the source code of the Platform.',
                                ].map(item => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </SubSection>

                        <SubSection title="6.2 Resource Limits">
                            <p>You agree to use computational resources reasonably and within the limits of your Subscription plan. Excessive resource consumption that impacts other customers may result in throttling or, after notice, account suspension.</p>
                        </SubSection>

                        <SubSection title="6.3 Enforcement">
                            <p>Obtura reserves the right to investigate suspected violations and, at our sole discretion, to suspend or terminate accounts in violation of this Acceptable Use Policy. We will make reasonable efforts to notify you before taking action, except where immediate action is necessary to protect the Platform or other customers.</p>
                        </SubSection>
                    </Section>

                    <Section id="7" title="7. Your Content & Data">
                        <SubSection title="7.1 Ownership">
                            <p>You retain all ownership rights to Customer Data — your source code, application data, configurations, and any content you submit to the Platform. Obtura does not claim any ownership over Customer Data.</p>
                        </SubSection>

                        <SubSection title="7.2 License to Obtura">
                            <p>By submitting Customer Data to the Platform, you grant Obtura a limited, non-exclusive, royalty-free license to access, store, process, and transmit Customer Data solely to the extent necessary to provide the Services to you. This license terminates upon account deletion.</p>
                        </SubSection>

                        <SubSection title="7.3 Your Responsibility">
                            <p>You are solely responsible for: (a) the accuracy, legality, and appropriateness of Customer Data; (b) ensuring you have all necessary rights and permissions to submit Customer Data to the Platform; (c) complying with applicable data protection laws when processing personal data of your end users; and (d) maintaining appropriate backups of critical Customer Data.</p>
                        </SubSection>

                        <SubSection title="7.4 AI Agent Interaction with Data">
                            <p>Our AI DevOps Agent accesses your deployment logs, metrics, and configuration data to perform its functions (monitoring, optimization, incident response). This access is limited to what is necessary for service delivery. The AI Agent does not access your application&apos;s business data or end-user personal data unless it appears in logs you have made accessible to the Platform.</p>
                        </SubSection>
                    </Section>

                    <Section id="8" title="8. Intellectual Property">
                        <SubSection title="8.1 Obtura IP">
                            <p>The Platform, including all software, algorithms, AI models, interfaces, documentation, and branding, is the exclusive property of Obtura SRL and is protected by copyright, trade secret, and other intellectual property laws. These Terms do not grant you any right, title, or interest in Obtura&apos;s intellectual property other than the limited license to use the Platform as described herein.</p>
                        </SubSection>

                        <SubSection title="8.2 Feedback">
                            <p>If you provide suggestions, feedback, or ideas about the Platform (&ldquo;Feedback&rdquo;), you grant Obtura a perpetual, irrevocable, royalty-free license to use and incorporate such Feedback into the Platform without restriction or compensation to you.</p>
                        </SubSection>

                        <SubSection title="8.3 Third-Party Open Source">
                            <p>The Platform incorporates open-source software. A list of open-source components and their applicable licenses is available at <a href="https://obtura.dev/open-source" className="text-[#ff6b35] hover:underline">obtura.dev/open-source</a>. Nothing in these Terms limits rights granted under applicable open-source licenses.</p>
                        </SubSection>
                    </Section>

                    <Section id="9" title="9. Service Level Agreement (SLA)">
                        <SubSection title="9.1 Uptime Commitment">
                            <p>For paid Subscription plans, Obtura commits to the following monthly uptime targets for the Platform control plane:</p>
                            <table className="mt-3 w-full border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-3 pr-4 text-left font-semibold text-white">Plan</th>
                                        <th className="py-3 text-left font-semibold text-white">Monthly Uptime Target</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        ['Starter', '99.5%'],
                                        ['Business', '99.9%'],
                                        ['Enterprise', '99.95% (subject to separate Enterprise Agreement)'],
                                    ].map(([plan, sla]) => (
                                        <tr key={plan}>
                                            <td className="py-3 pr-4 text-gray-400">{plan}</td>
                                            <td className="py-3 text-gray-300">{sla}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </SubSection>

                        <SubSection title="9.2 Scheduled Maintenance">
                            <p>Scheduled maintenance windows are excluded from uptime calculations. We will provide at least 72 hours&apos; notice for planned maintenance via our status page at status.obtura.dev and email notification.</p>
                        </SubSection>

                        <SubSection title="9.3 Service Credits">
                            <p>If monthly uptime falls below the committed target, eligible Customers may request service credits as follows: 1–2% below target: 10% monthly fee credit; 2–5% below target: 25% credit; more than 5% below target: 50% credit. Credits must be requested within 30 days of the incident and are applied to future invoices. Service credits are the sole and exclusive remedy for SLA failures.</p>
                        </SubSection>

                        <SubSection title="9.4 Exclusions">
                            <p>SLA commitments do not apply to: outages caused by Customer&apos;s own actions; force majeure events; scheduled maintenance; issues caused by third-party services outside our control; or free-tier accounts.</p>
                        </SubSection>
                    </Section>

                    <Section id="10" title="10. Data Protection & GDPR">
                        <p>Both parties agree to comply with applicable data protection laws, including the General Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;).</p>

                        <SubSection title="10.1 Roles">
                            <p>In relation to your Customer Data, you are the data controller and Obtura acts as a data processor on your behalf. In relation to your account and contact data, Obtura is the data controller. Full details are in our Privacy Policy at <a href="https://obtura.dev/privacy" className="text-[#ff6b35] hover:underline">obtura.dev/privacy</a>.</p>
                        </SubSection>

                        <SubSection title="10.2 Data Processing Agreement">
                            <p>Our Data Processing Agreement (DPA), which forms part of these Terms for customers subject to GDPR, governs Obtura&apos;s processing of personal data on your behalf. By accepting these Terms, you also accept the DPA. An executed copy of the DPA is available upon request at <a href="mailto:dpo@obtura.dev" className="text-[#ff6b35] hover:underline">dpo@obtura.dev</a>.</p>
                        </SubSection>

                        <SubSection title="10.3 EU Data Residency">
                            <p>All Customer Data is stored and processed exclusively within European Union data centers. We guarantee that your data does not leave the EEA without appropriate safeguards. See our GDPR page for full details.</p>
                        </SubSection>

                        <SubSection title="10.4 Security Incident Notification">
                            <p>In the event of a personal data breach affecting your Customer Data, we will notify you without undue delay and in any event within 72 hours of becoming aware, in accordance with GDPR Article 33.</p>
                        </SubSection>
                    </Section>

                    <Section id="11" title="11. Confidentiality">
                        <p>Each party may have access to the other&apos;s confidential information in connection with the Services (&ldquo;Confidential Information&rdquo;). Confidential Information includes, without limitation: technical and business information, pricing, trade secrets, and Customer Data.</p>
                        <p className="mt-4">Each party agrees to: (a) hold the other party&apos;s Confidential Information in strict confidence using at least the same degree of care used for its own confidential information (but no less than reasonable care); (b) use Confidential Information only for purposes of fulfilling obligations under these Terms; and (c) not disclose Confidential Information to third parties without prior written consent, except as required by law.</p>
                        <p className="mt-4">Confidentiality obligations do not apply to information that: is or becomes publicly known through no breach of these Terms; was known before disclosure; is independently developed; or must be disclosed by law (with prompt notice to the disclosing party where legally permitted).</p>
                    </Section>

                    <Section id="12" title="12. Warranties & Disclaimers">
                        <SubSection title="12.1 Obtura Warranties">
                            <p>Obtura warrants that: (a) the Platform will perform materially as described in the Documentation; (b) we will provide the Services using reasonable skill and care; and (c) we will comply with applicable laws in providing the Services.</p>
                        </SubSection>

                        <SubSection title="12.2 Disclaimers">
                            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                                <p className="text-sm leading-relaxed">EXCEPT FOR THE EXPRESS WARRANTIES ABOVE, THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OBTURA DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF SECURITY VULNERABILITIES.</p>
                            </div>
                        </SubSection>

                        <SubSection title="12.3 Customer Warranties">
                            <p>You warrant that: (a) you have all necessary rights to submit Customer Data to the Platform; (b) your use of the Platform complies with applicable laws; and (c) Customer Data does not infringe third-party intellectual property rights.</p>
                        </SubSection>
                    </Section>

                    <Section id="13" title="13. Limitation of Liability">
                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 mb-5">
                            <p className="text-sm leading-relaxed font-medium text-amber-200/80">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                        </div>
                        <p><strong className="text-white">Cap on Liability:</strong> Obtura&apos;s total aggregate liability to you for any claims arising under or related to these Terms or the Platform — whether in contract, tort (including negligence), or otherwise — shall not exceed the total fees paid by you to Obtura in the 12 months immediately preceding the event giving rise to the claim.</p>
                        <p className="mt-4"><strong className="text-white">Exclusion of Consequential Damages:</strong> In no event shall either party be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages, including loss of profits, data, business, or goodwill, even if advised of the possibility of such damages.</p>
                        <p className="mt-4"><strong className="text-white">Exceptions:</strong> Nothing in these Terms limits liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; (c) gross negligence or willful misconduct; or (d) any other liability that cannot be excluded by applicable law.</p>
                        <p className="mt-4">Certain jurisdictions do not allow the exclusion of implied warranties or limitation of liability for consequential damages, so the above limitations may not apply to you.</p>
                    </Section>

                    <Section id="14" title="14. Indemnification">
                        <p>You agree to indemnify, defend, and hold harmless Obtura SRL and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your violation of these Terms; (b) Customer Data that infringes third-party rights; (c) your violation of applicable law; or (d) unauthorized use of the Platform under your account credentials.</p>
                        <p className="mt-4">Obtura will promptly notify you of any claim subject to indemnification, cooperate with your defense, and grant you control over the defense, provided you do not make any admission on Obtura&apos;s behalf without prior written consent.</p>
                    </Section>

                    <Section id="15" title="15. Termination">
                        <SubSection title="15.1 Termination by You">
                            <p>You may terminate your Subscription at any time from your account dashboard or by contacting <a href="mailto:support@obtura.dev" className="text-[#ff6b35] hover:underline">support@obtura.dev</a>. Termination takes effect at the end of the current billing period. No refunds are provided for unused time in the current billing period, except where required by applicable law or under our refund policy in Section 5.5.</p>
                        </SubSection>

                        <SubSection title="15.2 Termination by Obtura">
                            <p>Obtura may terminate your Subscription: (a) for cause, including material breach of these Terms, with 14 days&apos; notice and opportunity to cure; (b) immediately for serious violations such as illegal use, abuse, or failure to pay; or (c) by providing 60 days&apos; notice if we decide to discontinue the Platform.</p>
                        </SubSection>

                        <SubSection title="15.3 Effect of Termination">
                            <p>Upon termination: (a) your right to access the Platform immediately ceases; (b) you have 30 days to export Customer Data using our data export tools; (c) after the export window, Customer Data will be deleted in accordance with our retention policy; and (d) provisions that by their nature should survive termination (including Sections 8, 11, 13, 14, 16) shall survive.</p>
                        </SubSection>
                    </Section>

                    <Section id="16" title="16. Dispute Resolution">
                        <SubSection title="16.1 Governing Law">
                            <p>These Terms are governed by the laws of Romania and the European Union, without regard to conflict of law principles. The UN Convention on Contracts for the International Sale of Goods does not apply.</p>
                        </SubSection>

                        <SubSection title="16.2 Informal Resolution">
                            <p>Before initiating formal proceedings, both parties agree to attempt good-faith resolution of disputes. Please contact <a href="mailto:legal@obtura.dev" className="text-[#ff6b35] hover:underline">legal@obtura.dev</a> with a description of the dispute. We will respond within 10 business days and attempt to resolve the matter within 30 days.</p>
                        </SubSection>

                        <SubSection title="16.3 Jurisdiction">
                            <p>If informal resolution fails, disputes shall be subject to the exclusive jurisdiction of the courts of Bucharest, Romania. Customers who are consumers (not businesses) in the EU also have the right to use the EU Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">ec.europa.eu/consumers/odr</a>.</p>
                        </SubSection>
                    </Section>

                    <Section id="17" title="17. Changes to Terms">
                        <p>We may modify these Terms from time to time. We will notify you of material changes at least 30 days before they take effect by: (a) posting the updated Terms with a new effective date; (b) sending an email to your registered email address; and (c) displaying a notice on the Platform dashboard.</p>
                        <p className="mt-4">Your continued use of the Platform after the effective date of changes constitutes acceptance of the revised Terms. If you do not agree to the changes, you may terminate your account before the effective date. For changes that materially disadvantage you, you may also request a pro-rated refund for any prepaid subscription period.</p>
                    </Section>

                    <Section id="18" title="18. General Provisions">
                        <ul className="space-y-4 list-none">
                            {[
                                ['Entire Agreement', 'These Terms, together with the Privacy Policy, DPA, and any executed Order Forms, constitute the entire agreement between you and Obtura regarding the Platform and supersede all prior agreements.'],
                                ['Severability', 'If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect. The unenforceable provision shall be modified to the minimum extent necessary to make it enforceable.'],
                                ['Waiver', 'No waiver of any term shall be deemed a further or continuing waiver of that term. Failure to enforce any right is not a waiver of that right.'],
                                ['Assignment', 'You may not assign these Terms without prior written consent from Obtura. Obtura may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets, with 30 days\' notice to you.'],
                                ['Force Majeure', 'Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including acts of God, natural disasters, government actions, pandemics, or internet infrastructure failures, provided the affected party gives prompt notice.'],
                                ['Notices', 'Notices from Obtura will be sent to your registered email address. Notices to Obtura must be sent to legal@obtura.dev. Email notices are effective when sent.'],
                                ['Language', 'These Terms are written in English. Any translations are provided for convenience only; the English version controls in case of conflict.'],
                            ].map(([title, desc]) => (
                                <li key={title} className="flex gap-3">
                                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b35]/60" />
                                    <span><strong className="text-white">{title}:</strong> {desc}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section id="19" title="19. Contact Information">
                        <p>For questions about these Terms, please contact us:</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {[
                                { title: 'Legal & Terms', email: 'legal@obtura.dev', desc: 'Terms questions, contract matters' },
                                { title: 'Billing & Payments', email: 'billing@obtura.dev', desc: 'Invoices, refunds, subscriptions' },
                                { title: 'Security Issues', email: 'security@obtura.dev', desc: 'Vulnerabilities, security incidents' },
                            ].map(({ title, email, desc }) => (
                                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="mb-1 text-sm font-semibold text-white">{title}</p>
                                    <a href={`mailto:${email}`} className="text-sm text-[#ff6b35] hover:underline">{email}</a>
                                    <p className="mt-1 text-xs text-gray-500">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm">
                            <p className="font-semibold text-white mb-2">Registered Address</p>
                            <p className="text-gray-400">Obtura SRL<br />Romania, European Union<br />EU VAT Registered</p>
                        </div>
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