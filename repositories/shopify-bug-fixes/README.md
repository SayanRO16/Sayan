# 🛠️ Shopify Bug Fixes & Troubleshooting Solutions

[![Shopify Bug Fixes](https://img.shields.io/badge/Shopify-Bug%20Fixes-EF4444?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://github.com/SayanRO16)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A curated repository of production-tested bug fixes, cart drawer currency formatting sync patches, layout shift remediations, and script conflict resolutions for Shopify themes developed by **Sayanthan S.** (Senior Shopify Developer).

---

## 📖 Description

Shopify themes frequently suffer from common bugs such as cart drawer pricing desynchronization during multi-currency switching, cumulative layout shifts (CLS) on image loads, broken variant price updates, and app script conflicts. This repository presents clean, standalone fixes for these issues.

---

## ✨ Features Fixes Included

- 💱 **Multi-Currency Cart Drawer Sync Fix:** Automatically syncs AJAX cart drawer total prices with Shopify Markets currency converter.
- 📐 **Cumulative Layout Shift (CLS) Patch:** Eliminates layout jump on dynamic product image loads using aspect-ratio container locks.
- 🔄 **AJAX Cart Quantity Race Condition Patch:** Prevents double-submitting items when rapidly clicking cart plus/minus controls.
- 🌐 **Cross-Browser Safari Date Parser Fix:** Fixes NaN delivery dates on iOS Safari devices.

---

## 🖼️ Screenshots / Architecture Placeholder

```text
+-----------------------------------------------------------------------+
|  [Before Fix]  Cart Drawer shows USD ($10) while header shows EUR (€9) |
|  [After Fix]   Cart Drawer auto-recalculates dynamically to EUR (€9)  |
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

1. Copy `assets/cart-fix.js` into your theme's `assets/` directory.
2. Copy `snippets/price-formatter.liquid` into your theme's `snippets/` directory.
3. Call the script in `layout/theme.liquid`:
   ```liquid
   <script src="{{ 'cart-fix.js' | asset_url }}" defer="defer"></script>
   ```

---

## 💻 Usage Example

```liquid
{% comment %} Safe Currency Formatter Snippet {% endcomment %}
{% render 'price-formatter', price: product.price, show_currency: true %}
```

---

## 📂 Folder Structure

```text
shopify-bug-fixes/
├── assets/
│   └── cart-fix.js            # Debounced AJAX cart queue & currency sync fix
├── snippets/
│   └── price-formatter.liquid # Safe price fallback & rounding snippet
└── README.md                  # Detailed fix documentation & instructions
```

---

## 🛠️ Technologies Used

- **Shopify Liquid (OS 2.0)**
- **JavaScript (ES6+)**
- **Shopify Currency & Cart APIs**

---

## 🌟 Why Choose This Project?

- **Immediate ROI:** Solves conversion-killing checkout & pricing bugs on live merchant stores.
- **Zero Overhead:** Native Vanilla JS patches without heavy external libraries.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
