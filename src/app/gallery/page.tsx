"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects, categories } from '@/data/projects'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
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
              Projects & <span className="text-gradient">Initiatives</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of projects and initiatives that demonstrate my commitment to community development, 
              business excellence, and humanitarian work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div
            className="text-center mb-12"
          >
            <h2 className="heading-secondary mb-6">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
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

          {/* Projects Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group"
              >
                <Card className="card-hover h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Project Tags */}
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

                    {/* Project Links */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      
                      <div className="flex space-x-2">
                        {project.link && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                No projects match the selected category. Try selecting a different category.
              </p>
              <Button onClick={() => handleCategoryChange('All')}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Featured Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighted projects that showcase my commitment to creating positive change in communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.filter(p => p.featured).slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group"
              >
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <CardDescription className="text-lg leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
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
                        {project.category}
                      </span>
                      
                      <Button asChild>
                        <Link href={`/the-bridge#${project.id}`}>
                          Learn More
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

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div>
            <h2 className="heading-secondary mb-6">Interested in Collaborating?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s work together to create impactful projects and initiatives that make a difference in communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
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
