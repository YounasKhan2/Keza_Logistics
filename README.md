# Keza Logistics - Trucking Website

A modern, responsive trucking company website built with Next.js, React, and TailwindCSS. This website showcases comprehensive freight services with a professional design and smooth user experience.

## 🚚 About Keza Logistics

Keza Logistics is a comprehensive freight transportation company that provides reliable, secure, and on-time shipping solutions across America. We specialize in various transportation services including dry van, refrigerated transport, flatbed shipping, and end-to-end logistics management.

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Service Showcase**: Comprehensive display of freight services offered
- **Hero Section**: Eye-catching landing area with call-to-action
- **Navigation**: Fixed navigation bar with smooth hover effects
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **TypeScript**: Type-safe development with full TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.5
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **UI Library**: React 19.2.0
- **Fonts**: Geist (Sans & Mono) from Google Fonts
- **Linting**: ESLint with Next.js configuration

## 📁 Project Structure

```
trucking_website/
├── app/
│   ├── globals.css          # Global styles and TailwindCSS imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Hero.tsx             # Hero section component
│   ├── Navbar.tsx           # Navigation bar component
│   ├── Serives.tsx          # Services showcase component
│   └── Showcase.tsx         # Fleet showcase component
├── public/
│   └── images/
│       └── Heroimage.jpg    # Hero section background image
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # TailwindCSS configuration
└── next.config.ts          # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cubixbyte-tech/Keza_Logistics.git
cd trucking_website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Components Overview

### Navbar Component
- Fixed navigation bar with backdrop blur effect
- Responsive design with company branding
- Interactive navigation links with hover animations
- Call-to-action "Get a Quote" button

### Hero Section
- Full-screen hero section with background image overlay
- Compelling headline and description
- Call-to-action button linking to services
- Responsive typography and spacing

### Services Component
- Grid layout showcasing four main service categories:
  - **Dry Van**: Secure transport for general freight
  - **Reefer**: Temperature-controlled shipping
  - **Flatbed**: Solutions for oversized loads
  - **Logistics**: End-to-end supply chain management
- Icon-based visual representation for each service
- Responsive grid that adapts to different screen sizes

### Showcase Component
- Fleet showcase section (currently minimal)
- Designed for expansion with fleet images and details

## 🎨 Design Features

- **Color Scheme**: Professional blue (#1e3a8a) and white palette
- **Typography**: Geist font family for modern, clean readability
- **Animations**: Smooth hover effects and transitions
- **Layout**: Grid-based responsive design
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Configuration Files

- **TypeScript**: Configured for strict type checking
- **TailwindCSS**: Custom utility classes and responsive design
- **ESLint**: Next.js recommended configuration
- **Next.js**: App router with modern React features

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to [Vercel](https://vercel.com/new)
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Connect repository and deploy
- **AWS Amplify**: Deploy with AWS infrastructure
- **Docker**: Use the included Dockerfile for containerized deployment

## 🔮 Future Enhancements

- [ ] Add contact form functionality
- [ ] Implement quote request system
- [ ] Add fleet showcase with images
- [ ] Integrate with CMS for content management
- [ ] Add blog/news section
- [ ] Implement tracking system for shipments
- [ ] Add testimonials section
- [ ] Mobile app development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact Information

- **Website**: [Keza Logistics](https://your-domain.com)
- **Email**: info@kezalogistics.com
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is proprietary software owned by Keza Logistics. All rights reserved.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites
