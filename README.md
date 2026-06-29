# 🍫 Monk Chocolate — React + Tailwind SPA

Artisanal Bean-to-Bar chocolate website, rebuilt as a multi-page React SPA with Tailwind CSS v3.

## Project Structure

```
monk-chocolate/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Shared nav with hamburger sidebar
│   │   ├── Footer.jsx       # Shared footer
│   │   └── Toast.jsx        # Cart notification toast
│   ├── pages/
│   │   ├── HomePage.jsx     # Landing page (pink bg)
│   │   ├── CollectionPage.jsx  # Product grid
│   │   ├── CartPage.jsx     # Product detail + qty (blue bg)
│   │   └── SamplePage.jsx   # About / story page
│   ├── data/
│   │   └── products.js      # Product data array
│   ├── App.jsx              # Root — state-based routing
│   ├── index.css            # Tailwind directives + global styles
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

## Features
- ✅ SPA routing (no react-router needed — state-based)
- ✅ Shared cart count across all pages
- ✅ Click any product in Collection → goes to that product's Cart page
- ✅ Hamburger sidebar on mobile
- ✅ Page transition animations (fade + slide up)
- ✅ Product card hover lift effect
- ✅ Toast notification on add-to-cart
- ✅ Original background colours preserved (pink home, blue cart)
- ✅ All 4 Google Fonts: Cinzel, Dancing Script, Cormorant Garamond, Raleway
