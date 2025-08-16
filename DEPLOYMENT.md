# Deployment Guide - Hostinger

This guide will walk you through deploying Aisha's portfolio website to Hostinger using cPanel/FTP.

## 🚀 Prerequisites

- Hostinger hosting account with cPanel access
- FTP client (FileZilla, WinSCP, or similar)
- Node.js installed locally for building

## 📋 Step-by-Step Deployment

### 1. Build the Project Locally

First, build the project on your local machine:

```bash
# Navigate to project directory
cd aisha-website

# Install dependencies (if not already done)
npm install

# Build the project
npm run build
```

### 2. Export Static Files

Since Hostinger typically doesn't support Node.js applications, we'll export static files:

```bash
# Add export script to package.json if not present
# "export": "next build && next export"

# Export static files
npm run export
```

This will create an `out` folder with all the static files.

### 3. Access Hostinger cPanel

1. Log in to your Hostinger account
2. Go to your hosting dashboard
3. Click on "cPanel" or "Control Panel"
4. Navigate to "File Manager"

### 4. Prepare Your Domain

1. In cPanel, go to "Domains" section
2. Make sure your domain is properly configured
3. Note the document root (usually `public_html`)

### 5. Upload Files via File Manager

1. In File Manager, navigate to `public_html`
2. Delete any existing files (backup if needed)
3. Upload all contents from the `out` folder to `public_html`

### 6. Alternative: Upload via FTP

If you prefer FTP:

1. Get your FTP credentials from Hostinger:
   - Host: Your domain or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (default)

2. Connect using your FTP client
3. Navigate to `public_html`
4. Upload all files from the `out` folder

### 7. Configure .htaccess (Important!)

Create or update the `.htaccess` file in `public_html`:

```apache
# Enable rewrite engine
RewriteEngine On

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### 8. Test Your Website

1. Visit your domain in a browser
2. Test all pages and functionality
3. Check mobile responsiveness
4. Verify contact form works
5. Test dark/light mode toggle

## 🔧 Configuration

### Environment Variables

If you need environment variables, create a `.env.local` file before building:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Custom Domain

1. In Hostinger cPanel, go to "Domains"
2. Add your custom domain
3. Point it to the correct directory
4. Update DNS settings if needed

## 📊 Performance Optimization

### Enable Gzip Compression

Most Hostinger plans have Gzip enabled by default, but you can verify in cPanel under "Optimize Website".

### Enable Browser Caching

Add to your `.htaccess` file:

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 2 days"
</IfModule>
```

## 🔍 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Ensure `.htaccess` file is properly configured
   - Check that all files are in the correct directory

2. **Images Not Loading**
   - Verify image paths are correct
   - Check file permissions (should be 644)

3. **Contact Form Not Working**
   - The form is currently simulated
   - Integrate with Formspree or EmailJS for real functionality

4. **Slow Loading**
   - Enable Gzip compression
   - Optimize images
   - Enable browser caching

### File Permissions

Set correct permissions:
- Files: 644
- Directories: 755
- `.htaccess`: 644

## 🔄 Updates

To update the website:

1. Make changes locally
2. Run `npm run build && npm run export`
3. Upload new files to Hostinger
4. Clear browser cache and test

## 📞 Support

If you encounter issues:

1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Verify all files are uploaded correctly
4. Check error logs in cPanel

## ✅ Checklist

- [ ] Project built successfully
- [ ] Static files exported
- [ ] Files uploaded to Hostinger
- [ ] `.htaccess` file configured
- [ ] Domain pointing correctly
- [ ] All pages working
- [ ] Mobile responsive
- [ ] Contact form functional
- [ ] Performance optimized
- [ ] SSL certificate active

---

**Your website should now be live at your domain!** 🎉
