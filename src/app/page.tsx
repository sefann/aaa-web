"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import { ArrowRight, Award, Calendar, User, Linkedin } from 'lucide-react'
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
  'A Vision for Impact',
  'Entrepreneur'
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let animationFrameId: number | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset count and start animation
            setCount(0)
            let startTime: number | null = null
            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)
              setCount(Math.floor(progress * end))
              if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }
            animationFrameId = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('count-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [end, duration])

  return <>{count}+</>
}

function TestimonialsCarousel() {
  const testimonials = [
    {
      image: '/images/aaaimage.jpg',
      quote: 'Aisha is an exceptional leader who brings strategic thinking and authentic storytelling to every engagement.',
      name: 'TESTIMONIAL AUTHOR 1',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Aisha\'s ability to connect with diverse audiences through powerful messages and actionable insights is remarkable.',
      name: 'TESTIMONIAL AUTHOR 2',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Working with Aisha has been transformative. Her strategic depth and emotional resonance move rooms to action.',
      name: 'TESTIMONIAL AUTHOR 3',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Aisha represents the epitome of leadership, combining business excellence with genuine humanitarian impact.',
      name: 'TESTIMONIAL AUTHOR 4',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Aisha\'s vision and dedication to creating positive change in communities is truly inspiring and impactful.',
      name: 'TESTIMONIAL AUTHOR 5',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Through her work, Aisha demonstrates what it means to lead with both strategic acumen and heartfelt compassion.',
      name: 'TESTIMONIAL AUTHOR 6',
      title: 'Title and Organization'
    },
    {
      image: '/images/aaaimage.jpg',
      quote: 'Aisha\'s expertise in policy, strategy, and social impact makes her an invaluable voice in today\'s leadership landscape.',
      name: 'TESTIMONIAL AUTHOR 7',
      title: 'Title and Organization'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwiping(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsSwiping(false)
      }, 600) // Wait for swipe animation
    }, 5000) // Change every 5 seconds (4.4s display + 0.6s transition)
    
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Get 4 testimonials to display + 1 extra for swipe-in
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()
  const cardWidth = 288 // w-72
  const gap = 24 // gap-6
  const translateX = isSwiping ? -(cardWidth + gap) : 0

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary mb-12 text-center text-black">WHAT PEOPLE SAY ABOUT AISHA</h2>
        
        <div className="flex justify-center">
          {/* Mobile: Show all testimonials stacked vertically */}
          <div className="md:hidden w-full space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-mobile-${index}`}
                className="w-full flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Portrait Image */}
                <div className="relative w-full h-56 mb-0 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                
                {/* Quote Section - Dark Background */}
                <div className="bg-gray-900 p-6 flex-1">
                  <p className="text-white text-sm leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                </div>
                
                {/* Name Section - Light Beige Background */}
                <div className="bg-[#f8f6f3] p-4">
                  <h3 className="text-black font-bold text-xs uppercase mb-2">{testimonial.name}</h3>
                  <p className="text-black text-xs">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop: Show carousel with swipe effect */}
          <div className="hidden md:flex justify-center">
            <div className="relative overflow-hidden" style={{ width: 'calc(288px * 4 + 24px * 3)' }}>
              <div 
                className="flex gap-6 transition-transform ease-in-out"
                style={{ transform: `translateX(${translateX}px)`, transitionDuration: '600ms' }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${currentIndex}-${index}`}
                    className="flex-shrink-0 w-72 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Portrait Image */}
                    <div className="relative w-full h-56 mb-0 overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    
                    {/* Quote Section - Dark Background */}
                    <div className="bg-gray-900 p-6 flex-1">
                      <p className="text-white text-sm leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                    </div>
                    
                    {/* Name Section - Light Beige Background */}
                    <div className="bg-[#f8f6f3] p-4">
                      <h3 className="text-black font-bold text-sm uppercase mb-1">{testimonial.name}</h3>
                      <p className="text-black text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              {/* LinkedIn Button */}
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#F8F6F3', color: '#2563eb' }}
                >
                  <Link href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Link>
                </Button>
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
            <h2 className="heading-secondary mb-4 text-white">Consulting & Strategy</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Through <Link href="https://pathmarkadvisory.com/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors underline">Pathmark Advisory</Link>, Aisha provides high-level business and policy strategy at the intersection of governance, industry, and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Business Strategy & Growth Advisory',
                description: 'Strategic planning and growth solutions tailored to your business objectives.',
                image: '/consulting-section/bs.png'
              },
              {
                title: 'Policy & Government Relations',
                description: 'Expert guidance in mining, energy, and procurement sectors.',
                image: '/consulting-section/pg.png'
              },
              {
                title: 'Leadership Branding & Executive Positioning',
                description: 'Elevate your leadership presence and strategic positioning.',
                image: '/consulting-section/lb.png'
              },
              {
                title: 'Social Impact & Program Design',
                description: 'Design and implement programs that create meaningful change.',
                image: '/consulting-section/si.png'
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
              className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#F8F6F3', color: '#1a1a1a' }}
            >
              Request a Strategy Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Count Section */}
      <section id="count-section" className="relative py-8 md:py-12 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/count.png"
            alt="Count Section Background"
            fill
            className="object-cover w-full h-full"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={10} />
              </div>
              <div className="text-white/80 text-xs md:text-sm">Awards & Recognitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={15} />
              </div>
              <div className="text-white/80 text-xs md:text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={70} />
              </div>
              <div className="text-white/80 text-xs md:text-sm">Speaking Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={30} />
              </div>
              <div className="text-white/80 text-xs md:text-sm">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      <InviteAishaDialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen} />
      <ConsultingStrategyDialog open={consultingDialogOpen} onOpenChange={setConsultingDialogOpen} />
      <PublicSpeakerDialog open={publicSpeakerDialogOpen} onOpenChange={setPublicSpeakerDialogOpen} />
    </div>
  )
}
