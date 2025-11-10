"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { X, ExternalLink } from 'lucide-react'
import { Book } from '@/data/books'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

type PaymentOptionsDialogProps = {
  book: Book | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PaymentOptionsDialog({ book, open, onOpenChange }: PaymentOptionsDialogProps) {
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [open])

  if (!open || !book || book.status !== 'available') {
    return null
  }

  const { paymentLinks, price } = book
  const closeDialog = () => onOpenChange(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDialog} />
      <Card
        className="relative z-10 w-full max-w-xl shadow-xl flex flex-col border border-slate-200 bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-xl">Purchase “{book.title}”</CardTitle>
            <CardDescription>
              Secure checkout in your preferred currency. Print &amp; digital bundle included. Current price:{' '}
              <span className="font-semibold text-foreground">{price}</span>
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={closeDialog} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>Choose a payment partner to complete your order. Confirmation and download instructions arrive instantly.</p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Payment Methods</p>
            <ul className="space-y-3 text-sm text-slate-700">
              {paymentLinks?.stripe && (
                <li className="flex items-center justify-between">
                  <span className="font-medium">Stripe (International)</span>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-500 text-white"
                    onClick={() => window.open(paymentLinks.stripe!, '_blank', 'noopener,noreferrer')}
                  >
                    Continue
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </li>
              )}
              {paymentLinks?.paystack && (
                <li className="flex items-center justify-between">
                  <span className="font-medium">Paystack (Nigeria)</span>
                  <Button
                    size="sm"
                    className="bg-emerald-500 hover:bg-emerald-400 text-white"
                    onClick={() => window.open(paymentLinks.paystack!, '_blank', 'noopener,noreferrer')}
                  >
                    Continue
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </li>
              )}
              {paymentLinks?.monnify && (
                <li className="flex items-center justify-between">
                  <span className="font-medium">Monnify (NG Business)</span>
                  <Button
                    size="sm"
                    className="bg-indigo-500 hover:bg-indigo-400 text-white"
                    onClick={() => window.open(paymentLinks.monnify!, '_blank', 'noopener,noreferrer')}
                  >
                    Continue
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </li>
              )}
            </ul>
          </div>

          <p className="text-xs text-slate-500">
            Need support or bulk orders?{' '}
            <Link href="/contact?context=book-institution-order" className="text-blue-600 underline">
              Contact our publishing team
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

