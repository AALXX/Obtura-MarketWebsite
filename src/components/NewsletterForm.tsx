'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

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
            <div className="flex items-start gap-3 py-2">
                <div className="mt-0.5 shrink-0" style={{ color: 'var(--brand)' }}>
                    <Check className="h-4 w-4" />
                </div>
                <div>
                    <p className="font-semibold text-sm">You&apos;re subscribed!</p>
                    <p className="text-sm" style={{ color: 'var(--fg-secondary)' }}>Thanks for joining. We&apos;ll send you DevOps tips and Obtura updates.</p>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
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
                className="h-12 flex-1 border px-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                style={{ borderColor: 'var(--border-default)', background: 'var(--bg-elevated)', color: 'var(--fg-primary)' }}
                required
                disabled={status === 'loading'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="h-12 bg-brand px-8 text-sm font-semibold whitespace-nowrap text-black transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {status === 'error' && (
                <p id="newsletter-error" role="alert" className="w-full text-sm" style={{ color: 'var(--fg-secondary)' }}>
                    {errorMsg}
                </p>
            )}
        </form>
    )
}
