"use client"

import { useEffect, useMemo, useState } from 'react'
import { X, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type InviteAishaDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type TopicsKey = 'bridge' | 'womenPolicy' | 'leadershipBranding' | 'legacyStrategy'

const topicOptions: Record<
  TopicsKey,
  {
    label: string
    description: string
  }
> = {
  bridge: {
    label: 'The Bridge',
    description: 'Storytelling, mentorship, and legacy from Aisha’s signature society platform.',
  },
  womenPolicy: {
    label: 'Women in Policy',
    description: 'Advocacy, access, and designing inclusive policy rooms for women and girls.',
  },
  leadershipBranding: {
    label: 'Leadership Branding',
    description: 'Positioning, visibility, and personal strategy for leaders at every stage.',
  },
  legacyStrategy: {
    label: 'Legacy Strategy',
    description: 'Building enduring impact, memory, and intergenerational transfer of wisdom.',
  },
}

const steps = ['Event Details', 'Audience & Outcomes', 'Budget & Topics']

const initialFormState = {
  eventName: '',
  eventType: '',
  eventDate: '',
  location: '',
  audienceProfile: '',
  audienceSize: '',
  goals: '',
  budgetRange: '',
  topics: [] as TopicsKey[],
  additionalNotes: '',
  contactName: '',
  contactEmail: '',
}

export function InviteAishaDialog({ open, onOpenChange }: InviteAishaDialogProps) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      setStep(0)
      setFormData(initialFormState)
      setSubmitted(false)
    }
  }, [open])

  const progress = useMemo(() => ((step + (submitted ? 1 : 0)) / steps.length) * 100, [step, submitted])

  if (!open) {
    return null
  }

  const handleChange = (field: keyof typeof formData, value: string | TopicsKey[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const toggleTopic = (topic: TopicsKey) => {
    setFormData((prev) => {
      const exists = prev.topics.includes(topic)
      return {
        ...prev,
        topics: exists ? prev.topics.filter((item) => item !== topic) : [...prev.topics, topic],
      }
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const closeDialog = () => onOpenChange(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={closeDialog} />

      <Card
        className="relative z-10 w-full max-w-3xl shadow-2xl flex flex-col max-h-[90vh] bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-start justify-between space-y-0 bg-white" style={{ backgroundColor: '#4B3A34' }}>
          <div>
            <CardTitle className="text-2xl text-white">Invite Aisha to Lead the Room</CardTitle>
            <CardDescription className="text-white/90">
              From summits and state convenings to private briefings, Aisha brings strategy, storytelling, and sisterhood
              to move rooms while driving meaningful outcomes.
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={closeDialog} className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        {!submitted && (
          <div className="px-6">
            <div className="mb-6 flex items-center gap-3 text-sm text-gray-600">
              {steps.map((label, index) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                      index === step ? 'border-[#4B3A34] text-[#4B3A34]' : index < step ? 'border-[#4B3A34] bg-[#4B3A34] text-white' : 'border-gray-300'
                    }`}
                  >
                    {index < step ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className={index === step ? 'font-medium text-gray-900' : 'text-gray-600'}>{label}</span>
                  {index < steps.length - 1 && <span className="text-xs text-gray-400">•</span>}
                </div>
              ))}
            </div>
            <div className="mb-6 h-1 w-full rounded-full bg-gray-200">
              <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: '#4B3A34' }} />
            </div>
          </div>
        )}

        <CardContent className="flex-1 space-y-8 overflow-y-auto pr-2 min-h-0 bg-white">
          {!submitted && step === 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Event Name</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  placeholder="e.g., Women in Leadership Summit"
                  value={formData.eventName}
                  onChange={(e) => handleChange('eventName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Event Type</label>
                <select
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  value={formData.eventType}
                  onChange={(e) => handleChange('eventType', e.target.value)}
                >
                  <option value="">Select an event type</option>
                  <option value="summit">Summit / Conference</option>
                  <option value="state-convening">State / Government Convening</option>
                  <option value="corporate-briefing">Corporate Briefing</option>
                  <option value="private-retreat">Private Retreat</option>
                  <option value="fireside-chat">Fireside Chat</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date &amp; Time</label>
                <input
                  type="datetime-local"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  value={formData.eventDate}
                  onChange={(e) => handleChange('eventDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location / Format</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  placeholder="e.g., Abuja (In-person) or Virtual Broadcast"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                />
              </div>
            </div>
          )}

          {!submitted && step === 1 && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Audience Profile</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  placeholder="e.g., Policy Leaders, Founders, Executive Assistants"
                  value={formData.audienceProfile}
                  onChange={(e) => handleChange('audienceProfile', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Audience Size</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                  placeholder="Approximate number of attendees"
                  value={formData.audienceSize}
                  onChange={(e) => handleChange('audienceSize', e.target.value)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">Key Goals</label>
                <textarea
                  className="h-28 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="What transformation or outcomes do you want this experience to catalyze?"
                  value={formData.goals}
                  onChange={(e) => handleChange('goals', e.target.value)}
                />
              </div>
            </div>
          )}

          {!submitted && step === 2 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Budget Range</label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                    value={formData.budgetRange}
                    onChange={(e) => handleChange('budgetRange', e.target.value)}
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="lets-discuss">Let’s discuss</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Preferred Contact Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                    placeholder="you@organization.com"
                    value={formData.contactEmail}
                    onChange={(e) => handleChange('contactEmail', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Point of Contact</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#4B3A34] focus:outline-none focus:ring-2 focus:ring-[#4B3A34]/20"
                    placeholder="Name of key contact"
                    value={formData.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">Select Topic Interests</label>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {Object.entries(topicOptions).map(([key, topic]) => {
                      const isSelected = formData.topics.includes(key as TopicsKey)
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleTopic(key as TopicsKey)}
                          className={`flex flex-col rounded-xl border p-4 text-left transition-colors ${
                            isSelected ? 'border-[#4B3A34] bg-[#4B3A34]/10' : 'border-gray-300 hover:border-[#4B3A34]/60'
                          }`}
                        >
                          <span className="text-sm font-semibold text-gray-900">{topic.label}</span>
                          <span className="mt-2 text-sm text-gray-600">{topic.description}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">Additional Notes</label>
                  <textarea
                    className="h-24 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Share context, expectations, or key decision timelines."
                    value={formData.additionalNotes}
                    onChange={(e) => handleChange('additionalNotes', e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-dashed p-4 text-sm" style={{ borderColor: '#4B3A34', backgroundColor: '#4B3A34', color: '#ffffff', opacity: 0.1 }}>
                <span style={{ color: '#4B3A34' }}>Media kit and next steps will be automatically delivered once your request is submitted.</span>
              </div>
            </div>
          )}

          {submitted && (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12" style={{ color: '#4B3A34' }} />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Thank you for your invitation</h3>
              <p className="text-gray-700 max-w-xl mx-auto mb-6">
                Our team will review your request and connect with you promptly. Aisha's media kit and speaking portfolio
                have been delivered to the email you provided. We look forward to curating an unforgettable experience with
                you.
              </p>
              <Button 
                size="lg" 
                onClick={closeDialog}
                style={{ backgroundColor: '#4B3A34', color: '#ffffff' }}
                className="hover:opacity-90"
              >
                Close
              </Button>
            </div>
          )}
        </CardContent>

        {!submitted && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
            <div className="text-xs text-gray-600">
              Step {step + 1} of {steps.length}
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={step === 0 ? closeDialog : () => setStep((prev) => Math.max(prev - 1, 0))} className="text-gray-700 hover:text-gray-900">
                {step === 0 ? 'Cancel' : (
                  <>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </>
                )}
              </Button>
              {step < steps.length - 1 ? (
                <Button 
                  onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
                  style={{ backgroundColor: '#4B3A34', color: '#ffffff' }}
                  className="hover:opacity-90"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  style={{ backgroundColor: '#4B3A34', color: '#ffffff' }}
                  className="hover:opacity-90"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

