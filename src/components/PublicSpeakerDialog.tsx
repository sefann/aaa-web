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
        className="relative z-10 w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] bg-black border-gray-700"
        onClick={(event) => event.stopPropagation()}
      >
        <CardHeader className="relative bg-black px-8 pt-8 pb-6">
          <div className="flex flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <CardTitle className="text-3xl mb-3 text-white">Aisha as a Public Speaker</CardTitle>
              <CardDescription className="text-base text-gray-300">
                A recognized voice shaping public discourse and policy through powerful storytelling and strategic insights.
              </CardDescription>
            </div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Image
                src="/images/speak.jpg"
                alt="Aisha Abdullahi Adamu - Public Speaker"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto bg-black px-8 py-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Speaking Expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Aisha Abdullahi Adamu brings a unique blend of strategic thinking, authentic storytelling, and actionable insights to every speaking engagement. With over 70+ speaking engagements across state house briefings, global summits, and corporate convenings, she has a proven track record of moving rooms to action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Key Topics</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="text-xl font-semibold mb-3 text-white">Speaking Style</h3>
              <p className="text-gray-300 leading-relaxed">
                Aisha's speaking style combines strategic depth with emotional resonance. She delivers content that is both intellectually rigorous and deeply human, connecting with diverse audiences through authentic stories and practical frameworks. Her presentations are known for inspiring action and driving measurable outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Engagement Types</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Summits & Conferences</h4>
                  <p className="text-sm text-gray-300">Keynote addresses and panel discussions at major industry and policy events.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">State Convenings</h4>
                  <p className="text-sm text-gray-300">Strategic briefings and policy discussions with government stakeholders.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Corporate Events</h4>
                  <p className="text-sm text-gray-300">Leadership development sessions and strategic planning workshops.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Private Briefings</h4>
                  <p className="text-sm text-gray-300">Intimate sessions for executive teams and decision-makers.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-300 text-sm">
                <strong>Impact:</strong> Each speaking engagement is designed to move audiences from inspiration to action, with clear takeaways and actionable strategies that drive meaningful change.
              </p>
            </div>
          </div>
        </CardContent>

        <div className="border-t border-gray-700 px-8 py-6 flex justify-end bg-black">
          <Button 
            onClick={closeDialog}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </Card>
    </div>
  )
}

