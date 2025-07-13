# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, modern UI components, and a fully functional contact form powered by EmailJS.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional design with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Automatic theme detection with manual toggle using next-themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Functional contact form using EmailJS
- **SEO Optimized**: Meta tags and proper structure for search engines
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Form**: [EmailJS](https://www.emailjs.com/)
- **Font**: [Inter](https://rsms.me/inter/)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Animated button component
│   │   ├── card.tsx       # Card components
│   │   ├── input.tsx      # Form input component
│   │   ├── textarea.tsx   # Form textarea component
│   │   ├── section.tsx    # Animated section wrapper
│   │   └── animated-background.tsx
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with CTA
│   │   ├── about.tsx      # About section with skills
│   │   ├── projects.tsx   # Projects showcase
│   │   └── contact.tsx    # Contact form
│   ├── navigation.tsx     # Header navigation
│   └── footer.tsx         # Footer component
├── lib/
│   └── utils.ts           # Utility functions
└── .github/
    └── copilot-instructions.md  # GitHub Copilot instructions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
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

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Update the EmailJS configuration in `src/components/sections/contact.tsx`:

```typescript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

### Customization

1. **Personal Information**: Update content in all section components
2. **Colors**: Modify the color scheme in `tailwind.config.ts` and `globals.css`
3. **Projects**: Add your projects in `src/components/sections/projects.tsx`
4. **Social Links**: Update social media links in navigation and footer components
5. **SEO**: Update metadata in `src/app/layout.tsx`

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/portfolio)

### Other Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Use `next export` for static deployment
- **Docker**: Use the included Dockerfile for containerized deployment

## 🎨 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to the main page in `src/app/page.tsx`
3. Update the navigation in `src/components/navigation.tsx`

### Modifying Animations

All animations use Framer Motion. Common patterns:

```typescript
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the design system in `globals.css`
- Maintain consistent spacing and typography
- Ensure dark mode compatibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vercel](https://vercel.com/) for the deployment platform

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ If you found this helpful, please give the project a star!
