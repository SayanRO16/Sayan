# 📱 Mobile-First Responsive Shopify Framework

[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile%20First-06B6D4?style=flat-square&logo=responsive&logoColor=white)](https://shopify.dev)
[![CSS Grid Framework](https://img.shields.io/badge/CSS-Grid%20%26%20Flexbox-1572B6?style=flat-square&logo=css3&logoColor=white)](https://github.com/SayanRO16)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A pixel-perfect, mobile-first responsive layout engine & sticky navigation section engineered for Shopify Online Store 2.0 by **Sayanthan S.** (Responsive Design Specialist).

---

## 📖 Description

Over 70% of e-commerce traffic originates from mobile devices. This repository provides a modern fluid grid framework, mobile hamburger navigation overlay with mega-menu capabilities, touch-optimized swipe controls, and zero horizontal scroll overflow.

---

## ✨ Features Included

- 📱 **Mobile-First Breakpoint Architecture:** 320px, 480px, 768px, 1024px, and 1440px media query definitions.
- 🍔 **Smooth Mobile Navigation Drawer:** Zero-lag slide-out menu drawer built with CSS transforms.
- 📐 **Fluid CSS Container System:** Responsive clamp font sizing and fluid margin gutters.
- ⚡ **Cross-Browser Validated:** Smooth rendering across iOS Safari, Android Chrome, and Desktop browsers.

---

## 🖼️ Mobile Breakpoint Diagram

```text
+-----------------------------------------------------------------------+
|  [VIEWPORT BREAKPOINTS]                                               |
|  Mobile (320px-480px)  -->  Single Column Grid                        |
|  Tablet (768px)       -->  2-Column Adaptive Layout                   |
|  Desktop (1024px+)     -->  4-Column Fluid Product Grid               |
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

1. Copy `assets/responsive-grid.css` into your theme's `assets/` directory.
2. Copy `sections/header-responsive.liquid` into your theme's `sections/` directory.
3. Replace or include in `layout/theme.liquid`:
   ```liquid
   {{ 'responsive-grid.css' | asset_url | stylesheet_tag }}
   {% section 'header-responsive' %}
   ```

---

## 💻 Usage Example

```html
<div class="responsive-grid-container">
  <div class="grid-col-12 grid-col-md-6 grid-col-lg-4">
    <!-- Responsive Card Content -->
  </div>
</div>
```

---

## 📂 Folder Structure

```text
responsive-shopify-store/
├── assets/
│   └── responsive-grid.css          # Mobile-first CSS grid & clamp utilities
├── sections/
│   └── header-responsive.liquid     # Liquid section with mobile menu drawer
└── README.md                        # Documentation & breakpoint guide
```

---

## 🛠️ Technologies Used

- **CSS Grid & Flexbox (`clamp()`, `minmax()`, `fit-content`)**
- **Shopify Liquid OS 2.0 Navigation API**
- **HTML5 Semantic Standards**

---

## 🌟 Why Choose This Project?

- **Mobile Conversion Rate Jump:** Enhances mobile user UX for frictionless checkout.
- **Zero Horizontal Overflow:** Eliminates annoying side-scrolling layout bugs.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
