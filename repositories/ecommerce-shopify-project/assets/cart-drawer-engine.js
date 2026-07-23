/**
 * Master AJAX Cart Engine
 * Author: Sayanthan S. (Certified Shopify Partner)
 */
class CartDrawerEngine {
  constructor() {
    this.drawer = document.getElementById('CartDrawer');
    if (!this.drawer) return;
    this.initEvents();
  }

  initEvents() {
    // Event listeners to open/close cart
    document.addEventListener('cart:open', () => this.open());
    document.addEventListener('cart:updated', () => this.refreshCart());

    const closeBtn = this.drawer.querySelector('.cart-drawer-close');
    const overlay = this.drawer.querySelector('.cart-drawer-overlay');

    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (overlay) overlay.addEventListener('click', () => this.close());

    // Delegate quantity change buttons
    this.drawer.addEventListener('click', (e) => {
      const qtyBtn = e.target.closest('.qty-btn');
      if (qtyBtn) {
        const key = qtyBtn.dataset.key;
        const qty = parseInt(qtyBtn.dataset.qty, 10);
        this.updateItem(key, qty);
      }
    });
  }

  open() {
    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  async updateItem(key, qty) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: key, quantity: qty })
      });
      const cart = await response.json();
      document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
    } catch (err) {
      console.error('[CartEngine Error]', err);
    }
  }

  async refreshCart() {
    // Fetch section rendering API for clean Liquid re-render
    const res = await fetch(`${window.location.pathname}?sections=ajax-cart-drawer-engine`);
    const data = await res.json();
    const html = data['ajax-cart-drawer-engine'];
    if (html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newInner = doc.querySelector('.cart-drawer-inner');
      if (newInner) {
        this.drawer.querySelector('.cart-drawer-inner').innerHTML = newInner.innerHTML;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartDrawerEngine = new CartDrawerEngine();
});
