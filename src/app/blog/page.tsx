"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { blogPosts, blogCategories } from '@/data/blog'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === category))
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
              Blog & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing thoughts, experiences, and insights on leadership, community development, 
              and the intersection of business excellence with humanitarian impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Featured Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest insights and perspectives on leadership, community development, and humanitarian work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div
                key={post.id}
                className="group"
              >
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                        {post.category}
                      </span>
                      
                      <Button asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">All Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through all articles and insights on leadership, community development, and humanitarian work.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background text-foreground hover:bg-accent border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group"
              >
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <div
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                No articles match the selected category. Try selecting a different category.
              </p>
              <Button onClick={() => handleCategoryChange('All')}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center"
          >
            <h2 className="heading-secondary mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to receive updates on new articles, insights, and initiatives.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div>
            <h2 className="heading-secondary mb-6">Have Questions or Ideas?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              I&apos;d love to hear from you! Let&apos;s discuss leadership, community development, or potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
