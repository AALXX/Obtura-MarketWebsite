export default function About() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-16 font-sans text-white">
            <section className="py-20 lg:py-32">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-center text-4xl font-bold sm:text-5xl">
                        About <span className="text-[#ff6b35]">Obtura</span>
                    </h1>
                    <p className="mb-12 text-center text-lg text-gray-400">We're building the DevOps platform European SMEs deserve.</p>

                    <div className="space-y-8">
                        <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-8">
                            <h2 className="mb-4 text-2xl font-semibold text-white">Our Mission</h2>
                            <p className="text-gray-400">"Ship code without a DevOps team" — We eliminate the DevOps bottleneck for European SME development teams by automating infrastructure, deployment, monitoring, and compliance.</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-8">
                            <h2 className="mb-6 text-2xl font-semibold text-white">The Team</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-1 font-semibold text-white">Alexandru-Nicolae Șerban</h3>
                                    <p className="mb-2 text-sm text-[#ff6b35]">Founder & CEO</p>
                                    <p className="text-sm text-gray-400">Full-stack developer with a vision to democratize DevOps for European SMEs.</p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-white">Rareș Ștefan Miu</h3>
                                    <p className="mb-2 text-sm text-[#ff6b35]">Co-Founder & Head of Marketing</p>
                                    <p className="text-sm text-gray-400">Marketing strategist focused on growth and building the Obtura community.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-8">
                            <h2 className="mb-4 text-2xl font-semibold text-white">EU-First Philosophy</h2>
                            <p className="text-gray-400">We prioritize EU compliance and GDPR-native design. European support team in your timezone. Pricing in Euros with no FX risk.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
