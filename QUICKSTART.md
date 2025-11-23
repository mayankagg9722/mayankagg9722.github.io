# 🚀 Quick Start Guide

## Immediate Setup (5 minutes)

### 1. Install Dependencies
```bash
cd d:\personal\portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5174` (or the next available port)

### 3. Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## 🎨 Customization Priority

### STEP 1: Update Personal Info (10 minutes)

#### `src/components/HeroEnhanced.jsx`
- Line 63: Change name from "Mayank"
- Line 77: Update role/title
- Line 85: Change location
- Lines 97-108: Customize animated taglines
- Line 123: Update CTA button text

#### `src/components/ContactCLI.jsx`
- Line 201: Update email address
- Line 208: Update location
- Lines 38-54: Modify CLI commands responses
- Lines 214-218: Add your social media links

### STEP 2: Customize Projects (20 minutes)

#### `src/components/SystemArchitecture.jsx`
Replace the 3 systems (lines 14-96) with your own:
- System title and description
- Architecture nodes and connections
- Impact metrics

#### `src/components/ProjectsEnhanced.jsx`
Update projects array (lines 12-145) with your work:
- Project details
- Problem, Solution, Architecture, Impact sections
- Before/after metrics

### STEP 3: Update Skills & Experience (15 minutes)

#### `src/components/SkillsRadar.jsx`
- Lines 12-54: Modify skill categories and proficiency levels
- Add your technologies and projects

#### `src/components/HowIThink.jsx`
- Lines 11-193: Replace with your problem-solving examples
- Show your engineering thought process

#### `src/components/Experience.jsx`
- Update work history timeline

### STEP 4: Branding (5 minutes)

#### `tailwind.config.js`
```javascript
colors: {
  primary: {
    light: '#6366f1',  // Your brand color
    DEFAULT: '#4f46e5',
    dark: '#4338ca',
  },
  accent: {
    light: '#ec4899',  // Accent color
    DEFAULT: '#db2777',
    dark: '#be185d',
  }
}
```

## 🚢 Deployment Options

### Vercel (Recommended - 2 minutes)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Done! ✅

### Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"
# Then run:
npm run deploy
```

## 📱 Testing Checklist

- [ ] All personal info updated
- [ ] Projects showcase your best work
- [ ] Skills radar reflects expertise
- [ ] Contact form works
- [ ] Dark/light mode toggle smooth
- [ ] Mobile responsive (test on phone)
- [ ] All links work
- [ ] Fast load time (< 3s)

## 🎯 Next Steps

1. **Gather Content**: Collect project details, metrics, screenshots
2. **Take Screenshots**: Capture before/after comparisons
3. **Write Impact Stories**: Quantify achievements (%, $, time saved)
4. **Test Everything**: Check all interactions work smoothly
5. **Get Feedback**: Share with 2-3 people before public launch
6. **SEO Optimize**: Update meta tags in `index.html`
7. **Analytics**: Add Google Analytics or similar
8. **Share**: Post on LinkedIn, Twitter, Reddit

## 🆘 Common Issues

### Port Already in Use
```bash
# Kill the process or the app will use next available port automatically
```

### Build Warnings
The large chunk size warning is expected due to Three.js. It's optimized and lazy-loaded.

### 3D Elements Not Showing
Make sure Three.js installed correctly:
```bash
npm install three @react-three/fiber @react-three/drei --save
```

## 💡 Pro Tips

1. **Content First**: Write all content before customizing design
2. **Real Metrics**: Use actual numbers (X% improvement, $Y saved)
3. **Visual Hierarchy**: Most important projects first
4. **Mobile Testing**: 50%+ traffic will be mobile
5. **Fast Hosting**: Vercel/Netlify have global CDN
6. **Regular Updates**: Add new projects quarterly
7. **A/B Test CTAs**: Try different call-to-action phrases
8. **Analytics Matter**: Track what sections get most engagement

## 📞 Support

For questions or issues:
- Check README.md for detailed docs
- Review component comments in code
- Test in different browsers
- Verify all dependencies installed

---

**Time Investment Summary:**
- Initial Setup: 5 min
- Content Customization: 45 min
- Testing & Polish: 30 min
- Deployment: 5 min
- **Total: ~90 minutes to a premium live portfolio**

---

Good luck building something amazing! 🚀
