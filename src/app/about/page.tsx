import Link from 'next/link'
import Image from 'next/image'
import { Download, Calendar, MapPin, Mail, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile'

export default function About() {
  const timeline = [
    {
      year: "2024",
      title: "The Bridge Initiative",
      description: "Launched and led The Bridge Initiative, empowering communities with practical tools for sustainable development.",
      category: "Leadership"
    },
    {
      year: "2023",
      title: "Community Leadership Award",
      description: "Received recognition for outstanding contributions to community development and humanitarian work.",
      category: "Recognition"
    },
    {
      year: "2022",
      title: "Business Excellence",
      description: "Achieved significant milestones in business operations and strategic development.",
      category: "Business"
    },
    {
      year: "2021",
      title: "Women Empowerment Programs",
      description: "Developed and implemented women's leadership and empowerment initiatives across Nigeria.",
      category: "Humanitarian"
    },
    {
      year: "2020",
      title: "Strategic Planning",
      description: "Led comprehensive strategic planning initiatives for community development organizations.",
      category: "Leadership"
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
              About <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-muted-foreground">5+ years in Business & Humanitarian Work</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button asChild variant="outline" size="lg">
                  <Link href={profile.resume} target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>

              <div className="flex space-x-4">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
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

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Career Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones and achievements throughout my professional journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <CardDescription className="text-sm text-muted-foreground">
                          {item.category}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
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
