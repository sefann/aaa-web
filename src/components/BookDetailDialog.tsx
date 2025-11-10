"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ArrowRight, ExternalLink } from 'lucide-react'
import { Book } from '@/data/books'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type BookDetailDialogProps = {
  book: Book | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookDetailDialog({ book, open, onOpenChange }: BookDetailDialogProps) {
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [open])

  if (!open || !book) {
    return null
  }

  const closeDialog = () => onOpenChange(false)
  const { paymentLinks, waitingListLink, status } = book

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeDialog} />

      <Card
        className="relative z-10 w-full max-w-3xl shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl">{book.title}</CardTitle>
            <CardDescription className="text-base leading-relaxed mt-2">{book.subtitle}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeDialog}
            className="self-end text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-8">
          <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-border bg-muted/20">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 40vw, 180px"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary">
                {status === 'available'
                  ? 'This title is available for purchase. Select a payment option below to complete checkout.'
                  : 'This title is currently in production. Join the waiting list to receive launch updates and pre-order access.'}
              </div>
              {status === 'available' && book.price && (
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{book.price}</span> | Includes tax and digital access
                  companion.
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Inside this book
            </h3>
            <ul className="space-y-3">
              {book.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground uppercase tracking-[0.2em]">
              Payment Options &amp; Waiting List
            </p>
            <div className="flex flex-wrap gap-3">
              {paymentLinks?.stripe && (
                <Button asChild size="sm" className="bg-[#635bff] hover:bg-[#5851ff] text-white">
                  <Link href={paymentLinks.stripe} target="_blank" rel="noopener noreferrer">
                    Checkout with Stripe
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {paymentLinks?.paystack && (
                <Button asChild size="sm" className="bg-[#0b7cff] hover:bg-[#096ce0] text-white">
                  <Link href={paymentLinks.paystack} target="_blank" rel="noopener noreferrer">
                    Pay with Paystack
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {paymentLinks?.monnify && (
                <Button asChild size="sm" className="bg-[#00a65a] hover:bg-[#009451] text-white">
                  <Link href={paymentLinks.monnify} target="_blank" rel="noopener noreferrer">
                    Pay with Monnify
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {waitingListLink && (
                <Button asChild variant="outline" size="sm">
                  <Link href={waitingListLink} target="_blank" rel="noopener noreferrer">
                    Join Waiting List
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

