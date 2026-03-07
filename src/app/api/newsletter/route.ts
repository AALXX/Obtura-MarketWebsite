import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' })
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const parsed = schema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
        }

        const { email } = parsed.data

        // Forward to the same send-email handler used by the contact form
        const emailPayload = {
            formType: 'newsletter',
            formData: {
                email,
                name: 'Newsletter Subscriber',
                company: '',
                teamSize: '',
                phone: '',
                message: 'Newsletter signup from blog',
                role: '',
                preferredDate: '',
                referral: 'blog-newsletter'
            }
        }

        // Call internal send-email route
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://obtura.dev'
        try {
            await fetch(`${baseUrl}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailPayload)
            })
        } catch {
            // Log error but don't fail the response — email delivery is best-effort
            if (process.env.NODE_ENV !== 'production') {
                console.error('Newsletter email delivery failed')
            }
        }

        return NextResponse.json({ success: true, message: 'Subscribed successfully' }, { status: 201 })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
