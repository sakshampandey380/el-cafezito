# El Cafezito ☕
### A Premium Café Website & Interactive Digital Menu

A modern, Latin-inspired café website concept designed around artisan coffee, handcrafted beverages, fresh food, and a warm boutique hospitality experience. Built with HTML, CSS, and vanilla JavaScript, El Cafezito combines an elegant visual identity with an interactive digital menu, customizable orders, multilingual support, and a simulated counter-pickup checkout.

> **Project type:** Frontend web application / Client presentation prototype  
> **Location concept:** Phoenix, Arizona, USA  
> **Status:** Frontend prototype  
> **Languages:** English, Spanish, French, German, Portuguese, Italian, Japanese, Chinese, and Russian

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages and Sections](#-pages-and-sections)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How to Use the Website](#-how-to-use-the-website)
- [Menu and Product Customization](#-menu-and-product-customization)
- [Language Support](#-language-support)
- [Cart and Checkout Logic](#-cart-and-checkout-logic)
- [Design and Responsiveness](#-design-and-responsiveness)
- [Configuration and Customization](#-configuration-and-customization)
- [Deployment](#-deployment)
- [Limitations](#-limitations)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Disclaimer](#-disclaimer)

---

## 🌟 Overview

El Cafezito is a café website concept inspired by Latin American coffee culture and Scandinavian-inspired minimalism. The interface combines warm neutral colors, expressive typography, food photography, smooth animations, and a carefully organized digital menu.

The application is designed to showcase a café's identity while allowing visitors to explore menu items, review product descriptions, customize selected drinks, add items to an order bag, adjust quantities, and experience a simulated pickup checkout.

The project is implemented using native web technologies without a frontend framework or a required backend server.

### Project Highlights

- Two-page website architecture.
- Interactive digital menu with search and category filtering.
- Menu data organized in a dedicated JavaScript file.
- Multilingual interface with nine language options.
- Shopping bag with quantity controls and item removal.
- Browser-based cart and language persistence.
- Product customization and price calculations.
- Simulated pickup-order confirmation.
- Responsive navigation and mobile-friendly layouts.
- Animated interface elements and a consistent visual design.

---

## ✨ Features

### 1. Premium Café Homepage

The homepage introduces the café through a visually rich layout and dedicated content sections.

- Hero section with café branding and calls to action.
- Brand story and hospitality-focused messaging.
- Featured drinks and signature specialties.
- Food and beverage highlights.
- Café atmosphere and interior photography.
- Location, opening-hours, and contact-information sections.
- Navigation to the complete digital menu.
- Footer with additional navigation and café information.

### 2. Interactive Digital Menu

The dedicated `menu.html` page provides a searchable menu experience.

- Browse the full catalog of 62 configured menu entries.
- Filter items by menu category.
- Search for menu items and relevant descriptive content.
- View item names, prices, descriptions, images, and available product details.
- Explore available customization options.
- Add supported items to the order bag.

Menu data is maintained separately from the page layout, making it easier to update product information without rewriting the entire interface.

### 3. Menu Categories

The catalog organizes products into seven categories:

- Cafecito Specialties
- Espresso & Classics
- Teas & Botanicals
- Licuados & Cold Juices
- Crêpes & Kitchen
- Plant-Based & Vegan
- Brunch Cocktails & Bar

The catalog can be expanded or modified by editing the menu data.

### 4. Customizable Orders

Supported menu items can offer different customization options, depending on their configuration.

- Drink sizes and associated price differences.
- Hot or iced preparation options where available.
- Milk alternatives.
- Sweetness preferences.
- Optional add-ons, such as an extra espresso shot.

The available options and additional prices are defined in the menu data rather than being hardcoded separately for every product in the interface.

### 5. Interactive Order Bag

The order bag provides a convenient way to review a potential pickup order.

- Add menu items.
- Increase or decrease item quantities.
- Remove items from the bag.
- View selected customizations.
- Calculate the subtotal.
- Calculate estimated tax using the configured 8.6% rate.
- Display the estimated total.
- Preserve cart contents using browser local storage.
- Continue to the simulated pickup checkout.

### 6. Simulated Pickup Checkout

The checkout interface demonstrates a counter-pickup ordering flow.

- Enter a customer name.
- Enter a mobile phone number.
- Select an available pickup-time option.
- Review the calculated order total.
- Submit the form to display an order-confirmation experience.
- View a simulated order reference and pickup information.

**Important:** This is a frontend demonstration. Orders are not sent to a real café, and the application does not provide a production order-management system, payment processing, or SMS notifications.

### 7. Multilingual Experience

The translation system supports nine languages:

| Language | Code |
|---|---|
| English | `en` |
| Spanish | `es` |
| French | `fr` |
| German | `de` |
| Portuguese | `pt` |
| Italian | `it` |
| Japanese | `ja` |
| Chinese (Simplified) | `zh` |
| Russian | `ru` |

The interface includes a language selector and a browser-language detection option. The selected language is stored in local storage so it can persist across page reloads and navigation between the homepage and menu.

Translation coverage depends on the available entries in the translation dictionaries and the localization logic.

### 8. Responsive Navigation

The website includes responsive navigation designed for desktop and smaller screens.

- Desktop navigation.
- Mobile navigation drawer.
- Language selection in the mobile navigation.
- Access to the digital menu and order bag.
- Navigation backdrops and interactive drawer states.

### 9. Visual Design and Animation

The interface uses a warm, boutique café aesthetic.

- Rounded cards and carefully spaced layouts.
- Product and atmosphere photography.
- Smooth transitions and interactive hover effects.
- Animated loading and interface elements.
- 3D tilt and parallax-style effects where implemented.
- Typography combining modern sans-serif, editorial serif, and handwritten display styles.
- A responsive layout for different viewport sizes.

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Layout, responsive styling, visual effects, and animations |
| Vanilla JavaScript (ES6+) | Application logic and user interactions |
| Local Storage API | Browser-side cart and language persistence |
| Google Fonts | Typography |
| Unsplash image URLs | Remote food, drink, and café imagery |
| SVG | Café logo and vector graphics |

No React, Vue, Angular, Node.js, or database is required to run the current frontend prototype.

---

## 📁 Project Structure

```text
el-cafezito/
├── assets/
│   └── logo.svg
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── menu-data.js
│   └── translations.js
├── index.html
├── menu.html
└── README.md
```

### File Responsibilities

**`index.html`**
- Main café homepage.
- Brand story, featured specialties, atmosphere, and visit information.
- Homepage navigation and shared order interface.

**`menu.html`**
- Searchable digital menu.
- Category navigation and menu rendering.
- Product selection and customization interface.

**`css/style.css`**
- Global styles and design tokens.
- Responsive layouts and navigation.
- Animations, cards, modals, and drawer styling.

**`js/app.js`**
- Core application behavior.
- Cart state and local storage.
- Menu rendering and interactions.
- Language selection integration.
- Checkout interface and related calculations.
- Responsive navigation and interactive effects.

**`js/menu-data.js`**
- Menu product definitions.
- Product identifiers, categories, prices, descriptions, images, and customization options.
- The main file to edit when updating menu items.

**`js/translations.js`**
- Language dictionaries and localized interface text.
- The main file to edit when updating translations.

**`assets/logo.svg`**
- SVG branding asset used by the website.

---

## 🚀 Getting Started

### Prerequisites

You need:

- A computer with a modern web browser.
- Visual Studio Code or another text editor.
- The project files extracted from the downloaded ZIP archive.
- An internet connection for remote fonts and externally hosted images.

No package installation or build process is required.

### Option 1: Run with VS Code Live Server

1. Download or clone the repository.
2. Extract the project if it is still in a ZIP archive.
3. Open the `el-cafezito` project folder in Visual Studio Code.
4. Install the **Live Server** extension if it is not already installed.
5. Open `index.html`.
6. Right-click the file and select **Open with Live Server**.
7. Your browser should open the local website.

To view the complete digital menu directly, open `menu.html` through Live Server.

### Option 2: Run Directly in a Browser

You can open `index.html` directly in a modern browser for a quick preview.

However, using Live Server is recommended for consistent local testing and navigation between pages.

---

## 🖱️ How to Use the Website

### Homepage

1. Open the homepage.
2. Explore the café introduction, brand story, and featured specialties.
3. Browse the atmosphere section.
4. Use the navigation to visit the menu or location section.
5. Select another language using the language selector.
6. Add a featured item to the order bag if the corresponding control is available.

### Digital Menu

1. Navigate to `menu.html`.
2. Browse the available categories.
3. Use the search field to find an item.
4. Select a product and review its details.
5. Choose from the available size, temperature, milk, sweetness, or add-on options.
6. Add the configured item to the order bag.

### Order Bag and Checkout

1. Open the order bag.
2. Review the selected items and customizations.
3. Adjust quantities or remove items as needed.
4. Review the subtotal, estimated tax, and total.
5. Continue to the pickup checkout.
6. Enter the requested customer information.
7. Select a pickup-time option and submit the form.
8. Review the simulated confirmation.

The checkout demonstrates the intended user journey and does not submit a real order to a restaurant.

---

## 🛠️ Menu and Product Customization

Menu products are defined in `js/menu-data.js`.

Each product can contain fields such as:

```javascript
{
  id: "artisan-latte",
  title: "Handcrafted Artisan Latte",
  category: "coffee",
  price: 4.75,
  description: "A handcrafted espresso drink with silky milk.",
  image: "https://example.com/image.jpg",
  options: {
    sizes: [
      { label: "12 oz Regular", extra: 0 },
      { label: "16 oz Grande", extra: 0.85 }
    ],
    temps: ["Hot", "Iced"],
    milks: [
      { label: "Whole Milk", extra: 0 },
      { label: "Oat Milk", extra: 0.50 }
    ]
  }
}
```

This is an illustrative example of the data structure; use the existing project definitions as the source of truth when editing actual menu entries.

### Adding or Updating Products

1. Open `js/menu-data.js`.
2. Locate the menu data array.
3. Add a new product or modify an existing product.
4. Give each product a unique `id`.
5. Use a category supported by the category-filtering logic.
6. Provide a valid price and image URL.
7. Define only the customization options that the product supports.
8. Add localized product content where required by the translation system.
9. Refresh the website and verify the product card, search, filtering, and cart calculations.

When adding a new category or a new interface label, check whether the corresponding translations and category-filtering logic also need to be updated.

---

## 🌐 Language Support

The language dictionaries are maintained in `js/translations.js`.

To update a translation:

1. Open the translation dictionary for the appropriate language.
2. Find the relevant translation key.
3. Update its value without changing the key.
4. Apply the same key across the other language dictionaries where needed.
5. Test the language selector on both pages.
6. Verify that navigation, menu interactions, cart content, and checkout labels display correctly.

Avoid removing keys that are referenced by the application code.

---

## 🛒 Cart and Checkout Logic

The cart and language preferences use the browser's local storage.

The application defines these storage keys:

```text
el_cafezito_order_bag_v1
el_cafezito_lang
```

Cart totals are calculated from configured product prices and selected option surcharges. The current tax-rate constant in `js/app.js` is set to `0.086` (8.6%).

These calculations are demonstration logic, not a guarantee of the actual taxes or final prices applicable to a real business.

Local storage is specific to the browser and origin. Clearing browser data or changing the browser may remove or separate saved cart and language preferences.

---

## 🎨 Design and Responsiveness

The current design uses the following visual direction:

| Design element | Value |
|---|---|
| Cream white | `#FAF8F5` |
| Oat latte | `#F3ECE1` |
| Espresso | `#241711` |
| Terracotta sand | `#D27A56` |
| Soft sage | `#6B7F6D` |
| Panela gold | `#D4A373` |

The website uses Plus Jakarta Sans, Playfair Display, and Caveat for a combination of contemporary readability, editorial styling, and handwritten accents.

The layout includes responsive breakpoints for desktop, tablet, and mobile experiences.

When making visual changes, test the website at multiple viewport widths and verify that the navigation, menu filters, order bag, and checkout remain usable.

---

## ⚙️ Configuration and Customization

Before adapting the website for a real café, review the following areas.

### Business Information

Update the café's name, address, phone number, opening hours, social links, and location details in the relevant HTML and translation entries.

### Menu Information

Update product names, prices, descriptions, dietary labels, images, and customization options in `js/menu-data.js`.

### Tax and Currency

Review the tax constant and currency-formatting logic in `js/app.js`. Replace demonstration values with the business's verified requirements before production use.

### Branding

Update `assets/logo.svg`, the CSS design tokens, font selections, and image assets to match the café's identity.

### Language Content

Review all translation dictionaries and verify the accuracy of the final copy with fluent speakers before publishing a multilingual business website.

### Images and Fonts

The project uses externally hosted images and fonts. Check the relevant usage terms, availability, loading performance, and any required attribution before commercial deployment.

---

## 🌍 Deployment

Because the project is a static frontend website, it can be deployed using a static hosting provider.

Potential options include:

- **GitHub Pages** — suitable for hosting a static site from a GitHub repository.
- **Netlify** — suitable for simple static website deployment.
- **Vercel** — suitable for hosting frontend projects.
- **Other static web hosts** — any provider that can serve HTML, CSS, JavaScript, SVG, and related assets.

### Deployment Checklist

- Confirm that `index.html` is in the published root directory.
- Ensure `menu.html`, `css/`, `js/`, and `assets/` are included.
- Verify relative file paths and case-sensitive filenames.
- Test the homepage-to-menu navigation.
- Test the language selector and order bag.
- Test on desktop and mobile.
- Check browser console errors.
- Confirm that remote images and fonts load.
- Remove demonstration contact information before using the website for a real business.

For GitHub Pages, configure the repository's Pages settings to publish from the correct branch and directory. For Netlify or Vercel, select the directory containing `index.html` as the static site root and follow the provider's deployment instructions.

---

## ⚠️ Limitations

El Cafezito is currently a frontend prototype, not a complete production ordering platform.

- There is no backend API or database.
- Checkout confirmations are simulated in the browser.
- Orders are not transmitted to café staff.
- No payment gateway is integrated.
- No real SMS or email notifications are sent.
- There is no production customer-account or authentication system.
- Cart persistence is browser-local rather than account-based.
- Business contact details, opening hours, and tax assumptions must be independently verified before real-world use.
- External image and font resources require an internet connection.

Do not use the current prototype to accept or promise real customer orders without implementing and testing the necessary backend, security, operational, and business integrations.

---

## 🔮 Future Improvements

Potential next steps for evolving the prototype into a production-ready application:

- Backend API and database integration.
- Secure order creation and order-status tracking.
- Real-time order notifications for café staff.
- Payment gateway integration.
- Customer accounts and order history.
- Menu administration dashboard.
- Verified business hours and location integration.
- Accessibility improvements and keyboard-navigation testing.
- Automated unit and end-to-end tests.
- Performance optimization and image delivery improvements.
- Search-engine optimization and social-sharing metadata.
- Production error monitoring, security controls, and privacy documentation.

---

## 🧪 Testing Checklist

Before publishing changes, manually verify:

- [ ] Homepage loads without JavaScript errors.
- [ ] Menu page loads and displays product cards.
- [ ] Search returns expected results.
- [ ] Category filters behave correctly.
- [ ] Product customizations update order pricing correctly.
- [ ] Items can be added, removed, and repriced by quantity.
- [ ] Cart contents persist after a page reload.
- [ ] Subtotal, tax, and total calculations are correct for test cases.
- [ ] Language preferences persist across both pages.
- [ ] Checkout validation and confirmation work as expected.
- [ ] Mobile navigation opens and closes correctly.
- [ ] Layout remains usable on small screens.
- [ ] External images and fonts load as expected.

---

## 📄 License

No explicit open-source license is included with this project by default. Unless a license is added, do not assume that other people have permission to reuse, redistribute, or commercially exploit the project's code or assets.

If you intend to publish the code for public reuse, choose an appropriate license and verify that all third-party assets are compatible with it.

---

## ⚖️ Disclaimer

El Cafezito is a café website concept created for demonstration and client-presentation purposes. Business details, menu items, prices, images, tax assumptions, and contact information are illustrative unless independently verified by the business owner.

The project is not affiliated with or endorsed by any real café unless explicitly authorized. Verify all business information and obtain the necessary permissions before commercial deployment.

---

**Built with ☕, HTML, CSS, and vanilla JavaScript.**
