'use client'

import { useState } from 'react'
import { ArrowRight, Check, Calendar, Mail, Users, Globe, Shield, Clock } from 'lucide-react'

export default function ContactPageClient() {
    const [formType, setFormType] = useState<'demo' | 'waitlist'>('demo')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        teamSize: '',
        phone: '',
        message: '',
        role: '',
        preferredDate: '',
        referral: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useState(() => {
        setIsVisible(true)
    })

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.company || !formData.teamSize) {
            alert('Please fill in all required fields')
            return
        }

        setIsLoading(true)

        const resp = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                formType,
                formData
            })
        })
        console.log(resp)

        setIsLoading(false)

        const message = formType === 'demo' ? "Thanks! We\'ll be in touch within 72 hours to schedule your demo." : "You\'re on the list! We\'ll notify you when Obtura launches."

        alert(message)
        setFormData({
            name: '',
            email: '',
            company: '',
            teamSize: '',
            phone: '',
            message: '',
            role: '',
            preferredDate: '',
            referral: ''
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="mt-15 min-h-screen overflow-x-hidden bg-[#0a0a0a] font-sans text-white md:mt-0">
            <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#ff6b35]/5 to-transparent" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#ff6b35]/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-8 text-center">
                        <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <li>
                                <a href="/" className="transition-colors hover:text-[#ff6b35]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li className="text-white">Contact</li>
                        </ol>
                    </nav>

                    <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="mb-4 px-2 text-4xl leading-tight font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
                            Let\'s <span className="bg-linear-to-r from-[#ff6b35] to-[#ff8b55] bg-clip-text text-transparent">eliminate</span> your DevOps bottleneck
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg">
                            Book a personalized demo or join our waitlist. See how European SMEs are saving <strong className="text-white">€71K+ per year</strong> on DevOps costs with GDPR-compliant hosting.
                        </p>

                        <div className="mx-auto mb-12 flex w-full max-w-md gap-2 rounded-lg border border-white/10 bg-[#1a1a1a] p-1">
                            <button onClick={() => setFormType('demo')} className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all ${formType === 'demo' ? 'bg-[#ff6b35] text-black shadow-lg shadow-[#ff6b35]/20' : 'text-gray-400 hover:text-white'} cursor-pointer`}>
                                <Calendar className="h-4 w-4" />
                                Book Demo
                            </button>
                            <button onClick={() => setFormType('waitlist')} className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all ${formType === 'waitlist' ? 'bg-[#ff6b35] text-black shadow-lg shadow-[#ff6b35]/20' : 'text-gray-400 hover:text-white'} cursor-pointer`}>
                                <Mail className="h-4 w-4" />
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0a0a0a] pb-12 sm:pb-20 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-1">
                            <article className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6">
                                <h3 className="mb-4 text-lg font-semibold text-white">What to expect</h3>
                                <ul className="space-y-4">
                                    {[
                                        { icon: <Calendar className="h-5 w-5" />, text: '30-minute personalized walkthrough' },
                                        { icon: <Users className="h-5 w-5" />, text: 'ROI calculation for your team size' },
                                        { icon: <Check className="h-5 w-5" />, text: 'Custom migration strategy' },
                                        { icon: <Check className="h-5 w-5" />, text: 'No commitment required' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35]">{item.icon}</div>
                                            <span className="pt-1 text-sm text-gray-400">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <article className="rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/5 p-6">
                                <div className="mb-3 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-[#ff6b35]" />
                                    <h3 className="text-sm font-semibold text-white">Security & Compliance</h3>
                                </div>
                                <p className="text-xs text-gray-400">GDPR compliant, EU data residency, SOC 2 infrastructure. Your data never leaves Europe.</p>
                            </article>
                        </div>

                        <div className="lg:col-span-2">
                            <article className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 transition-all duration-500 hover:border-[#ff6b35]/30 sm:p-8">
                                <header className="mb-6">
                                    <h2 className="mb-2 text-2xl font-bold text-white">{formType === 'demo' ? 'Book Your Demo' : 'Join the Waitlist'}</h2>
                                    <p className="text-sm text-gray-400">{formType === 'demo' ? "We\'ll reach out within 72 hours to schedule a time that works for you." : 'Be the first to know when Obtura launches. Get exclusive early access pricing.'}</p>
                                </header>

                                <form
                                    className="space-y-5"
                                    onSubmit={e => {
                                        e.preventDefault()
                                        handleSubmit()
                                    }}
                                >
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                                                placeholder="Acme Corp"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="teamSize" className="mb-2 block text-sm font-medium text-gray-300">
                                                Team Size *
                                            </label>
                                            <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange} className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none" required>
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
                                                    <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-300">
                                                        Your Role *
                                                    </label>
                                                    <select id="role" name="role" value={formData.role} onChange={handleChange} className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none" required={formType === 'demo'}>
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
                                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                                                        placeholder="+40 722 230 456"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-gray-300">
                                                    Preferred Demo Date
                                                </label>
                                                <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none" />
                                            </div>
                                        </>
                                    )}

                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                            {formType === 'demo' ? 'What are your main DevOps challenges?' : 'Anything you want to share?'}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                                            placeholder={formType === 'demo' ? "e.g., We\'re spending too much time on infrastructure setup..." : "Tell us about your team and what you\'re building..."}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="referral" className="mb-2 block text-sm font-medium text-gray-300">
                                            How did you hear about us?
                                        </label>
                                        <select id="referral" name="referral" value={formData.referral} onChange={handleChange} className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-white focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none">
                                            <option value="">Select an option</option>
                                            <option value="search">Search Engine (Google)</option>
                                            <option value="social">Social Media</option>
                                            <option value="referral">Friend/Colleague</option>
                                            <option value="blog">Blog/Article</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <button type="submit" disabled={isLoading} className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ff6b35] text-base font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:scale-105 hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50">
                                        {isLoading ? (
                                            'Submitting...'
                                        ) : (
                                            <>
                                                {formType === 'demo' ? 'Book Demo' : 'Join Waitlist'}
                                                <ArrowRight className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-500">
                                        By submitting, you agree to our{' '}
                                        <a href="#" className="text-[#ff6b35] hover:underline">
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-[#ff6b35] hover:underline">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            </article>

                            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-center">
                                    <Mail className="mx-auto mb-2 h-6 w-6 text-[#ff6b35]" />
                                    <div className="text-xs font-medium text-white">Email</div>
                                    <div className="text-xs text-gray-400">alexserbwork@gmail.com</div>
                                </div>
                                <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-center">
                                    <Globe className="mx-auto mb-2 h-6 w-6 text-[#ff6b35]" />
                                    <div className="text-xs font-medium text-white">Location</div>
                                    <div className="text-xs text-gray-400">Bucharest, Romania</div>
                                </div>
                                <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-center">
                                    <Clock className="mx-auto mb-2 h-6 w-6 text-[#ff6b35]" />
                                    <div className="text-xs font-medium text-white">Response Time</div>
                                    <div className="text-xs text-gray-400">Within 72 hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/5 bg-[#0f0f0f] py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                        {[
                            { icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />, text: 'EU Data Residency' },
                            { icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />, text: 'GDPR Compliant' },
                            { icon: <Check className="h-5 w-5 sm:h-6 sm:w-6" />, text: 'SOC 2 Infrastructure' },
                            { icon: <Check className="h-5 w-5 sm:h-6 sm:w-6" />, text: 'No Credit Card Required' }
                        ].map((badge, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35]/10 text-[#ff6b35] sm:h-12 sm:w-12">{badge.icon}</div>
                                <p className="text-xs font-medium text-white sm:text-sm">{badge.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
