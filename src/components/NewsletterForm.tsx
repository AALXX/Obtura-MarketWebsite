'use client'

import { useState } from 'react'

export default function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })

            const data = await res.json()

            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong. Please try again.')
                setStatus('error')
                return
            }

            setStatus('success')
            setEmail('')
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.')
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center gap-3 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="font-semibold text-white">You're subscribed!</p>
                <p className="text-sm text-gray-400">Thanks for joining. We'll send you DevOps tips and Obtura updates.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
                Email address
            </label>
            <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 flex-1 rounded-lg border border-white/10 bg-[#2a2a2a] px-4 text-white placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#ff6b35] focus:outline-none"
                required
                disabled={status === 'loading'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button type="submit" disabled={status === 'loading' || !email} className="h-12 rounded-lg bg-[#ff6b35] px-8 font-semibold whitespace-nowrap text-black shadow-lg shadow-[#ff6b35]/20 transition-all hover:bg-[#ff7b45] disabled:cursor-not-allowed disabled:opacity-50">
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {status === 'error' && (
                <p id="newsletter-error" role="alert" className="w-full text-center text-sm text-red-400">
                    {errorMsg}
                </p>
            )}
        </form>
    )
}
