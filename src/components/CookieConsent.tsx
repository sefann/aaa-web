"use client"

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted')
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-gray-700">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Cookie className="w-4 h-4 text-primary" />
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-medium text-white mb-1">
                We use cookies to enhance your experience
              </p>
              <p className="text-gray-400">
                This website uses cookies to improve functionality, analyze traffic, and personalize content. 
                By continuing to use this site, you consent to our use of cookies.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={acceptCookies}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

















