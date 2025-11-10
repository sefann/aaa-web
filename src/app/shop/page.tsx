"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Book, books } from '@/data/books'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { BookDetailDialog } from '@/components/BookDetailDialog'
import { PaymentOptionsDialog } from '@/components/PaymentOptionsDialog'

export default function ShopPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false)
  const [paymentBook, setPaymentBook] = useState<Book | null>(null)

  const availableBooks = useMemo(() => books.filter((book) => book.status === 'available'), [])
  const comingSoonBooks = useMemo(() => books.filter((book) => book.status === 'comingSoon'), [])
  const catalogueBooks = useMemo(
    () => [...availableBooks, ...comingSoonBooks],
    [availableBooks, comingSoonBooks]
  )

  const openDialog = (book: Book) => {
    setSelectedBook(book)
    setDialogOpen(true)
  }

  const openPayment = (book: Book) => {
    setPaymentBook(book)
    setPaymentDialogOpen(true)
  }

  const closePayment = () => setPaymentDialogOpen(false)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f1f5f9,transparent_60%)]" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl animate-ping" />
          <div className="absolute bottom-[-120px] left-1/4 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl animate-pulse" />
        </div>
        <div className="container-custom relative z-10 text-center text-slate-900">
          <p className="uppercase tracking-[0.4em] text-xs text-slate-400 mb-4">AAA Publishing House</p>
          <h1 className="heading-primary mb-4">The Aisha Library</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore published titles and forthcoming works from Aisha Abdullahi Adamu, crafted for leaders, policymakers,
            and women building legacy.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white shadow-lg shadow-blue-200/60">
              <Link href="https://formtype.form/waitlist/aaa-library" target="_blank" rel="noopener noreferrer">
                Join the Library Waiting List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f6f8fb]">
        <div className="container-custom space-y-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {catalogueBooks.map((book) => (
              <Card
                key={book.id}
                className={`h-full overflow-hidden flex flex-col rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 ${
                  book.status === 'available'
                    ? 'border border-blue-200 bg-white/95'
                    : 'border border-dashed border-blue-200 bg-white/95'
                }`}
              >
                <div className="px-4 pt-4">
                  <div className="relative mx-auto h-72 w-full rounded-xl border border-blue-100 bg-blue-50/40 overflow-hidden">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      className={book.status === 'available' ? 'object-cover' : 'object-cover opacity-80'}
                    />
                    {book.status === 'available' ? null : <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />}
                    <div className="absolute top-2 left-2 rounded-full bg-white/90 text-[10px] uppercase tracking-[0.3em] text-blue-600 px-3 py-1 shadow-sm">
                      {book.status === 'available' ? 'Available Now' : 'Coming Soon'}
                    </div>
                  </div>
                </div>
                <CardHeader className="px-4 pb-1 pt-3">
                  <CardTitle className="text-sm font-semibold text-slate-900">{book.title}</CardTitle>
                  <CardDescription className="text-xs leading-snug text-slate-500">{book.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-2 p-3 text-xs leading-relaxed text-slate-600">
                  <p className="line-clamp-2">{book.description}</p>
                  {book.status === 'available' ? (
                    <div className="mt-auto flex items-center justify-between text-slate-900 font-semibold pt-1">
                      <span>{book.price}</span>
                      <div className="flex gap-2">
                        <Button
                          size="xs"
                          variant="outline"
                          className="!border-0 bg-[#0f172a] text-white hover:bg-[#1e293b]"
                          onClick={() => openDialog(book)}
                        >
                          More Info
                        </Button>
                        <Button
                          size="xs"
                          className="bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                          onClick={() => openPayment(book)}
                        >
                          Payment
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-auto flex items-center justify-between text-slate-800 font-semibold pt-1">
                      <Button
                        size="xs"
                        variant="outline"
                        asChild
                        className="self-start !border-0 bg-[#0f172a] text-white hover:bg-[#1e293b]"
                      >
                        <Link href={book.waitingListLink ?? 'https://formtype.form/waitlist/aaa-library'} target="_blank" rel="noopener noreferrer">
                          Preorder
                        </Link>
                      </Button>
                      <Button
                        size="xs"
                        variant="ghost"
                        className="text-[#0f172a] hover:text-[#1e293b]"
                        onClick={() => openDialog(book)}
                      >
                        More Info
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BookDetailDialog book={selectedBook} open={dialogOpen} onOpenChange={setDialogOpen} />
      <PaymentOptionsDialog book={paymentBook} open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen} />
    </div>
  )
}

