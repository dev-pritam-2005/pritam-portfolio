<div align="center">

# 🚀 Pritam Dutta — Developer Portfolio

**A modern, fully responsive personal portfolio website built with React.js**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://pritam-portfolio.vercel.app) &nbsp;•&nbsp; [📄 Resume](https://drive.google.com/file/d/1TwPkpmP96QF-N0OVHvBUjlp090kDddwf/view?usp=drive_link) &nbsp;•&nbsp; [💼 LinkedIn](https://linkedin.com/in/pritam-dutta) &nbsp;•&nbsp; [🐙 GitHub](https://github.com/dev-pritam-2005)

</div>

---

## 📸 Preview

> Dark-themed, glassmorphism UI with electric blue & cyan accents, animated hero section, and smooth scroll-reveal effects throughout.

---

## ✨ Features

- 🎨 **Dark Theme** — Deep navy (`#0F172A`) with electric blue & cyan accent system
- 💎 **Glassmorphism Cards** — Frosted-glass project and skill cards with hover glow effects
- 🌊 **Smooth Animations** — CSS keyframe animations on page load + Intersection Observer scroll-reveals
- 📱 **Fully Responsive** — Mobile-first design with hamburger navigation for small screens
- 🔵 **Animated Hero** — Gradient text with CSS glow pulse, staggered fade-up entry animations
- 🖥️ **Terminal Card** — Stylized `about.json` terminal with scanline animation and blinking cursor
- 🎯 **Single File JSX** — Entire portfolio in one clean React component file
- ⚡ **Zero Dependencies** — No external UI libraries; built with pure React + Tailwind

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-viewport intro with name, role, CTA buttons, social links |
| 2 | **About** | Bio with keyword highlights + animated terminal JSON card |
| 3 | **Skills** | 6 grouped categories with interactive glow badge pills |
| 4 | **Projects** | Glassmorphism cards for Project Camp & Airline Reservation System |
| 5 | **Certifications** | Timeline entry with direct Google Drive certificate links |
| 6 | **Education** | B.Tech CSE card with CGPA and enrollment status |
| 7 | **Contact** | Email, phone links + aesthetic non-functional contact form |
| 8 | **Footer** | Built-with credit + dynamic current year |

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **React.js 18** | Component architecture, state, effects |
| **Tailwind CSS 3** | Utility-first responsive styling |
| **Intersection Observer API** | Scroll-triggered reveal animations |
| **Google Fonts** | Syne (headings) + Space Mono (code) + DM Sans (body) |
| **CSS Keyframes** | Custom animations (gradshift, glowpulse, fadeup, beam, etc.) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
node -v   # v16 or higher
npm -v    # v8 or higher
```

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/dev-pritam-2005/pritam-portfolio.git
cd pritam-portfolio
```

**2. Install dependencies**
```bash
npm install
```

**3. Install and configure Tailwind CSS**
```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

Replace contents of `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**4. Start the development server**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

---

## 📁 Project Structure

```
pritam-portfolio/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js              ← 🌟 Entire portfolio (single file)
│   ├── index.js            ← React entry point
│   └── index.css           ← Tailwind directives only
│
├── tailwind.config.js      ← Tailwind content paths
├── postcss.config.js       ← PostCSS config
├── package.json
└── README.md
```

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| **Background** | `#0F172A` (slate-900) |
| **Primary Accent** | `#3B82F6` (electric blue) |
| **Secondary Accent** | `#06B6D4` (cyan) |
| **Heading Font** | Syne (800 weight) |
| **Code Font** | Space Mono |
| **Body Font** | DM Sans |
| **Border Radius** | `1.1rem` – `1.35rem` for cards |

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/build` folder.

---

## 🌐 Deployment

### Deploy on Vercel (Recommended — Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Click **Deploy** — live in ~30 seconds

### Deploy on Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) → **Add new site**
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Click **Deploy site**

---

## 🔗 Projects Featured

### 🗂️ Project Camp
> RESTful project management backend

- **Tech:** Node.js, Express.js, JWT, REST API, MongoDB
- **Repo:** [github.com/dev-pritam-2005/projmanage](https://github.com/dev-pritam-2005/projmanage)

### ✈️ Airline Reservation System
> Full-stack desktop application with Java Swing GUI

- **Tech:** Java, Java Swing, JDBC, MySQL
- **Repo:** [github.com/dev-pritam-2005/AirlineReservationSystemWithJAVA](https://github.com/dev-pritam-2005/AirlineReservationSystemWithJAVA)

---

## 📜 Certifications

- **Programming Fundamentals using Python – Part 1 & Part 2**
  Infosys Springboard | Oct – Nov 2024

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| 📧 Email | [Pritamdutta35689@gmail.com](mailto:Pritamdutta35689@gmail.com) |
| 📱 Phone | [+91 8250036245](tel:+918250036245) |
| 💼 LinkedIn | [linkedin.com/in/pritam-dutta](https://linkedin.com/in/pritam-dutta) |
| 🐙 GitHub | [github.com/dev-pritam-2005](https://github.com/dev-pritam-2005) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with React.js ♥ by Pritam Dutta**

⭐ If you found this helpful, please consider giving it a star!

</div>
