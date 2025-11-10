"use client"

export type BookStatus = 'available' | 'comingSoon'

export interface Book {
  id: string
  title: string
  subtitle: string
  description: string
  status: BookStatus
  cover: string
  price?: string
  paymentLinks?: {
    stripe?: string
    paystack?: string
    monnify?: string
  }
  waitingListLink?: string
  highlights: string[]
}

export const books: Book[] = [
  {
    id: 'bridging-legacies',
    title: 'Bridging Legacies',
    subtitle: 'Mentorship, Memory, and the Architecture of Impact',
    description:
      'A manifesto on intergenerational leadership that blends stories from The Bridge with practical frameworks for sustaining legacy movements.',
    status: 'available',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=420&q=80',
    price: '$39',
    paymentLinks: {
      stripe: 'https://stripe.com/checkout/bridging-legacies',
      paystack: 'https://paystack.com/pay/bridging-legacies',
      monnify: 'https://monnify.com/pay/bridging-legacies',
    },
    highlights: [
      'The Bridge methodology for curating transformational spaces',
      'Legacy design toolkits for leaders and organisations',
      'Case studies from Abuja, Lagos, and Johannesburg cohorts',
    ],
  },
  {
    id: 'pathmark-blueprint',
    title: 'Pathmark Blueprint',
    subtitle: 'Building Resilient Enterprises in Emerging Markets',
    description:
      'Strategy frameworks, deal flow playbooks, and governance toolkits for leaders operating at the intersection of business and public policy.',
    status: 'available',
    cover: 'https://images.unsplash.com/photo-1517436073-6d2d2822c133?auto=format&fit=crop&w=420&q=80',
    price: '$45',
    paymentLinks: {
      stripe: 'https://stripe.com/checkout/pathmark-blueprint',
      paystack: 'https://paystack.com/pay/pathmark-blueprint',
      monnify: 'https://monnify.com/pay/pathmark-blueprint',
    },
    highlights: [
      '12-point resilience framework for African enterprises',
      'Procurement, mining, and energy policy navigation guides',
      'Templates for stakeholder mapping and capital mobilisation',
    ],
  },
  {
    id: 'north-star-playbook',
    title: 'The North Star Playbook',
    subtitle: 'Executive Positioning for African Women in Power',
    description:
      'A strategic playbook for leaders navigating policy rooms, boardrooms, and the media with intention, audacity, and clarity.',
    status: 'comingSoon',
    cover: 'https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6?auto=format&fit=crop&w=420&q=80',
    waitingListLink: 'https://formtype.form/waitlist/north-star-playbook',
    highlights: [
      'Brand architecture templates for executives and public leaders',
      'Media readiness frameworks for high-stakes messaging',
      'Stories of women who turned influence into measurable change',
    ],
  },
  {
    id: 'the-bridge-journal',
    title: 'The Bridge Journal',
    subtitle: 'A Guided Companion for Purpose, Passage & Power',
    description:
      'A ritual-driven journaling experience inspired by The Bridge society brunch, with prompts, reflections, and rituals for women crossing new seasons.',
    status: 'comingSoon',
    cover: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=420&q=80',
    waitingListLink: 'https://formtype.form/waitlist/bridge-journal',
    highlights: [
      '12 passage rituals with guided reflections',
      'Audio meditations and QR-linked storytelling moments',
      'Keepsake pages for mentors, sisters, and bridge moments',
    ],
  },
]

