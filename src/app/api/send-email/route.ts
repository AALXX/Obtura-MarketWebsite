import nodemailer from 'nodemailer'
import getLeadNotificationEmailTemplate from '@/components/Email_Templates'

const POST = async (req: Request) => {
    const { formType, formData } = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: `"Obtura Customer Accusition" <${formData.email}>`,
        to: process.env.EMAIL_USERNAME,
        subject: `New ${formType === 'demo' ? 'Demo' : 'Waitlist'} Request from ${formData.name}`,
        html: getLeadNotificationEmailTemplate(formType, formData)
    }
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email sent successfully' }))
}

export { POST }
