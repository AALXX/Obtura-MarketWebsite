import { getAllPosts } from '@/lib/data/blog-posts'

export async function GET() {
    const posts = getAllPosts()
    const baseUrl = 'https://obtura.dev'

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
        <title>Obtura DevOps Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Expert guides on deploying Next.js, Django, React, Python, Go and 15+ frameworks. Learn autonomous deployment, GDPR compliance, German hosting, and shipping without DevOps.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
        <managingEditor>alexserbwork@gmail.com (Obtura)</managingEditor>
        <webMaster>alexserbwork@gmail.com (Obtura)</webMaster>
        <copyright>Copyright ${new Date().getFullYear()} Obtura SRL. All rights reserved.</copyright>
        <category>Technology</category>
        <category>DevOps</category>
        <ttl>60</ttl>
        <image>
            <url>${baseUrl}/Logo2.png</url>
            <title>Obtura DevOps Blog</title>
            <link>${baseUrl}/blog</link>
            <width>144</width>
            <height>144</height>
        </image>
        ${posts
            .map(
                post => `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${baseUrl}/blog/${post.slug}</link>
            <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <category>${post.category}</category>
            ${post.tags.map(tag => `<category>${tag}</category>`).join('\n            ')}
            <description>${escapeXml(post.excerpt)}</description>
            <content:encoded><![CDATA[${post.content}]]></content:encoded>
            <dc:creator>${escapeXml(post.author)}</dc:creator>
            <author>alexserbwork@gmail.com (${escapeXml(post.author)})</author>
        </item>
        `
            )
            .join('')}
    </channel>
</rss>`

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        }
    })
}

function escapeXml(unsafe: string): string {
    return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}
