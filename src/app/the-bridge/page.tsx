import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  Handshake,
  Globe,
  Heart,
  Feather,
  GraduationCap,
  Stars,
  Wine,
  Globe2,
  Newspaper,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TheBridge() {
  const purposePoints = [
    {
      title: 'Celebrating Passages',
      description: 'Marking milestones and transformations with intention, dignity, and a shared sense of arrival.',
      icon: Sparkles,
    },
    {
      title: 'Bridging Generations',
      description: 'Connecting emerging talent with seasoned visionaries for intergenerational learning.',
      icon: Users,
    },
    {
      title: 'Learning & Curiosity',
      description: 'Turning poignant questions into guided exploration, practical insight, and embodied wisdom.',
      icon: BookOpen,
    },
    {
      title: 'Mentorship & Sponsorship',
      description: 'Designing structured pathways for guidance, advocacy, and transformational support.',
      icon: Handshake,
    },
    {
      title: 'Community & Legacy',
      description: 'Building networks that endure beyond each edition, cultivating lasting legacy and shared memory.',
      icon: Globe,
    },
  ]

  const highlights = [
    {
      title: 'Bridge Sisters Network',
      description: 'A lifelong sisterhood and alumni community for continued connection, collaboration, and growth.',
      icon: Heart,
    },
    {
      title: 'Storytelling Legacy',
      description: 'Curated narratives and reflections archived for future publications, digital media, and shared memory.',
      icon: Feather,
    },
    {
      title: 'Mentorship Programs',
      description: 'Tailored mentorship streams pairing emerging women with leaders across fashion, business, and impact.',
      icon: GraduationCap,
    },
    {
      title: 'Signature Rituals',
      description: 'The Memory Bridge Wall, the Bridge Toast, and keepsake reflections that make each gathering unforgettable.',
      icon: Stars,
    },
    {
      title: 'Annual Society Brunch',
      description: 'An intimate, invite-only experience hosted each year in Abuja, honoring personal and collective passages.',
      icon: Wine,
    },
    {
      title: 'Mini Editions & Chapters',
      description: 'Curated pop-ups and global touchpoints, beginning with Johannesburg in November 2025.',
      icon: Globe2,
    },
    {
      title: 'Knowledge & Media',
      description: 'Newsletters, spotlights, and multimedia features sustaining learning and storytelling throughout the year.',
      icon: Newspaper,
    },
  ]

  const extensionPlans = [
    'Retreats & Immersions: Curated experiences of rest, reflection, and deep learning.',
    'Scholarships & Grants: Supporting women and girls to access education and opportunities.',
    'Archives & Publications: Capturing stories, speeches, and reflections for books, podcasts, and digital libraries.',
    'Global Chapters: Extending the Bridge experience to international cities and diasporic communities.',
    'Bridge Training Academy: Preparing next-generation Personal, Executive, and Hybrid Assistants with technical excellence and emotional intelligence.',
  ]

  const editions = [
    {
      year: '2024',
      title: 'The Inaugural Conference',
      description: 'A leadership gathering centered on practical knowledge-sharing, catalytic mentorship, and the first articulation of The Bridge ethos.',
    },
    {
      year: '2025',
      title: 'The Society Brunch',
      description: 'A luxury, invite-only brunch honoring personal, professional, and emotional passages in an atmosphere of elegance and intimacy.',
    },
  ]

  const specialties = [
    'Storytelling & Narrative Curation',
    'Women’s Leadership Development',
    'Mentorship & Sponsorship',
    'Intergenerational Dialogue',
    'Luxury Society Brunch Experiences',
    'Alumni Network Building',
    'Professional Training & Development',
    'Executive Assistant Training',
    'Personal Assistant Training',
    'Hybrid Support Training',
    'Community Building',
    'Legacy Development',
    'Retreats & Immersive Learning',
    'Scholarships & Grants Access',
    'Global Chapters & Diaspora Engagement',
    'Event Curation & Program Design',
    'Knowledge Sharing Platforms',
    'Media & Publications',
    'Impact Evaluation',
    'Capacity Building for Women',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10"></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6">
              The Bridge by Aisha
            </p>
            <h1 className="heading-primary mb-6">
              Luxury society brunch & legacy platform connecting emerging voices with seasoned leaders.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Celebrating Our Passage on the Bridge, an intentional, intimate tradition grounded in elegance,
              storytelling, mentorship, and intergenerational community.
            </p>
          </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" asChild>
            <Link href="/contact">
              Request an Invitation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/gallery">
              Explore Highlights
            </Link>
          </Button>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <h2 className="heading-secondary mb-6">About The Bridge</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Bridge by Aisha began as a leadership conference in 2024 and has since evolved into a luxury society
                  brunch, an intentional, intimate tradition grounded in elegance, storytelling, and legacy. What started as a
                  forum for practical knowledge-sharing now gathers women to honor their personal, professional, and emotional
                  passages in a setting that is both refined and deeply human.
                </p>
                <p>
                  Two editions have been held so far, the inaugural conference in 2024 and the society brunch in 2025, each
                  reinforcing The Bridge as more than an event; it is a movement of connection, mentorship, and storytelling.
                </p>
                <p>
                  At its core, The Bridge is an avenue for young women to connect with seasoned experts and leaders, a space
                  that bridges curiosity and learning with wisdom and experience, catalyzing ideas, opportunities, and lasting
                  relationships. Through curated conversations, intergenerational dialogue, and signature rituals, The Bridge
                  advances mentorship, community, and sustainable impact that extend well beyond the brunch table.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 blur-3xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/images/aisha-mission.png"
                  alt="The Bridge society brunch"
                  width={480}
                  height={560}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="mt-6 p-6 rounded-2xl bg-background/80 border border-border backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">Editions</p>
                <div className="space-y-4">
                  {editions.map((edition) => (
                    <div key={edition.year} className="border-l-2 border-primary/40 pl-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                        {edition.year}
                      </span>
                      <h3 className="text-lg font-semibold">{edition.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edition.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Our Purpose</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Bridge is meticulously designed to create spaces where wisdom, curiosity, and legacy meet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purposePoints.map((item) => (
              <Card key={item.title} className="card-hover h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Highlights & Signature Touchpoints</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A curated constellation of experiences, rituals, and programs that define The Bridge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="card-hover h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <h2 className="heading-secondary mb-6">Extension Plans</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Bridge is expanding into immersive experiences, knowledge platforms, and professional development
                pathways that extend the brunch far beyond a single gathering.
              </p>
              <div className="space-y-4">
                {extensionPlans.map((plan) => (
                  <div key={plan} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p className="text-base text-muted-foreground leading-relaxed">{plan}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To create an intentional, elegant space where women pause, connect, and celebrate the bridges they have
                  crossed while cultivating the wisdom, courage, and community required to cross those ahead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LinkedIn Specialties */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">LinkedIn Specialties</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A blueprint of capabilities stewarded through The Bridge, shaping leadership, community, and legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty) => (
              <div
                key={specialty}
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-muted-foreground hover:border-primary transition-colors"
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-6">Join Us On The Bridge</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of a legacy platform where stories are honored, wisdom is shared, and future passages are imagined
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/blog">
                  Discover Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
