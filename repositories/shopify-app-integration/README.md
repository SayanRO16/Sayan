# 🔌 Shopify App Integration Bridges & API Event Handlers

[![Shopify Apps](https://img.shields.io/badge/Shopify-App%20Integration-008060?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev)
[![Klaviyo API](https://img.shields.io/badge/Klaviyo-Event%20Tracker-2563EB?style=flat-square)](https://klaviyo.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Seamless frontend integration bridges, custom webhooks, and event handlers for popular Shopify apps (**Klaviyo, Recharge, Yotpo, Judge.me, Gorgias**) engineered by **Sayanthan S.** (Shopify Developer).

---

## 📖 Description

Integrate third-party Shopify apps into custom Online Store 2.0 themes without sacrificing page load speed or causing JavaScript runtime errors. Includes automated Klaviyo `Viewed Product` & `Added to Cart` tracking scripts, Recharge subscription widget listeners, and dynamic review badge loaders.

---

## ✨ Features Included

- 📧 **Klaviyo Custom Event Tracker:** Real-time JavaScript event dispatcher for abandoned cart flows and product views.
- 🔄 **Recharge Subscription Listener:** Hooks into Shopify AJAX cart drawer when a customer switches to recurring delivery.
- ⭐ **Judge.me / Yotpo Lazy Star Rating Handler:** Loads review stars dynamically on scroll to prevent render-blocking.
- 🎣 **Custom Webhook Payload Processor:** Frontend JS listener for webhook triggers.

---

## 🖼️ Integration Flowchart

```text
+-----------------------------------------------------------------------+
|  [USER ACTION: Add To Cart]                                            |
|        │                                                              |
|        ├──► 1. Shopify AJAX Cart API (/cart/add.js)                    |
|        ├──► 2. Klaviyo API (`klaviyo.push(['track', 'Added to Cart'])`) |
|        └──► 3. Recharge Subscription Check (`item.properties`)       |
+-----------------------------------------------------------------------+
```

---

## 🚀 Installation

1. Copy `assets/app-integrations.js` into `assets/`.
2. Copy `snippets/klaviyo-event-tracker.liquid` into `snippets/`.
3. Include in `layout/theme.liquid`:
   ```liquid
   {% render 'klaviyo-event-tracker' %}
   <script src="{{ 'app-integrations.js' | asset_url }}" defer="defer"></script>
   ```

---

## 💻 Usage Example

```javascript
// Fire Klaviyo Custom Event on AJAX Add To Cart
document.addEventListener('cart:updated', (e) => {
  if (window.klaviyo) {
    klaviyo.push(['track', 'Added to Cart', e.detail]);
  }
});
```

---

## 📂 Folder Structure

```text
shopify-app-integration/
├── assets/
│   └── app-integrations.js            # Unified app listener bridge script
├── snippets/
│   └── klaviyo-event-tracker.liquid   # Klaviyo Liquid payload generator
└── README.md                          # API Integration guide & docs
```

---

## 🛠️ Technologies Used

- **Shopify Storefront API & AJAX Cart API**
- **Klaviyo & Recharge JavaScript APIs**
- **Vanilla JavaScript (ES6 Custom Events)**

---

## 🌟 Why Choose This Project?

- **Reliable Data Sync:** Ensures 100% accurate tracking for email marketing & subscriptions.
- **Bug-Free Operations:** Prevents JavaScript errors caused by missing app objects.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📫 Contact & Hire Developer

**Developer:** Sayanthan S. (Certified Shopify Partner)  
**Upwork Profile:** [Hire Me on Upwork](https://www.upwork.com/freelancers/~01142b0eff160cf26a?mp_source=share)  
**Email:** info@Xloxi.com  
**GitHub:** [@SayanRO16](https://github.com/SayanRO16)
