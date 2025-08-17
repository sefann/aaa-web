"use client"

import { useState } from 'react'

// import { motion } from 'framer-motion'
import { Send, Linkedin, Twitter, Instagram, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
      description: "Send me an email anytime",
      icon: Mail
    },
    {
      title: "Location",
      value: "T007, Plot1248 Orji Uzor Kalu Close, Mabushi, FCT Abuja",
      description: "Based in Abuja, Nigeria",
      icon: MapPin
    },
    {
      title: "Response Time",
      value: "24-48 hours",
      description: "I typically respond within a day",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
        
        <div className="container-custom relative z-10">
          <div
            className="text-center mb-16"
          >
            <h1 className="heading-primary mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;d love to hear from you! Whether you have questions about my work, want to collaborate, 
              or just want to say hello, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div
                      className="text-center py-8"
                    >
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="What&apos;s this about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                          placeholder="Tell me more about your inquiry..."
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              className="space-y-8"
            >
              <div>
                <h2 className="heading-secondary mb-6">Let&apos;s Connect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new opportunities, collaborations, or just having a conversation 
                  about community development and leadership.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                  >
                    <Card className="card-hover">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-primary hover:underline transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about working together and collaboration opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of collaborations are you open to?",
                answer: "I'm open to various collaborations including community development projects, leadership training programs, speaking engagements, and strategic partnerships that align with my mission of empowering communities."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "I typically respond to all inquiries within 24-48 hours. For urgent matters, please indicate this in your message subject line."
              },
              {
                question: "Do you offer consulting services?",
                answer: "Yes, I provide consulting services in areas of community development, leadership training, and strategic planning for organizations and communities."
              },
              {
                question: "Can I volunteer for The Bridge Initiative?",
                answer: "Absolutely! The Bridge Initiative welcomes volunteers and partners. Please reach out to discuss how you can contribute to our community development programs."
              }
            ].map((faq) => (
              <div
                key={faq.question}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div>
            <h2 className="heading-secondary mb-6">Ready to Start a Conversation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you have a project in mind, want to learn more about my work, or just want to connect, 
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href={`mailto:${profile.email}`}>
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
