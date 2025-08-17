import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aisha Abdullahi Adamu - Business Executive & Humanitarian',
  description: 'Explore my journey as a Business Executive and a Humanitarian. Welcome to the digital home of Aisha Abdullahi Adamu.',
  keywords: 'Aisha Abdullahi Adamu, Business Executive, Humanitarian, Leadership, Nigeria, The Bridge Initiative',
  authors: [{ name: 'Aisha Abdullahi Adamu' }],
  icons: {
    icon: '/images/aisha-favicon.svg',
    shortcut: '/images/aisha-favicon.svg',
    apple: '/images/aisha-favicon.svg',
  },
  openGraph: {
    title: 'Aisha Abdullahi Adamu - Business Executive & Humanitarian',
    description: 'Explore my journey as a Business Executive and a Humanitarian.',
    type: 'website',
    url: 'https://www.aishaabdullahiadamu.com',
    siteName: 'Aisha Abdullahi Adamu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aisha Abdullahi Adamu - Business Executive & Humanitarian',
    description: 'Explore my journey as a Business Executive and a Humanitarian.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark`}>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}
