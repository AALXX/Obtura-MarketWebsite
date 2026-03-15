'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

interface Props {
    /** Render inputs/button for use on a brand-orange background */
    inverted?: boolean
}

export default function NewsletterForm({ inverted = false }: Props) {
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
                <div className="mt-0.5 shrink-0" style={{ color: inverted ? '#0d0c0b' : 'var(--brand)' }}>
                    <Check className="h-4 w-4" />
                </div>
                <div>
                    <p className="text-sm font-semibold" style={{ color: inverted ? '#0d0c0b' : 'var(--fg-primary)' }}>You&apos;re subscribed!</p>
                    <p className="text-sm" style={{ color: inverted ? 'rgba(13,12,11,0.7)' : 'var(--fg-secondary)' }}>Thanks for joining. We&apos;ll send you DevOps tips and Obtura updates.</p>
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
                style={inverted
                    ? { borderColor: 'rgba(13,12,11,0.25)', background: 'rgba(13,12,11,0.08)', color: '#0d0c0b' }
                    : { borderColor: 'var(--border-default)', background: 'var(--bg-elevated)', color: 'var(--fg-primary)' }
                }
                required
                disabled={status === 'loading'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="h-12 px-8 text-sm font-semibold whitespace-nowrap transition-opacity disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-80"
                style={inverted
                    ? { background: '#0d0c0b', color: 'var(--brand)' }
                    : { background: 'var(--brand)', color: '#000' }
                }
            >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {status === 'error' && (
                <p id="newsletter-error" role="alert" className="w-full text-sm" style={{ color: inverted ? 'rgba(13,12,11,0.9)' : 'var(--color-danger)' }}>
                    {errorMsg}
                </p>
            )}
        </form>
    )
}
