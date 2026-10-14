# El Cafezito — Ultra-High-End 3D Animated Hospitality Web Experience
> **Client Prototype & Production Pitch Application**  
> Inspired by Phoenix Boutique Hospitality (such as Window Coffee Bar) blended with Scandinavian Warm Minimalism and authentic Latin American culinary traditions.

---

## ☕ What Was Enhanced & Fixed
1. **Global Device Compatibility & Header Overlap Fix**:
   - Resolved the collision bug where the brand title collided with the navigation links and the live-hours pill squished on medium/laptop viewports.
   - Designed a responsive multi-tier flexbox layout with `flex-shrink: 0` protection, `white-space: nowrap`, and responsive typography.
   - Added a dedicated slide-out **Mobile Navigation Drawer (`#mobileNavDrawer`)** triggered on screens `< 1140px` and smartphones, displaying translated navigation links, language chips, live hours card, and order bag quick-actions.
   - Seamlessly compatible with all screen sizes from **320px mobile screens up to 4K ultra-wide monitors**.

2. **Full Multi-Language Auto-Translation Engine**:
   - **Auto-Detection (`auto`)**: Automatically detects the user's browser language on first visit (`navigator.language`) and applies the appropriate translation.
   - **Manual Language Selector**: Sleek dropdown in the header and chips in the mobile drawer with support for 9 global languages:
     - 🌐 Auto Detect (Browser)
     - 🇺🇸 English (`en`)
     - 🇲🇽 Español (`es`)
     - 🇫🇷 Français (`fr`)
     - 🇩🇪 Deutsch (`de`)
     - 🇧🇷 Português (`pt`)
     - 🇮🇹 Italiano (`it`)
     - 🇯🇵 日本語 (`ja`)
     - 🇨🇳 简体中文 (`zh`)
     - 🇷🇺 Русский (`ru`)
   - **Every Word Translated**:
     - All static UI elements across `index.html` and `menu.html` (navigation, hero, story, quotes, features, atmosphere captions, hours, contact info, footer, modals).
     - Live Opening Hours status text (e.g., *"Abierto Ahora • Cierra 7:00 PM (PHX)"* in Spanish, *"Ouvert Maintenant • Ferme à 19h00 (PHX)"* in French).
     - Complete culinary catalog items (titles, badges, descriptions, "How It Is Made" summaries, tasting notes, and customization labels).
     - Off-canvas Order Bag and simulated counter pickup receipt.
   - **Persistence**: Remembers the selected language across page reloads and transitions between `index.html` and `menu.html` via `localStorage`.

---

## 🎨 Color Palette & Typography Tokens
- **Cream White**: `#FAF8F5`
- **Oat Latte**: `#F3ECE1`
- **Warm Muted Espresso**: `#241711`
- **Warm Terracotta Sand**: `#D27A56`
- **Soft Sage**: `#6B7F6D`
- **Panela Gold**: `#D4A373`
- **Typography**: `Plus Jakarta Sans` (modern Scandinavian display), `Playfair Display` (editorial serif), `Caveat` (warm boutique script notes).

---

## 🚀 How to Run & Deploy
1. **Local Preview**:
   Double click [`index.html`](file:///c:/Users/pande/OneDrive/Desktop/USA%20FOLDER/USA_Products-Webstes/EL%20CAFEZETO/index.html) or [`menu.html`](file:///c:/Users/pande/OneDrive/Desktop/USA%20FOLDER/USA_Products-Webstes/EL%20CAFEZETO/menu.html) in your browser.
2. **Production Deployment**:
   Drag and drop the `EL CAFEZETO` folder into [Netlify Drop](https://app.netlify.com/drop) or push to [Vercel](https://vercel.com).
