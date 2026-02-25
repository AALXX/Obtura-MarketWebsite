'use client'
import { useState, useEffect, JSX } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Zap, TrendingDown, Users, Clock, AlertTriangle, Rocket, BarChart3, GitBranch, Shield, UserCheck, Calculator, Lock, HardDrive, ClipboardCheck, Globe, Calendar, Terminal as TerminalIcon } from 'lucide-react'

interface TerminalLine {
    text: string
    prefix?: string
    type: 'command' | 'info' | 'success' | 'warning'
}

export default function HomeClient() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [developers, setDevelopers] = useState<number>(10)
    const [projects, setProjects] = useState<number>(5)
    const [setup, setSetup] = useState<string>('manual')
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const lines: TerminalLine[] = [
            {
                prefix: '>',
                text: 'obtura build',
                type: 'command'
            },
            {
                prefix: '◆',
                text: 'Obtura CLI v1.0.0',
                type: 'info'
            },
            {
                prefix: '✔',
                text: 'Validating configuration',
                type: 'success'
            },
            {
                prefix: '✔',
                text: 'Compiling source modules',
                type: 'success'
            },
            {
                prefix: ' ',
                text: 'Building optimized production bundles...',
                type: 'info'
            },
            {
                prefix: ' ',
                text: '• [obtura] optimized chunk: dist/parser.js',
                type: 'info'
            },
            {
                prefix: ' ',
                text: '• [obtura] optimized chunk: dist/ast.js',
                type: 'info'
            },
            {
                prefix: ' ',
                text: '• [obtura] optimized chunk: dist/compiler.js',
                type: 'info'
            },
            {
                prefix: ' ',
                text: '• [obtura] optimized chunk: dist/renderer.js',
                type: 'info'
            },
            {
                prefix: '✔',
                text: 'Build completed successfully.',
                type: 'success'
            },
            {
                prefix: '✨',
                text: 'Done in: 5m 03s',
                type: 'success'
            }
        ]

        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex < lines.length) {
                setTerminalLines(prev => [...prev, lines[currentIndex]])
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 600)

        return () => clearInterval(interval)
    }, [])


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

    const features = ['5-minute deploy', 'Built-in observability', 'GDPR compliant', '€71K/year savings']

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] font-sans text-white">
            <section className="relative mt-12 overflow-hidden py-12 sm:py-20 lg:mt-0 lg:py-32">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#ff6b35]/5 to-transparent" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#ff6b35]/10 blur-[100px] sm:h-[800px] sm:w-[800px] sm:blur-[150px]" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="mb-6 inline-flex animate-bounce items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-3 py-2 text-xs font-medium text-[#ff6b35] backdrop-blur-sm sm:mb-8 sm:px-4 sm:text-sm">
                            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                            Now accepting early access signups
                        </div>

                        <h1 className="mb-4 px-2 text-4xl leading-tight font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl">
                            Ship code without a <span className="block bg-linear-to-r from-[#ff6b35] to-[#ff8b55] bg-clip-text text-transparent sm:inline">DevOps team</span>
                        </h1>

                        <p className="mx-auto mb-6 max-w-3xl px-4 text-base leading-relaxed text-gray-400 sm:mb-8 sm:text-lg lg:text-xl">Obtura eliminates the DevOps bottleneck for European SME development teams. Zero-config deployment, built-in monitoring, predictable pricing.</p>

                        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-xs text-gray-400 sm:mb-10 sm:gap-6 sm:text-sm">
                            {features.map((feature, i) => (
                                <div key={feature} className="flex items-center gap-2 transition-all duration-300 hover:scale-110" style={{ animationDelay: `${i * 100}ms` }}>
                                    <Check className="h-3 w-3 shrink-0 text-[#ff6b35] sm:h-4 sm:w-4" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Link href="/contact">
                                <button type="button" disabled={isLoading} className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-8 font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:scale-105 hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50">
                                    {isLoading ? '...' : 'Join Waitlist'}
                                    {!isLoading && <ArrowRight className="h-4 w-4" />}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative container mx-auto px-4 pb-12 sm:px-6 sm:pb-20 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="overflow-hidden rounded-lg border border-[#333] bg-[#1e1e1e] shadow-2xl shadow-black/50 transition-all duration-500 hover:shadow-[#ff6b35]/5">
                        <div className="flex items-center gap-2 border-b border-[#333] bg-[#252526] px-4 py-2">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="ml-2 flex items-center gap-2 font-mono text-xs text-gray-400">
                                <TerminalIcon className="h-3 w-3" />
                                <span>user — -zsh — 80x24</span>
                            </div>
                        </div>

                        <div className="min-h-auto space-y-1.5 overflow-x-auto p-4 font-mono text-xs text-[#d4d4d4] sm:min-h-[300px] sm:p-6 sm:text-sm">
                            {terminalLines.map((line, index) => {
                                if (!line) return null

                                const isCommand = line.type === 'command'
                                const isSuccess = line.type === 'success'

                                return (
                                    <div key={index} className="flex animate-[fadeIn_0.1s_ease-in_forwards] items-start opacity-0">
                                        <span className={`mr-2 font-bold ${isCommand ? 'text-[#ff6b35]' : isSuccess ? 'text-green-500' : 'text-blue-400'}`}>{line.prefix || '>'}</span>

                                        <span className={`${isCommand ? 'font-semibold text-white' : isSuccess ? 'text-green-400' : 'text-[#d4d4d4]'}`}>{line.text}</span>
                                    </div>
                                )
                            })}
                            {terminalLines.length > 0 && (
                                <div className="mt-2 flex animate-[fadeIn_0.1s_ease-in_forwards] items-center">
                                    <span className="mr-2 font-bold text-[#ff6b35]">$</span>
                                    <div className="h-4 w-2 animate-pulse bg-gray-500"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#141414] py-12 sm:py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                        <h2 className="mb-4 px-2 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                            The €76K <span className="text-[#ff6b35]">DevOps Tax</span> on SMEs
                        </h2>
                        <p className="px-4 text-base text-gray-400 sm:text-lg">European SMEs with 5-25 person development teams face a critical bottleneck. The numbers don't lie.</p>
                    </div>

                    <div className="mb-12 grid gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {[
                            {
                                icon: <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: '€60-85K/year',
                                description: "Cost of a DevOps engineer in Western Europe. Most SMEs can't justify this for 5-15 developers."
                            },
                            {
                                icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: '40+ hours',
                                description: 'Time spent setting up CI/CD, monitoring, and logging per project. Repeated for every new project.'
                            },
                            {
                                icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: '20-30%',
                                description: 'Developer time wasted on infrastructure instead of building features that matter.'
                            },
                            {
                                icon: <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Unpredictable costs',
                                description: 'Usage-based platforms like Replit report $350+ daily spikes. No budget certainty.'
                            }
                        ].map((problem, index) => (
                            <div key={problem.title} className="group rounded-xl border border-white/10 bg-[#1a1a1a] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff6b35]/30 hover:shadow-lg hover:shadow-[#ff6b35]/10 sm:p-6" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12">{problem.icon}</div>
                                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">{problem.title}</h3>
                                <p className="text-sm text-gray-400">{problem.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-auto max-w-2xl">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] transition-all duration-500 hover:border-[#ff6b35]/30">
                            <div className="border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
                                <h3 className="text-sm font-semibold text-white sm:text-base">The Real Cost for a 10-Person Team</h3>
                            </div>
                            <div className="divide-y divide-white/10">
                                {[
                                    { item: 'Junior DevOps Engineer (50% time)', cost: '€32,500' },
                                    { item: 'Infrastructure setup time (200h @ €65/h)', cost: '€13,000' },
                                    { item: 'DevOps tools (Sentry, Datadog, etc.)', cost: '€4,800' },
                                    { item: 'Developer time on infrastructure (400h)', cost: '€26,000' }
                                ].map(row => (
                                    <div key={row.item} className="flex justify-between gap-4 px-4 py-3 transition-colors duration-200 hover:bg-white/5 sm:px-6 sm:py-4">
                                        <span className="text-xs text-gray-400 sm:text-sm">{row.item}</span>
                                        <span className="shrink-0 text-xs font-medium text-white sm:text-sm">{row.cost}</span>
                                    </div>
                                ))}
                                <div className="flex animate-pulse justify-between gap-4 bg-red-500/10 px-4 py-3 sm:px-6 sm:py-4">
                                    <span className="text-sm font-semibold text-white sm:text-base">Total DevOps Tax</span>
                                    <span className="shrink-0 text-sm font-bold text-red-400 sm:text-base">€76,300/year</span>
                                </div>
                                <div className="flex justify-between gap-4 bg-[#ff6b35]/10 px-4 py-3 sm:px-6 sm:py-4">
                                    <span className="text-sm font-semibold text-white sm:text-base">With Obtura Business Plan</span>
                                    <span className="shrink-0 text-sm font-bold text-[#ff6b35] sm:text-base">€4,788/year</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 px-4 text-center text-xs text-gray-400 sm:text-sm">
                            <span className="font-semibold text-[#ff6b35]">94% cost reduction</span> — That's €71,512 back in your budget every year.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#0a0a0a] py-12 sm:py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                        <h2 className="mb-4 px-2 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                            True <span className="text-[#ff6b35]">Zero-DevOps</span> Platform
                        </h2>
                        <p className="px-4 text-base text-gray-400 sm:text-lg">Developers should never think about infrastructure. We automate 95% of DevOps tasks so you can focus on features.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {[
                            {
                                icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Zero-Config Deployment',
                                description: 'Push code, infrastructure happens automatically. Smart framework detection configures everything.',
                                features: ['Auto-detect Node.js, Python, Go, PHP', 'Auto-provision databases & Redis', 'Auto-configure SSL & health checks']
                            },
                            {
                                icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Built-in Observability',
                                description: 'No more paying for Sentry, Datadog, and Logtail separately. Everything included.',
                                features: ['Real-time error tracking', 'Performance metrics & APM', 'Log aggregation with search']
                            },
                            {
                                icon: <GitBranch className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Git-Native Workflow',
                                description: 'Automatic staging, production, and preview environments for every branch.',
                                features: ['Preview URLs per branch', 'Auto-deploy on merge', 'One-click rollback']
                            },
                            {
                                icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Compliance by Default',
                                description: 'Every app is production-ready with enterprise features out-of-the-box.',
                                features: ['SSL certificates auto-renewed', 'Daily backups with 30-day retention', 'GDPR-compliant EU hosting']
                            },
                            {
                                icon: <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
                                title: 'Team Collaboration',
                                description: 'Non-technical team members can interact with deployments safely.',
                                features: ['PM-friendly interface', 'Designer preview sharing', 'Role-based access control']
                            }
                        ].map((feature, index) => (
                            <div key={feature.title} className="group rounded-xl border border-white/10 bg-[#1a1a1a] p-4 transition-all duration-300 hover:scale-105 hover:border-[#ff6b35]/30 sm:p-6">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] transition-transform duration-300 group-hover:rotate-6 sm:mb-4 sm:h-12 sm:w-12">{feature.icon}</div>
                                <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{feature.title}</h3>
                                <p className="mb-3 text-xs text-gray-400 sm:mb-4 sm:text-sm">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.features.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-xs text-gray-400 sm:text-sm">
                                            <span className="mt-0.5 shrink-0 text-[#ff6b35]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#141414] py-12 sm:py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/20 bg-[#ff6b35]/10 px-3 py-2 text-xs font-medium text-[#ff6b35] sm:mb-6 sm:px-4 sm:text-sm">
                            <Calculator className="h-3 w-3 sm:h-4 sm:w-4" />
                            Interactive Calculator
                        </div>
                        <h2 className="mb-4 px-2 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                            Calculate Your <span className="text-[#ff6b35]">DevOps Savings</span>
                        </h2>
                        <p className="px-4 text-base text-gray-400 sm:text-lg">See how much you could save by switching to Obtura. Adjust the sliders to match your team.</p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 lg:grid-cols-2">
                        {/* Input Panel */}
                        <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 transition-all duration-500 hover:border-[#ff6b35]/30 sm:p-8">
                            <h3 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">Your Team Details</h3>

                            <div className="mb-6 sm:mb-8">
                                <div className="mb-3 flex justify-between">
                                    <label className="text-xs text-gray-400 sm:text-sm">Number of developers</label>
                                    <span className="text-xs font-medium text-[#ff6b35] sm:text-sm">{developers} developers</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={developers}
                                    onChange={e => setDevelopers(Number(e.target.value))}
                                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff6b35] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
                                />
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <div className="mb-3 flex justify-between">
                                    <label className="text-xs text-gray-400 sm:text-sm">Number of active projects</label>
                                    <span className="text-xs font-medium text-[#ff6b35] sm:text-sm">{projects} projects</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={projects}
                                    onChange={e => setProjects(Number(e.target.value))}
                                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff6b35] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
                                />
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <label className="mb-3 block text-xs text-gray-400 sm:text-sm">Current DevOps setup</label>
                                <select value={setup} onChange={e => setSetup(e.target.value)} className="h-12 w-full rounded-lg border border-white/10 bg-[#0a0a0a] px-4 text-sm text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#ff6b35]">
                                    <option value="manual">Manual DevOps</option>
                                    <option value="vercel">Vercel / Netlify</option>
                                    <option value="aws">AWS / GCP / Azure</option>
                                    <option value="replit">Replit / Railway</option>
                                </select>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#ff6b35]/30 bg-[#1a1a1a] p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#ff6b35]/20 sm:p-8">
                            <h3 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">Your Savings Analysis</h3>

                            <div className="mb-6 space-y-3">
                                <div className="text-xs text-gray-400 sm:text-sm">You're currently spending:</div>
                                <div className="space-y-2 text-xs sm:text-sm">
                                    <div className="flex justify-between gap-2 rounded p-2 transition-colors hover:bg-white/5">
                                        <span className="flex items-center gap-2 text-gray-400">
                                            <Users className="h-3 w-3 shrink-0" />
                                            DevOps engineer salary
                                        </span>
                                        <span className="shrink-0 font-medium text-white">€{currentSetup.devopsSalary.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex justify-between gap-2 rounded p-2 transition-colors hover:bg-white/5">
                                        <span className="flex items-center gap-2 text-gray-400">
                                            <Clock className="h-3 w-3 shrink-0" />
                                            Infrastructure setup time
                                        </span>
                                        <span className="shrink-0 font-medium text-white">€{currentSetup.setupTime.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex justify-between gap-2 rounded p-2 transition-colors hover:bg-white/5">
                                        <span className="flex items-center gap-2 text-gray-400">
                                            <BarChart3 className="h-3 w-3 shrink-0" />
                                            DevOps tools
                                        </span>
                                        <span className="shrink-0 font-medium text-white">€{currentSetup.tools.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex justify-between gap-2 rounded p-2 transition-colors hover:bg-white/5">
                                        <span className="flex items-center gap-2 text-gray-400">
                                            <UserCheck className="h-3 w-3 shrink-0" />
                                            Developer time on infrastructure
                                        </span>
                                        <span className="shrink-0 font-medium text-white">€{currentSetup.devTime.toLocaleString()}/year</span>
                                    </div>
                                </div>
                                <div className="border-t border-white/10 pt-3">
                                    <div className="flex justify-between gap-2 p-2">
                                        <span className="text-sm font-semibold text-white sm:text-base">Total cost</span>
                                        <span className="shrink-0 text-base font-bold text-red-400 sm:text-lg">€{totalCost.toLocaleString()}/year</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 rounded-lg border border-[#ff6b35]/20 bg-[#ff6b35]/10 p-4 transition-all hover:bg-[#ff6b35]/15">
                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <span className="text-xs text-gray-400 sm:text-sm">With Obtura </span>
                                        <span className="text-xs font-medium text-[#ff6b35] sm:text-sm">{developers <= 3 ? 'Starter' : developers <= 10 ? 'Team' : developers <= 25 ? 'Business' : 'Enterprise'}</span>
                                    </div>
                                    <span className="shrink-0 text-base font-bold text-[#ff6b35] sm:text-lg">€{obturaCost.toLocaleString()}/year</span>
                                </div>
                            </div>

                            <div className="mb-6 animate-pulse rounded-lg border border-[#ff6b35]/30 bg-linear-to-r from-[#ff6b35]/20 to-[#ff6b35]/10 p-4 text-center transition-transform duration-300 hover:scale-105 sm:p-6">
                                <div className="mb-1 text-xs text-gray-400 sm:text-sm">Your annual savings</div>
                                <div className="mb-1 text-3xl font-bold text-[#ff6b35] sm:text-4xl">€{savings.toLocaleString()}</div>
                                <div className="text-xs text-gray-400 sm:text-sm">
                                    That's a <span className="font-semibold text-[#ff6b35]">{savingsPercent}% cost reduction</span>
                                </div>
                            </div>

                            <Link href="/contact">
                                <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ff6b35] text-sm font-semibold text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:scale-105 hover:bg-[#ff7b45] hover:shadow-[#ff6b35]/40 sm:text-base">
                                    Contact Sales
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/5 bg-[#0f0f0f] py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                        {[
                            { icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />, title: 'GDPR Compliant', description: 'Built for European data protection requirements' },
                            { icon: <Lock className="h-5 w-5 sm:h-6 sm:w-6" />, title: 'SOC 2 Infrastructure', description: 'Enterprise-grade security certifications' },
                            { icon: <HardDrive className="h-5 w-5 sm:h-6 sm:w-6" />, title: 'Daily Backups', description: '30-day retention with tested recovery' }
                        ].map(badge => (
                            <div key={badge.title} className="flex flex-col items-center text-center">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35]/10 text-[#ff6b35] sm:h-12 sm:w-12">{badge.icon}</div>
                                <h3 className="mb-1 text-xs font-semibold text-white sm:text-sm">{badge.title}</h3>
                                <p className="text-xs text-gray-400">{badge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0a0a0a] py-12 sm:py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                        <h2 className="mb-4 px-2 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                            Predictable <span className="text-[#ff6b35]">Flat Pricing</span>
                        </h2>
                        <p className="px-4 text-base text-gray-400 sm:text-lg">No usage surprises. No hidden fees. Just simple, predictable pricing that scales with your team.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {[
                            {
                                name: 'Starter',
                                price: '€199',
                                period: '/month',
                                description: 'For small teams getting started',
                                features: ['Up to 3 developers', '5 projects', 'Basic monitoring', 'Community support'],
                                highlighted: false
                            },
                            {
                                name: 'Team',
                                price: '€250',
                                period: '/month',
                                description: 'For growing development teams',
                                features: ['Up to 10 developers', 'Unlimited projects', 'Full observability suite', 'Priority support', 'Custom domains'],
                                highlighted: false
                            },
                            {
                                name: 'Business',
                                price: '€650',
                                period: '/month',
                                description: 'For established SME teams',
                                features: ['Up to 25 developers', 'Unlimited projects', 'Advanced security', 'SSO & SAML', 'Dedicated support', 'SLA guarantees'],
                                highlighted: true,
                                badge: 'MOST POPULAR'
                            },
                            {
                                name: 'Enterprise',
                                price: '€899+',
                                period: '/month',
                                description: 'For large organizations',
                                features: ['Unlimited developers', 'Unlimited projects', 'On-premise option', 'Custom integrations', 'Dedicated account manager', '24/7 phone support'],
                                highlighted: false
                            }
                        ].map(plan => (
                            <div key={plan.name} className={`flex flex-col rounded-xl border p-4 transition-all duration-300 sm:p-6 ${plan.highlighted ? 'border-[#ff6b35] bg-[#ff6b35]/5 shadow-lg shadow-[#ff6b35]/20' : 'border-white/10 bg-[#1a1a1a] hover:border-[#ff6b35]/50'}`}>
                                {plan.badge && <div className="mb-3 text-xs font-medium text-[#ff6b35] sm:mb-4">{plan.badge}</div>}
                                <h3 className="mb-1 text-lg font-semibold text-white sm:text-xl">{plan.name}</h3>
                                <div className="mb-2 flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-white sm:text-3xl">{plan.price}</span>
                                    <span className="text-sm text-gray-400">{plan.period}</span>
                                </div>
                                <p className="mb-4 text-xs text-gray-400 sm:mb-6 sm:text-sm">{plan.description}</p>
                                <ul className="mb-4 flex flex-col gap-2 sm:mb-6 sm:gap-3">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2 text-xs text-gray-400 sm:text-sm">
                                            <Check className="h-3 w-3 shrink-0 text-[#ff6b35] sm:h-4 sm:w-4" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="mt-auto">
                                    <button className={`mt-auto h-10 w-full rounded-lg text-sm font-medium transition-all ${plan.highlighted ? 'bg-[#ff6b35] text-black shadow-lg shadow-[#ff6b35]/20 hover:bg-[#ff7b45]' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'} cursor-pointer`}>Contact Sales</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0a0a0a] py-12 sm:py-20 lg:py-32">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#ff6b35]/5 to-transparent" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 px-2 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                            Ready to eliminate your <span className="text-[#ff6b35]">DevOps bottleneck</span>?
                        </h2>
                        <p className="mb-8 px-4 text-base text-gray-400 sm:mb-10 sm:text-lg">Join European SMEs saving €71K+ per year on DevOps costs. Get early access when we launch.</p>

                        <a href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 text-sm text-white transition-all hover:bg-white/10 sm:text-base">
                            <Calendar className="h-4 w-4" />
                            Book a Demo
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <p className="mt-6 flex flex-wrap items-center justify-center gap-2 px-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <Globe className="h-3 w-3 shrink-0" />
                                <span>EU-first platform</span>
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-1.5">
                                <Shield className="h-3 w-3 shrink-0" />
                                <span>GDPR compliant</span>
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-1.5">
                                <ClipboardCheck className="h-3 w-3 shrink-0" />
                                <span>No credit card required</span>
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
