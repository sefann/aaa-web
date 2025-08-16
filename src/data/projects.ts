export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "bridge-initiative",
    title: "The Bridge Initiative",
    description: "A transformative initiative led by Aisha Abdullahi Adamu, empowering communities with practical tools to unlock their full potential and create lasting positive change.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3EThe Bridge Initiative%3C/text%3E%3C/svg%3E",
    category: "Humanitarian",
    tags: ["Community Development", "Leadership", "Empowerment", "Sustainability"],
    featured: true
  },
  {
    id: "community-leadership",
    title: "Community Leadership Program",
    description: "Developed and implemented comprehensive leadership training programs for community leaders across Nigeria.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3ECommunity Leadership%3C/text%3E%3C/svg%3E",
    category: "Leadership",
    tags: ["Training", "Leadership", "Community", "Development"],
    featured: true
  },
  {
    id: "business-development",
    title: "Business Development Strategy",
    description: "Led strategic business development initiatives that resulted in significant growth and market expansion.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3EBusiness Development%3C/text%3E%3C/svg%3E",
    category: "Business",
    tags: ["Strategy", "Growth", "Market Analysis", "Operations"],
    featured: true
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment Initiative",
    description: "Advocating for women's leadership and empowerment through targeted programs and mentorship.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23ec4899'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3EWomen Empowerment%3C/text%3E%3C/svg%3E",
    category: "Humanitarian",
    tags: ["Women", "Empowerment", "Leadership", "Advocacy"],
    featured: false
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development Projects",
    description: "Implemented sustainable development projects focused on environmental conservation and community resilience.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%2316a34a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3ESustainable Development%3C/text%3E%3C/svg%3E",
    category: "Humanitarian",
    tags: ["Sustainability", "Environment", "Community", "Resilience"],
    featured: false
  },
  {
    id: "capacity-building",
    title: "Capacity Building Programs",
    description: "Designed and delivered capacity building programs for organizations and communities.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%238b5cf6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white'%3ECapacity Building%3C/text%3E%3C/svg%3E",
    category: "Leadership",
    tags: ["Training", "Capacity Building", "Organizations", "Skills"],
    featured: false
  }
]

export const categories = ["All", "Humanitarian", "Leadership", "Business"]
