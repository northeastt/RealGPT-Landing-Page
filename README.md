# RealGPT Landing Page

A minimal static website for RealGPT with legal pages (Privacy Policy and Terms of Use) designed for Apple App Store compliance.

## Features

- **Clean Design**: Minimal, professional layout with white background and black text
- **Responsive**: Works on all device sizes with max-width container (~768px)
- **Fast Loading**: No heavy assets, system fonts, optimized build
- **SEO Optimized**: Proper meta tags, Open Graph data, sitemap, robots.txt
- **Accessible**: Skip links, proper heading hierarchy, focus outlines, high contrast
- **SPA Routing**: React Router with 404 fallback, Vercel rewrites for deep linking

## Pages

- `/` - Landing page with app description and links to legal pages
- `/privacy` - Privacy Policy with detailed data collection and usage information
- `/terms` - Terms of Use with subscription, billing, and usage terms
- `/*` - 404 page for any invalid routes

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with TypeScript
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting platform

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set custom domain to `realgpt.app` in Vercel dashboard

### Option 2: Vercel Dashboard

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy and set custom domain to `realgpt.app`

## Final URLs

After deployment with custom domain `realgpt.app`:

- https://realgpt.app/ (Landing page)
- https://realgpt.app/privacy (Privacy Policy)
- https://realgpt.app/terms (Terms of Use)

## File Structure

```
├── public/
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # Site structure for search engines
├── src/
│   ├── components/
│   │   └── Layout.tsx      # Header, footer, and page wrapper
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── Privacy.tsx     # Privacy Policy page
│   │   ├── Terms.tsx       # Terms of Use page
│   │   └── NotFound.tsx    # 404 error page
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # React app entry point
│   └── index.css           # Global styles and Tailwind
├── index.html              # HTML template
├── vercel.json             # Vercel SPA routing configuration
└── package.json            # Dependencies and scripts
```

## Content Updates

To update the legal content:

1. Edit the content in `src/pages/Privacy.tsx` or `src/pages/Terms.tsx`
2. The effective date is automatically set to the current date
3. Rebuild and redeploy

## Accessibility Features

- Skip to content link for keyboard navigation
- Proper heading hierarchy (h1 → h2 → h3)
- Focus outlines on all interactive elements
- High contrast color scheme (black on white)
- Semantic HTML structure
- ARIA labels where appropriate

## SEO Features

- Dynamic page titles and meta descriptions
- Open Graph tags for social sharing
- XML sitemap for search engines
- Robots.txt for crawler directives
- Clean URL structure
- Fast loading times
