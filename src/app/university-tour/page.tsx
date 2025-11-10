"use client"

import Link from 'next/link'
import { ArrowRight, GraduationCap, Users2, Sparkles, Heart, Globe2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const impactHighlights = [
  {
    campus: 'University of Abuja',
    detail: '200+ students reached',
    support: '50 scholarships launched across 25 states',
  },
  {
    campus: 'Nasarawa State University, Keffi',
    detail: '500+ students reached',
    support: '15 scholarships awarded, leadership sessions delivered',
  },
]

const futurePlans = [
  {
    icon: Globe2,
    title: 'National & Continental Expansion',
    description:
      'Scaling the University Tour across Nigerian campuses and into continental hubs to reach thousands of young women.',
  },
  {
    icon: Users2,
    title: 'Pipeline of Women Leaders',
    description:
      'Building pathways that equip students with the confidence, mentorship, and resources to lead and uplift others.',
  },
  {
    icon: Sparkles,
    title: 'Flagship Youth Empowerment Program',
    description:
      'Anchoring the tour within the Child Rights Foundation as a signature platform for advocacy, scholarships, and mentorship.',
  },
]

const supportPillars = [
  {
    icon: GraduationCap,
    title: 'Scholarships that Unlock Futures',
    description: 'Need-responsive grants that ease financial pressures and keep brilliant students on track.',
  },
  {
    icon: Users2,
    title: 'Mentorship & Sisterhood',
    description: 'Multi-layered mentorship bridging students with professionals, advocates, and the CRF network.',
  },
  {
    icon: Heart,
    title: 'Wellness & Safe Spaces',
    description: 'Story circles and resilience sessions that normalize support, healing, and community care.',
  },
]

export default function UniversityTour() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10" />
        <div className="container-custom relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-4">Child Rights Foundation</p>
          <h1 className="heading-primary mb-4">The CRF University Tour</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering young women, one campus at a time. A living legacy of the Aisha Cares Love Drive, now expanded into
            a flagship program transforming futures across universities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact?context=sponsor-university-tour">
                Sponsor a Student
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact?context=partner-university-tour">
                Partner with the Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/contact?context=join-university-tour">
                Join the Next Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">Origin</p>
            <h2 className="heading-secondary mb-6">Aisha Cares Love Drive</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The University Tour began as the Aisha Cares Love Drive, an initiative crafted by Aisha Abdullahi Adamu.
                Rooted in the &ldquo;Big Sister, Little Sister&rdquo; concept, the Love Drive was built as a tangible force
                of impact committed to empowering and uplifting the futures of Northern women.
              </p>
              <p>
                Through the Love Drive, safe spaces were created to spark honest conversations, encourage mentorship, and
                provide the support systems young women need to break limiting barriers and excel beyond expectations and
                glass ceilings.
              </p>
            </div>
          </div>
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>What We Found On Campuses</CardTitle>
              <CardDescription>
                Students who were ready to soar, if only the right hands lifted them. The tour delivers that lift.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>• Desire for mentorship that understands cultural context and ambition.</p>
              <p>• Need for resources that close financial, social, and emotional gaps.</p>
              <p>• Hunger for community-led role models who look like the future students are building.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">From Love Drive to University Tour</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The tour now carries the heart of the Love Drive directly into campuses, meeting young women where their
              dreams first take shape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Need-based and merit-led scholarships that reduce financial strain and keep education within reach.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Mentorship Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Guided mentorship experiences connecting students with leaders, policymakers, and visionaries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Leadership Dialogues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Workshops and conversations on resilience, leadership, and breaking systemic barriers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Community Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  CRF-led networks that ensure ongoing support, protection, and access to opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Impact So Far</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The tour is reaching new campuses each year, delivering scholarships, mentorship, and community support that
              change trajectories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {impactHighlights.map((impact) => (
              <Card key={impact.campus} className="bg-primary/10 border-primary/30 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-foreground">{impact.campus}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-primary-foreground/90">
                  <p className="text-lg font-semibold">{impact.detail}</p>
                  <p>{impact.support}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Pillars */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">What Makes the Tour Different</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We meet young women with the tools, empathy, and community that sustain their journeys long after we leave
              campus.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {supportPillars.map((pillar) => (
              <Card key={pillar.title} className="card-hover h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <h2 className="heading-secondary mb-6">Future Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Now housed within the Child Rights Foundation, the University Tour is our flagship youth empowerment
                program. We are expanding with a deliberate vision: to create a continent-wide network of young women ready
                to lead, excel, and uplift others.
              </p>
              <div className="space-y-5">
                {futurePlans.map((plan) => (
                  <div key={plan.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{plan.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="card-hover bg-background/80 border border-border">
              <CardHeader>
                <CardTitle>How You Can Walk With Us</CardTitle>
                <CardDescription>
                  Every campus visit is funded through intentional partnerships, sponsorships, and volunteering.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>• Sponsor a student cohort and underwrite scholarships that guarantee graduation.</p>
                <p>• Host the University Tour on your campus or within your organization.</p>
                <p>• Volunteer as a mentor, speaker, or ally to expand the sisterhood.</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/contact?context=partner-university-tour">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-6">Walk the University Tour With Us</h2>
            <p className="text-xl opacity-90 mb-8">
              Together we can fund, mentor, and mobilize the next generation of women who will shape policy, redefine
              enterprise, and transform communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact?context=sponsor-university-tour">
                  Sponsor a Student
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact?context=partner-university-tour">
                  Partner with the Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="text-primary-foreground hover:text-primary-foreground/80">
                <Link href="/contact?context=join-university-tour">
                  Join the Next Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

