// Server component — renders static sections of the homepage for SEO/LCP
// Renders: Hero, Problem stats, Features, Trust badges, Pricing
// Interactive sections (terminal animation, cost calculator, CTA) are interspersed via HomeClient

import Link from 'next/link'

export default function HomeStaticContent() {
    return (
        <>
            {/* Hero static content — visible immediately without JS */}
            <section className="relative mt-12 overflow-hidden bg-[#0a0a0a] py-12 sm:py-20 lg:mt-0 lg:py-32">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#ff6b35]/5 to-transparent" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/10 blur-[100px] sm:h-[800px] sm:w-[800px] sm:blur-[150px]" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-2 text-xs font-medium text-[#ff6b35] backdrop-blur-sm sm:mb-8 sm:px-4 sm:text-sm">
                            <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Now accepting early access signups
                        </div>

                        <h1 className="mb-4 px-2 text-4xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl">
                            Ship code without a <span className="block bg-linear-to-r from-[#ff6b35] to-[#ff8b55] bg-clip-text text-transparent sm:inline">DevOps team</span>
                        </h1>

                        <p className="mx-auto mb-6 max-w-3xl px-4 text-base leading-relaxed text-gray-400 sm:mb-8 sm:text-lg lg:text-xl">Obtura eliminates the DevOps bottleneck for European SME development teams. Zero-config deployment, built-in monitoring, predictable pricing.</p>

                        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-xs text-gray-400 sm:mb-10 sm:gap-6 sm:text-sm">
                            {['5-minute deploy', 'Built-in observability', 'GDPR compliant', '€71K/year savings'].map(feature => (
                                <div key={feature} className="flex items-center gap-2">
                                    <svg className="h-3 w-3 shrink-0 text-[#ff6b35] sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Link href="/contact">
                                <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-8 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:scale-105 hover:bg-[#ff7b45]">
                                    Join Waitlist
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
