"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Download, Calendar, MapPin, Mail, Linkedin, Twitter, Instagram, ChevronDown, ChevronUp, Building2, Users, Heart, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile'

export default function About() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({})

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const currentOffices = [
    {
      id: "pathmark",
      title: "Pathmark Advisory Co. Ltd",
      role: "Lead Managing Partner",
      year: "2023 - Present",
      icon: Building2,
      shortDescription: "When we launched Pathmark Advisory Co. Limited in 2023, we had one goal in mind: to build a firm that not only advises but truly delivers.",
      fullDescription: `When we launched Pathmark Advisory Co. Limited in 2023, we had one goal in mind: to build a firm that not only advises but truly delivers. We saw a need for smarter, more agile consulting solutions grounded in local realities, yet aligned with global standards. That vision drives everything we do.

At Pathmark, we are more than consultants; we are partners, builders, and problem-solvers. Whether it's guiding an energy project, executing complex construction, driving digital transformation, or navigating financial systems, we bring clarity, commitment, and creativity to every engagement.

I'm proud of the talented team we've assembled, the trust we've earned, and the impact we're making. And as we continue to grow, we remain focused on what matters most: delivering value that lasts.`
    },
    {
      id: "newage",
      title: "New Age Group",
      role: "Executive Director",
      year: "2013 - Present",
      icon: Building2,
      shortDescription: "New Age Limited is a multi-pronged company with interests in Energy, Foods, Agriculture and Commodities Export.",
      fullDescription: `New Age Limited is a multi-pronged company with interests in Energy, Foods, Agriculture and Commodities Export. The company was incorporated in 2009 in Lagos, Nigeria with operational offices in several major cities of the country.

A private limited liability company that was incorporated in November 2009, and our operations officially began in 2013. We take pride in specializing in the distribution of various products, including frozen foods, seafood, poultry, crop trading, and petroleum products in the downstream market segment.

Providing their customers with top-notch quality services. Dedication to excellence has solidified our position as one of the key players in the market. Understanding the importance of catering to our customers' needs and strive to deliver exceptional products and services that meet and exceed their expectations.`
    },
    {
      id: "ivory",
      title: "Ivory Celebrations",
      role: "Chief Executive Officer",
      year: "Present",
      icon: Users,
      shortDescription: "A multifaceted organisation is known as Ivory Conglomerate, a unified entity encompassing all its diverse divisions.",
      fullDescription: "A multifaceted organisation is known as Ivory Conglomerate, a unified entity encompassing all its diverse divisions, which stands as a testament to her vision and ability to build a thriving business empire."
    },
    {
      id: "crf",
      title: "Child Rights Foundation",
      role: "Director",
      year: "Present",
      icon: Heart,
      shortDescription: "In the year 2000, Hajiya Khadijah Adamu embarked on a visionary journey by laying the foundation for a non-governmental organisation.",
      fullDescription: `In the year 2000, Hajiya Khadijah Adamu embarked on a visionary journey by laying the foundation for a non-governmental organisation (NGO) with an esteemed mission: to empower the girl child through education, with the ultimate goal of creating a brighter and more promising future. Over the span of two decades, this NGO has not only persevered but thrived, establishing invaluable partnerships with renowned global organisations such as UNICEF and the World Health Organisation (WHO). Today, it stands as a testament to the enduring commitment to its noble cause.

Fast-forward to the present day, the mantle of responsibility for continuing and furthering this crucial mission was entrusted to Aisha, a dedicated leader who has consistently displayed unwavering commitment to expanding the organisation's impact and ensuring the fulfilment of its mission. Under Aisha's visionary leadership, the NGO, now known as the Child Rights Foundation, has achieved a series of remarkable milestones, reshaping the educational landscape in Nigeria and significantly improving the lives of countless individuals and communities.

Notable accomplishments under Aisha's guidance include the construction of schools, clinics, and the initiation of numerous school feeding programs across Nigeria. These achievements underscore the organisation's proactive approach to addressing the multifaceted challenges faced by disadvantaged communities at the grassroots level. The construction of schools by CRF not only serves as a testament to the organisation's unwavering commitment to education but also represents a vital step toward ensuring access to quality learning environments for underserved children. Furthermore, the establishment of clinics underscores CRF's dedication to improving healthcare access in communities that need it most, contributing to enhanced overall well-being.

One of the most impactful initiatives championed by CRF under Aisha's leadership is the sponsorship of numerous school feeding programs. These programs play a pivotal role in ensuring that children receive proper nutrition while attending school, promoting their physical and cognitive development. By addressing this crucial aspect of child welfare, CRF is effectively combating poverty and breaking the cycle of disadvantage in countless communities.

The Child Rights Foundation, under Aisha's steadfast guidance, continues to be a beacon of hope and a catalyst for positive change in Nigeria. Its enduring commitment to empowering the girl child through education and its dedication to holistic community development exemplify the organisation's unwavering pursuit of a brighter and more equitable future. The legacy established by Hajiya Khadijah Adamu in 2000 lives on through the passionate and visionary leadership of Aisha, ensuring that the noble mission of CRF remains at the forefront of social progress and sustainable development.`
    }
  ]

  const previousOffices = [
    {
      id: "microsoft",
      title: "Microsoft",
      role: "Technology Professional",
      year: "2018",
      icon: Building2,
      shortDescription: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States.",
      fullDescription: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser"
    },
    {
      id: "sujimoto",
      title: "Sujimoto",
      role: "Luxury Real Estate",
      year: "2019",
      icon: Building2,
      shortDescription: "Sujimoto is Nigeria's foremost luxury real estate and construction company that is dedicated to redefining the luxury real estate industry.",
      fullDescription: `Sujimoto is Nigeria's foremost luxury real estate and construction company that is dedicated to redefining the luxury real estate industry with transformative experiences through intricately designed architecture. With services that caters to those who have a refined taste for the finer things in life and value opulence in its truest and purest form.

From foundation to chandelier, searchees globally for the world's most renowned thought leaders in architecture, art and innovation in designing the masterpieces we create. Associated exclusively with bespoke and iconic structures, we offer a lifestyle only the Sujimoto brand can deliver.`
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-0.5 pb-8 md:pt-0.5 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
        
        <div className="container-custom relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full">
                <Image
                  src="/images/aa-banner.svg"
                  alt="About Banner"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>

            <div
              className="space-y-6"
            >
                  <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white">About </span>
                  <span className="text-primary">Aisha Abdullahi Adamu</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Aisha Abdullahi Adamu is a distinguished Business Executive and Humanitarian dedicated to creating positive change in communities. With a passion for empowering others and driving sustainable development, Aisha leads initiatives that bridge the gap between business excellence and social impact.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Executive Director, New Age Group</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Honored to serve as the Executive Director of New Age Group—a distinguished conglomerate with significant interests in Agriculture, Trading, and Oil and Gas sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My professional journey is a tapestry woven with threads of commitment to excellence and a relentless pursuit of innovation. It speaks volumes about my expertise in business management and strategic leadership. Join me on this transformative journey as we continue to chart new territories and redefine industry standards.
                </p>
              </div>
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

      {/* Career Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Career Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A distinguished career spanning business leadership, humanitarian work, and community development.
            </p>
          </div>

          {/* Current Offices */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">Current Offices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentOffices.map((office) => {
                const IconComponent = office.icon
                const isExpanded = expandedItems[office.id]
                const needsReadMore = office.fullDescription.length > 200
                
                return (
                  <Card key={office.id} className="card-hover h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{office.title}</CardTitle>
                            <CardDescription className="text-primary font-semibold">{office.role}</CardDescription>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {office.year}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {isExpanded ? office.fullDescription : office.shortDescription}
                        </p>
                        {needsReadMore && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(office.id)}
                            className="text-primary hover:text-primary/80 p-0 h-auto"
                          >
                            {isExpanded ? (
                              <>
                                Read Less <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read More <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Previous Offices */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-muted-foreground">Previous Offices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {previousOffices.map((office) => {
                const IconComponent = office.icon
                const isExpanded = expandedItems[office.id]
                const needsReadMore = office.fullDescription.length > 200
                
                return (
                  <Card key={office.id} className="card-hover h-full bg-muted/30">
                      <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{office.title}</CardTitle>
                            <CardDescription className="text-muted-foreground font-semibold">{office.role}</CardDescription>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground bg-background px-3 py-1 rounded-full">
                          {office.year}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {isExpanded ? office.fullDescription : office.shortDescription}
                        </p>
                        {needsReadMore && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(office.id)}
                            className="text-muted-foreground hover:text-foreground p-0 h-auto"
                          >
                            {isExpanded ? (
                              <>
                                Read Less <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read More <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Academic Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A strong foundation in education that complements professional excellence and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nasarawa State University */}
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Nasarawa State University, Keffi</CardTitle>
                    <CardDescription className="text-primary font-semibold">Higher Education</CardDescription>
                  </div>
                </div>
                      </CardHeader>
                      <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-foreground">MSc in Public Health</p>
                        <p className="text-sm text-muted-foreground">In view</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-foreground">BSc in Microbiology</p>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
                      </CardContent>
                    </Card>

            {/* Harvard University */}
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Harvard University</CardTitle>
                    <CardDescription className="text-primary font-semibold">Global Business</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-foreground">Global Business</p>
                        <p className="text-sm text-muted-foreground">Professional Development</p>
                      </div>
                    </div>
                  </div>
            </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how we can collaborate to create positive change in communities and drive sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/gallery">
                  View My Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
