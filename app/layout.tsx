import type { Metadata, Viewport } from 'next'
import './globals.css'
import siteConfig from '@/lib/config'

export const metadata: Metadata = {
  title:       siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords:    siteConfig.seo.keywords,
  icons: { icon: siteConfig.seo.favicon },
  openGraph: {
    title:       siteConfig.seo.title,
    description: siteConfig.seo.description,
    images:      [siteConfig.seo.ogImage],
    type:        'website',
  },
}

export const viewport: Viewport = {
  themeColor:    siteConfig.seo.themeColor,
  width:         'device-width',
  initialScale:  1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = siteConfig.colors
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --color-primary:   ${c.primary};
            --color-secondary: ${c.secondary};
            --color-dark:      ${c.dark};
            --color-card:      ${c.card};
            --color-border:    ${c.border};
            --grad-brand:      linear-gradient(135deg, ${c.primary}, ${c.secondary});
            --font-display:    'Playfair Display', serif;
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
