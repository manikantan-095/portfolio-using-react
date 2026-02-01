# Manikantan - Professional Portfolio

A modern, fully responsive portfolio website for Manikantan, a Senior Web Developer. Built with React, Vite, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually stunning UI with gradient overlays and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and micro-interactions throughout the site
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **Component-Based**: Modular React components for easy maintenance and updates
- **SEO Friendly**: Proper HTML structure and meta tags
- **Accessible**: WCAG compliant design and navigation

## 📋 Sections

### 1. **Navigation Bar**
   - Fixed navigation with smooth scroll behavior
   - Mobile-responsive hamburger menu
   - Active section tracking
   - Sticky header with glassmorphism effect

### 2. **Hero Section**
   - Eye-catching headline with gradient text
   - Animated typing effect for dynamic role display
   - Professional statistics showcase
   - Call-to-action buttons
   - Social media links
   - Code snippet display
   - Floating badge animations

### 3. **About Section**
   - Personal introduction
   - Key highlights and achievements
   - Professional philosophy
   - Visual code representation

### 4. **Skills Section**
   - Categorized skills (Frontend, Backend, Database, Tools)
   - Animated progress bars
   - Skill proficiency levels
   - Additional competencies with tags
   - Hover effects and transitions

### 5. **Projects Section**
   - Filterable project gallery
   - Featured projects highlight
   - Technology stack display
   - Project descriptions
   - Links to live demos and GitHub repositories
   - Category-based filtering

### 6. **Experience Section**
   - Timeline view of work experience
   - Educational background
   - Certifications showcase
   - Achievement highlights
   - Interactive cards with hover effects

### 7. **Contact Section**
   - Prominent contact information
   - Multiple contact methods (Email, LinkedIn, GitHub, Twitter)
   - Contact form with validation
   - Social media links
   - Success message on form submission

### 8. **Footer**
   - Company branding
   - Quick navigation links
   - Resource links
   - Social connections
   - Copyright information
   - Heartbeat animation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite
- **Styling**: CSS3 with Custom Properties (CSS Variables)
- **Fonts**: Inter (primary), Fira Code (code blocks)
- **Package Manager**: npm
- **Node Version**: 14+ recommended

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone or navigate to the project**
   ```bash
   cd portfolio_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio_react/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Navigation bar component
│   │   ├── Navigation.css
│   │   ├── Hero.jsx              # Hero/landing section
│   │   ├── Hero.css
│   │   ├── About.jsx             # About section
│   │   ├── About.css
│   │   ├── Skills.jsx            # Skills showcase
│   │   ├── Skills.css
│   │   ├── Projects.jsx          # Projects gallery
│   │   ├── Projects.css
│   │   ├── Experience.jsx        # Experience & education
│   │   ├── Experience.css
│   │   ├── Contact.jsx           # Contact section & form
│   │   ├── Contact.css
│   │   ├── Footer.jsx            # Footer component
│   │   └── Footer.css
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Global app styles
│   ├── index.css                 # Global styles
│   ├── main.jsx                  # React entry point
│   └── assets/                   # Static assets
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                     # This file
```

## 🎨 Color Scheme

The portfolio uses a modern dark theme with vibrant accent colors:

```css
--primary: #00d9ff        /* Cyan */
--primary-dark: #0099b3   /* Dark Cyan */
--secondary: #ff006e      /* Magenta */
--bg-primary: #0a0e27     /* Very Dark Blue */
--bg-secondary: #1a1f3a   /* Dark Blue */
--bg-tertiary: #252d45    /* Medium Dark Blue */
--text-primary: #ffffff   /* White */
--text-secondary: #a0a0a0 /* Light Gray */
--text-tertiary: #666666  /* Gray */
--border: #2a3f5f         /* Border Gray */
```

## 🎯 Key Features & Customization

### Customize Content

1. **Hero Section** - Edit `src/components/Hero.jsx`
   - Update name and titles
   - Modify the typing animation roles
   - Add/remove social links
   - Customize the code snippet display

2. **About Section** - Edit `src/components/About.jsx`
   - Update personal bio
   - Modify highlights
   - Change description

3. **Skills Section** - Edit `src/components/Skills.jsx`
   - Add/remove skill categories
   - Update skill names and proficiency levels
   - Modify competency tags

4. **Projects Section** - Edit `src/components/Projects.jsx`
   - Add new projects
   - Update project descriptions
   - Change technology stack
   - Add project links

5. **Experience Section** - Edit `src/components/Experience.jsx`
   - Update work history
   - Modify education details
   - Add certifications
   - Update achievements

6. **Contact Section** - Edit `src/components/Contact.jsx`
   - Update contact information
   - Modify form handling
   - Change contact methods

### Modify Styling

1. **Global Colors** - Edit `src/index.css` (CSS variables in `:root`)
2. **Component Styles** - Edit individual `.css` files in `src/components/`
3. **Animations** - Modify keyframe animations in `src/index.css` and component CSS files

### Responsive Breakpoints

The portfolio includes responsive design for:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px
- Small Mobile: Below 480px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on each push

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name
2. Build and push to GitHub
3. Enable GitHub Pages in repository settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

- Lazy loading of components
- CSS custom properties for minimal bundle size
- Vite optimizations for fast builds
- Smooth animations with hardware acceleration
- Optimized scrollbar styling
- Efficient CSS animations without JavaScript

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Vite Configuration
See `vite.config.js` for Vite-specific settings.

### ESLint Configuration
See `eslint.config.js` for code quality rules.

## 🤝 Contributing

Feel free to fork this portfolio and customize it for your own use. The codebase is structured to be easily modifiable.

## 📄 License

This portfolio template is free to use and modify for personal use.

## 📞 Contact

For inquiries or to discuss your project:
- Email: hello@manikantan.com
- LinkedIn: linkedin.com/in/manikantan
- GitHub: github.com/manikantan
- Twitter: @manikantan_dev

## ✨ Credits

- Built with React and Vite
- Fonts from Google Fonts (Inter, Fira Code)
- Modern web design principles
- Responsive design best practices

---

**Last Updated**: February 2026

Made with ❤️ by Manikantan
