'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Docs', href: '/docs' }
]

export function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [pathname] = useState('/')

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl">
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <a href="/" className="flex items-center ">
                            <Image src="/Logo_2.png" alt="Obtura Logo" width={100} height={100} className="h-16 w-16" />
                            <span className="text-xl font-bold text-white">Obtura</span>
                        </a>
                    </div>

                    <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-8 md:flex">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-white ${pathname === link.href ? 'text-white' : 'text-gray-400'}`}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden shrink-0 items-center gap-4 md:flex">
                        <Link href="/contact" className="text-sm font-medium text-white transition-colors hover:text-gray-300">
                            Book a Demo
                        </Link>
                        <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-6 text-sm font-semibold whitespace-nowrap text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
                            Join Waitlist
                        </Link>
                    </div>

                    <button type="button" className="p-2 text-gray-400 transition-colors hover:text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="border-t border-white/5 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className={`px-2 py-1 text-sm font-medium transition-colors hover:text-white ${pathname === link.href ? 'text-white' : 'text-gray-400'}`} onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-sm font-medium text-white transition-colors hover:text-gray-300">
                                    Book a Demo
                                </a>
                                <a href="/#waitlist" onClick={() => setMobileMenuOpen(false)} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-6 text-sm font-semibold whitespace-nowrap text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45]">
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
