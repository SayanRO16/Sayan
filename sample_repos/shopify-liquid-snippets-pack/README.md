# 🛍️ Shopify Liquid Snippets & OS 2.0 Components Pack

A curated collection of production-ready, high-converting **Shopify Liquid snippets** and **Online Store 2.0 sections** engineered for maximum speed, mobile responsiveness, and conversion rate optimization (CRO).

[![Shopify Partner](https://img.shields.io/badge/Shopify_Partner-Verified-008060?style=for-the-badge&logo=shopify&logoColor=white)](#)
[![Liquid](https://img.shields.io/badge/Liquid-OS_2.0-95BF47?style=for-the-badge&logo=shopify&logoColor=white)](#)

---

## 📦 What's Inside

- `snippets/custom-ajax-cart-drawer.liquid`: Ultra-fast slide-out cart drawer with dynamic progress bar for free shipping.
- `snippets/sticky-add-to-cart-bar.liquid`: Floating conversion bar for product pages with variant selector.
- `sections/custom-faq-accordion.liquid`: SEO-optimized structured data FAQ accordion section with schema markup.

---

## ⚡ Performance Highlights

- **Zero External Dependencies:** Built with pure Vanilla JS (ES6+) and native Liquid.
- **Core Web Vitals Optimized:** Zero Layout Shift (CLS) and deferred execution.
- **Theme Editor Ready:** Fully customizable via Shopify Admin Customizer schema settings.

---

## 💻 Sample Liquid Code Snippet

```liquid
{% comment %}
  Custom Free Shipping Progress Bar Snippet
{% endcomment %}
{% assign free_shipping_threshold = settings.free_shipping_limit | times: 100 %}
{% assign current_subtotal = cart.total_price %}

<div class="free-shipping-bar" data-threshold="{{ free_shipping_threshold }}">
  {% if current_subtotal >= free_shipping_threshold %}
    <p class="shipping-success">🎉 Congratulations! You unlocked <strong>FREE Shipping!</strong></p>
  {% else %}
    {% assign remaining = free_shipping_threshold | minus: current_subtotal %}
    <p>Add <strong>{{ remaining | money }}</strong> more to get <strong>FREE Shipping!</strong></p>
  {% endif %}
</div>
```

---

## 🤝 Need Custom Shopify Theme Work?

I am a **Certified Shopify Partner**. Hire me on Upwork for custom theme sections, custom Liquid development, and store speed optimization!
