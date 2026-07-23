/**
 * Shopify Cart Drawer Currency Sync & Race Condition Patch
 * Author: Sayanthan S. (Shopify Partner)
 */
(function() {
  'use strict';

  let isUpdating = false;
  const updateQueue = [];

  // Debounced Cart Quantity Request Handler
  window.ShopifyCartFix = {
    async updateQuantity(lineKey, quantity) {
      if (isUpdating) {
        updateQueue.push({ lineKey, quantity });
        return;
      }

      isUpdating = true;
      try {
        const res = await fetch('/cart/change.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: lineKey, quantity: quantity })
        });
        const cart = await res.json();
        
        // Trigger currency recalculation event for multi-currency themes
        if (window.Shopify && Shopify.Currency && typeof Shopify.Currency.convertAll === 'function') {
          Shopify.Currency.convertAll(Shopify.currency.active, document.querySelector('[data-currency-code]'));
        }

        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      } catch (err) {
        console.error('[ShopifyBugFix] Cart Update Failed:', err);
      } finally {
        isUpdating = false;
        if (updateQueue.length > 0) {
          const next = updateQueue.shift();
          this.updateQuantity(next.lineKey, next.quantity);
        }
      }
    }
  };
})();
