<<<<<<< HEAD
# Aisha Abdullahi Adamu - Personal Portfolio Website

A modern, responsive personal portfolio website for Aisha Abdullahi Adamu, a Business Executive and Humanitarian leader. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Performance**: Optimized for fast loading and excellent Lighthouse scores
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Hostinger (cPanel/FTP ready)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── gallery/           # Projects gallery
│   ├── blog/              # Blog listing
│   ├── the-bridge/        # The Bridge Initiative page
│   └── contact/           # Contact form
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── data/                 # Content data files
│   ├── profile.ts        # Aisha's profile data
│   ├── projects.ts       # Projects and initiatives
│   └── blog.ts           # Blog posts
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
cd aisha-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 📝 Content Management

### Updating Profile Information

Edit `src/data/profile.ts` to update:
- Personal information
- Skills and expertise
- Achievements
- Social media links

### Adding Projects

Edit `src/data/projects.ts` to add new projects:
- Project details
- Categories and tags
- Featured status

### Adding Blog Posts

Edit `src/data/blog.ts` to add new blog posts:
- Post content
- Categories and tags
- Featured status

## 🎨 Customization

### Colors and Theme

The design system uses CSS variables defined in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Typography

The website uses Inter font family. You can change fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  poppins: ["Poppins", "system-ui", "sans-serif"],
}
```

## 🚀 Deployment

### Hostinger Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Export static files**:
   ```bash
   npm run export
   ```

3. **Upload to Hostinger**:
   - Upload the `out` folder contents to your Hostinger public_html directory
   - Ensure `.htaccess` file is included for proper routing

### Environment Variables

Create a `.env.local` file for any environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with introduction
- Skills showcase
- Featured projects
- Achievements
- Call-to-action sections

### About (`/about`)
- Detailed biography
- Skills and expertise
- Career timeline
- Downloadable resume

### Gallery (`/gallery`)
- Project portfolio with filtering
- Featured initiatives
- Category-based organization

### Blog (`/blog`)
- Blog post listings
- Category filtering
- Featured articles
- Newsletter signup

### The Bridge (`/the-bridge`)
- Dedicated page for The Bridge Initiative
- Mission and vision
- Impact statistics
- Testimonials
- How to get involved

### Contact (`/contact`)
- Contact form
- Contact information
- Social media links
- FAQ section

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended animations
- Custom utility classes
- Responsive breakpoints

### Framer Motion

Animations are configured for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Staggered animations

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Excellent scores
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is built for Aisha Abdullahi Adamu. All rights reserved.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion
- UI components from shadcn/ui

## 📞 Support

For questions or support, please contact:
- Email: hello@aishaabdullahiadamu.com
- LinkedIn: [Aisha Abdullahi Adamu](https://linkedin.com/in/aishaabdullahiadamu)

---

**Built with ❤️ for Aisha Abdullahi Adamu**
=======
# aaa-web
Personal portfolio/website for Aisha Adamu
>>>>>>> 8186e270ec7f4fa5e564772a1971d49adb4cc22b
