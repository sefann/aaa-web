import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import WeatherWidget from './WeatherWidget'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer 
      className="bg-black border-t border-gray-700"
    >
      <div className="container-custom py-4">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-footer.svg"
                alt="Aisha Abdullahi Adamu Logo"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering communities through business leadership and humanitarian work. 
              Making a positive impact in Nigeria and beyond.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/university-tour">
                The CRF University Tour
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
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
                    className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-300">T007, Plot1248 Orji Uzor Kalu Close, Mabushi, FCT Abuja</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3 text-white">Follow Me</h4>
              <div className="flex space-x-3">
                <a 
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t border-gray-700 mt-6 pt-4"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link 
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link 
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link 
              href="/refund-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Refund Policy
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>All rights reserved ©2024</p>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right mb-4 md:mb-0">
              <WeatherWidget />
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p className="mb-2">Have a lovely day! ✨</p>
              <p>Built with ❤️ for Aisha Abdullahi Adamu</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
