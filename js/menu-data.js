/**
 * EL CAFEZETO - Official Culinary & Beverage Database
 * Complete categorized dataset extracted from official menu boards and client archives.
 */

const MENU_CATEGORIES = [
  { id: "all", name: "All Offerings", count: 48 },
  { id: "specialties", name: "Cafecito Specialties", icon: "sparkles", count: 7 },
  { id: "coffee", name: "Espresso & Classics", icon: "coffee", count: 12 },
  { id: "wellness_teas", name: "Teas & Botanicals", icon: "leaf", count: 8 },
  { id: "juices_licuados", name: "Licuados & Cold Juices", icon: "cup", count: 5 },
  { id: "crepes_kitchen", name: "Crêpes & Kitchen", icon: "utensils", count: 8 },
  { id: "vegan_plantbased", name: "Plant-Based & Vegan", icon: "seedling", count: 7 },
  { id: "cocktails_bar", name: "Brunch Cocktails & Bar", icon: "glass", count: 8 }
];

const MENU_ITEMS = [
  // ==========================================
  // 1. SPECIALTY CAFECITO CREATIONS (PAGE 11)
  // ==========================================
  {
    id: "la-lechera",
    title: "La Lechera",
    category: "specialties",
    price: 5.50,
    badge: "Signature Best-Seller",
    badgeType: "signature",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    description: "Our signature Spanish-Mexican inspired espresso creation, layered over rich caramelized sweetened condensed milk and finished with silky steamed milk or chilled over crystal ice.",
    howItIsMade: "Double pulled espresso layered carefully over slow-poured La Lechera condensed milk and velvet microfoam, dusted with Mexican canela.",
    tastingNotes: ["Caramelized Dulce", "Roasted Hazelnut", "Rich Velvet Finish"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Iced", "Hot"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 },
        { label: "Coconut Milk", extra: 1.00 }
      ],
      sweetness: ["100% Traditional", "50% Light Sweet", "25% Subtle Sweet"]
    }
  },
  {
    id: "cafe-de-olla",
    title: "Café de Olla Tradicional",
    category: "specialties",
    price: 5.00,
    badge: "Heritage Clay-Pot Brew",
    badgeType: "heritage",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Honoring centuries-old Mexican countryside traditions. Steeped in authentic clay pots with whole canela bark, dark piloncillo unrefined cane sugar, and fresh orange zest.",
    howItIsMade: "Coarsely ground Chiapas beans slow-simmered in earthen clay vessels with heirloom cinnamon sticks, raw panela piloncillo cones, and charred orange peel.",
    tastingNotes: ["Warm Mexican Canela", "Smoked Raw Panela", "Bright Citrus Undertones"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Hot in Clay Mug", "Flash Iced"],
      milks: [
        { label: "Black / Tradicional", extra: 0 },
        { label: "Splash Oat Milk", extra: 0.50 },
        { label: "Splash Whole Milk", extra: 0 }
      ],
      sweetness: ["Traditional Piloncillo", "Light Sweetness"]
    }
  },
  {
    id: "horchata-con-cafe",
    title: "Horchata con Café",
    category: "specialties",
    price: 6.00,
    badge: "Guest Obsession",
    badgeType: "trending",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    description: "House-crafted scratch horchata made from soaked long-grain rice, Mexican cinnamon, and vanilla bean, poured over double shots of dark roasted espresso.",
    howItIsMade: "Rice and cinnamon steeped overnight, stone-blended smooth with vanilla and evaporated cream, shaken over ice with freshly extracted espresso.",
    tastingNotes: ["Vanilla Custard", "Toasted Rice & Cinnamon", "Bold Espresso Backbone"],
    options: {
      sizes: [
        { label: "16 oz Standard", extra: 0 },
        { label: "20 oz Jumbo", extra: 1.15 }
      ],
      temps: ["Iced Over Crushed Ice"],
      milks: [
        { label: "Scratch Rice Horchata", extra: 0 },
        { label: "100% Oat Horchata (Vegan)", extra: 0.50 }
      ],
      sweetness: ["Standard House Recipe", "Less Sweet"]
    }
  },
  {
    id: "cinnamon-mocha-latte",
    title: "Cinnamon Mocha Latte",
    category: "specialties",
    price: 5.50,
    badge: "Abuelita Spiced",
    badgeType: "comfort",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80",
    description: "Stone-ground Mexican Abuelita chocolate gently melted with freshly pulled espresso, velvety steamed milk, and crowned with hand-grated cinnamon bark.",
    howItIsMade: "Rich chocolate ganache infused with roasted espresso, textured whole milk microfoam, and fragrant canela aromatics.",
    tastingNotes: ["Dark Mexican Cacao", "Sweet Spiced Cinnamon", "Creamy Cocoa Velvet"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Hot", "Iced"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 }
      ],
      sweetness: ["Full Spiced Cocoa", "Subtle Sweet"]
    }
  },
  {
    id: "cajeta-latte",
    title: "Cajeta Latte de Celaya",
    category: "specialties",
    price: 5.50,
    badge: "Artisan Confection",
    badgeType: "luxury",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    description: "Artisanal goat's milk caramel simmered in copper cauldrons according to Celaya traditions, paired with smooth espresso and silk textured milk.",
    howItIsMade: "Authentic Mexican cajeta caramel coated inside the glass, topped with double espresso and creamy microfoam.",
    tastingNotes: ["Caramelized Butterscotch", "Light Nutty Toffee", "Silky Sweetness"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Hot", "Iced"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 }
      ],
      sweetness: ["Standard Cajeta", "Light Cajeta Drizzle"]
    }
  },
  {
    id: "buenos-dias",
    title: "Buenos Días Signature Elixir",
    category: "specialties",
    price: 6.25,
    badge: "Barista Innovation",
    badgeType: "signature",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: "The house morning awakening: double espresso pulled over organic Sonoran wildflower honey, oat milk, crushed vanilla bean, and a pinch of pink Himalayan salt.",
    howItIsMade: "Raw desert honey melted under hot espresso stream, shaken vigorously with cold barista oat milk, poured over ice, garnished with vanilla bean speckles.",
    tastingNotes: ["Wild Mesquite Honey", "Floral Vanilla", "Toasted Oats & Espresso"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Iced", "Hot"],
      milks: [
        { label: "Oat Milk (Recommended)", extra: 0 },
        { label: "Whole Milk", extra: 0 },
        { label: "Almond Milk", extra: 0.50 }
      ]
    }
  },
  {
    id: "choco-abuelita",
    title: "Choco Abuelita Tradicional",
    category: "specialties",
    price: 4.00,
    badge: "Heritage Drink",
    badgeType: "comfort",
    dietary: ["Vegetarian", "Comfort"],
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    description: "Timeless spiced Mexican drinking chocolate, hand-frothed with an authentic wooden molinillo until rich, foamy, and soul-satisfying.",
    howItIsMade: "Stone-ground chocolate tablets slowly melted in hot milk, spun vigorously with a traditional wood molinillo to create thick velvety foam.",
    tastingNotes: ["Dark Spiced Cocoa", "Sweet Cinnamon Crunch", "Comforting Warmth"],
    options: {
      sizes: [
        { label: "12 oz Cup", extra: 0 },
        { label: "16 oz Mug", extra: 0.85 }
      ],
      temps: ["Hot & Steamy", "Iced"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 }
      ]
    }
  },

  // ==========================================
  // 2. ESPRESSO & CLASSICS (PAGE 11 & PAGE 12)
  // ==========================================
  {
    id: "cold-brew",
    title: "18-Hour Slow Steep Cold Brew",
    category: "coffee",
    price: 4.25,
    badge: "18-Hour Steep",
    badgeType: "trending",
    dietary: ["Vegan", "Gluten-Free", "Zero Sugar"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    description: "Single-origin beans steeped in triple-filtered mountain water for 18 hours. Ultra smooth, velvety, zero bitterness, with natural chocolate sweetness.",
    howItIsMade: "Coarse ground single-origin blend slow-steeped in ambient chilled water, double-filtered through organic cloth for maximum clarity.",
    tastingNotes: ["Dark Cocoa Nibs", "Ripe Stone Fruit", "Silky Smooth Body"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 },
        { label: "20 oz", extra: 2.00 }
      ],
      milks: [
        { label: "Black / No Milk", extra: 0 },
        { label: "Oat Milk Splash", extra: 0.50 },
        { label: "Almond Milk Splash", extra: 0.50 },
        { label: "Sweet Cream Foam", extra: 1.00 }
      ]
    }
  },
  {
    id: "artisan-latte",
    title: "Handcrafted Artisan Latte",
    category: "coffee",
    price: 4.75,
    badge: "Barista Craft",
    badgeType: "craft",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    description: "Double shot of fresh espresso crowned with silky, glossy microfoam poured with intricate barista latte art.",
    howItIsMade: "Dialed-in espresso extracted at 9 bars of pressure, paired with steamed milk aerated to a dense wet-paint consistency.",
    tastingNotes: ["Toasted Macadamia", "Sweet Milk Foam", "Balanced Caramel Roast"],
    options: {
      sizes: [
        { label: "12 oz Regular", extra: 0 },
        { label: "16 oz Grande", extra: 0.85 },
        { label: "20 oz Gigante", extra: 2.00 }
      ],
      temps: ["Hot with Latte Art", "Iced"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 },
        { label: "Coconut Milk", extra: 1.00 }
      ],
      addons: [
        { label: "Extra Espresso Shot", extra: 1.00 }
      ]
    }
  },
  {
    id: "cortado",
    title: "Cortado Tradicional",
    category: "coffee",
    price: 4.00,
    badge: "Spanish Classic",
    badgeType: "heritage",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    description: "The purist's ratio: 2 oz bold double espresso cut with precisely 2 oz warm, silky textured milk served in a faceted Gibraltar glass.",
    howItIsMade: "Double ristretto shot extracted into a heavy glass, topped with gently textured warm milk to cut acidity while preserving espresso intensity.",
    tastingNotes: ["Dark Roast Crema", "Malted Milk", "Nutty Cocoa Core"],
    options: {
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 }
      ],
      temps: ["Warm (Traditional)"]
    }
  },
  {
    id: "cappuccino",
    title: "Classic Cappuccino",
    category: "coffee",
    price: 4.00,
    badge: "Italian Classic",
    badgeType: "craft",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    description: "Harmonious equal thirds of bold double espresso, steamed milk, and a pillowy mountain of airy foam, dusted with fine Dutch cocoa (Page 10 photo!).",
    howItIsMade: "Espresso extracted into warm ceramic cup, steamed milk poured, and finished with dense airy foam and cocoa stencil.",
    tastingNotes: ["Bittersweet Cocoa", "Velvety Aerated Milk", "Golden Crema"],
    options: {
      sizes: [
        { label: "8 oz Traditional", extra: 0 },
        { label: "12 oz Modern", extra: 0.85 }
      ],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 }
      ],
      dusting: ["Dutch Cocoa Powder", "Mexican Cinnamon Dust", "None"]
    }
  },
  {
    id: "drip-coffee",
    title: "House Batch Drip Coffee",
    category: "coffee",
    price: 3.75,
    badge: "Single Origin",
    badgeType: "daily",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    description: "Brewed fresh hourly from high-elevation Latin American beans. Clean, bright, vibrant, and aromatic.",
    howItIsMade: "Precision temperature water pulse-brewed through unbleached paper filters to highlight sweet origin characteristics.",
    tastingNotes: ["Red Apple Crisp", "Toasted Pecan", "Clean Cane Sugar"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 },
        { label: "20 oz", extra: 2.00 }
      ],
      roast: ["Medium Sonora Roast", "Dark Oaxaca Roast"]
    }
  },
  {
    id: "iced-coffee",
    title: "Flash Chilled Iced Coffee",
    category: "coffee",
    price: 3.75,
    badge: "Flash Chilled",
    badgeType: "daily",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    description: "Hot-brewed double strength directly over ice to lock in bright aromatics and crisp body.",
    howItIsMade: "Concentrated pour directly over ice spheres, retaining volatile aroma oils that cold brewing normally leaves behind.",
    tastingNotes: ["Crisp Citrus", "Milk Chocolate", "Refreshing Dry Finish"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 },
        { label: "20 oz", extra: 2.00 }
      ]
    }
  },
  {
    id: "espresso-doppio",
    title: "Espresso Doppio (Double Shot)",
    category: "coffee",
    price: 3.50,
    badge: "Pure Espresso",
    badgeType: "craft",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    description: "Double extraction of our signature house blend with a thick, hazelnut-hued crema and sweet balanced acidity.",
    howItIsMade: "18 grams finely ground estate beans, 36 grams liquid yield extracted over 28 seconds under 9-bar pressure.",
    tastingNotes: ["Dark Chocolate Truffle", "Orange Blossom", "Hazelnut Crema"],
    options: {
      temp: ["Hot Double Shot", "Over Ice Sphere"]
    }
  },
  {
    id: "red-eye",
    title: "The Red Eye",
    category: "coffee",
    price: 5.50,
    badge: "High Octane",
    badgeType: "strong",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    description: "Full cup of hot drip coffee spiked with a fresh double shot of rich espresso for maximum focus and energy.",
    howItIsMade: "House single-origin drip topped directly with freshly pulled espresso shots.",
    tastingNotes: ["Heavy Body", "Roasted Walnut", "Intense Espresso Punch"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 }
      ]
    }
  },
  {
    id: "americano",
    title: "Caffè Americano",
    category: "coffee",
    price: 4.25,
    badge: "Classic",
    badgeType: "daily",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Double shots of espresso layered with pure hot mountain water or served crisp over clear ice.",
    howItIsMade: "Hot filtered water added to double espresso to preserve crema and reveal sweet subtle origin nuances.",
    tastingNotes: ["Toasted Almond", "Caramelized Sugars", "Clean Finish"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 },
        { label: "20 oz", extra: 2.00 }
      ],
      temps: ["Hot", "Iced"]
    }
  },
  {
    id: "cafecito-tradicional",
    title: "Cafecito Tradicional (Single Shot)",
    category: "coffee",
    price: 1.00,
    badge: "Pocket Friendly",
    badgeType: "daily",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    description: "Authentic Latin American quick espresso shot served at the counter to kickstart your morning.",
    howItIsMade: "Single concentrated espresso pull with brown sugar espumita whipped directly into the first drops of coffee.",
    tastingNotes: ["Caramel Crema", "Roasted Cacao", "Bold Kick"],
    options: {
      style: ["With Espumita Sugar", "Unsweetened"]
    }
  },
  {
    id: "cafe-latte-frio",
    title: "Café Latte Frío",
    category: "coffee",
    price: 2.00,
    badge: "Market Value",
    badgeType: "daily",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    description: "Chilled iced latte with fresh local milk and double espresso pulled directly over ice.",
    howItIsMade: "Shaken espresso and chilled whole milk over crystal cubes.",
    tastingNotes: ["Creamy Sweetness", "Espresso Smoothness"],
    options: {
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 },
        { label: "Almond Milk", extra: 0.50 }
      ]
    }
  },
  {
    id: "moca-frio",
    title: "Moca Frío Artesanal",
    category: "coffee",
    price: 2.00,
    badge: "Chilled Cocoa",
    badgeType: "daily",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80",
    description: "Chilled cocoa infused with fresh espresso and ice cold milk.",
    howItIsMade: "Dark chocolate syrup blended with cold espresso and whole milk.",
    tastingNotes: ["Dark Chocolate", "Roasted Espresso", "Chilled Velvet"],
    options: {
      temps: ["Iced", "Hot"]
    }
  },

  // ==========================================
  // 3. TEAS & BOTANICALS (PAGE 11, 6, 8, 12)
  // ==========================================
  {
    id: "matcha-latte",
    title: "Uji Ceremonial Matcha Latte",
    category: "wellness_teas",
    price: 5.50,
    badge: "Ceremonial Grade",
    badgeType: "wellness",
    dietary: ["Vegan Option", "Antioxidant Rich"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    description: "First-harvest ceremonial green tea from Uji, Kyoto. Whisked traditionally with bamboo chasen and paired with silky steamed oat milk (Page 6 photo!).",
    howItIsMade: "Stone-ground matcha whisked in hot water until frothy emerald foam forms, poured over textured oat milk.",
    tastingNotes: ["Earthy Umami", "Sweet Cream Grass", "Silky Sweet Finish"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 }
      ],
      temps: ["Iced Over Cubes", "Hot Steamed"],
      milks: [
        { label: "Oat Milk (Standard)", extra: 0 },
        { label: "Almond Milk", extra: 0 },
        { label: "Whole Milk", extra: 0 }
      ],
      sweetness: ["Unsweetened", "Light Raw Agave", "Vanilla Bean"]
    }
  },
  {
    id: "golden-milk",
    title: "Ayurvedic Golden Milk Elixir",
    category: "wellness_teas",
    price: 6.25,
    badge: "Anti-Inflammatory",
    badgeType: "wellness",
    dietary: ["100% Vegan", "Gluten-Free", "Caffeine-Free"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    description: "Healing tonic of golden organic turmeric, fresh ginger root, cracked tellicherry black pepper, cinnamon, and coconut cream.",
    howItIsMade: "Turmeric root simmered slowly with warming spices, sweetened with raw maple, and whipped into warm coconut milk.",
    tastingNotes: ["Warm Peppery Spice", "Earth Grounding Turmeric", "Lush Coconut Cream"],
    options: {
      temps: ["Hot Soothing", "Iced Golden"],
      milks: [
        { label: "Coconut Milk (Recommended)", extra: 0 },
        { label: "Oat Milk", extra: 0 }
      ]
    }
  },
  {
    id: "honey-lavender",
    title: "Wild Honey Lavender Latte",
    category: "wellness_teas",
    price: 6.00,
    badge: "Botanical Floral",
    badgeType: "signature",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    description: "French culinary lavender blossoms infused in Sonoran wildflower honey, paired with double espresso and creamy steamed milk.",
    howItIsMade: "House lavender syrup prepared by slow-steeping organic lavender buds with raw honey, combined with espresso and milk.",
    tastingNotes: ["Subtle Floral Lavender", "Warm Wildflower Honey", "Velvety Espresso"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 }
      ],
      temps: ["Iced", "Hot"]
    }
  },
  {
    id: "london-fog",
    title: "Artisan London Fog",
    category: "wellness_teas",
    price: 4.00,
    badge: "Tea Classic",
    badgeType: "comfort",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: "Organic Earl Grey black tea infused with Italian oil of bergamot, Madagascar vanilla bean syrup, and steamed milk microfoam.",
    howItIsMade: "Full-leaf bergamot tea steeped 4 minutes, sweetened with vanilla bean paste, and topped with dense milk foam.",
    tastingNotes: ["Bright Bergamot Orange", "Sweet Vanilla Cloud", "Malty Black Tea"],
    options: {
      temps: ["Hot", "Iced"]
    }
  },
  {
    id: "chai-latte",
    title: "Slow-Simmered Spiced Chai",
    category: "wellness_teas",
    price: 5.00,
    badge: "House Spiced",
    badgeType: "comfort",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=800&q=80",
    description: "Crushed green cardamom pods, fresh ginger root, whole cloves, star anise, and black tea simmered for hours with steamed milk.",
    howItIsMade: "Whole spices cracked by mortar and pestle, slow-simmered in Assam black tea, strained and combined with microfoam.",
    tastingNotes: ["Zesty Ginger Snap", "Aromatic Cardamom", "Clove & Nutmeg Finish"],
    options: {
      sizes: [
        { label: "12 oz", extra: 0 },
        { label: "16 oz", extra: 0.85 }
      ],
      temps: ["Hot", "Iced"],
      addons: [
        { label: "Dirty Chai (+ Espresso Shot)", extra: 1.00 }
      ]
    }
  },
  {
    id: "dragonfruit-refresher",
    title: "Dragonfruit Hibiscus Berry Refresher",
    category: "wellness_teas",
    price: 4.50,
    badge: "Vibrant Summer (Page 8)",
    badgeType: "trending",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    description: "As photographed on Page 8: bright magenta cold infusion of diced dragonfruit, organic Mexican hibiscus flower (Jamaica), and wild berries over ice.",
    howItIsMade: "Cold brewed hibiscus steeped with dragonfruit pulp, shaken with ice cubes and garnished with freeze-dried wild berries.",
    tastingNotes: ["Tart Jamaica Berry", "Sweet Dragonfruit", "Crisp Clean Finish"],
    options: {
      sizes: [
        { label: "16 oz", extra: 0 },
        { label: "20 oz", extra: 1.00 }
      ],
      sweetness: ["Naturally Tart & Refreshing", "Light Agave Sweet"]
    }
  },
  {
    id: "te-aromaticas",
    title: "Té Aromáticas (Loose Leaf Herbal)",
    category: "wellness_teas",
    price: 3.50,
    badge: "Organic Garden",
    badgeType: "wellness",
    dietary: ["100% Vegan", "Gluten-Free", "Caffeine-Free"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    description: "Soothing pot of selected whole dried botanicals: chamomile blossoms, fresh mint leaves, cedrón lemon verbena, and rosehip.",
    howItIsMade: "Loose botanicals steeped in crystal glass infuser with 200°F filtered spring water.",
    tastingNotes: ["Honeyed Chamomile", "Crisp Peppermint", "Bright Lemongrass"],
    options: {
      variety: ["Manzanilla Chamomile", "Hierbabuena Mint", "Cedrón Lemongrass", "Frutos Rojos Hibiscus"]
    }
  },

  // ==========================================
  // 4. JUICES & LICUADOS (PAGE 11 & PAGE 12)
  // ==========================================
  {
    id: "licuado-pb-banana",
    title: "Licuado PB Banana Superfuel",
    category: "juices_licuados",
    price: 7.50,
    badge: "Power Smoothie",
    badgeType: "trending",
    dietary: ["Vegetarian", "High-Protein Option"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    description: "Creamy artisan licuado blended with ripe bananas, natural roasted peanut butter, oat milk, golden flaxseeds, and a touch of agave.",
    howItIsMade: "Whole bananas flash-frozen at peak ripeness blended with organic peanut butter, flaxseed meal, and barista oat milk.",
    tastingNotes: ["Roasted Peanut Butter", "Sweet Ripe Banana", "Thick Creamy Shake"],
    options: {
      boosts: [
        { label: "Add Plant / Whey Protein (+20g)", extra: 2.00 },
        { label: "Add Chia Seeds", extra: 0.75 },
        { label: "Add Maca Root", extra: 1.00 }
      ]
    }
  },
  {
    id: "fresh-squeezed-oj",
    title: "Fresh Squeezed Valencia Orange Juice",
    category: "juices_licuados",
    price: 3.75,
    badge: "100% Cold Pressed",
    badgeType: "daily",
    dietary: ["100% Vegan", "Vitamin C"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    description: "Squeezed fresh every morning from sun-ripened Valencia oranges. Pure, sweet, unpasteurized sunshine in a cup.",
    howItIsMade: "Oranges halved and cold-pressed on our counter citrus extractor immediately upon ordering.",
    tastingNotes: ["Vibrant Tangy Citrus", "Pure Natural Sweetness", "Zero Added Sugar"],
    options: {
      sizes: [
        { label: "Small (10 oz)", extra: 0 },
        { label: "Large (16 oz)", extra: 2.50 }
      ]
    }
  },
  {
    id: "fresh-ruby-grapefruit",
    title: "Fresh Ruby Red Grapefruit Juice",
    category: "juices_licuados",
    price: 3.75,
    badge: "Fresh Pressed",
    badgeType: "daily",
    dietary: ["100% Vegan", "Vitamin C"],
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    description: "Tart and invigorating cold-pressed Ruby Red grapefruit juice, full of natural pink citrus oils and antioxidants.",
    howItIsMade: "Whole Ruby Red grapefruits gently extracted to preserve delicate floral aromas and zesty brightness.",
    tastingNotes: ["Bitter-Sweet Pink Citrus", "Crisp Pith Aromas", "Refreshing Tartness"],
    options: {
      sizes: [
        { label: "Small (10 oz)", extra: 0 },
        { label: "Large (16 oz)", extra: 2.50 }
      ]
    }
  },
  {
    id: "jugos-naturales",
    title: "Jugos Naturales Tropicales",
    category: "juices_licuados",
    price: 3.50,
    badge: "Market Fresh Fruit",
    badgeType: "daily",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
    description: "Pure Latin American tropical fruit pulps extracted fresh: choose Passion Fruit (Maracuyá), Sweet Guava, or Blackberry (Mora).",
    howItIsMade: "Real whole tropical fruit pulps spun with chilled mountain water or light mineral water.",
    tastingNotes: ["Tangy Passion Fruit", "Tropical Floral Guava", "Juicy Blackberries"],
    options: {
      flavor: ["Maracuyá (Passion Fruit)", "Mora Silvestre (Blackberry)", "Guayaba Dulce (Guava)", "Mango Tropical"]
    }
  },
  {
    id: "batidos-naturales",
    title: "Batidos Naturales con Banana",
    category: "juices_licuados",
    price: 4.00,
    badge: "House Blended",
    badgeType: "daily",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80",
    description: "Fresh market fruits blended into a frothy shake with sweet banana and your choice of farm milk or oat milk.",
    howItIsMade: "Fresh fruit and ripe banana whipped at high velocity until dense, frosty, and creamy.",
    tastingNotes: ["Silky Sweet Banana", "Berry Punch", "Creamy Shake"],
    options: {
      fruits: ["Strawberry Banana", "Mango Banana", "Berry Medley Banana"],
      milks: [
        { label: "Whole Milk", extra: 0 },
        { label: "Oat Milk", extra: 0.50 }
      ]
    }
  },

  // ==========================================
  // 5. CRÊPES & KITCHEN (PAGE 4 & PAGE 12)
  // ==========================================
  {
    id: "crepe-strawberry-banana-nutella",
    title: "Strawberry Banana Nutella Artisan Crêpe",
    category: "crepes_kitchen",
    price: 8.50,
    badge: "Masterpiece (Page 4)",
    badgeType: "signature",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    description: "The showstopper from Page 4: Golden hand-spun crêpe folded in triangles, overflowing with fresh strawberry slices, ripe bananas, rich Nutella drizzle, dusted sugar, and chantilly whipped cream.",
    howItIsMade: "Made-to-order on high-heat cast iron crêpe griddles from scratch vanilla batter, filled with fresh fruit and drizzled with warm hazelnut spread.",
    tastingNotes: ["Warm Hazelnut Chocolate", "Sweet Garden Strawberries", "Fluffy Vanilla Crêpe"],
    options: {
      extras: [
        { label: "Extra Chantilly Whipped Cream", extra: 0.75 },
        { label: "Extra Nutella Drizzle", extra: 1.00 },
        { label: "Toasted Chopped Walnuts", extra: 1.00 }
      ]
    }
  },
  {
    id: "pollo-al-grill",
    title: "Pollo al Grill (Peri-Peri Chicken)",
    category: "crepes_kitchen",
    price: 6.00,
    badge: "Flame Grilled",
    badgeType: "signature",
    dietary: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    description: "Marinated 24 hours in citrus, garlic, and herbs, flame-charred to juicy perfection. Served with choice of Garlic Herb Mojo or House Salsa Picante.",
    howItIsMade: "Slow marinated chicken thighs and breasts grilled over open flame grills until crisp-skinned and tender.",
    tastingNotes: ["Smoky Char", "Roasted Garlic & Lime", "Herbal Spice"],
    options: {
      portions: [
        { label: "1/4 de Pollo", extra: 0 },
        { label: "1/2 de Pollo", extra: 2.00 },
        { label: "Pollo Entero (Whole)", extra: 6.00 }
      ],
      sauces: ["Ajo, Limón y Hierbas (Garlic Herb)", "Salsa Picante Roja (Spicy)"]
    }
  },
  {
    id: "patacones-rancheros-carne-pollo",
    title: "Patacones Rancheros (Carne o Pollo)",
    category: "crepes_kitchen",
    price: 4.50,
    badge: "Latin Street Food",
    badgeType: "trending",
    dietary: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",
    description: "Crispy twice-fried green plantain rounds (patacones) loaded with slow-cooked shredded beef or chicken, savory black beans, crumbled queso fresco, and fresh pico de gallo.",
    howItIsMade: "Green plantains sliced, smashed, and fried golden, layered with tender shredded meats and homemade salsa.",
    tastingNotes: ["Crispy Plantain Crunch", "Savory Seasoned Beef", "Tangy Lime Pico"],
    options: {
      protein: ["Shredded Beef (Carne)", "Shredded Chicken (Pollo)"]
    }
  },
  {
    id: "seco-de-pollo",
    title: "Seco de Pollo Tradicional",
    category: "crepes_kitchen",
    price: 4.50,
    badge: "Abuela's Recipe",
    badgeType: "comfort",
    dietary: ["Comfort Food"],
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    description: "Authentic Ecuadorian & Latin braised chicken stew slowly simmered in a savory broth of beer, naranjilla fruit, cilantro, and sweet bell peppers. Served with yellow achiote rice.",
    howItIsMade: "Braised on low heat with crushed cumin, garlic, beer reduction, and fresh herbs until fall-apart tender.",
    tastingNotes: ["Tangy Naranjilla Stew", "Fragrant Cilantro & Cumin", "Savory Golden Broth"],
    options: {
      sides: ["Yellow Achiote Rice & Maduro", "Crispy Patacones"]
    }
  },
  {
    id: "bistec-de-carne",
    title: "Bistec de Carne Encebollado",
    category: "crepes_kitchen",
    price: 5.00,
    badge: "Skillet Sauté",
    badgeType: "comfort",
    dietary: ["High Protein"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    description: "Thinly sliced steak skillet-seared with caramelized red onions, sweet bell peppers, and juicy tomatoes in a rich garlic pan reduction.",
    howItIsMade: "Flank steak flash-sautéed in cast iron with spiced tomato broth and simmered onions.",
    tastingNotes: ["Tender Beef", "Sweet Caramelized Onion", "Savory Garlic Pan Jus"],
    options: {
      temperature: ["Well Seared", "Medium Juicy"]
    }
  },
  {
    id: "arroz-con-pollo",
    title: "Arroz con Pollo a la Criolla",
    category: "crepes_kitchen",
    price: 4.50,
    badge: "Heritage Classic",
    badgeType: "comfort",
    dietary: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    description: "Heirloom seasoned yellow rice tossed with tender shredded chicken, sweet peas, diced carrots, and roasted red bell peppers.",
    howItIsMade: "Rice steeped in rich chicken stock with achiote oil, sofrito, cilantro, and tender poultry.",
    tastingNotes: ["Fragrant Achiote Rice", "Sweet Garden Peas", "Juicy Braised Poultry"],
    options: {
      sides: ["Served with Sweet Maduros", "Served with Crisp Ensalada"]
    }
  },
  {
    id: "papi-pollo",
    title: "Papi Pollo con Papas Fritas",
    category: "crepes_kitchen",
    price: 3.00,
    badge: "Street Comfort",
    badgeType: "daily",
    dietary: ["Street Food"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: "Crispy spiced fried chicken served over golden seasoned French fries with pink golf sauce and salsa verde.",
    howItIsMade: "Buttermilk marinated chicken bites fried crisp and served piping hot over hand-cut fries.",
    tastingNotes: ["Crispy Golden Crust", "Salty Seasoned Fries", "Creamy Salsa Drizzle"],
    options: {
      dips: ["Salsa Golf & Mayo", "Spicy Jalapeño Salsa"]
    }
  },
  {
    id: "postre-del-dia",
    title: "Postre del Día (Dessert of the Day)",
    category: "crepes_kitchen",
    price: 2.00,
    badge: "Daily Scratch Pastry",
    badgeType: "daily",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: "Ask your server for today's freshly baked scratch Latin pastry: Tres Leches slice, Alfajor cookie with dulce de leche, or Flan Napolitano.",
    howItIsMade: "Baked fresh every dawn by our in-house pastry chef.",
    tastingNotes: ["Dulce de Leche", "Buttery Vanilla Shortbread", "Caramelized Custard"],
    options: {
      selection: ["Tres Leches Cake", "Caramel Alfajores", "Flan Tradicional"]
    }
  },

  // ==========================================
  // 6. PLANT-BASED & VEGAN (PAGE 12)
  // ==========================================
  {
    id: "patacones-rancheros-veg",
    title: "Patacones Rancheros Veganos",
    category: "vegan_plantbased",
    price: 4.00,
    badge: "100% Plant-Based",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Crispy smashed fried green plantains layered with seasoned black beans, fresh Hass guacamole, pickled onions, and chimichurri herb oil.",
    howItIsMade: "Twice-fried plantain discs smothered in cumin-spiced black bean mash, diced avocado, and lime.",
    tastingNotes: ["Crispy Plantain Crunch", "Creamy Guacamole", "Zesty Chimichurri Herb"],
    options: {
      toppings: ["Extra Guacamole (+$1.50)", "Spicy Pico de Gallo"]
    }
  },
  {
    id: "patacones-con-guacamole",
    title: "Patacones con Guacamole Fresco",
    category: "vegan_plantbased",
    price: 3.50,
    badge: "Fresh & Healthy",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",
    description: "A basket of six freshly pressed crispy green plantain chips served with a mortar bowl of chunky lime and cilantro guacamole.",
    howItIsMade: "Hass avocados hand-crushed with red onion, jalapeño, lime juice, and sea salt, served with hot plantains.",
    tastingNotes: ["Crunchy Sea Salt Plantain", "Rich Lime Avocado Dip"],
    options: {
      spiciness: ["Mild & Creamy", "Spicy with Fresh Chiles"]
    }
  },
  {
    id: "arroz-primavera",
    title: "Arroz Primavera Especiado",
    category: "vegan_plantbased",
    price: 3.00,
    badge: "Spiced Veg Rice",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    description: "Fragrant long grain rice gently spiced with turmeric and annatto, tossed with sautéed bell peppers, sweet corn kernels, peas, and fresh cilantro.",
    howItIsMade: "Steamed in vegetable court-bouillon with seasonal garden vegetables.",
    tastingNotes: ["Fluffy Aromatic Rice", "Sweet Charred Corn", "Bright Cilantro"],
    options: {
      addons: ["Add Sweet Grilled Maduros (+$1.50)", "Add Black Beans (+$1.00)"]
    }
  },
  {
    id: "vegetales-al-grill",
    title: "Vegetales al Grill al Carbón",
    category: "vegan_plantbased",
    price: 3.50,
    badge: "Charred Garden",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Platter of fire-grilled seasonal vegetables: zucchini ribbons, sweet bell peppers, red onions, and mushrooms tossed with extra virgin olive oil and oregano.",
    howItIsMade: "Marinated in garlic, oregano, and olive oil, then seared over hot coals for gentle smokiness.",
    tastingNotes: ["Sweet Caramelized Peppers", "Smoky Wood Essence", "Oregano Aromatics"],
    options: {
      drizzles: ["Balsamic Glaze Drizzle", "Chimichurri Herb Oil"]
    }
  },
  {
    id: "chili-vegetariano",
    title: "Chili Vegetariano con Arroz",
    category: "vegan_plantbased",
    price: 4.00,
    badge: "Hearty Stew",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free", "High Fiber"],
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    description: "Slow-simmered three-bean chili (black beans, red pinto, and kidney) with fire-roasted tomatoes, sweet corn, and smoked chipotle, served over white rice.",
    howItIsMade: "Simmered 4 hours with cocoa nibs, cumin, coriander, and Mexican oregano.",
    tastingNotes: ["Rich Smoky Chipotle", "Earthy Bean Medley", "Warm Spiced Tomato"],
    options: {
      sides: ["Over Fluffy White Rice", "With Crispy Chifles Plantain Strips"]
    }
  },
  {
    id: "sopa-del-dia",
    title: "Sopa Campesina de Verduras",
    category: "vegan_plantbased",
    price: 2.00,
    badge: "Comfort Broth",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Steaming bowl of house-made vegetable soup with tender potatoes, sweet carrots, celery, and corn in a clear herb broth.",
    howItIsMade: "Slow-simmered garden vegetable stock finished with freshly chopped parsley and lime.",
    tastingNotes: ["Soothing Garden Herbs", "Sweet Root Vegetables", "Warm Clean Broth"],
    options: {
      portion: ["Bowl with Crusty Bread", "Cup with Tortilla Crisps"]
    }
  },
  {
    id: "ensalada-mixta",
    title: "Ensalada Mixta del Huerto",
    category: "vegan_plantbased",
    price: 2.50,
    badge: "Market Crisp",
    badgeType: "vegan",
    dietary: ["100% Vegan", "Raw & Clean"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Crisp romaine, vine-ripened tomatoes, shaved cucumber, red radish, and shredded carrots with house citrus vinaigrette.",
    howItIsMade: "Hand-torn fresh greens tossed to order with cold-pressed olive oil, lime, and sea salt.",
    tastingNotes: ["Crisp Hydroponic Crunch", "Zesty Citrus Dressing", "Sweet Garden Tomato"],
    options: {
      dressing: ["Lime & Herb Vinaigrette", "Creamy Guacamole Dressing"]
    }
  },

  // ==========================================
  // 7. BRUNCH COCKTAILS & CRAFT BAR (PAGE 11 & 12)
  // ==========================================
  {
    id: "bloody-mary",
    title: "Signature Mezcal / Vodka Bloody Mary",
    category: "cocktails_bar",
    price: 10.00,
    badge: "Brunch Hero",
    badgeType: "cocktail",
    dietary: ["Savory Cocktail", "Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted heirloom tomato clamato reduction, fresh horseradish, lime, Worcestershire, and cracked pepper, with Tajín smoked salt rim.",
    howItIsMade: "Shaken with craft spirit, strained over block ice, and skewered with charred jalapeño, lime wheel, and Spanish olive.",
    tastingNotes: ["Zesty Peppery Tomato", "Smoky Tajín Rim", "Bright Horseradish Kick"],
    options: {
      spirit: ["Premium Vodka", "Smoky Oaxacan Mezcal", "Blanco Tequila"],
      spiciness: ["Medium Spiced", "Extra Fiery Habanero"]
    }
  },
  {
    id: "margarita",
    title: "Desert Citrus Agave Margarita",
    category: "cocktails_bar",
    price: 9.00,
    badge: "Phoenix Favorite",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    description: "100% Blue Weber agave tequila, freshly squeezed Persian lime juice, orange curaçao, and organic agave nectar with smoked sea salt rim.",
    howItIsMade: "Double-strained over hand-carved ice sphere with expressed lime oils.",
    tastingNotes: ["Bright Lime Tartness", "Clean Agave Warmth", "Orange Blossom Perfume"],
    options: {
      rim: ["Smoked Salt & Tajín", "Pure Pink Himalayan Salt", "No Salt"]
    }
  },
  {
    id: "mimosa",
    title: "Fresh Pressed Valencia Mimosa",
    category: "cocktails_bar",
    price: 9.00,
    badge: "Brunch Staple",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
    description: "Crisp Spanish Cava sparkling wine topped with freshly squeezed sweet Valencia orange juice in a crystal flute.",
    howItIsMade: "Brut cava poured first, crowned with cold-pressed orange juice and an edible floral blossom.",
    tastingNotes: ["Effervescent Bubbles", "Sweet Tangy Orange", "Crisp Dry Finish"],
    options: {
      juice: ["Valencia Orange", "Ruby Grapefruit", "Tropical Passion Fruit"]
    }
  },
  {
    id: "cafe-borracho",
    title: "Café Borracho (Spiced Carajillo)",
    category: "cocktails_bar",
    price: 6.50,
    badge: "Barista Digestif",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "The quintessential Spanish-Mexican after-dinner classic: chilled double espresso shaken violently with Licor 43 citrus-vanilla liqueur over crushed ice.",
    howItIsMade: "Espresso and Licor 43 aerated in Boston shaker to generate a lush two-toned golden foam layer.",
    tastingNotes: ["Vanilla Pods & Mediterranean Citrus", "Bold Espresso Bitter", "Thick Silky Crema"],
    options: {
      spirit: ["Licor 43 (Traditional)", "Dark Añejo Rum", "Whiskey"]
    }
  },
  {
    id: "canelazo",
    title: "Canelazo Andino Caliente",
    category: "cocktails_bar",
    price: 5.50,
    badge: "Highland Warmth",
    badgeType: "heritage",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    description: "Traditional hot spiced toddy from the Andean highlands: cinnamon bark, sweet cloves, panela raw cane sugar, citrus peel, and sugar cane aguardiente.",
    howItIsMade: "Spiced panela water boiled gently, infused with aguardiente spirit and served steaming in ceramic mugs.",
    tastingNotes: ["Hot Cinnamon Steam", "Caramelized Raw Cane", "Herbal Anise Spirit"],
    options: {
      strength: ["Traditional Spirit", "Double Aguardiente Shot"]
    }
  },
  {
    id: "mojito-clasico",
    title: "Mojito Clásico de Hierbabuena",
    category: "cocktails_bar",
    price: 7.00,
    badge: "Fresh Herb",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    description: "Fresh spearmint leaves hand-muddled with raw cane sugar and fresh lime juice, topped with white rum and sparkling mineral water.",
    howItIsMade: "Mint gently pressed to release essential oils without bitterness, stirred with crushed ice and soda.",
    tastingNotes: ["Cool Garden Spearmint", "Crisp Lime Juice", "Effervescent Soda"],
    options: {
      flavor: ["Traditional Mint", "Blackberry (Mora) Mojito", "Passion Fruit Mojito"]
    }
  },
  {
    id: "caipirinha",
    title: "Caipirinha Tradicional",
    category: "cocktails_bar",
    price: 7.00,
    badge: "Brazilian Icon",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    description: "Whole fresh lime wedges crushed with turbinado raw sugar and artisanal Brazilian Cachaça sugar cane spirit over ice.",
    howItIsMade: "Limes vigorously muddled directly inside the rocks glass, topped with aged Cachaça and stirred.",
    tastingNotes: ["Rustic Cane Sugar", "Intense Fresh Lime Oils", "Earthy Sugar Cane Spirit"],
    options: {
      sweetness: ["Traditional Turbinado", "Less Sweet"]
    }
  },
  {
    id: "cerveza-artesanal",
    title: "Cerveza Artesanal Chilled",
    category: "cocktails_bar",
    price: 4.50,
    badge: "Cold Draft",
    badgeType: "cocktail",
    dietary: ["Contains Alcohol (21+)"],
    image: "https://images.unsplash.com/photo-1608270118029-79a4569faeb2?auto=format&fit=crop&w=800&q=80",
    description: "Rotating selection of craft Mexican and local Arizona craft brews served icy cold with fresh lime and sea salt.",
    howItIsMade: "Poured from tap into frozen chalice or popped fresh with a lime wedge.",
    tastingNotes: ["Crisp Malt Backbone", "Subtle Hop Aroma", "Clean Refreshing Finish"],
    options: {
      selection: ["Pacifico Clara", "Modelo Especial", "Local Arizona Hazy IPA"]
    }
  }
];

// Helper functions for data access
function getMenuItemById(id) {
  return MENU_ITEMS.find(item => item.id === id);
}

function getMenuItemsByCategory(category) {
  if (!category || category === "all") return MENU_ITEMS;
  return MENU_ITEMS.filter(item => item.category === category);
}

function searchMenuItems(query) {
  if (!query) return MENU_ITEMS;
  const q = query.toLowerCase().trim();
  return MENU_ITEMS.filter(item => 
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.howItIsMade.toLowerCase().includes(q) ||
    item.tastingNotes.some(n => n.toLowerCase().includes(q)) ||
    item.badge.toLowerCase().includes(q)
  );
}

// Export for browser
if (typeof window !== 'undefined') {
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
  window.getMenuItemById = getMenuItemById;
  window.getMenuItemsByCategory = getMenuItemsByCategory;
  window.searchMenuItems = searchMenuItems;
}
