Here's a detailed, stylish README.md for your Magnific Healthcare Solutions project:

```markdown
# 🏥 Magnific Healthcare Solutions

> *Your Trustful Solutions Partner in Healthcare Infrastructure*

![Astro](https://img.shields.io/badge/Astro-5.0+-BC52EE?style=flat&logo=astro&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-3.0+-F03E2F?style=flat&logo=sanity&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sanity Integration](#-sanity-integration)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Magnific Healthcare Solutions** is a modern, headless CMS-powered healthcare services website built with Astro and Sanity. It showcases healthcare consultancy services, hospital planning, NABH/NABL accreditation support, and healthcare management solutions.

### ✨ Key Features

- ⚡ **Lightning Fast** — Built with Astro for near-instant page loads
- 🧩 **Headless CMS** — Content managed via Sanity Studio
- 📱 **Fully Responsive** — Optimized for all screen sizes
- 🎨 **Modern UI** — Clean, professional healthcare-focused design
- 🔍 **SEO Optimized** — Built-in SEO best practices
- 📝 **Portable Text** — Rich content editing with Sanity
- 🖼️ **Image Optimization** — Automatic image optimization and lazy loading
- 📊 **Dynamic Content** — Services, portfolio, blog, and more

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Purpose |
|------------|---------|
| **[Astro](https://astro.build/)** | Static site generation & SSR |
| **[Sanity](https://www.sanity.io/)** | Headless CMS & content management |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe JavaScript |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework |
| **[Font Awesome](https://fontawesome.com/)** | Icon library |

### Integrations

| Integration | Purpose |
|-------------|---------|
| **[@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)** | React components support |
| **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** | Automatic sitemap generation |
| **[@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)** | Tailwind CSS integration |
| **[@portabletext/react](https://www.npmjs.com/package/@portabletext/react)** | Sanity Portable Text rendering |

---

## 📂 Project Structure

```
magnifcc/
├── public/                      # Static assets
│   ├── assets/
│   │   ├── css/                 # Global styles
│   │   ├── fonts/               # Custom fonts (Lato, Montserrat, Rubik)
│   │   ├── icons/               # Icon libraries (Font Awesome, Feather, etc.)
│   │   ├── img/                 # Images and media
│   │   └── js/                  # JavaScript files
│   └── favicon.ico
│
├── sanity/                      # Sanity CMS
│   ├── schemaTypes/
│   │   ├── documents/           # Content types (footer, header, homePage, etc.)
│   │   └── shared/              # Reusable schemas (sections, fields)
│   ├── sanity.config.ts         # Sanity configuration
│   ├── sanity.cli.ts           # Sanity CLI configuration
│   └── package.json
│
├── src/
│   ├── assets/                  # Source assets
│   ├── components/
│   │   ├── common/              # Shared components (Header, Footer, etc.)
│   │   └── sections/            # Page sections (Hero, Services, etc.)
│   ├── layouts/
│   │   └── Layout.astro        # Main layout
│   ├── lib/                     # Utilities
│   │   ├── queries.ts           # Sanity GROQ queries
│   │   ├── sanity.ts           # Sanity client configuration
│   │   ├── portable-text-components.tsx  # Rich text components
│   │   └── utils.ts            # Helper functions
│   ├── pages/                   # Routes
│   │   ├── blog/               # Blog pages
│   │   ├── portfolio/          # Portfolio pages
│   │   ├── services/           # Services pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── index.astro
│   └── styles/                  # Global styles
│
├── scripts/
│   └── generate-sitemap.js     # Sitemap generation script
│
├── astro.config.mjs            # Astro configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.17.0 or later
- **npm** v9.0.0 or later
- **Sanity Account** (for content management)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/magnifcc.git
cd magnifcc

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Add your Sanity credentials to .env
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
# NEXT_PUBLIC_SANITY_DATASET=production
# NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# 5. Start development server
npm run dev
```

Your site will be running at `http://localhost:4321` 🎉

---

## 🧩 Sanity Integration

### Content Types

| Document Type | Description |
|---------------|-------------|
| `homePage` | Homepage content (hero, services, testimonials, etc.) |
| `servicesDetails` | Individual service pages |
| `header` | Navigation and site header |
| `footer` | Footer content and contact information |
| `blogPost` | Blog articles |
| `portfolio` | Portfolio items |
| `aboutPage` | About page content |
| `contactPage` | Contact page content |

### GROQ Queries

Example query for fetching services:

```typescript
const servicesQuery = `*[_type == "servicesDetails"]{
  title,
  description,
  slug,
  iconBgColor,
  iconShadow
} | order(title asc)`;
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |
| `npm run sanity` | Run Sanity CLI commands |
| `npm run generate-sitemap` | Generate sitemap |

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify/Vercel
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/`
4. Deploy! 🚀

### Deploy to Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

---

## 🎨 Styling Guide

### CSS Variables

```css
:root {
  --theme-colour: #a60c13;        /* Primary brand color */
  --common-colour: #1a1a1a;       /* Dark text color */
  --color-gary: #6f6055;          /* Muted text color */
  --color-offwhite: #edeae4;      /* Background color */
  --color-lightgary: #e8e6e1;     /* Border color */
}
```

### Tailwind Custom Classes

```css
/* Brand colors */
.bg-primary { background-color: var(--theme-colour); }
.text-primary { color: var(--theme-colour); }

/* Typography */
.font-sora { font-family: 'Sora', sans-serif; }
.font-urbanist { font-family: 'Urbanist', sans-serif; }
```

---

## 🧑‍💻 Development Tips

### Adding a New Page

1. Create a new `.astro` file in `src/pages/`
2. Import components and data
3. Use the `<Layout />` component
4. Fetch data from Sanity if needed

```astro
---
import Layout from '../layouts/Layout.astro';
import { client } from '../lib/sanity';

const data = await client.fetch(`*[_type == "page"][0]`);
---

<Layout title="Page Title">
  <!-- Page content -->
</Layout>
```

### Adding a New Schema

1. Create a new file in `sanity/schemaTypes/documents/`
2. Define your schema using `defineType` and `defineField`
3. Import and add to `sanity/schemaTypes/index.ts`

```typescript
// sanity/schemaTypes/documents/mySchema.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mySchema',
  title: 'My Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Testing updates
- `chore:` Maintenance tasks

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Astro](https://astro.build/) — The web framework for content-driven websites
- [Sanity](https://www.sanity.io/) — The headless CMS that makes content management a joy
- [Tailwind CSS](https://tailwindcss.com/) — For rapid UI development
- [Font Awesome](https://fontawesome.com/) — For beautiful icons

---

## 📞 Contact

**Magnific Healthcare Solutions**

- 📍 **Address:** Sarada Apartment, Opp. College Para Sishu Uddyan, Ashutosh Mukherjee Road, College Para, Siliguri – 734001
- 📱 **Phone:** +91 70471 45306
- ✉️ **Email:** [info@magnifichcs.com](mailto:info@magnifichcs.com)

---

<p align="center">
  Made with ❤️ by the Magnific Healthcare Team
</p>
```