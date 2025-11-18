"use client"

import { useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type PublicSpeakerDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PublicSpeakerDialog({ open, onOpenChange }: PublicSpeakerDialogProps) {
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [open])

  if (!open) {
    return null
  }

  const closeDialog = () => onOpenChange(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={closeDialog} />

      <Card
        className="relative z-10 w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] bg-white border-gray-200"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="relative px-0 pt-0 pb-0 overflow-hidden rounded-t-lg">
          {/* Banner Image */}
          <div className="relative w-full h-96 md:h-[28rem] rounded-t-lg overflow-hidden">
            <Image
              src="/images/leadroom.JPG"
              alt="Aisha Abdullahi Adamu - Public Speaker Banner"
              fill
              className="object-cover"
            />
          </div>
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-end rounded-t-lg">
            <div className="px-8 pb-8 pt-4 w-full">
              <CardTitle className="text-3xl mb-3 text-white">Aisha as a Public Speaker</CardTitle>
              <CardDescription className="text-base text-white/90">
                A recognized voice shaping public discourse and policy through powerful storytelling and strategic insights.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto bg-white px-8 py-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Speaking Expertise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aisha Abdullahi Adamu brings a unique blend of strategic thinking, authentic storytelling, and actionable insights to every speaking engagement. With over 70+ speaking engagements across state house briefings, global summits, and corporate convenings, she has a proven track record of moving rooms to action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Topics</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>The Bridge:</strong> Storytelling, mentorship, and legacy from Aisha's signature society platform.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Women in Policy:</strong> Advocacy, access, and designing inclusive policy rooms for women and girls.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Leadership Branding:</strong> Positioning, visibility, and personal strategy for leaders at every stage.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Legacy Strategy:</strong> Building enduring impact, memory, and intergenerational transfer of wisdom.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Speaking Style</h3>
              <p className="text-gray-700 leading-relaxed">
                Aisha's speaking style combines strategic depth with emotional resonance. She delivers content that is both intellectually rigorous and deeply human, connecting with diverse audiences through authentic stories and practical frameworks. Her presentations are known for inspiring action and driving measurable outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Engagement Types</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border" style={{ backgroundColor: '#4B3A34', borderColor: '#4B3A34' }}>
                  <h4 className="font-semibold mb-2 text-white">Summits & Conferences</h4>
                  <p className="text-sm text-white/90">Keynote addresses and panel discussions at major industry and policy events.</p>
                </div>
                <div className="p-4 rounded-lg border" style={{ backgroundColor: '#4B3A34', borderColor: '#4B3A34' }}>
                  <h4 className="font-semibold mb-2 text-white">State Convenings</h4>
                  <p className="text-sm text-white/90">Strategic briefings and policy discussions with government stakeholders.</p>
                </div>
                <div className="p-4 rounded-lg border" style={{ backgroundColor: '#4B3A34', borderColor: '#4B3A34' }}>
                  <h4 className="font-semibold mb-2 text-white">Corporate Events</h4>
                  <p className="text-sm text-white/90">Leadership development sessions and strategic planning workshops.</p>
                </div>
                <div className="p-4 rounded-lg border" style={{ backgroundColor: '#4B3A34', borderColor: '#4B3A34' }}>
                  <h4 className="font-semibold mb-2 text-white">Private Briefings</h4>
                  <p className="text-sm text-white/90">Intimate sessions for executive teams and decision-makers.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-700 text-sm">
                <strong>Impact:</strong> Each speaking engagement is designed to move audiences from inspiration to action, with clear takeaways and actionable strategies that drive meaningful change.
              </p>
            </div>
          </div>
        </CardContent>

        <div className="border-t border-gray-200 px-8 py-6 flex justify-end bg-white">
          <Button 
            onClick={closeDialog}
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </Card>
    </div>
  )
}

