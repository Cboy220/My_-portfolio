# Henry Lee - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a full-stack developer.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Interactive Elements**: Smooth animations and hover effects
- **Project Showcase**: Detailed project cards with technologies used
- **Contact Information**: Easy ways to get in touch
- **Dark Theme**: Professional dark mode design

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Component-based UI library
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon toolkit

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd henry-codes-block-forge-11
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Contact.tsx     # Contact section
│   ├── Education.tsx   # Education section
│   ├── Experience.tsx  # Work experience
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills section
│   └── TechStacks.tsx  # Technology stacks
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── NotFound.tsx    # 404 page
│   └── Projects.tsx    # Projects showcase
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contact

- **Email**: cboy88755@gmail.com
- **Location**: Ontario, Canada

## License

This project is open source and available under the [MIT License](LICENSE).