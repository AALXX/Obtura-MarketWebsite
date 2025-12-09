import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-white/5 bg-[#141414]">
                <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
                        <div className="col-span-2 md:col-span-1 ">
                            <Link href="/" className="mb-4 flex items-center ">
                                <Image src="/Logo_2.png" alt="Obtura Logo" width={100} height={100} className="h-16 w-16 border" />

                                <span className="text-xl font-bold text-white">Obtura</span>
                            </Link>
                            <p className="mb-4 text-sm text-gray-400">Ship code without a DevOps team. The zero-configuration deployment platform for European SMEs.</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                                    𝕏
                                </a>
                                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                                    in
                                </a>
                                <a href="#" className="text-gray-400 transition-colors hover:text-[#ff6b35]">
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
                            <ul className="space-y-3">
                                {['Features', 'Pricing', 'Changelog', 'Documentation'].map(item => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-[#ff6b35]">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
                            <ul className="space-y-3">
                                {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-[#ff6b35]">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
                            <ul className="space-y-3">
                                {['Privacy Policy', 'Terms of Service', 'GDPR'].map(item => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-[#ff6b35]">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} MRSA SRL. All rights reserved.</p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>🇪🇺 EU Data Residency</span>
                            <span className="text-white/10">•</span>
                            <span>GDPR Compliant</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
