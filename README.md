# BnV Corner - Where Balance Meets Vitality

A beautiful single-page React application for BnV Corner, a healthy food restaurant. Built with modern React, TailwindCSS, and Framer Motion for smooth animations.

## 🍽️ About

BnV Corner stands for **Balance & Vitality**. This website showcases their chef-crafted bowls, wraps, and brews using whole ingredients, designed for balance and built for performance.

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Built with TailwindCSS for consistent styling
- **Single Page Application**: Fast navigation with smooth scrolling
- **Contact Form**: Interactive contact section with map integration
- **Gallery**: Showcase of fresh food items
- **Testimonials**: Customer reviews and feedback

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bnv-corner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **ESLint** - Code linting

## 📁 Project Structure

```
bnv-corner/
├── src/
│   ├── components/
│   │   └── BnvCornerPage.jsx    # Main page component
│   ├── App.jsx                  # Root app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
└── README.md                   # This file
```

## 🎨 Sections

1. **Navigation** - Sticky header with smooth scrolling
2. **Hero** - Eye-catching introduction with call-to-action
3. **About** - Restaurant story and key features
4. **Menu** - Food items with nutrition information
5. **Gallery** - Visual showcase of dishes
6. **Testimonials** - Customer reviews
7. **Contact** - Contact form and location map
8. **Footer** - Additional links and information

## 🌟 Key Features

- **High-protein options** with transparent nutrition info
- **Whole grains** and **no refined sugar**
- **Cold-pressed dressings** and **fresh daily** preparation
- **Vegetarian-friendly** and **Jain-friendly** options
- **Local sourcing** and **minimal processing**

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

#### Option 1: Deploy via Netlify UI (Recommended)

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder from your project
5. Your site will be deployed and you'll get a URL like `https://your-site-name.netlify.app`

#### Option 2: Deploy via Git (Continuous Deployment)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Option 3: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

4. Follow the prompts to connect your site

#### Netlify Configuration

Create a `netlify.toml` file in your project root for custom configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures proper routing for your single-page application.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Phone/WhatsApp**: +91 90000 00000
- **Email**: hello@bnvcorner.com
- **Hours**: Mon–Sun · 8am–10pm

---

Made with ❤️ for BnV Corner - Where Balance Meets Vitality
