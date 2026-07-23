/**
 * Shopify Third-Party Script Deferral Engine
 * Delays non-essential tracking & chat scripts until first user interaction
 * Author: Sayanthan S. (Shopify Partner)
 */
(function() {
  'use strict';

  let scriptsLoaded = false;

  const thirdPartyScripts = [
    // Add third party app script URLs here if deferred
  ];

  function loadDeferredScripts() {
    if (scriptsLoaded) return;
    scriptsLoaded = true;

    thirdPartyScripts.forEach(url => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    });

    // Remove event listeners once fired
    ['mousemove', 'scroll', 'touchstart', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, loadDeferredScripts);
    });
  }

  // Register user interaction triggers
  ['mousemove', 'scroll', 'touchstart', 'keydown'].forEach(evt => {
    window.addEventListener(evt, loadDeferredScripts, { passive: true, once: true });
  });

  // Fallback trigger after 4 seconds idle
  setTimeout(loadDeferredScripts, 4000);
})();
