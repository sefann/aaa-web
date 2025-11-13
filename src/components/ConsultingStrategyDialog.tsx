"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type ConsultingStrategyDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  'Business Strategy & Growth Advisory',
  'Policy & Government Relations (mining, energy, procurement)',
  'Leadership Branding & Executive Positioning',
  'Social Impact & Program Design',
]

export function ConsultingStrategyDialog({ open, onOpenChange }: ConsultingStrategyDialogProps) {
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [open])

  if (!open) {
    return null
  }

  const closeDialog = () => onOpenChange(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={closeDialog} />
      <Card
        className="relative z-10 w-full max-w-2xl shadow-2xl flex flex-col max-h-[85vh] bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-start justify-between space-y-0 bg-white">
          <div>
            <CardTitle className="text-2xl text-gray-900">Consulting &amp; Strategy</CardTitle>
            <CardDescription className="text-gray-700">
              Through Pathmark Advisory, Aisha provides high-level business and policy strategy at the
              intersection of governance, industry, and social impact.
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeDialog}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto space-y-8 pr-2 bg-white">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              We anchor every engagement in actionable intelligence, crafting strategy that moves stakeholders, unlocks
              capital, and translates vision into measurable results across boardrooms, ministries, and communities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Services</h3>
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-800" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
          <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white" asChild>
            <Link href="/contact?context=consulting-strategy">
              Request a Strategy Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

