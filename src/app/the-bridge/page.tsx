import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TheBridge() {
  const pillars = [
    {
      title: "Community Empowerment",
      description: "Providing communities with the tools, knowledge, and resources they need to thrive and create sustainable change.",
      icon: "🌟"
    },
    {
      title: "Leadership Development",
      description: "Training and mentoring community leaders to drive positive transformation and inspire others.",
      icon: "👥"
    },
    {
      title: "Sustainable Development",
      description: "Creating lasting impact through environmentally conscious and economically viable initiatives.",
      icon: "🌱"
    },
    {
      title: "Collaboration & Partnership",
      description: "Building bridges between communities, organizations, and stakeholders for collective progress.",
      icon: "🤝"
    }
  ]

  const impactStats = [
    { number: "500+", label: "Community Members Reached" },
    { number: "25", label: "Leadership Programs Conducted" },
    { number: "10", label: "Communities Transformed" },
    { number: "95%", label: "Satisfaction Rate" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      location: "Abuja, Nigeria",
      content: "The Bridge Initiative has transformed our community. We now have the skills and confidence to create lasting change."
    },
    {
      name: "Michael Chen",
      role: "Development Officer",
      location: "Lagos, Nigeria",
      content: "Working with The Bridge has been an incredible experience. Their approach to community development is truly innovative."
    },
    {
      name: "Aisha Mohammed",
      role: "Youth Coordinator",
      location: "Kano, Nigeria",
      content: "The leadership training I received through The Bridge has empowered me to make a real difference in my community."
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
              The <span className="text-gradient">Bridge</span> Initiative
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering communities through innovative leadership development and sustainable change initiatives. 
              Building bridges to a brighter future for all.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Bridge Initiative is dedicated to creating sustainable positive change in communities across Nigeria 
                and beyond. We believe that every community has the potential to thrive when given the right tools, 
                knowledge, and support.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through our comprehensive approach to community development, we bridge the gap between potential and 
                achievement, empowering individuals and communities to create lasting impact.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Learn More About Our Approach
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/aisha-mission.png"
                    alt="The Bridge Mission"
                    width={300}
                    height={300}
                    className="w-3/4 h-3/4 object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Our Key Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundation of our approach to community development and sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
              >
                <Card className="card-hover h-full text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{pillar.icon}</div>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to creating positive change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from community members and partners about the impact of The Bridge Initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
              >
                <Card className="card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="text-2xl mb-4">💬</div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">How to Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              There are many ways to support and participate in The Bridge Initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Community Participation",
                description: "Join our community development programs and leadership training sessions.",
                action: "Register Now"
              },
              {
                title: "Partnership",
                description: "Partner with us to expand the reach and impact of The Bridge Initiative.",
                action: "Contact Us"
              },
              {
                title: "Support",
                description: "Support our initiatives through donations, resources, or expertise.",
                action: "Donate"
              }
            ].map((item) => (
              <div
                key={item.title}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {item.action}
                    </Button>
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
            <h2 className="heading-secondary mb-6">Ready to Build Bridges?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us in creating lasting positive change in communities across Nigeria and beyond. 
              Together, we can build bridges to a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/gallery">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
