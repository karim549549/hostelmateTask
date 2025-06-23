# Positivus Marketing Website

A modern, Figma-accurate marketing website built with **Next.js (App Router)** and **TailwindCSS**.

---

## 🚀 Tech Stack
- **Next.js** (App Router, TypeScript)
- **TailwindCSS** (custom config, semantic tokens)
- **Google Fonts** (Space Grotesk)
- **Modular Components** (e.g., `ServicesCard`)
- **Image Optimization** (Next.js `<Image />`)

---

## 🎨 Design & Structure
- **Pixel-perfect Figma implementation**: All sections, colors, spacing, and typography match the Figma design.
- **Custom Tailwind config**: Semantic colors, font sizes, border radii, and spacing tokens for maintainability.
- **Consistent container**: All sections use a shared container for perfect left alignment.
- **Responsive**: Layout adapts to all screen sizes.
- **Accessible & Semantic**: Uses correct HTML5 landmarks and heading structure.
- **Componentized**: Service cards and constants are decoupled for easy reuse and updates.

---

## 📁 Main Features
- **Header**: Logo, navigation, and CTA.
- **Hero**: Headline, description, and illustration.
- **Brands**: Logo row.
- **Services**: Modular cards, mapped from constants.
- **CTA**: Large, visually prominent, with illustration overflow.
- **Footer**: Multi-row, pixel-accurate, with nav, socials, contact, newsletter, and legal links.

---

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

## 📝 How We Built This
- **Figma → Code**: All colors, font sizes, and spacings were first implemented inline, then centralized in `tailwind.config.ts` for scalability.
- **Component Decoupling**: Reusable components (like `ServicesCard`) and constants (brands, services) live in their own files.
- **Best Practices**: Semantic HTML, accessibility, and responsive design throughout.
- **Git & Collaboration**: Clean commit history, `.gitignore` for Node/Next, and clear project structure.

---

## 📦 Project Structure

```
client/
  ├─ src/
  │   ├─ app/
  │   │   ├─ page.tsx         # Main page (all sections)
  │   │   ├─ layout.tsx       # Global layout & font
  │   │   ├─ components/
  │   │   │   └─ home/
  │   │   │       └─ ServicesCard.tsx
  │   │   ├─ constants/
  │   │   │   └─ home.ts          # Brands & services data
  │   ├─ public/                  # Images, logos, illustrations
  │   ├─ tailwind.config.ts       # Custom Tailwind theme
  │   ├─ README.md
  │   ├─ .gitignore
```

---

## 🤝 Contributing
PRs and suggestions welcome!

---

## © 2023 Positivus. All Rights Reserved.

---

## 🚧 Future Work

- **Centralize Design Tokens:**
  - Move all scattered color values and hardcoded pixel values (e.g., spacing, border radius, font sizes) into `tailwind.config.ts` as semantic tokens.
  - Refactor all components and pages to consume these tokens via Tailwind classes, ensuring consistency and easy theme updates.
- **Accessibility:**
  - Continue testing with screen readers and keyboard navigation.
  - Add ARIA live regions for dynamic content if needed.
- **Performance:**
  - Audit bundle size and optimize images further.
  - Consider using Next.js Image CDN for production.
- **Design Consistency:**
  - Review all sections for pixel-perfect alignment with Figma.
  - Add more semantic HTML where possible (e.g., <figure> for images with captions).
- **SEO & Metadata:**
  - Expand Open Graph and Twitter meta tags for all pages.
  - Add structured data (JSON-LD) for organization and services.
- **Testing:**
  - Add unit and integration tests for components.
- **Other Enhancements:**
  - Add dark mode support.
  - Add a custom 404 page.
  - Implement smooth scroll for anchor links.
  - Add more micro-interactions and parallax effects.
