/**
 * EL CAFEZETO - Core Interactive Application
 * Vanilla JavaScript (No external frameworks)
 * Handles: Language Translation Engine, Responsive Navigation Drawer,
 * Preloader, 3D Tilt Physics, Parallax, Cart Persistence, Menu Rendering, Live Hours
 */

// ==========================================================================
// 1. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
const CART_STORAGE_KEY = 'el_cafezito_order_bag_v1';
const LANG_STORAGE_KEY = 'el_cafezito_lang';
const TAX_RATE = 0.086; // Phoenix, AZ average hospitality tax (8.6%)

let cartState = {
  items: []
};

// Initialize cart from localStorage
function initCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      cartState = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not read cart from localStorage', e);
  }
  updateBagUI();
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
  } catch (e) {
    console.warn('Could not save cart to localStorage', e);
  }
  updateBagUI();
}

function addItemToCart(item, options = {}) {
  let finalPrice = item.price;
  if (options.size && options.size.extra) finalPrice += options.size.extra;
  if (options.milk && options.milk.extra) finalPrice += options.milk.extra;
  if (options.addons && options.addons.length) {
    options.addons.forEach(a => { if (a.extra) finalPrice += a.extra; });
  }

  const currentLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';
  const loc = getLocalizedMenuItem(item, currentLang);

  const configKey = `${item.id}-${options.size ? options.size.label : ''}-${options.milk ? options.milk.label : ''}-${options.temp || ''}`;

  const existingIndex = cartState.items.findIndex(ci => ci.configKey === configKey);
  if (existingIndex > -1) {
    cartState.items[existingIndex].quantity += 1;
  } else {
    cartState.items.push({
      id: item.id,
      configKey: configKey,
      title: loc.title || item.title,
      price: finalPrice,
      image: item.image,
      quantity: 1,
      options: options
    });
  }

  saveCart();
  const addedMsg = currentLang === 'es' 
    ? `Añadido <strong>${loc.title}</strong> a tu bolsa` 
    : `Added <strong>${loc.title}</strong> to your Order Bag`;
  showToast(addedMsg);
  openBagDrawer();
}

function updateItemQuantity(configKey, delta) {
  const index = cartState.items.findIndex(ci => ci.configKey === configKey);
  if (index > -1) {
    cartState.items[index].quantity += delta;
    if (cartState.items[index].quantity <= 0) {
      cartState.items.splice(index, 1);
    }
    saveCart();
  }
}

function removeItemFromCart(configKey) {
  cartState.items = cartState.items.filter(ci => ci.configKey !== configKey);
  saveCart();
  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';
  showToast(curLang === 'es' ? 'Producto eliminado de la bolsa' : 'Item removed from bag');
}

function clearCart() {
  cartState.items = [];
  saveCart();
}

function updateBagUI() {
  const countBadges = document.querySelectorAll('.bag-count-badge');
  const totalCount = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
  
  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.style.transform = 'scale(1.15)';
      setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
    }
  });

  const container = document.getElementById('bagItemsContainer');
  const subtotalEl = document.getElementById('bagSubtotal');
  const taxEl = document.getElementById('bagTax');
  const totalEl = document.getElementById('bagTotal');
  const checkoutBtn = document.getElementById('btnCheckoutPickup');

  if (!container) return;

  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';
  const tEmptyTitle = getTranslation('bagEmptyTitle', curLang);
  const tEmptyDesc = getTranslation('bagEmptyDesc', curLang);
  const tExploreBtn = getTranslation('bagExploreBtn', curLang);

  if (cartState.items.length === 0) {
    container.innerHTML = `
      <div class="bag-empty-notice">
        <div class="bag-empty-icon">☕</div>
        <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; color: var(--color-espresso);">${tEmptyTitle}</h4>
        <p style="font-size: 0.88rem; color: var(--color-espresso-light);">${tEmptyDesc}</p>
        <a href="menu.html" class="btn-primary" style="margin-top: 18px; display: inline-flex;">${tExploreBtn}</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (taxEl) taxEl.textContent = '$0.00';
    if (totalEl) totalEl.textContent = '$0.00';
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = '0.5';
      checkoutBtn.style.cursor = 'not-allowed';
    }
    return;
  }

  let subtotal = 0;
  let itemsHtml = '';

  cartState.items.forEach(ci => {
    const itemTotal = ci.price * ci.quantity;
    subtotal += itemTotal;

    const details = [];
    if (ci.options.size) details.push(ci.options.size.label);
    if (ci.options.temp) details.push(ci.options.temp);
    if (ci.options.milk) details.push(ci.options.milk.label);
    if (ci.options.sweetness) details.push(ci.options.sweetness);
    if (ci.options.addons && ci.options.addons.length) {
      ci.options.addons.forEach(a => details.push(a.label));
    }
    const detailsStr = details.join(' • ');

    itemsHtml += `
      <div class="bag-item-card" data-key="${ci.configKey}">
        <img src="${ci.image}" alt="${ci.title}" class="bag-item-thumb">
        <div class="bag-item-info">
          <h4 class="bag-item-name">${ci.title}</h4>
          ${detailsStr ? `<div class="bag-item-customizations">${detailsStr}</div>` : ''}
          <div class="bag-item-bottom-row">
            <span class="bag-item-price">$${itemTotal.toFixed(2)}</span>
            <div style="display: flex; align-items: center;">
              <div class="quantity-control">
                <button class="btn-qty" onclick="updateItemQuantity('${ci.configKey}', -1)" title="Decrease">-</button>
                <span class="qty-display">${ci.quantity}</span>
                <button class="btn-qty" onclick="updateItemQuantity('${ci.configKey}', 1)" title="Increase">+</button>
              </div>
              <button class="btn-item-remove" onclick="removeItemFromCart('${ci.configKey}')" title="Remove item">✕</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';
  }
}

// ==========================================================================
// 2. BAG DRAWER & CHECKOUT MODAL
// ==========================================================================
function openBagDrawer() {
  closeMobileNav();
  const drawer = document.getElementById('bagDrawer');
  const backdrop = document.getElementById('bagDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBagDrawer() {
  const drawer = document.getElementById('bagDrawer');
  const backdrop = document.getElementById('bagDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openCheckoutModal() {
  closeBagDrawer();
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  const totalEl = document.getElementById('bagTotal');
  const checkoutTotalDisplay = document.getElementById('checkoutModalTotal');
  if (checkoutTotalDisplay && totalEl) {
    checkoutTotalDisplay.textContent = totalEl.textContent;
  }

  modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
}

function processSimulatedOrder(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('customerName');
  const customerName = nameInput ? nameInput.value : 'Coffee Connoisseur';
  const pickupTime = document.getElementById('pickupTimeSelect')?.value || 'In 10-15 Minutes';

  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';
  const tSuccessTitle = getTranslation('orderSuccessTitle', curLang);
  const tSuccessMsg = getTranslation('orderSuccessMsg', curLang).replace('{name}', customerName);
  const tPickupTimeLabel = getTranslation('orderReadyTimeLabel', curLang);
  const tPickupCounterLabel = getTranslation('orderCounterLabel', curLang);
  const tPickupCounterVal = getTranslation('orderCounterVal', curLang);
  const tOrderIdLabel = getTranslation('orderIdLabel', curLang);
  const tDoneBtn = getTranslation('btnEnjoyCoffee', curLang);

  const modalBox = document.querySelector('.checkout-modal-box');
  if (modalBox) {
    modalBox.innerHTML = `
      <div style="text-align: center; padding: 20px 0;">
        <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sage-light); color: var(--color-sage); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 20px;">✓</div>
        <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--color-espresso); margin-bottom: 8px;">${tSuccessTitle}</h3>
        <p style="font-size: 1rem; color: var(--color-espresso-light); margin-bottom: 24px;">
          ${tSuccessMsg}
        </p>
        <div style="background: var(--color-cream); border: 1px dashed var(--color-border); border-radius: var(--radius-lg); padding: 20px; text-align: left; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
            <span style="color: var(--color-espresso-light);">${tPickupTimeLabel}</span>
            <strong style="color: var(--color-terracotta);">${pickupTime}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
            <span style="color: var(--color-espresso-light);">${tPickupCounterLabel}</span>
            <strong>${tPickupCounterVal}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span style="color: var(--color-espresso-light);">${tOrderIdLabel}</span>
            <strong style="letter-spacing: 1px;">#CFZ-${Math.floor(1000 + Math.random() * 9000)}</strong>
          </div>
        </div>
        <button class="btn-primary" onclick="closeCheckoutModal(); clearCart();" style="width: 100%; justify-content: center;">${tDoneBtn}</button>
      </div>
    `;
  }
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 3. RESPONSIVE MOBILE NAVIGATION DRAWER
// ==========================================================================
function openMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 4. MULTI-LANGUAGE TRANSLATION ENGINE & AUTO-DETECTION
// ==========================================================================
function initLanguageSystem() {
  const savedPref = getSavedLanguagePreference();
  applyLanguage(savedPref);

  // Bind dropdown toggle
  const langTrigger = document.getElementById('btnLangTrigger');
  const langDropdown = document.getElementById('langSelector');

  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
      }
    });
  }

  // Bind dropdown options
  document.querySelectorAll('.lang-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang');
      applyLanguage(code);
      if (langDropdown) langDropdown.classList.remove('active');
    });
  });

  // Bind mobile chips
  document.querySelectorAll('.mobile-lang-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.getAttribute('data-lang');
      applyLanguage(code);
    });
  });
}

function applyLanguage(selectedPref) {
  let activeCode = selectedPref;
  if (selectedPref === 'auto') {
    activeCode = detectBrowserLanguage();
    localStorage.setItem(LANG_STORAGE_KEY, 'auto');
  } else {
    localStorage.setItem(LANG_STORAGE_KEY, selectedPref);
  }

  document.documentElement.lang = activeCode;

  // 1. Update Dropdown and Chip UI state
  updateLanguageSelectorUI(selectedPref, activeCode);

  // 2. Translate all static DOM elements with [data-i18n]
  const dict = TRANSLATIONS[activeCode] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // 3. Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict && dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 4. Update live hours status
  updateLiveHoursStatus();

  // 5. If on menu.html, re-render catalog & tabs with localized text
  if (typeof renderMenuCatalog === 'function') {
    const searchInput = document.getElementById('menuSearchInput');
    const query = searchInput ? searchInput.value : '';
    const activePill = document.querySelector('.category-filter-pill.active');
    const activeCat = activePill ? activePill.getAttribute('data-category') : 'all';
    
    renderCategoryNav();
    filterMenu(activeCat, query);
  }

  // 6. Update cart summary text
  updateBagUI();
}

function updateLanguageSelectorUI(selectedPref, activeCode) {
  // Update header trigger button label
  const langLabelEl = document.querySelector('.btn-lang-trigger .lang-label');
  const langFlagEl = document.querySelector('.btn-lang-trigger .lang-flag');

  const matchLang = SUPPORTED_LANGUAGES.find(l => l.code === (selectedPref === 'auto' ? 'auto' : activeCode));
  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === activeCode) || { flag: '🇺🇸', name: 'English' };

  if (langFlagEl) {
    langFlagEl.textContent = selectedPref === 'auto' ? '🌐' : activeLangObj.flag;
  }
  if (langLabelEl) {
    if (selectedPref === 'auto') {
      langLabelEl.textContent = `Auto (${activeCode.toUpperCase()})`;
    } else {
      langLabelEl.textContent = activeCode.toUpperCase();
    }
  }

  // Update selected class in dropdown
  document.querySelectorAll('.lang-option-btn').forEach(btn => {
    const code = btn.getAttribute('data-lang');
    if (code === selectedPref) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  // Update mobile chips
  document.querySelectorAll('.mobile-lang-chip').forEach(chip => {
    const code = chip.getAttribute('data-lang');
    if (code === selectedPref) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// Localize menu item based on current active language
function getLocalizedMenuItem(item, langCode) {
  const lang = langCode || getActiveLanguage();
  if (typeof ITEM_TRANSLATIONS !== 'undefined' && ITEM_TRANSLATIONS[item.id] && ITEM_TRANSLATIONS[item.id][lang]) {
    const loc = ITEM_TRANSLATIONS[item.id][lang];
    return {
      title: loc.title || item.title,
      badge: loc.badge || item.badge,
      description: loc.description || item.description,
      howItIsMade: loc.howItIsMade || item.howItIsMade,
      tastingNotes: loc.tastingNotes || item.tastingNotes
    };
  }
  return {
    title: item.title,
    badge: item.badge,
    description: item.description,
    howItIsMade: item.howItIsMade,
    tastingNotes: item.tastingNotes
  };
}

// ==========================================================================
// 5. 3D TILT PHYSICS & PARALLAX
// ==========================================================================
function init3DTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  
  cards.forEach(card => {
    let glare = card.querySelector('.tilt-card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-card-glare';
      card.appendChild(glare);
    }

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'box-shadow 0.2s ease, border-color 0.2s ease';
      if (glare) glare.style.opacity = '1';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px) scale3d(1.015, 1.015, 1.015)`;

      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
      if (glare) glare.style.opacity = '0';
    });
  });
}

function initAmbientParallax() {
  const floatingElements = document.querySelectorAll('.floating-3d-item');
  if (!floatingElements.length) return;

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;

    floatingElements.forEach((el, index) => {
      const depth = (index + 1) * 18;
      const moveX = normX * depth;
      const moveY = normY * depth;
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  }, { passive: true });
}

// ==========================================================================
// 6. LIVE OPENING HOURS STATUS (PHOENIX TIMEZONE)
// ==========================================================================
function getPhoenixCurrentTime() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Phoenix',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '12', 10);
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
    
    const dayStr = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Phoenix', weekday: 'short' }).format(now);
    const daysMap = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
    
    return {
      day: daysMap[dayStr] !== undefined ? daysMap[dayStr] : now.getDay(),
      hour: hour,
      minute: minute,
      currentTime: hour + (minute / 60)
    };
  } catch (e) {
    const now = new Date();
    return {
      day: now.getDay(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      currentTime: now.getHours() + (now.getMinutes() / 60)
    };
  }
}

function updateLiveHoursStatus() {
  const statusPills = document.querySelectorAll('.live-status-pill');
  const drawerStatusEl = document.querySelector('.mobile-drawer-status-card');
  const { day, currentTime } = getPhoenixCurrentTime();
  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';

  const tOpenNow = getTranslation('liveOpenNow', curLang);
  const tClosed = getTranslation('liveClosed', curLang);
  const tTodayUntil = getTranslation('liveTodayUntil', curLang);
  const tTodayBadge = getTranslation('liveToday', curLang);

  let isOpen = false;
  let statusText = '';

  if (day === 0) {
    if (currentTime >= 8 && currentTime < 17) {
      isOpen = true;
      statusText = `${tTodayUntil} 5:00 PM`;
    } else {
      statusText = `${tClosed} Mon 7:00 AM`;
    }
  } else {
    if (currentTime >= 7 && currentTime < 19) {
      isOpen = true;
      statusText = `${tOpenNow} 7:00 PM`;
    } else {
      const nextTime = (day === 6) ? 'Sun 8:00 AM' : '7:00 AM';
      statusText = `${tClosed} ${nextTime}`;
    }
  }

  statusPills.forEach(pill => {
    pill.innerHTML = `
      <span class="pulse-dot" style="background: ${isOpen ? 'var(--color-sage)' : '#B23B3B'};"></span>
      <span style="color: ${isOpen ? 'var(--color-sage-dark)' : 'var(--color-espresso)'}; font-weight: 700;">${statusText} (PHX)</span>
    `;
  });

  if (drawerStatusEl) {
    drawerStatusEl.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span class="pulse-dot" style="background: ${isOpen ? 'var(--color-sage)' : '#B23B3B'};"></span>
        <strong style="color: ${isOpen ? 'var(--color-sage-dark)' : '#B23B3B'}; font-size: 0.9rem;">${statusText}</strong>
      </div>
      <p style="font-size: 0.8rem; color: var(--color-espresso-light);">Phoenix, AZ: 1428 E McDowell Rd</p>
    `;
  }

  const rows = document.querySelectorAll('.hours-table tr');
  if (rows.length >= 7) {
    const tableIndex = (day === 0) ? 6 : day - 1;
    rows.forEach((r, idx) => {
      if (idx === tableIndex) {
        r.classList.add('today-row');
        const dayCell = r.querySelector('td.day');
        if (dayCell && !dayCell.innerHTML.includes('today-pill')) {
          dayCell.innerHTML += ` <span class="today-pill" style="font-size:0.75rem; background: var(--color-terracotta-light); color: var(--color-terracotta); padding: 2px 6px; border-radius: 99px; margin-left: 6px;">${tTodayBadge}</span>`;
        }
      }
    });
  }
}

// ==========================================================================
// 7. CINEMATIC PRELOADER
// ==========================================================================
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;

  const hide = () => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800);
  };

  window.addEventListener('load', () => setTimeout(hide, 700));
  if (document.readyState === 'complete') setTimeout(hide, 700);
}

// ==========================================================================
// 8. MENU RENDERING ENGINE (FOR MENU.HTML)
// ==========================================================================
function renderCategoryNav() {
  const categoryNavContainer = document.getElementById('categoryScrollContainer');
  if (!categoryNavContainer || typeof MENU_CATEGORIES === 'undefined') return;

  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';

  const catKeyMap = {
    'all': 'catAll',
    'specialties': 'catSpecialties',
    'coffee': 'catCoffee',
    'wellness_teas': 'catWellnessTeas',
    'juices_licuados': 'catJuicesLicuados',
    'crepes_kitchen': 'catCrepesKitchen',
    'vegan_plantbased': 'catVeganPlantbased',
    'cocktails_bar': 'catCocktailsBar'
  };

  let navHtml = '';
  MENU_CATEGORIES.forEach((cat, idx) => {
    const activeClass = idx === 0 ? 'active' : '';
    const localizedCatName = getTranslation(catKeyMap[cat.id] || cat.id, curLang) || cat.name;
    navHtml += `
      <button class="category-filter-pill ${activeClass}" data-category="${cat.id}">
        <span>${localizedCatName}</span>
        <span class="category-pill-count">${cat.count}</span>
      </button>
    `;
  });
  categoryNavContainer.innerHTML = navHtml;

  categoryNavContainer.querySelectorAll('.category-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryNavContainer.querySelectorAll('.category-filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedCat = btn.getAttribute('data-category');
      filterMenu(selectedCat, document.getElementById('menuSearchInput')?.value || '');
    });
  });
}

function renderMenuCatalog() {
  const catalogContainer = document.getElementById('menuCatalogContainer');
  if (!catalogContainer || typeof MENU_ITEMS === 'undefined') return;

  renderCategoryNav();
  filterMenu('all', '');

  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('menuClearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'block' : 'none';
      
      const activePill = document.querySelector('.category-filter-pill.active');
      const activeCat = activePill ? activePill.getAttribute('data-category') : 'all';
      filterMenu(activeCat, query);
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      const activePill = document.querySelector('.category-filter-pill.active');
      const activeCat = activePill ? activePill.getAttribute('data-category') : 'all';
      filterMenu(activeCat, '');
      searchInput.focus();
    });
  }
}

function filterMenu(category, searchString) {
  const container = document.getElementById('menuCatalogContainer');
  const emptyState = document.getElementById('emptyMenuState');
  if (!container) return;

  let filtered = MENU_ITEMS;

  if (category && category !== 'all') {
    filtered = filtered.filter(item => item.category === category);
  }

  if (searchString && searchString.trim().length > 0) {
    const q = searchString.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.howItIsMade.toLowerCase().includes(q) ||
      item.tastingNotes.some(n => n.toLowerCase().includes(q)) ||
      item.badge.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  const curLang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en';

  const catKeyMap = {
    'specialties': 'catSpecialties',
    'coffee': 'catCoffee',
    'wellness_teas': 'catWellnessTeas',
    'juices_licuados': 'catJuicesLicuados',
    'crepes_kitchen': 'catCrepesKitchen',
    'vegan_plantbased': 'catVeganPlantbased',
    'cocktails_bar': 'catCocktailsBar'
  };

  let html = '';
  if ((!category || category === 'all') && (!searchString || searchString.trim() === '')) {
    MENU_CATEGORIES.filter(c => c.id !== 'all').forEach(cat => {
      const itemsInCat = filtered.filter(i => i.category === cat.id);
      if (itemsInCat.length > 0) {
        const localizedCatTitle = getTranslation(catKeyMap[cat.id], curLang) || cat.name;
        html += `
          <div class="catalog-category-group" id="category-${cat.id}">
            <div class="category-group-header">
              <h2 class="category-group-title">${localizedCatTitle}</h2>
              <span class="category-group-desc">${itemsInCat.length} selections</span>
            </div>
            <div class="menu-cards-grid">
              ${itemsInCat.map(item => createMenuCardHTML(item, curLang)).join('')}
            </div>
          </div>
        `;
      }
    });
  } else {
    html = `
      <div class="menu-cards-grid">
        ${filtered.map(item => createMenuCardHTML(item, curLang)).join('')}
      </div>
    `;
  }

  container.innerHTML = html;

  init3DTiltCards();
  initCardOptionChips();
}

function createMenuCardHTML(item, langCode) {
  const curLang = langCode || (typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'en');
  const loc = getLocalizedMenuItem(item, curLang);

  const tHowMade = getTranslation('howItIsMadeLabel', curLang);
  const tFlavor = getTranslation('flavorProfileLabel', curLang);
  const tAddBag = getTranslation('btnAddToBag', curLang);
  const tSelectSize = getTranslation('selectSizeLabel', curLang);
  const tTemp = getTranslation('tempLabel', curLang);
  const tMilk = getTranslation('milkChoiceLabel', curLang);

  const tastingChips = loc.tastingNotes.map(n => `<span class="tasting-note-chip">${n}</span>`).join('');
  
  let optionsHtml = '';
  if (item.options) {
    if (item.options.sizes && item.options.sizes.length > 1) {
      optionsHtml += `
        <div class="customization-section">
          <div class="customization-title">${tSelectSize}</div>
          <div class="chip-options-row" data-type="size">
            ${item.options.sizes.map((s, idx) => `
              <button class="option-chip ${idx === 0 ? 'selected' : ''}" data-label="${s.label}" data-extra="${s.extra || 0}">
                ${s.label} ${s.extra ? `(+$${s.extra.toFixed(2)})` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (item.options.temps && item.options.temps.length > 1) {
      optionsHtml += `
        <div class="customization-section">
          <div class="customization-title">${tTemp}</div>
          <div class="chip-options-row" data-type="temp">
            ${item.options.temps.map((t, idx) => `
              <button class="option-chip ${idx === 0 ? 'selected' : ''}" data-label="${t}">${t}</button>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (item.options.milks && item.options.milks.length > 1) {
      optionsHtml += `
        <div class="customization-section">
          <div class="customization-title">${tMilk}</div>
          <div class="chip-options-row" data-type="milk">
            ${item.options.milks.map((m, idx) => `
              <button class="option-chip ${idx === 0 ? 'selected' : ''}" data-label="${m.label}" data-extra="${m.extra || 0}">
                ${m.label} ${m.extra ? `(+$${m.extra.toFixed(2)})` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  return `
    <div class="tilt-card-container">
      <div class="tilt-card" data-item-id="${item.id}">
        <div class="card-media">
          <img src="${item.image}" alt="${loc.title}" loading="lazy">
          <div class="card-badge-top">
            <span class="badge-tag ${item.badgeType || 'signature'}">${loc.badge}</span>
          </div>
          <div class="card-price-pill">$${item.price.toFixed(2)}</div>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${loc.title}</h3>
          </div>
          <p class="card-desc">${loc.description}</p>
          
          <div class="card-details-box">
            <div class="detail-block">
              <div class="detail-label">
                <span>🌱</span> ${tHowMade}
              </div>
              <p class="detail-text">${loc.howItIsMade}</p>
            </div>
            <div class="detail-block">
              <div class="detail-label">
                <span>✨</span> ${tFlavor}
              </div>
              <div class="tasting-notes-list">${tastingChips}</div>
            </div>
          </div>

          ${optionsHtml}

          <div class="card-action-footer">
            <button class="btn-add-bag" onclick="handleCardAddToBag('${item.id}', this)">
              <span>${tAddBag}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initCardOptionChips() {
  document.querySelectorAll('.chip-options-row').forEach(row => {
    row.querySelectorAll('.option-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        row.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });
  });
}

function handleCardAddToBag(itemId, btn) {
  const card = btn.closest('.tilt-card');
  const item = getMenuItemById(itemId);
  if (!item || !card) return;

  const options = {};

  const sizeChip = card.querySelector('.chip-options-row[data-type="size"] .option-chip.selected');
  if (sizeChip) {
    options.size = {
      label: sizeChip.getAttribute('data-label'),
      extra: parseFloat(sizeChip.getAttribute('data-extra') || '0')
    };
  }

  const tempChip = card.querySelector('.chip-options-row[data-type="temp"] .option-chip.selected');
  if (tempChip) {
    options.temp = tempChip.getAttribute('data-label');
  }

  const milkChip = card.querySelector('.chip-options-row[data-type="milk"] .option-chip.selected');
  if (milkChip) {
    options.milk = {
      label: milkChip.getAttribute('data-label'),
      extra: parseFloat(milkChip.getAttribute('data-extra') || '0')
    };
  }

  addItemToCart(item, options);
}

// ==========================================================================
// 9. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCart();
  initLanguageSystem();
  init3DTiltCards();
  initAmbientParallax();
  updateLiveHoursStatus();
  renderMenuCatalog();

  // Header scroll detection
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Mobile navigation trigger
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileNav);
  }

  // Close modals & drawers on escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBagDrawer();
      closeCheckoutModal();
      closeMobileNav();
    }
  });
});
