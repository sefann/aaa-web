"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/the-bridge', label: 'The Bridge' },
    { href: '/university-tour', label: 'University Tour' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-700 shadow-lg' 
          : 'bg-black/80'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-8"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-header.svg"
                alt="Aisha Cares Initiative Logo"
                width={700}
                height={210}
                className="h-32 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(0, -1).map((item) => (
              <div
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <div
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    />
                  )}
                </Link>
              </div>
            ))}
            {/* Contact Button */}
            <div>
              <Link
                href="/contact"
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  pathname === '/contact'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
            

          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <span
                className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white block mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white block mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t border-border overflow-hidden"
          >
                        <div 
              className="py-6 space-y-2"
            >
              {navItems.slice(0, -1).map((item) => (
                <div
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    className={`block px-6 py-3 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-white font-semibold bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              {/* Mobile Contact Button */}
              <div>
                <Link
                  href="/contact"
                  className={`block px-6 py-3 rounded-xl transition-all duration-300 ${
                    pathname === '/contact'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
