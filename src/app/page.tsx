"use client"

import { useState, useEffect } from 'react'
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
import { PublicSpeakerDialog } from '@/components/PublicSpeakerDialog'

const typewriterTexts = [
  'Strategist',
  'Public Speaker',
  'Leading with Heart',
  'Humanitarian',
  'A Voice for Change',
  'A Vision for Impact'
]

function TypewriterText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fullText = typewriterTexts[currentTextIndex]
    let typingSpeed = isDeleting ? 50 : 100
    
    // If paused (after finishing typing), wait 2 seconds then start deleting
    if (isPaused && !isDeleting) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true)
          return
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }

    if (!isPaused) {
      const timer = setTimeout(handleTyping, typingSpeed)
      return () => clearTimeout(timer)
    }
  }, [currentText, isDeleting, currentTextIndex, isPaused])

  return (
    <span className="inline-block min-h-[1.2em]" style={{ color: '#f3d8dd' }}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Home() {
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false)
  const [consultingDialogOpen, setConsultingDialogOpen] = useState(false)
  const [publicSpeakerDialogOpen, setPublicSpeakerDialogOpen] = useState(false)
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
      <section className="relative flex items-center justify-center -mt-16 mb-0 overflow-hidden">
        {/* Background Image - aishabanner */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/aishabanner.png"
            alt="Background"
            fill
            className="object-cover w-full h-full"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
            priority
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Typewriter Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <p className="uppercase tracking-[0.4em] text-sm md:text-base text-white/80 mb-4">
                  welcome to the digital home of
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6">
                  Aisha Abdullahi Adamu
                </h1>
              </div>
              <div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
                  <TypewriterText />
                </p>
              </div>
            </div>

            {/* Right Side - Portrait Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/aaaimage.jpg"
                  alt="Aisha Abdullahi Adamu"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full h-2 bg-white"></div>

      {/* Invite Aisha Section */}
      <section className="section-padding relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/back1.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-4 text-white">Invite Aisha to Lead the Room</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                From summits and state convenings to private briefings, Aisha brings strategy, storytelling, and sisterhood
                to move rooms, delivering measurable results.
              </p>
              <Button 
                size="lg" 
                onClick={() => setPublicSpeakerDialogOpen(true)}
                style={{
                  backgroundColor: '#4b3a34',
                  color: '#ffffff',
                  borderColor: '#4b3a34'
                }}
                className="hover:opacity-90"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                onClick={() => setInviteDialogOpen(true)}
                style={{
                  backgroundColor: '#F8F6F3',
                  color: '#000000'
                }}
                className="hover:opacity-90"
              >
                Book Aisha to Speak
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Multi-step intake form capturing event type, audience, goals, and budget.</li>
                <li>• Media kit auto-delivered immediately after submission.</li>
                <li>• Topic cards featuring The Bridge, Women in Policy, Leadership Branding, and Legacy Strategy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Images Section */}
      <section className="bg-black">
        {/* Header Section - Black with Text Labels */}
        <div className="bg-black py-4">
          <div className="w-full">
            <div className="flex">
              {['Public Figure', 'Author', 'Strategist', 'Humanitarian', 'Speaker', 'Leader'].map((label, index) => (
                <div key={label} className="flex-1 text-center">
                  <p className="text-white text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full">
          <div className="flex">
            {[
              { 
                role: 'Public Figure', 
                image: '/images/aaaimage.jpg',
                writeup: 'A recognized voice shaping public discourse and policy.'
              },
              { 
                role: 'Author', 
                image: '/images/aaaimage.jpg',
                writeup: 'Sharing insights through written words and published works.'
              },
              { 
                role: 'Strategist', 
                image: '/images/aaaimage.jpg',
                writeup: 'Crafting visionary strategies that drive meaningful change.'
              },
              { 
                role: 'Humanitarian', 
                image: '/images/aaaimage.jpg',
                writeup: 'Dedicated to uplifting communities and transforming lives.'
              },
              { 
                role: 'Speaker', 
                image: '/images/aaaimage.jpg',
                writeup: 'Inspiring audiences with powerful messages and stories.'
              },
              { 
                role: 'Leader', 
                image: '/images/aaaimage.jpg',
                writeup: 'Guiding teams and organizations toward excellence.'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex-1 aspect-[2/3] overflow-hidden group cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                {/* Dark Blue Transparent Overlay - appears on hover */}
                <div className="absolute inset-0 z-10 bg-[#0d1f3a] opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-center">
                  {/* Writeup Text - appears on hover */}
                  <p className="text-white text-lg md:text-xl font-bold px-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.writeup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos Section */}
        <div className="relative py-6">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/back1.png)',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container-custom relative z-10">
            {/* Logos section - empty for now */}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full h-3 bg-white"></div>

      {/* Consulting & Strategy */}
      <section className="py-12 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/strategy1.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <h2 className="heading-secondary mb-4 text-white">AAA Consulting & Strategy</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Through Pathmark Advisory and AAA Consulting, Aisha provides high-level business and policy strategy at the intersection of governance, industry, and social impact.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Business Strategy & Growth Advisory',
                description: 'Strategic planning and growth solutions tailored to your business objectives.',
                image: '/images/aaaimage.jpg'
              },
              {
                title: 'Policy & Government Relations',
                description: 'Expert guidance in mining, energy, and procurement sectors.',
                image: '/images/aaaimage.jpg'
              },
              {
                title: 'Leadership Branding & Executive Positioning',
                description: 'Elevate your leadership presence and strategic positioning.',
                image: '/images/aaaimage.jpg'
              },
              {
                title: 'Social Impact & Program Design',
                description: 'Design and implement programs that create meaningful change.',
                image: '/images/aaaimage.jpg'
              }
            ].map((service, index) => (
              <div key={index} className="aspect-square">
                <Card 
                  className="card-hover w-full h-full border-2 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex flex-col"
                  style={{ backgroundColor: '#f8f6f3' }}
                >
                  <div className="relative w-full h-14 flex-shrink-0 bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-4">
                    <CardTitle className="text-base mb-2 text-gray-900 leading-tight font-semibold">{service.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed text-gray-700 line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => setConsultingDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Request a Strategy Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
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
      <PublicSpeakerDialog open={publicSpeakerDialogOpen} onOpenChange={setPublicSpeakerDialogOpen} />
    </div>
  )
}
