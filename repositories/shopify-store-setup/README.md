# 🛍️ Shopify Store Setup Architecture & Launch Boilerplate

[![Shopify Store Setup](https://img.shields.io/badge/Shopify-Store%20Setup-95BF47?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev)
[![Launch Architecture](https://img.shields.io/badge/Architecture-OS%202.0-008060?style=flat-square&logo=shopify&logoColor=white)](https://github.com/SayanRO16)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A store setup configuration framework and theme settings architecture template created by **Sayanthan S.** (Certified Shopify Partner).

---

## 📖 Description

Building a brand new Shopify store requires a clean settings schema, standardized typography tokens, global color palettes, SEO meta tags, and structured layout templates. This repository serves as a starter kit for launch-ready Shopify store setups and redesign projects.

---

## ✨ Features Included

- ⚙️ **Global Theme Settings Architecture:** Standardized JSON Schema settings (`config/settings_schema.json`).
- 🏷️ **Dynamic SEO & OpenGraph Meta Tag Engine:** Automated Twitter card and Facebook preview generation.
- 🔐 **Shopify Payments & Multi-Currency Config:** Built-in support for Shopify Markets & localized checkout.
- 📋 **Launch Checklist:** Pre-launch QA checklist for payment gateways, taxes, domain DNS & analytics.

---

## 🖼️ Architecture Overview

```text
+-----------------------------------------------------------------------+
|  [LAYOUT: theme.liquid]                                               |
|  +-----------------------------------------------------------------+  |
|  |  HEADER  -->  [OS 2.0 DYNAMIC SECTIONS]  -->  FOOTER              |
|  +-----------------------------------------------------------------+  |
|  [CONFIG: settings_schema.json] (Colors, Fonts, Social, Cart Settings)|
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

1. Clone or copy `config/settings_schema.json` into your theme's `config/` folder.
2. Copy `layout/theme.liquid` into your theme's `layout/` folder.

---

## 💻 Usage Example

Access global store configuration settings anywhere in your Liquid theme files:

```liquid
<body style="background-color: {{ settings.color_body_bg }}; font-family: {{ settings.type_body_font.family }};">
```

---

## 📂 Folder Structure

```text
shopify-store-setup/
├── config/
│   └── settings_schema.json   # Global store color, typography & social schema
├── layout/
│   └── theme.liquid           # Clean OS 2.0 master layout file
└── README.md                  # Store setup guide & launch checklist
```

---

## 🛠️ Technologies Used

- **Shopify Liquid (OS 2.0)**
- **Shopify JSON Schema Specifications**
- **HTML5 Meta API**

---

## 🌟 Why Choose This Project?

- **Faster Client Onboarding:** Standardizes 0-to-1 Shopify store creation workflows.
- **Flawless Technical SEO:** Ensures Google indexes your new store properly from Day 1.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
