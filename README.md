# Vijay Balaji - Gen AI Engineer Portfolio

A modern, interactive portfolio website showcasing expertise in Gen AI, LLM systems, and full-stack development. Built with React, TypeScript, and cutting-edge animation libraries for a seamless user experience.

**Live Site:** [vijaybalaji.dev](https://your-domain.com) | **GitHub:** [@Vijay3alaji](https://github.com/Vijay3alaji)

---

## ✨ Features

### 🎨 Visual Excellence
- **Smooth Scrolling**: Custom Lenis integration for butter-smooth page navigation
- **Custom Cursor**: Adaptive cursor that scales on interactive elements
- **Advanced Animations**: GSAP + Framer Motion for fluid, performance-optimized animations
- **Theme System**: 5 unique themes (Dark, Moss, Monochrome, Velvet, Terminal)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Subtle Grain & Gradients**: Professional visual polish with CSS overlays

### 📄 Core Pages
- **Home**: Hero section with marquee text, featured work, and expertise highlights
- **About**: Timeline of professional experience with detailed accomplishments
- **Expertise**: Skill breakdown with interactive cards and tech stack showcase
- **Contact**: Form integration with real-time submission feedback

### 🚀 Interactions
- Magnetic button effects (elements follow cursor)
- Parallax scrolling on images and text
- Staggered text reveals with GSAP ScrollTrigger
- Interactive project gallery with hover image previews
- Floating animations and micro-interactions

---

## 🛠️ Tech Stack

### Frontend
- **React** 19 - UI framework
- **TypeScript** 5.8 - Type safety
- **Vite** 6.2 - Ultra-fast build tool
- **Tailwind CSS** 4.1 - Utility-first styling
- **React Router** 7.13 - Client-side routing

### Animations & Interactions
- **GSAP** 3.14 - Professional animations with ScrollTrigger
- **Framer Motion** 12.34 - React animation library
- **Motion** 12.34 - Lightweight animation utilities
- **Lenis** 1.3 - Smooth scroll library

### UI & Icons
- **Lucide React** 0.546 - Beautiful SVG icons
- **clsx** & **tailwind-merge** - Utility class management

### Backend (Optional)
- **Express** 4.21 - Node.js server
- **better-sqlite3** 12.6 - Lightweight SQLite database
- **TypeScript** - Full-stack type safety

### Development
- **tsx** - TypeScript executor for Node.js
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** & **TypeScript Compiler** - Code quality

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ (check with `node --version`)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vijay3alaji/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   APP_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Hero.tsx         # Landing section with animations
│   │   ├── Header.tsx       # Navigation & theme toggle
│   │   ├── Footer.tsx       # CTA section with contact
│   │   ├── Work.tsx         # Project showcase
│   │   ├── About.tsx        # Stats & highlights
│   │   ├── Expertise.tsx    # Tech stack overview
│   │   ├── CustomCursor.tsx # Adaptive cursor
│   │   ├── SmoothScroll.tsx # Lenis integration
│   │   ├── Magnetic.tsx     # Magnetic button effect
│   │   └── ...              # Other components
│   ├── pages/               # Full page components
│   │   ├── Home.tsx         # Main landing page
│   │   ├── AboutPage.tsx    # Detailed about page
│   │   ├── ExpertisePage.tsx# Full expertise showcase
│   │   └── Contact.tsx      # Contact form
│   ├── context/
│   │   └── ThemeContext.tsx # Theme state management
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & theme variables
├── public/                  # Static assets
│   └── myphoto*.png         # Profile images
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## 🎨 Customization

### Adding New Themes

Edit `src/context/ThemeContext.tsx` and add to the `Theme` type, then define CSS variables in `src/index.css`:

```css
[data-theme="custom-theme"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --primary-color: #455CE9;
  --font-main: "Inter", sans-serif;
}
```

### Modifying Animations

GSAP configurations are throughout the codebase. Key files:
- `src/components/Hero.tsx` - Hero animations
- `src/components/Work.tsx` - Project gallery
- `src/pages/AboutPage.tsx` - Timeline animations

### Updating Content

- **Home**: Edit `src/components/Work.tsx` and `src/pages/Home.tsx`
- **About**: Modify experience array in `src/pages/AboutPage.tsx`
- **Expertise**: Update skills array in `src/pages/ExpertisePage.tsx`
- **Contact**: Form email configured in `src/pages/Contact.tsx`

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
npm run clean        # Remove dist/ directory

# Code Quality
npm run lint         # Run TypeScript type checker
```

---

## 🌐 Environment Variables

Required environment variables in `.env.local`:

| Variable | Description | Example |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Google Gemini API key (if using AI features) | `sk-...` |
| `APP_URL` | Application URL for self-referential links | `http://localhost:3000` |

---

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized `dist/` directory ready for deployment.

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### AWS S3 + CloudFront
```bash
# Build first
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name
```

#### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🎯 Performance Optimizations

✅ Implemented optimizations:
- Code-splitting with Vite
- Lazy loading of routes with React Router
- GSAP ScrollTrigger for efficient animations
- Lenis for smooth scroll without performance hit
- CSS custom properties for theme switching
- Tailwind CSS JIT compilation
- Image optimization with grayscale & contrast filters

---

## 📝 Form Submissions

Contact form uses **FormSubmit** (no backend required):
- Emails sent to: `vijaybalaji237@gmail.com`
- No dependencies on external APIs
- CSRF protection built-in
- Form reset on successful submission

To change recipient email, update in `src/pages/Contact.tsx`:
```javascript
// Change to your email
fetch("https://formsubmit.co/ajax/your-email@example.com", {...})
```

---

## 🔐 Security

- Environment variables never exposed in client code
- Form submission uses secure FormSubmit endpoint
- No sensitive data stored locally
- All external links use `rel="noopener noreferrer"`
- Content Security Policy compatible

---

## 🐛 Troubleshooting

### Smooth scroll not working
- Ensure `SmoothScroll` component wraps entire app
- Check if `window.lenis` is initialized
- Verify Lenis isn't disabled via `DISABLE_HMR` env var

### Animations stuttering
- Check browser hardware acceleration
- Reduce animation complexity in `gsap.to()` calls
- Lower the number of simultaneous animations

### Theme not persisting
- Verify `ThemeContext` is wrapping the app
- Check `data-theme` attribute on `<html>` element
- Ensure CSS variables are defined in `index.css`

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome for bug fixes and improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and **not** open for commercial use. You may use it as reference/inspiration for your own portfolio.

---

## 🔗 Links

- **Portfolio**: [vijaybalaji.dev](https://your-domain.com)
- **GitHub**: [@Vijay3alaji](https://github.com/Vijay3alaji)
- **LinkedIn**: [linkedin.com/in/vijay-balajim/](https://www.linkedin.com/in/vijay-balajim/)
- **Medium**: [@vijay.balaji](https://medium.com/@vijay.balaji)

---

## 💬 Support

Have questions or found a bug?
- Open an [issue on GitHub](https://github.com/Vijay3alaji/portfolio/issues)
- Email: [vijaybalaji237@gmail.com](mailto:vijaybalaji237@gmail.com)

---

**Built with ❤️ by Vijay Balaji**

Last updated: March 2025 | v1.0.0
