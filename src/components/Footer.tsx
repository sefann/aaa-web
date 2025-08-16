import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer 
      className="bg-muted/50 border-t border-border py-16"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ✦ Aisha Cares Initiative ✦
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering communities through business leadership and humanitarian work. 
              Making a positive impact in Nigeria and beyond.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: '/about', label: 'About Me' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/blog', label: 'Blog' },
                { href: '/the-bridge', label: 'The Bridge' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <div
                  key={link.href}
                >
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-muted-foreground">{profile.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            <p>All rights reserved ©2024</p>
          </div>
          <div className="text-muted-foreground text-sm text-center md:text-right">
            <p className="mb-2">Have a lovely day! ✨</p>
            <p>Built with ❤️ for Aisha Abdullahi Adamu</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
