"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import { ArrowRight, Award, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'
import ImageSlider from '@/components/ImageSlider'
import { InviteAishaDialog } from '@/components/InviteAishaDialog'
import { ConsultingStrategyDialog } from '@/components/ConsultingStrategyDialog'

export default function Home() {
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false)
  const [consultingDialogOpen, setConsultingDialogOpen] = useState(false)
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <p className="text-5xl text-muted-foreground mb-3">
                  Welcome to the digital home of
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">{profile.name}</span>
                </h1>
              </div>
              
              <p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                {profile.tagline}
              </p>
              
              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="outline" size="lg" className="group" onClick={() => setConsultingDialogOpen(true)}>
                  Consulting &amp; Strategy
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div
              className="relative -mt-8"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src="/images/aisha-banner.svg"
                  alt="Home Banner"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invite Aisha Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-4">Invite Aisha to Lead the Room</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From summits and state convenings to private briefings, Aisha brings strategy, storytelling, and sisterhood
                to move rooms, delivering measurable results.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" onClick={() => setInviteDialogOpen(true)}>
                Book Aisha to Speak
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Multi-step intake form capturing event type, audience, goals, and budget.</li>
                <li>• Media kit auto-delivered immediately after submission.</li>
                <li>• Topic cards featuring The Bridge, Women in Policy, Leadership Branding, and Legacy Strategy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of skills developed through years of experience in business leadership and humanitarian work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profile.skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-primary">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <ImageSlider />

      {/* Featured Posts */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Featured Posts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlights from the latest articles sharing leadership insights, community impact stories, and humanitarian initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="group">
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {post.category}
                      </span>

                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key initiatives and projects that demonstrate my commitment to community development and business excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
              >
                <Card className="card-hover h-full">
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/gallery#${project.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/gallery">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Authority & Impact Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Results, Not Noise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measured impact across rooms, regions, and real lives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Awards &amp; Recognitions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-4xl font-semibold text-primary">10+</div>
                <CardDescription className="leading-relaxed">
                  Honours from governments, global enterprise networks, and women-in-leadership institutions.
                </CardDescription>
                <Button variant="outline" size="sm" className="w-fit px-6">
                  View Highlight Reel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-4xl font-semibold text-primary">15+</div>
                <CardDescription className="leading-relaxed">
                  Accredited trainings in leadership, policy design, humanitarian response, and strategic communication.
                </CardDescription>
                <Button variant="outline" size="sm" className="w-fit px-6">
                  Browse Credentials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Speaking Engagements</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-4xl font-semibold text-primary">70+</div>
                  <CardDescription className="leading-relaxed">
                    Stages from state house briefings to global summits, each one moved to action.
                </CardDescription>
                <Button variant="outline" size="sm" className="w-fit px-6">
                  Explore Clips &amp; Logos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Communities Served</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-4xl font-semibold text-primary">30+</div>
                <CardDescription className="leading-relaxed">
                  Grassroots communities, policy circles, and networks uplifted through programs and partnerships.
                </CardDescription>
                <Button variant="outline" size="sm" className="w-fit px-6">
                  View Map &amp; Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div>
            <h2 className="heading-secondary mb-6">Ready to Connect?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how we can work together to create positive change in communities and drive sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/the-bridge">
                  Learn About The Bridge
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <InviteAishaDialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen} />
      <ConsultingStrategyDialog open={consultingDialogOpen} onOpenChange={setConsultingDialogOpen} />
    </div>
  )
}
