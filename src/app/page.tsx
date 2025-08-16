import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import { ArrowRight, Download, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="heading-primary mb-6"
              >
                Welcome to the digital home of{' '}
                <span className="text-gradient">{profile.name}</span>
              </h1>
              
              <p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                {profile.tagline}
              </p>
              
              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={profile.resume} target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="relative"
            >
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

      {/* Achievements Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognition for contributions to business leadership and humanitarian work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profile.achievements.map((achievement) => (
              <div
                key={achievement.title}
              >
                <Card className="card-hover text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">{achievement.year}</div>
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
    </div>
  )
}
