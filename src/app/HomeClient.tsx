'use client'
// Full homepage — editorial / confident direction
// Hero → Terminal → Problem → Features → Calculator → Trust → Pricing → CTA

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Users, Clock, AlertTriangle, TrendingDown, Rocket, BarChart3, GitBranch, Shield, UserCheck, Lock, HardDrive, ClipboardCheck, Globe, Calendar, Terminal as TerminalIcon, Sparkles } from 'lucide-react'

interface TerminalLine {
    text: string
    prefix?: string
    type: 'command' | 'info' | 'success' | 'warning'
}

const ALL_TERMINAL_LINES: TerminalLine[] = [
    { prefix: '>', text: 'obtura build', type: 'command' },
    { prefix: '◆', text: 'Obtura CLI v1.0.0', type: 'info' },
    { prefix: '✔', text: 'Validating configuration', type: 'success' },
    { prefix: '✔', text: 'Compiling source modules', type: 'success' },
    { prefix: ' ', text: 'Building optimized production bundles...', type: 'info' },
    { prefix: ' ', text: '• [obtura] optimized chunk: dist/parser.js', type: 'info' },
    { prefix: ' ', text: '• [obtura] optimized chunk: dist/ast.js', type: 'info' },
    { prefix: ' ', text: '• [obtura] optimized chunk: dist/compiler.js', type: 'info' },
    { prefix: ' ', text: '• [obtura] optimized chunk: dist/renderer.js', type: 'info' },
    { prefix: '✔', text: 'Build completed successfully.', type: 'success' },
    { prefix: '✨', text: 'Done in: 5m 03s', type: 'success' }
]

const FEATURES = [
    {
        icon: <Rocket className="h-4 w-4" />,
        title: 'Zero-Config Deployment',
        description: 'Push code, infrastructure happens automatically. Smart framework detection configures everything.',
        items: ['Auto-detect Node.js, Python, Go, PHP', 'Auto-provision databases & Redis', 'Auto-configure SSL & health checks']
    },
    {
        icon: <BarChart3 className="h-4 w-4" />,
        title: 'Built-in Observability',
        description: 'No more paying for Sentry, Datadog, and Logtail separately. Everything included.',
        items: ['Real-time error tracking', 'Performance metrics & APM', 'Log aggregation with search']
    },
    {
        icon: <GitBranch className="h-4 w-4" />,
        title: 'Git-Native Workflow',
        description: 'Automatic staging, production, and preview environments for every branch.',
        items: ['Preview URLs per branch', 'Auto-deploy on merge', 'One-click rollback']
    },
    {
        icon: <Shield className="h-4 w-4" />,
        title: 'Compliance by Default',
        description: 'Every app is production-ready with enterprise features out-of-the-box.',
        items: ['SSL certificates auto-renewed', 'Daily backups with 30-day retention', 'GDPR-compliant EU hosting']
    },
    {
        icon: <UserCheck className="h-4 w-4" />,
        title: 'Team Collaboration',
        description: 'Non-technical team members can interact with deployments safely.',
        items: ['PM-friendly interface', 'Designer preview sharing', 'Role-based access control']
    },
    {
        icon: <Sparkles className="h-4 w-4" />,
        title: 'AI Production Assistant',
        description: 'Your AI copilot navigates production crises, analyzes logs, and monitors systems in real-time.',
        items: ['Instant root cause analysis', 'Live log streaming & search', 'Proactive anomaly detection', 'Automated incident response']
    }
]

export default function HomeClient() {
    const [developers, setDevelopers] = useState<number>(10)
    const [projects, setProjects] = useState<number>(5)
    const [setup, setSetup] = useState<string>('manual')
    const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])
    const terminalBodyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex < ALL_TERMINAL_LINES.length) {
                setTerminalLines(prev => [...prev, ALL_TERMINAL_LINES[currentIndex]])
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 600)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
        }
    }, [terminalLines])

    const calculations: Record<string, { devopsSalary: number; setupTime: number; tools: number; devTime: number }> = {
        manual: {
            devopsSalary: developers >= 15 ? 65000 : developers >= 10 ? 32500 : 0,
            setupTime: projects * 200 * 65,
            tools: projects * 960,
            devTime: developers * 40 * 65
        },
        vercel: {
            devopsSalary: 0,
            setupTime: projects * 50 * 65,
            tools: projects * 480,
            devTime: developers * 20 * 65
        },
        aws: {
            devopsSalary: developers >= 10 ? 45000 : 25000,
            setupTime: projects * 300 * 65,
            tools: projects * 1200,
            devTime: developers * 50 * 65
        },
        replit: {
            devopsSalary: 0,
            setupTime: projects * 30 * 65,
            tools: projects * 2400,
            devTime: developers * 15 * 65
        }
    }

    const currentSetup = calculations[setup]
    const totalCost = Object.values(currentSetup).reduce((a, b) => a + b, 0)
    const obturaCost = developers <= 3 ? 948 : developers <= 10 ? 3588 : developers <= 25 ? 9588 : 26388
    const savings = totalCost - obturaCost
    const savingsPercent = totalCost > 0 ? Math.round((savings / totalCost) * 100) : 0
    const planName = developers <= 3 ? 'Starter' : developers <= 10 ? 'Team' : developers <= 25 ? 'Business' : 'Enterprise'

    return (
        <div className="overflow-x-hidden" style={{ background: 'var(--bg-base)', color: 'var(--fg-primary)' }}>

            {/* ── 1. Hero — editorial left-aligned ── */}
            <section className="mt-16 px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:mt-0 lg:px-12 lg:pb-32 lg:pt-44" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto max-w-6xl">

 

                    {/* Display headline */}
                    <h1
                        className="mb-8 text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-9xl"
                        style={{
                            fontFamily: 'var(--font-display)',
                            animation: 'heroReveal 0.6s ease-out 80ms both'
                        }}
                    >
                        Ship code.
                        <br />
                        <span style={{ color: 'var(--brand)' }}>Not infrastructure.</span>
                    </h1>

                    {/* Horizontal rule — editorial separator */}
                    <div
                        className="mb-8"
                        style={{
                            height: '1px',
                            width: '64px',
                            background: 'var(--border-default)',
                            animation: 'heroReveal 0.5s ease-out 160ms both'
                        }}
                    />

                    {/* Body copy */}
                    <p
                        className="mb-10 max-w-lg text-lg leading-relaxed sm:text-xl"
                        style={{
                            color: 'var(--fg-secondary)',
                            animation: 'heroReveal 0.6s ease-out 200ms both'
                        }}
                    >
                        Obtura eliminates the DevOps bottleneck for European SME teams. Zero-config deployment, built-in monitoring, predictable flat pricing.
                    </p>

                    {/* CTAs */}
                    <div
                        className="mb-16 flex flex-wrap items-center gap-5"
                        style={{ animation: 'heroReveal 0.6s ease-out 260ms both' }}
                    >
                        <Link href="/contact">
                            <button type="button" className="inline-flex h-12 items-center gap-2 bg-[#ff6b35] px-8 text-sm font-semibold text-black transition-colors hover:bg-[#ff7b45]">
                                Join Waitlist
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                        <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#ff6b35]" style={{ color: 'var(--fg-secondary)' }}>
                            Book a demo →
                        </Link>
                    </div>

                    {/* Feature strip */}
                    <div
                        className="flex flex-wrap gap-x-8 gap-y-3 border-t pt-8"
                        style={{
                            borderColor: 'var(--border-subtle)',
                            animation: 'heroReveal 0.5s ease-out 320ms both'
                        }}
                    >
                        {['5-minute deploy', 'Built-in observability', 'GDPR compliant', '€71K/year savings'].map(f => (
                            <div key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--fg-secondary)' }}>
                                <Check className="h-3 w-3 text-[#ff6b35]" />
                                {f}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 2. Terminal ── */}
            <section className="px-6 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto max-w-6xl">
                    <p className="mb-6 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>
                        — See it work
                    </p>
                    <div className="overflow-hidden rounded-lg border shadow-2xl shadow-black/50" style={{ borderColor: 'oklch(100% 0 0 / 0.12)', background: '#1a1714' }}>
                        <div className="flex items-center gap-2 border-b px-4 py-2.5" style={{ borderColor: 'oklch(100% 0 0 / 0.10)', background: '#201d1a' }}>
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="ml-2 flex items-center gap-2 text-xs" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>
                                <TerminalIcon className="h-3 w-3" />
                                <span>user — zsh — 80×24</span>
                            </div>
                        </div>
                        <div
                            ref={terminalBodyRef}
                            className="h-[300px] space-y-1.5 overflow-y-auto p-4 text-xs sm:h-[340px] sm:p-6 sm:text-sm"
                            style={{ color: '#ccc8c2', fontFamily: 'var(--font-mono)' }}
                        >
                            {terminalLines.map((line, index) => {
                                if (!line) return null
                                const isCommand = line.type === 'command'
                                const isSuccess = line.type === 'success'
                                return (
                                    <div key={index} className="flex items-start" style={{ animation: 'terminalLine 0.15s ease-out forwards', opacity: 0 }}>
                                        <span className={`mr-2 font-bold ${isCommand ? 'text-[#ff6b35]' : isSuccess ? 'text-green-400' : 'text-blue-400'}`}>{line.prefix || '>'}</span>
                                        <span className={`${isCommand ? 'font-semibold text-[#eae9e7]' : isSuccess ? 'text-green-300' : ''}`}>{line.text}</span>
                                    </div>
                                )
                            })}
                            {terminalLines.length > 0 && (
                                <div className="mt-2 flex items-center" style={{ animation: 'terminalLine 0.15s ease-out forwards', opacity: 0 }}>
                                    <span className="mr-2 font-bold text-[#ff6b35]">$</span>
                                    <div className="h-4 w-2 bg-[#8a8784] opacity-70" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. Problem — editorial stat layout ── */}
            <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32" style={{ background: 'var(--bg-subtle)' }}>
                <div className="mx-auto max-w-6xl">

                    <div className="mb-16">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— The problem</p>
                        <h2
                            className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            The €76K<br />
                            <span style={{ color: 'var(--brand)' }}>DevOps Tax</span><br />
                            on SMEs.
                        </h2>
                    </div>

                    {/* Stats grid — editorial numbers as focal point */}
                    <div
                        className="mb-20 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
                        style={{ background: 'var(--border-subtle)' }}
                    >
                        {[
                            { stat: '€60–85K', label: '/year', description: "Cost of a DevOps engineer in Western Europe. Most SMEs can't justify this for 5–15 developers." },
                            { stat: '40+', label: 'hours', description: 'Setup time per project for CI/CD, monitoring, and logging. Repeated for every new project.' },
                            { stat: '20–30%', label: 'of dev time', description: 'Wasted on infrastructure instead of features that actually ship.' },
                            { stat: '∞', label: 'surprises', description: 'Usage-based platforms like Replit report $350+ daily spikes. No budget certainty.' }
                        ].map(item => (
                            <div key={item.stat} className="p-8" style={{ background: 'var(--bg-subtle)' }}>
                                <div
                                    className="mb-1 text-4xl font-black leading-none tracking-tight lg:text-5xl"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {item.stat}
                                </div>
                                <div className="mb-3 text-xs font-medium" style={{ color: 'var(--brand)' }}>{item.label}</div>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Cost comparison — split editorial */}
                    <div className="grid gap-16 border-t pt-16 lg:grid-cols-2" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div>
                            <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>Without Obtura — 10 person team</p>
                            <div
                                className="text-6xl font-black leading-none tracking-tight lg:text-7xl"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg-tertiary)' }}
                            >
                                €76,300
                            </div>
                            <p className="mt-3 text-sm" style={{ color: 'var(--fg-tertiary)' }}>per year</p>
                        </div>
                        <div>
                            <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>With Obtura Business plan</p>
                            <div
                                className="text-6xl font-black leading-none tracking-tight lg:text-7xl"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand)' }}
                            >
                                €4,788
                            </div>
                            <p className="mt-3 text-sm" style={{ color: 'var(--fg-secondary)' }}>
                                per year — <span className="font-semibold" style={{ color: 'var(--brand)' }}>94% less</span>. That's €71,512 back in your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. Features — numbered editorial index ── */}
            <section id="features" className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto max-w-6xl">

                    <div className="mb-16">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— The platform</p>
                        <h2
                            className="text-5xl font-black leading-none tracking-tight sm:text-6xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            True Zero-DevOps<br />
                            <span style={{ color: 'var(--brand)' }}>Platform.</span>
                        </h2>
                    </div>

                    {/* Numbered feature list */}
                    <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        {FEATURES.map((feature, i) => (
                            <div
                                key={feature.title}
                                className="grid grid-cols-[2.5rem_1fr] gap-6 border-b py-8 sm:grid-cols-[2.5rem_1fr_1fr] sm:gap-10"
                                style={{ borderColor: 'var(--border-subtle)' }}
                            >
                                {/* Number */}
                                <span
                                    className="pt-0.5 text-sm font-semibold tabular-nums"
                                    style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}
                                >
                                    0{i + 1}
                                </span>

                                {/* Title + description */}
                                <div>
                                    <div className="mb-0.5 flex items-center gap-2" style={{ color: 'var(--fg-tertiary)' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{feature.description}</p>
                                    {/* Sub-features on mobile */}
                                    <ul className="mt-4 space-y-1.5 sm:hidden">
                                        {feature.items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-xs" style={{ color: 'var(--fg-secondary)' }}>
                                                <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#ff6b35]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Sub-features on desktop */}
                                <ul className="hidden space-y-1.5 sm:block">
                                    {feature.items.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg-secondary)' }}>
                                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#ff6b35]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. Calculator ── */}
            <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32" style={{ background: 'var(--bg-subtle)' }}>
                <div className="mx-auto max-w-6xl">

                    <div className="mb-16">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Your numbers</p>
                        <h2
                            className="text-5xl font-black leading-none tracking-tight sm:text-6xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Calculate your<br />
                            <span style={{ color: 'var(--brand)' }}>DevOps savings.</span>
                        </h2>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Left: Inputs */}
                        <div className="space-y-8">
                            <div>
                                <div className="mb-3 flex justify-between">
                                    <label className="text-sm" style={{ color: 'var(--fg-secondary)' }}>Developers on your team</label>
                                    <span className="text-sm font-semibold text-[#ff6b35]">{developers}</span>
                                </div>
                                <input
                                    type="range" min="1" max="50" value={developers}
                                    onChange={e => setDevelopers(Number(e.target.value))}
                                    className="h-px w-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff6b35]"
                                    style={{ background: 'var(--border-default)' }}
                                    aria-label="Number of developers"
                                />
                            </div>

                            <div>
                                <div className="mb-3 flex justify-between">
                                    <label className="text-sm" style={{ color: 'var(--fg-secondary)' }}>Active projects</label>
                                    <span className="text-sm font-semibold text-[#ff6b35]">{projects}</span>
                                </div>
                                <input
                                    type="range" min="1" max="20" value={projects}
                                    onChange={e => setProjects(Number(e.target.value))}
                                    className="h-px w-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff6b35]"
                                    style={{ background: 'var(--border-default)' }}
                                    aria-label="Number of active projects"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-sm" style={{ color: 'var(--fg-secondary)' }}>Current DevOps setup</label>
                                <select
                                    value={setup} onChange={e => setSetup(e.target.value)}
                                    className="h-11 w-full border px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                                    style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)', color: 'var(--fg-primary)' }}
                                >
                                    <option value="manual">Manual DevOps</option>
                                    <option value="vercel">Vercel / Netlify</option>
                                    <option value="aws">AWS / GCP / Azure</option>
                                    <option value="replit">Replit / Railway</option>
                                </select>
                            </div>

                            {/* Cost breakdown */}
                            <div className="border-t pt-6" style={{ borderColor: 'var(--border-subtle)' }}>
                                <p className="mb-3 text-xs" style={{ color: 'var(--fg-tertiary)' }}>Current annual spend:</p>
                                <div className="space-y-2">
                                    {[
                                        { icon: <Users className="h-3 w-3" />, label: 'DevOps salary', value: currentSetup.devopsSalary },
                                        { icon: <Clock className="h-3 w-3" />, label: 'Setup time', value: currentSetup.setupTime },
                                        { icon: <TrendingDown className="h-3 w-3" />, label: 'Tools', value: currentSetup.tools },
                                        { icon: <AlertTriangle className="h-3 w-3" />, label: 'Dev time on infra', value: currentSetup.devTime },
                                    ].map(row => (
                                        <div key={row.label} className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-2" style={{ color: 'var(--fg-secondary)' }}>
                                                {row.icon} {row.label}
                                            </span>
                                            <span className="font-medium">€{row.value.toLocaleString()}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-between border-t pt-2 text-sm font-semibold" style={{ borderColor: 'var(--border-subtle)' }}>
                                        <span>Total</span>
                                        <span className="text-red-400">€{totalCost.toLocaleString()}/yr</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Savings — editorial focal point */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>
                                    With Obtura {planName}
                                </p>
                                <div
                                    className="text-7xl font-black leading-none tracking-tight sm:text-8xl"
                                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand)' }}
                                >
                                    €{savings.toLocaleString()}
                                </div>
                                <p className="mt-4 text-lg" style={{ color: 'var(--fg-secondary)' }}>
                                    saved per year — <span className="font-semibold" style={{ color: 'var(--fg-primary)' }}>{savingsPercent}% reduction</span>
                                </p>
                                <p className="mt-1 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                                    vs. €{obturaCost.toLocaleString()}/yr with Obtura
                                </p>
                            </div>

                            <div className="mt-10">
                                <div className="mb-4 h-px" style={{ background: 'var(--border-subtle)' }} />
                                <Link href="/contact">
                                    <button className="inline-flex h-12 items-center gap-2 bg-[#ff6b35] px-8 text-sm font-semibold text-black transition-colors hover:bg-[#ff7b45]">
                                        Contact Sales
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Trust — editorial inline strip ── */}
            <section className="border-y px-6 py-12 sm:px-8 sm:py-14 lg:px-12" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-muted)' }}>
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 sm:grid-cols-3">
                        {[
                            { icon: <Shield className="h-4 w-4" />, title: 'GDPR Compliant', description: 'Built for European data protection requirements' },
                            { icon: <Lock className="h-4 w-4" />, title: 'SOC 2 Infrastructure', description: 'Enterprise-grade security certifications' },
                            { icon: <HardDrive className="h-4 w-4" />, title: 'Daily Backups', description: '30-day retention with tested recovery' }
                        ].map(badge => (
                            <div key={badge.title} className="flex items-start gap-4">
                                <div className="mt-0.5 shrink-0" style={{ color: 'var(--brand)' }}>{badge.icon}</div>
                                <div>
                                    <h3 className="text-sm font-semibold">{badge.title}</h3>
                                    <p className="mt-0.5 text-sm" style={{ color: 'var(--fg-secondary)' }}>{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. Pricing ── */}
            <section id="pricing" className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32" style={{ background: 'var(--bg-base)' }}>
                <div className="mx-auto max-w-6xl">

                    <div className="mb-16">
                        <p className="mb-5 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Pricing</p>
                        <h2
                            className="text-5xl font-black leading-none tracking-tight sm:text-6xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Predictable<br />
                            <span style={{ color: 'var(--brand)' }}>flat pricing.</span>
                        </h2>
                        <p className="mt-5 max-w-md text-base" style={{ color: 'var(--fg-secondary)' }}>No usage surprises. No hidden fees. Scales with your team.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                        {[
                            {
                                name: 'Starter', price: '€199', period: '/month',
                                description: 'For small teams getting started',
                                features: ['Up to 3 developers', '5 projects', 'Basic monitoring', 'Community support'],
                                highlighted: false
                            },
                            {
                                name: 'Team', price: '€250', period: '/month',
                                description: 'For growing development teams',
                                features: ['Up to 10 developers', 'Unlimited projects', 'Full observability suite', 'Priority support', 'Custom domains'],
                                highlighted: false
                            },
                            {
                                name: 'Business', price: '€650', period: '/month',
                                description: 'For established SME teams',
                                features: ['Up to 25 developers', 'Unlimited projects', 'Advanced security', 'SSO & SAML', 'Dedicated support', 'SLA guarantees'],
                                highlighted: true, badge: 'Most popular'
                            },
                            {
                                name: 'Enterprise', price: '€899+', period: '/month',
                                description: 'For large organizations',
                                features: ['Unlimited developers', 'Unlimited projects', 'On-premise option', 'Custom integrations', 'Dedicated account manager', '24/7 phone support'],
                                highlighted: false
                            }
                        ].map(plan => (
                            <div
                                key={plan.name}
                                className="flex flex-col border p-5 sm:p-6"
                                style={plan.highlighted
                                    ? { borderColor: 'var(--brand-border)', background: 'var(--bg-elevated)' }
                                    : { borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }
                                }
                            >
                                {plan.badge && (
                                    <div className="mb-3 text-xs font-medium" style={{ color: 'var(--brand)' }}>{plan.badge}</div>
                                )}
                                <h3 className="mb-1 text-lg font-semibold">{plan.name}</h3>
                                <div className="mb-2 flex items-baseline gap-1">
                                    <span
                                        className="text-3xl font-black leading-none"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >{plan.price}</span>
                                    <span className="text-sm" style={{ color: 'var(--fg-secondary)' }}>{plan.period}</span>
                                </div>
                                <p className="mb-5 text-xs" style={{ color: 'var(--fg-secondary)' }}>{plan.description}</p>
                                <ul className="mb-5 flex flex-col gap-2">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2 text-xs" style={{ color: 'var(--fg-secondary)' }}>
                                            <Check className="h-3 w-3 shrink-0 text-[#ff6b35]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="mt-auto">
                                    <button
                                        className={`h-10 w-full text-sm font-medium transition-colors cursor-pointer ${plan.highlighted ? 'bg-[#ff6b35] text-black hover:bg-[#ff7b45]' : 'border text-white hover:bg-white/[0.06]'}`}
                                        style={plan.highlighted ? {} : { borderColor: 'var(--border-default)' }}
                                    >
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 8. CTA — editorial statement ── */}
            <section className="px-6 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-52" style={{ background: 'var(--bg-subtle)' }}>
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-5xl">
                        <p className="mb-8 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>— Get started</p>
                        <h2
                            className="mb-10 text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-9xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Eliminate your<br />
                            <span style={{ color: 'var(--brand)' }}>DevOps bottleneck.</span>
                        </h2>

                        <p className="mb-12 max-w-lg text-lg" style={{ color: 'var(--fg-secondary)' }}>
                            Join European SMEs saving €71K+ per year. Get early access when we launch.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link href="/contact">
                                <button className="inline-flex h-12 items-center gap-2 bg-[#ff6b35] px-8 text-sm font-semibold text-black transition-colors hover:bg-[#ff7b45]">
                                    <Calendar className="h-4 w-4" />
                                    Book a Demo
                                </button>
                            </Link>
                            <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: 'var(--fg-tertiary)' }}>
                                <span className="flex items-center gap-1.5"><Globe className="h-3 w-3" /> EU-first platform</span>
                                <span className="flex items-center gap-1.5"><Shield className="h-3 w-3" /> GDPR compliant</span>
                                <span className="flex items-center gap-1.5"><ClipboardCheck className="h-3 w-3" /> No credit card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
