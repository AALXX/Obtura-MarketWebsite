'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: 'Tech Stacks', href: '/tech-stacks' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Docs', href: '/docs' }
]

export function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: 'var(--border-subtle)', background: 'oklch(10% 0.01 30 / 0.96)' }}>
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <a href="/" className="flex items-center">
                            <Image src="/Logo_2.png" alt="Obtura Logo" width={100} height={100} className="h-16 w-16" />
                            <span className="text-xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--fg-primary)' }}>Obtura</span>
                        </a>
                    </div>

                    <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-8 md:flex">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-white" style={{ color: pathname === link.href ? 'var(--fg-primary)' : 'var(--fg-secondary)' }}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden shrink-0 items-center gap-4 md:flex">
                        <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#ff6b35]" style={{ color: 'var(--fg-secondary)' }}>
                            Book a Demo
                        </Link>
                        <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-2 bg-[#ff6b35] px-6 text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-[#ff7b45]">
                            Join Waitlist
                        </Link>
                    </div>

                    <button type="button" className="p-2 transition-colors hover:text-white md:hidden" style={{ color: 'var(--fg-secondary)' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="border-t py-4 md:hidden" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className="px-2 py-1 text-sm font-medium transition-colors hover:text-white" style={{ color: pathname === link.href ? 'var(--fg-primary)' : 'var(--fg-secondary)' }} onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-sm font-medium transition-colors hover:text-[#ff6b35]" style={{ color: 'var(--fg-secondary)' }}>
                                    Book a Demo
                                </a>
                                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex h-10 w-full items-center justify-center gap-2 bg-[#ff6b35] px-6 text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-[#ff7b45]">
                                    Join Waitlist
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
