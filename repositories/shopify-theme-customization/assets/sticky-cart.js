/**
 * Sticky Add To Cart Engine
 * Author: Sayanthan S. (Shopify Partner)
 */
document.addEventListener('DOMContentLoaded', () => {
  const stickyBar = document.querySelector('.sticky-cart-bar');
  if (!stickyBar) return;

  const sectionId = stickyBar.dataset.sectionId;
  const addBtn = document.getElementById(`StickyAddToCartBtn-${sectionId}`);
  const variantSelect = document.getElementById(`StickyVariantSelect-${sectionId}`);

  // Scroll Observer to show Sticky Bar when main Add to Cart scrolls out of view
  const mainCartBtn = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
  if (mainCartBtn) {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        stickyBar.classList.add('is-visible');
      } else {
        stickyBar.classList.remove('is-visible');
      }
    }, { threshold: 0.1 });
    observer.observe(mainCartBtn);
  }

  // Handle Add to Cart AJAX fetch
  if (addBtn) {
    addBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const variantId = variantSelect ? variantSelect.value : null;
      if (!variantId) return;

      addBtn.classList.add('loading');
      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: [{ id: variantId, quantity: 1 }] })
        });
        const data = await response.json();
        
        // Dispatch custom cart update event for OS 2.0 cart drawers
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
        addBtn.querySelector('span').textContent = 'Added to Cart ✓';
        setTimeout(() => {
          addBtn.querySelector('span').textContent = 'Add to Cart';
        }, 2000);
      } catch (err) {
        console.error('Error adding to cart:', err);
      } finally {
        addBtn.classList.remove('loading');
      }
    });
  }
});
