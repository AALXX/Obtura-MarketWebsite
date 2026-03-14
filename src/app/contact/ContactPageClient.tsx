'use client'

import { useState } from 'react'
import { ArrowRight, Check, Calendar, Mail, Users, Globe, Shield, Clock } from 'lucide-react'

const inputClass = 'h-12 w-full border px-4 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#ff6b35]'
const inputStyle = { borderColor: 'var(--border-default)', background: 'var(--bg-base)', color: 'var(--fg-primary)' }
const labelStyle = { color: 'var(--fg-secondary)' }

export default function ContactPageClient() {
    const [formType, setFormType] = useState<'demo' | 'waitlist'>('demo')
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', teamSize: '',
        phone: '', message: '', role: '', preferredDate: '', referral: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.company || !formData.teamSize) {
            alert('Please fill in all required fields')
            return
        }
        setIsLoading(true)
        await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({ formType, formData })
        })
        setIsLoading(false)
        const message = formType === 'demo'
            ? "Thanks! We'll be in touch within 72 hours to schedule your demo."
            : "You're on the list! We'll notify you when Obtura launches."
        alert(message)
        setFormData({ name: '', email: '', company: '', teamSize: '', phone: '', message: '', role: '', preferredDate: '', referral: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen pt-16" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>

            {/* Header */}
            <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto max-w-6xl">

                    <nav aria-label="Breadcrumb" className="mb-10">
                        <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                            <li><a href="/" className="transition-colors hover:text-[#ff6b35]">Home</a></li>
                            <li>/</li>
                            <li>Contact</li>
                        </ol>
                    </nav>

                    <div className="mb-12">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Get in touch</p>
                        <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
                            Let&apos;s eliminate your<br />
                            <span style={{ color: 'var(--brand)' }}>DevOps bottleneck.</span>
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                            Book a personalized demo or join our waitlist. See how European SMEs are saving{' '}
                            <strong style={{ color: 'var(--fg-primary)' }}>€71K+ per year</strong> on DevOps costs.
                        </p>
                    </div>

                    {/* Tab switcher */}
                    <div className="flex w-full max-w-sm gap-1 border p-1" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                        <button
                            onClick={() => setFormType('demo')}
                            className="flex h-10 flex-1 items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer"
                            style={formType === 'demo'
                                ? { background: 'var(--brand)', color: '#000' }
                                : { color: 'var(--fg-secondary)' }
                            }
                        >
                            <Calendar className="h-4 w-4" />
                            Book Demo
                        </button>
                        <button
                            onClick={() => setFormType('waitlist')}
                            className="flex h-10 flex-1 items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer"
                            style={formType === 'waitlist'
                                ? { background: 'var(--brand)', color: '#000' }
                                : { color: 'var(--fg-secondary)' }
                            }
                        >
                            <Mail className="h-4 w-4" />
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </section>

            {/* Form + sidebar */}
            <section className="px-6 pb-24 sm:px-8 sm:pb-28 lg:px-12" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

                    {/* Sidebar */}
                    <div className="space-y-5 lg:col-span-1">
                        <div className="border p-6" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}>
                            <h3 className="mb-4 text-base font-semibold">What to expect</h3>
                            <ul className="space-y-3">
                                {[
                                    { icon: <Calendar className="h-4 w-4" />, text: '30-minute personalized walkthrough' },
                                    { icon: <Users className="h-4 w-4" />, text: 'ROI calculation for your team size' },
                                    { icon: <Check className="h-4 w-4" />, text: 'Custom migration strategy' },
                                    { icon: <Check className="h-4 w-4" />, text: 'No commitment required' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 shrink-0" style={{ color: 'var(--brand)' }}>{item.icon}</div>
                                        <span className="text-sm" style={{ color: 'var(--fg-secondary)' }}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border p-5" style={{ borderColor: 'var(--brand-border)', background: 'var(--brand-dim)' }}>
                            <div className="mb-2 flex items-center gap-2">
                                <Shield className="h-4 w-4" style={{ color: 'var(--brand)' }} />
                                <h3 className="text-sm font-semibold">Security &amp; Compliance</h3>
                            </div>
                            <p className="text-xs" style={{ color: 'var(--fg-secondary)' }}>GDPR compliant, EU data residency, SOC 2 infrastructure. Your data never leaves Europe.</p>
                        </div>

                        {/* Contact info */}
                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {[
                                { icon: <Mail className="h-4 w-4" />, label: 'Email', value: 'alexserbwork@gmail.com' },
                                { icon: <Globe className="h-4 w-4" />, label: 'Location', value: 'Bucharest, Romania' },
                                { icon: <Clock className="h-4 w-4" />, label: 'Response Time', value: 'Within 72 hours' }
                            ].map(item => (
                                <div key={item.label} className="flex items-start gap-3 border p-4" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}>
                                    <div className="mt-0.5 shrink-0" style={{ color: 'var(--brand)' }}>{item.icon}</div>
                                    <div>
                                        <div className="text-xs font-medium">{item.label}</div>
                                        <div className="text-xs" style={{ color: 'var(--fg-secondary)' }}>{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="border p-6 sm:p-8" style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}>
                            <header className="mb-6">
                                <h2 className="mb-1 text-2xl font-semibold">
                                    {formType === 'demo' ? 'Book Your Demo' : 'Join the Waitlist'}
                                </h2>
                                <p className="text-sm" style={{ color: 'var(--fg-secondary)' }}>
                                    {formType === 'demo'
                                        ? "We'll reach out within 72 hours to schedule a time that works for you."
                                        : 'Be the first to know when Obtura launches. Get exclusive early access pricing.'}
                                </p>
                            </header>

                            <form className="space-y-5" onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium" style={labelStyle}>Full Name *</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                        className={inputClass} style={inputStyle}
                                        placeholder="John Smith" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium" style={labelStyle}>Work Email *</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                        className={inputClass} style={inputStyle}
                                        placeholder="john@company.com" required />
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="company" className="mb-2 block text-sm font-medium" style={labelStyle}>Company *</label>
                                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                                            className={inputClass} style={inputStyle}
                                            placeholder="Acme Corp" required />
                                    </div>
                                    <div>
                                        <label htmlFor="teamSize" className="mb-2 block text-sm font-medium" style={labelStyle}>Team Size *</label>
                                        <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange}
                                            className={inputClass} style={inputStyle} required>
                                            <option value="">Select team size</option>
                                            <option value="1-3">1-3 developers</option>
                                            <option value="4-10">4-10 developers</option>
                                            <option value="11-25">11-25 developers</option>
                                            <option value="26-50">26-50 developers</option>
                                            <option value="50+">50+ developers</option>
                                        </select>
                                    </div>
                                </div>

                                {formType === 'demo' && (
                                    <>
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="role" className="mb-2 block text-sm font-medium" style={labelStyle}>Your Role *</label>
                                                <select id="role" name="role" value={formData.role} onChange={handleChange}
                                                    className={inputClass} style={inputStyle} required={formType === 'demo'}>
                                                    <option value="">Select your role</option>
                                                    <option value="cto">CTO</option>
                                                    <option value="engineering-manager">Engineering Manager</option>
                                                    <option value="devops">DevOps Engineer</option>
                                                    <option value="developer">Developer</option>
                                                    <option value="founder">Founder/CEO</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="mb-2 block text-sm font-medium" style={labelStyle}>Phone Number</label>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                                                    className={inputClass} style={inputStyle}
                                                    placeholder="+40 722 230 456" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium" style={labelStyle}>Preferred Demo Date</label>
                                            <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange}
                                                className={`${inputClass} [&::-webkit-calendar-picker-indicator]:invert`} style={inputStyle} />
                                        </div>
                                    </>
                                )}

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium" style={labelStyle}>
                                        {formType === 'demo' ? 'What are your main DevOps challenges?' : 'Anything you want to share?'}
                                    </label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                                        className="w-full border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                        placeholder={formType === 'demo'
                                            ? "e.g., We're spending too much time on infrastructure setup..."
                                            : "Tell us about your team and what you're building..."} />
                                </div>

                                <div>
                                    <label htmlFor="referral" className="mb-2 block text-sm font-medium" style={labelStyle}>How did you hear about us?</label>
                                    <select id="referral" name="referral" value={formData.referral} onChange={handleChange}
                                        className={inputClass} style={inputStyle}>
                                        <option value="">Select an option</option>
                                        <option value="search">Search Engine (Google)</option>
                                        <option value="social">Social Media</option>
                                        <option value="referral">Friend/Colleague</option>
                                        <option value="blog">Blog/Article</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button type="submit" disabled={isLoading}
                                    className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 bg-[#ff6b35] text-sm font-semibold text-black transition-colors hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50">
                                    {isLoading ? 'Submitting...' : (
                                        <>
                                            {formType === 'demo' ? 'Book Demo' : 'Join Waitlist'}
                                            <ArrowRight className="h-4 w-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs" style={{ color: 'var(--fg-tertiary)' }}>
                                    By submitting, you agree to our{' '}
                                    <a href="/terms" className="text-[#ff6b35] hover:underline">Terms of Service</a>
                                    {' '}and{' '}
                                    <a href="/privacy" className="text-[#ff6b35] hover:underline">Privacy Policy</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust strip */}
            <section className="border-y px-6 py-12 sm:px-8 sm:py-14 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                        {[
                            { icon: <Globe className="h-4 w-4" />, text: 'EU Data Residency' },
                            { icon: <Shield className="h-4 w-4" />, text: 'GDPR Compliant' },
                            { icon: <Check className="h-4 w-4" />, text: 'SOC 2 Infrastructure' },
                            { icon: <Check className="h-4 w-4" />, text: 'No Credit Card Required' }
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="shrink-0" style={{ color: 'var(--brand)' }}>{badge.icon}</div>
                                <p className="text-xs font-medium sm:text-sm">{badge.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
