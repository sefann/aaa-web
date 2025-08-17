"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Image as ImageIcon, Video, Filter, X, Download, Share2, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Gallery data with placeholder images and videos
const galleryItems = [
  // Images
  {
    id: 1,
    title: "Community Outreach Program",
    description: "Leading community development initiatives in rural areas",
    type: "image",
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop",
    category: "Community",
    tags: ["Outreach", "Development", "Leadership"],
    date: "2024-01-15",
    location: "Abuja, Nigeria",
    featured: true
  },
  {
    id: 2,
    title: "Business Leadership Summit",
    description: "Speaking at the annual business leadership conference",
    type: "image",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    category: "Business",
    tags: ["Leadership", "Conference", "Speaking"],
    date: "2024-02-20",
    location: "Lagos, Nigeria",
    featured: true
  },
  {
    id: 3,
    title: "The Bridge Initiative Launch",
    description: "Official launch of The Bridge humanitarian initiative",
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    category: "Humanitarian",
    tags: ["Launch", "Initiative", "Impact"],
    date: "2024-03-10",
    location: "Abuja, Nigeria",
    featured: false
  },
  {
    id: 4,
    title: "Women Empowerment Workshop",
    description: "Empowering women through skills development and mentorship",
    type: "image",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    category: "Community",
    tags: ["Women", "Empowerment", "Workshop"],
    date: "2024-04-05",
    location: "Kano, Nigeria",
    featured: false
  },
  {
    id: 5,
    title: "New Age Group Headquarters",
    description: "Executive leadership at New Age Group corporate headquarters",
    type: "image",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    category: "Business",
    tags: ["Corporate", "Leadership", "Executive"],
    date: "2024-05-12",
    location: "Abuja, Nigeria",
    featured: false
  },
  {
    id: 6,
    title: "Youth Development Program",
    description: "Mentoring young leaders for tomorrow's challenges",
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    category: "Community",
    tags: ["Youth", "Mentorship", "Development"],
    date: "2024-06-18",
    location: "Port Harcourt, Nigeria",
    featured: false
  },
  // Videos
  {
    id: 7,
    title: "The Bridge Initiative Documentary",
    description: "A comprehensive look at The Bridge humanitarian initiative",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
    category: "Humanitarian",
    tags: ["Documentary", "Initiative", "Impact"],
    date: "2024-07-01",
    location: "Multiple Locations",
    featured: true
  },
  {
    id: 8,
    title: "Leadership Interview",
    description: "Exclusive interview on business leadership and community impact",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Business",
    tags: ["Interview", "Leadership", "Business"],
    date: "2024-08-15",
    location: "Abuja, Nigeria",
    featured: false
  },
  {
    id: 9,
    title: "Community Impact Stories",
    description: "Real stories from communities transformed by our initiatives",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    category: "Community",
    tags: ["Stories", "Impact", "Transformation"],
    date: "2024-09-20",
    location: "Various Communities",
    featured: false
  },
  {
    id: 10,
    title: "Corporate Social Responsibility",
    description: "New Age Group's commitment to social responsibility",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    category: "Business",
    tags: ["CSR", "Corporate", "Responsibility"],
    date: "2024-10-05",
    location: "Nigeria",
    featured: false
  },
  {
    id: 11,
    title: "Women in Leadership Panel",
    description: "Panel discussion on women's role in business and community leadership",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    category: "Community",
    tags: ["Women", "Leadership", "Panel"],
    date: "2024-11-12",
    location: "Lagos, Nigeria",
    featured: false
  },
  {
    id: 12,
    title: "Annual Impact Report",
    description: "Comprehensive report on annual community impact and achievements",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    category: "Humanitarian",
    tags: ["Report", "Impact", "Annual"],
    date: "2024-12-01",
    location: "Nigeria",
    featured: false
  }
]

const categories = ["All", "Image", "Video", "Community", "Business", "Humanitarian"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [filteredItems, setFilteredItems] = useState(galleryItems)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredItems(galleryItems)
    } else if (category === 'Image') {
      setFilteredItems(galleryItems.filter(item => item.type === 'image'))
    } else if (category === 'Video') {
      setFilteredItems(galleryItems.filter(item => item.type === 'video'))
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === category))
    }
  }

  const openModal = (item: any) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
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
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">
              Media <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a collection of images and videos showcasing my work in business leadership, 
              community development, and humanitarian initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Filter Gallery</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background text-foreground hover:bg-accent border border-border'
                  }`}
                >
                  {category === 'Image' && <ImageIcon className="w-4 h-4" />}
                  {category === 'Video' && <Video className="w-4 h-4" />}
                  {category === 'All' && <Filter className="w-4 h-4" />}
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group">
                <Card className="card-hover h-full overflow-hidden cursor-pointer" onClick={() => openModal(item)}>
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Video Play Button */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.type === 'video' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {item.type === 'video' ? 'VIDEO' : 'IMAGE'}
                      </span>
                    </div>
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs bg-yellow-500 text-black rounded-full font-semibold">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No Items Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-6">
                No gallery items match the selected category. Try selecting a different category.
              </p>
              <Button onClick={() => handleCategoryChange('All')}>
                View All Items
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Full View */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="mb-4">
                {selectedItem.type === 'video' ? (
                  <video
                    controls
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                    poster={selectedItem.thumbnail}
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                )}
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">{selectedItem.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedItem.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedItem.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects and Initiatives Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Projects & Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the key projects and initiatives that showcase my commitment to business excellence and community development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* The Bridge Initiative */}
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                  alt="The Bridge Initiative"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">The Bridge Initiative</h3>
                  <p className="text-sm opacity-90">Humanitarian & Community Development</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive humanitarian initiative focused on bridging gaps in community development, 
                    education, and healthcare access across Nigeria. This project demonstrates our commitment 
                    to creating sustainable positive change.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Humanitarian</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Community</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Development</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Education</span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        Launched: March 2024
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Nationwide Impact
                    </div>
                    </div>
                      
                      <Button asChild>
                      <Link href="/the-bridge">
                          Learn More
                        </Link>
                      </Button>
                  </div>
                    </div>
                  </CardContent>
                </Card>

            {/* New Age Group Leadership */}
            <Card className="card-hover h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="New Age Group Leadership"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">New Age Group</h3>
                  <p className="text-sm opacity-90">Executive Leadership & Business Excellence</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As Executive Director of New Age Group, I lead strategic initiatives across Agriculture, 
                    Trading, and Oil & Gas sectors. This role showcases my expertise in business management 
                    and strategic leadership in diverse industries.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Agriculture</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Trading</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Oil & Gas</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Leadership</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        Current Role
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Abuja, Nigeria
                      </div>
                    </div>
                    
                    <Button variant="outline" asChild>
                      <Link href="/about">
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Projects Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Other Key Initiatives</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Women Empowerment */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Women Empowerment</CardTitle>
                      <CardDescription>Skills Development & Mentorship</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Empowering women through leadership training, skills development, and mentorship programs 
                    to create opportunities for economic independence and community leadership.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Leadership</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Training</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Mentorship</span>
                  </div>
                </CardContent>
              </Card>

              {/* Youth Development */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Youth Development</CardTitle>
                      <CardDescription>Education & Leadership</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Investing in the next generation through educational programs, leadership development, 
                    and career guidance to prepare young people for future challenges.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Education</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Leadership</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Career</span>
                  </div>
                </CardContent>
              </Card>

              {/* Community Outreach */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Community Outreach</CardTitle>
                      <CardDescription>Rural Development</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extending support to rural communities through infrastructure development, healthcare 
                    access, and economic empowerment programs.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Rural</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Healthcare</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Infrastructure</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div>
            <h2 className="heading-secondary mb-6">Want to See More?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Connect with me to learn more about my work and explore collaboration opportunities.
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
