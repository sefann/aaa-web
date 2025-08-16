import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aisha Abdullahi Adamu - Business Executive & Humanitarian',
  description: 'Explore my journey as a Business Executive and a Humanitarian. Welcome to the digital home of Aisha Abdullahi Adamu.',
  keywords: 'Aisha Abdullahi Adamu, Business Executive, Humanitarian, Leadership, Nigeria, The Bridge Initiative',
  authors: [{ name: 'Aisha Abdullahi Adamu' }],
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
