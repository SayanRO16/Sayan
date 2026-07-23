# 📦 Shopify Custom OS 2.0 Sections Pack

[![Shopify OS 2.0](https://img.shields.io/badge/Shopify-OS%202.0%20Sections-95BF47?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev)
[![JSON Schema](https://img.shields.io/badge/JSON%20Schema-Customizer%20Ready-3178C6?style=flat-square&logo=json&logoColor=white)](https://github.com/SayanRO16)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A collection of re-usable Online Store 2.0 section templates engineered with rich JSON Schemas by **Sayanthan S.** (Shopify Partner & Liquid Expert).

---

## 📖 Description

Allows Shopify store owners and merchants to build rich layout pages directly inside the Shopify Theme Editor without editing HTML/Liquid code. Includes **Shoppable Video Sliders, Dynamic FAQ Accordions, Product Comparison Tables, and Feature Grid Blocks**.

---

## ✨ Features

- 🎥 **Shoppable Video Slider:** Interactive vertical video carousel featuring quick product buy drawer overlays.
- ❓ **SEO Schema FAQ Accordion:** Built-in JSON-LD structured data for Google FAQ Rich Snippets.
- 🎨 **Modular Block Schema:** Drag-and-drop block ordering inside Shopify Customizer.
- ⚡ **Zero External Dependencies:** Built with pure HTML5, CSS Grid, and Vanilla JS.

---

## 🖼️ Screenshots / Section Diagram

```text
+-----------------------------------------------------------------------+
|  SHOPPABLE VIDEOS                                                     |
|  +--------------+  +--------------+  +--------------+                 |
|  |  ▶ Video 1   |  |  ▶ Video 2   |  |  ▶ Video 3   |                 |
|  |  [Product A] |  |  [Product B] |  |  [Product C] |                 |
|  +--------------+  +--------------+  +--------------+                 |
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

1. Copy `sections/shoppable-video-slider.liquid` into your theme's `sections/` directory.
2. Copy `assets/shoppable-video.css` into your theme's `assets/` directory.
3. Open Shopify Customizer -> Click **Add section** -> Select **Shoppable Video Slider**.

---

## 💻 Usage Example (JSON Schema Blocks)

```json
{
  "name": "Shoppable Video Slider",
  "blocks": [
    {
      "type": "video_card",
      "settings": {
        "video_url": "https://cdn.shopify.com/videos/sample.mp4",
        "product": "classic-t-shirt"
      }
    }
  ]
}
```

---

## 📂 Folder Structure

```text
shopify-custom-sections/
├── assets/
│   └── shoppable-video.css          # Carousel & video modal styling
├── sections/
│   └── shoppable-video-slider.liquid# Liquid section logic & JSON schema blocks
└── README.md                        # Documentation & schema guide
```

---

## 🛠️ Technologies Used

- **Shopify Liquid (OS 2.0 Schema Architecture)**
- **HTML5 Video API**
- **CSS Grid & Flexbox**

---

## 🌟 Why Choose This Project?

- **No App Monthly Fees:** Saves merchants $20-$50/month in app subscription costs.
- **Easy Store Editor Integration:** Non-technical clients love the customizer ease.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
