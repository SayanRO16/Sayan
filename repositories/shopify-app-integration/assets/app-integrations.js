/**
 * Unified Shopify App Integration Bridge
 * Author: Sayanthan S. (Shopify Partner)
 */
document.addEventListener('DOMContentLoaded', () => {
  // Listen for AJAX Cart updates to push to third party apps
  document.addEventListener('cart:updated', (event) => {
    const itemData = event.detail;

    // 1. Klaviyo Track Added to Cart
    if (window._learnq) {
      window._learnq.push(['track', 'Added to Cart', {
        $value: itemData.total_price / 100,
        AddedItemTitle: itemData.title,
        DeviceMobile: window.innerWidth < 768
      }]);
    }

    // 2. Custom Analytics Webhook Dispatch
    if (navigator.sendBeacon) {
      const payload = JSON.stringify({ event: 'cart_add', timestamp: Date.now() });
      navigator.sendBeacon('/apps/custom-analytics/track', payload);
    }
  });
});
