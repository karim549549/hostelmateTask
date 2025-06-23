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
