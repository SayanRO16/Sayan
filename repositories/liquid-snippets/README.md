# 💡 Essential Shopify Liquid Helper Snippets Collection

[![Shopify Liquid](https://img.shields.io/badge/Shopify-Liquid%20Snippets-95BF47?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev)
[![Clean Code](https://img.shields.io/badge/Code-Clean%20%26%20Reusable-008060?style=flat-square&logo=github&logoColor=white)](https://github.com/SayanRO16)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A collection of modular, production-ready Shopify Liquid code snippets designed to boost e-commerce store conversions engineered by **Sayanthan S.** (Liquid Expert & Shopify Partner).

---

## 📖 Description

Stop reinventing the wheel on every Shopify client project! This repository contains clean, battle-tested Liquid helper snippets for dynamic discount banners, inventory stock progress bars, and localized estimated delivery date calculators.

---

## ✨ Snippets Included

- 🎁 **`dynamic-discount-banner.liquid`:** Auto-calculates product percentage savings (e.g. `SAVE 35% TODAY`).
- 🔥 **`stock-progress-bar.liquid`:** Dynamic inventory indicator showing `Only 4 items remaining in stock!`.
- 🚚 **`estimated-delivery-date.liquid`:** Calculates dynamic delivery window based on client store processing times.

---

## 🖼️ Visual Snippet Preview

```text
+-----------------------------------------------------------------------+
|  [DYNAMIC DISCOUNT BANNER] -->  "SAVE $25.00 (25% OFF)"               |
|  [STOCK PROGRESS BAR]     -->  "HURRY! Only 3 Left [████████░░] 80%"  |
|  [DELIVERY ESTIMATE]      -->  "🚚 Estimated Delivery: Oct 28 - Oct 31"|
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

Copy any snippet file from `snippets/` into your Shopify theme's `snippets/` folder.

---

## 💻 Usage Examples

### 1. Dynamic Discount Percentage Badge
```liquid
{% render 'dynamic-discount-banner', product: product %}
```

### 2. Stock Progress Bar
```liquid
{% render 'stock-progress-bar', variant: product.selected_or_first_available_variant, max_stock: 20 %}
```

### 3. Estimated Delivery Date Calculator
```liquid
{% render 'estimated-delivery-date', min_days: 3, max_days: 5 %}
```

---

## 📂 Folder Structure

```text
liquid-snippets/
├── snippets/
│   ├── dynamic-discount-banner.liquid  # Percentage savings calculation logic
│   ├── stock-progress-bar.liquid       # Visual inventory progress bar
│   └── estimated-delivery-date.liquid  # Liquid date filter calculator
└── README.md                           # Documentation & usage guide
```

---

## 🛠️ Technologies Used

- **Shopify Liquid Math & Date Filters**
- **HTML5 & CSS flexbox**

---

## 🌟 Why Choose This Project?

- **Copy-Paste Simplicity:** Plug into any Shopify Online Store 2.0 theme in seconds.
- **Zero External JS:** 100% server-side Liquid calculation for maximum speed.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
