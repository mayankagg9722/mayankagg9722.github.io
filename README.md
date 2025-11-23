# 🚀 Mayank's Premium Portfolio Website

A **world-class, highly interactive** personal portfolio website built with React, TailwindCSS, Framer Motion, Three.js, and Recharts. Features immersive 3D elements, animated architecture visualizers, CLI-style contact, and a floating dock navigation.

## ✨ Premium Features

### 🎨 Immersive User Experience
- **3D Hero Section**: Full-screen hero with floating 3D elements (code blocks, Kubernetes icons, clouds) powered by Three.js
- **Mouse Parallax**: Smooth parallax movement following mouse position
- **Animated Taglines**: Dynamic typewriter effect with rotating professional taglines
- **Custom Mouse Cursor**: Premium follower cursor for enhanced interactivity

### ⚡ Signature Unique Elements

#### 1. **System Architecture Visualizer**
The portfolio's signature feature - interactive animated architecture diagrams showing real systems built:
- **Hoverable Nodes**: Architecture components light up on hover
- **Animated Data Flow**: Lines animate to show system data flow
- **Deep-Dive Modals**: Click any system to explore detailed architecture
- **Impact Metrics**: Visual display of measurable business impact

#### 2. **3D Tilt Project Cards**
- **React-Tilt Integration**: Cards respond to mouse movement with 3D depth
- **Problem → Solution → Architecture → Impact**: Structured deep-dive modals
- **Before/After Metrics**: Visual comparison of improvements
- **Smooth Animations**: Scroll-triggered reveals and micro-interactions

#### 3. **"How I Think" Showcase**
Unique section demonstrating engineering problem-solving approach:
- **Expandable Problem Cards**: Click to reveal thought process
- **5-Phase Framework**: Observe → Analyze → Design → Implement → Validate
- **Animated Timeline**: Visual flow of problem-solving steps
- **Key Insights**: Highlighted learnings from each phase

#### 4. **Skills Radar Visualization**
- **Interactive Radar Chart**: Recharts-powered skill proficiency visualization
- **Skill Detail Modals**: Click skills to see experience, projects, and technologies
- **Color-Coded Categories**: Visual distinction between skill domains
- **Animated Transitions**: Smooth chart animations on load

#### 5. **Floating macOS-Style Dock**
- **Glassmorphism Design**: Blurred glass effect with backdrop blur
- **Icon Scaling on Hover**: Dock icons magnify like macOS
- **Smooth Navigation**: One-click scroll to any section
- **Ambient Tooltips**: Contextual labels appear on hover

#### 6. **CLI-Style Contact Interface**
- **Terminal Emulator**: Fully functional command-line interface
- **Interactive Commands**: Type `help`, `about`, `skills`, `social`, etc.
- **Dual Interface**: Traditional contact form alongside terminal
- **Command History**: Persistent terminal session with scrollback

### 🎭 Advanced Animations & Micro-Interactions
- **Framer Motion**: Smooth page transitions and component animations
- **Scroll-Triggered Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive responses on all clickable elements
- **3D Transforms**: Depth and perspective throughout the site
- **Gradient Animations**: Animated background gradients
- **Particle Systems**: Floating particles in hero section

### 🌓 Premium Theme System
- **Smooth Morphing**: Colors and gradients transition gradually between themes
- **Persistent Preferences**: Theme choice saved to localStorage
- **Icon Animations**: Theme toggle icon rotates smoothly
- **System-Wide**: Consistent theming across all components

### 📱 Responsive Excellence
- **Mobile-First**: Optimized for all device sizes
- **Adaptive Layouts**: Grid systems adjust intelligently
- **Touch-Friendly**: All interactions work on mobile devices
- **Performance Optimized**: Smooth 60fps animations on all devices

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion** - Advanced animation library
- **React-Tilt** - 3D tilt effect for cards
- **TypeAnimation** - Typewriter text effects

### Visualization & 3D
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **Recharts** - Chart library for skill radar

### Icons & UI
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Floating navigation with theme toggle
│   │   ├── HeroEnhanced.jsx        # 3D hero with parallax & floating elements
│   │   ├── Scene3D.jsx             # Three.js 3D scene component
│   │   ├── About.jsx               # About section with interactive cards
│   │   ├── SystemArchitecture.jsx  # ⚡ Signature: Animated architecture diagrams
│   │   ├── SkillsRadar.jsx         # Interactive radar chart visualization
│   │   ├── ProjectsEnhanced.jsx    # 3D tilt cards with deep-dive modals
│   │   ├── HowIThink.jsx           # ⚡ Unique: Problem-solving showcase
│   │   ├── Experience.jsx          # Animated career timeline
│   │   ├── ContactCLI.jsx          # ⚡ CLI-style terminal contact
│   │   ├── Footer.jsx              # Footer with links
│   │   └── FloatingDock.jsx        # ⚡ macOS-style floating dock
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme management with transitions
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles with custom utilities
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js              # Custom colors, animations, keyframes
├── postcss.config.js
└── vercel.json                     # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd d:\personal\portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The site will hot-reload as you make changes

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Or simply push to GitHub and import the repository in [Vercel Dashboard](https://vercel.com/new).

3. **Vercel Configuration:**
   - The `vercel.json` file is already configured
   - Build command: `npm run build`
   - Output directory: `dist`

### Deploy to Other Platforms

The portfolio can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect your GitHub repo
- **AWS S3 + CloudFront**: Upload the `dist` folder

## 🎨 Customization

### Update Personal Information

Edit the content in the following component files:

- **Hero Section**: `src/components/HeroEnhanced.jsx`
  - Name, title, taglines, CTAs
- **About Section**: `src/components/About.jsx`
  - Bio, highlights, experience points
- **System Architecture**: `src/components/SystemArchitecture.jsx`
  - Systems built, architecture nodes, impact metrics
- **Skills Radar**: `src/components/SkillsRadar.jsx`
  - Skill categories, proficiency levels, projects
- **Projects**: `src/components/ProjectsEnhanced.jsx`
  - Project details, problem/solution/architecture/impact
- **How I Think**: `src/components/HowIThink.jsx`
  - Engineering problems, thought process steps
- **Experience**: `src/components/Experience.jsx`
  - Work history, achievements, timeline
- **Contact**: `src/components/ContactCLI.jsx`
  - Contact info, social links, terminal commands

### Modify Colors & Branding

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    light: '#6366f1',    // Indigo
    DEFAULT: '#4f46e5',
    dark: '#4338ca',
  },
  accent: {
    light: '#ec4899',    // Pink
    DEFAULT: '#db2777',
    dark: '#be185d',
  }
}
```

### Customize Animations

Adjust animation timings in `tailwind.config.js`:

```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'gradient': 'gradient 8s linear infinite',
}
```

### Add/Remove Sections

In `src/App.jsx`, simply add or remove component imports and JSX elements.

## 🎭 Animation Details

The portfolio uses multiple animation libraries for maximum visual impact:

### Framer Motion
- **Scroll-triggered animations**: Components animate when entering viewport
- **Page load animations**: Staggered entry animations
- **Hover effects**: Interactive elements respond to mouse
- **3D transforms**: Perspective and depth effects
- **Gesture animations**: Drag, tap, and hover gestures

### Three.js
- **3D floating elements**: Code blocks, clouds, and Kubernetes icons
- **Particle systems**: Floating particle field in hero
- **Real-time rendering**: Smooth 60fps 3D animations
- **Interactive camera**: Responds to mouse movement

### React-Tilt
- **3D card tilting**: Project cards tilt based on mouse position
- **Parallax depth**: Multi-layer depth effect
- **Glare effects**: Light reflection on card surfaces

### Custom CSS Animations
- **Gradient shifts**: Animated background gradients
- **Float animations**: Smooth up/down floating motion
- **Pulse effects**: Breathing animations on elements

## 🚀 Performance Optimizations

- **Code splitting**: Lazy loading of heavy components
- **Image optimization**: Responsive images and lazy loading
- **Animation throttling**: RequestAnimationFrame for smooth performance
- **Memoization**: React.memo and useMemo for expensive renders
- **Lightweight dependencies**: Carefully selected minimal libraries

## 📱 Responsive Design

Breakpoints used:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌟 Key Differentiators

What makes this portfolio stand out from typical developer portfolios:

1. **System Architecture Visualizer** - Interactive diagrams with animated data flow
2. **"How I Think" Section** - Unique problem-solving thought process showcase
3. **3D Hero with Three.js** - Immersive 3D floating elements and parallax
4. **CLI-Style Contact** - Terminal emulator with real commands
5. **Skills Radar Chart** - Visual proficiency representation
6. **Floating Dock Navigation** - macOS-style glassmorphism dock
7. **3D Tilt Project Cards** - React-Tilt depth effects
8. **Problem → Solution → Impact** - Structured project storytelling
9. **Animated Timelines** - Narrative-driven career progression
10. **Premium Micro-Interactions** - Every element is interactive

## 💡 Design Philosophy

This portfolio follows several key principles:

- **Experience-Driven**: Focus on creating memorable interactions
- **Story-Focused**: Technical achievements presented as narratives
- **Visual Hierarchy**: Clear information architecture
- **Performance First**: Beautiful but fast
- **Accessibility**: WCAG compliant interactions
- **Mobile Excellence**: Not just responsive, but mobile-optimized

## 🎯 Use Cases

Perfect for:
- **Software Engineers** showcasing systems work
- **Cloud Architects** demonstrating infrastructure projects
- **DevOps Engineers** highlighting automation and reliability
- **Technical Leaders** presenting impact-driven work
- **Open Source Contributors** building personal brand
- **Job Seekers** standing out in competitive markets

## 🤝 Support

For questions or support, reach out via the contact form on the website.

---

## 📝 License

This project is open source and available under the MIT License.

---

**Built with ❤️ and ☕ by Mayank** | *A premium portfolio that stands out*


