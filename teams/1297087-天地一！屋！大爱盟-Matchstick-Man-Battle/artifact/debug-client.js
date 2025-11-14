// debug-client.js — tiny runtime smoke test
(function(){
  try {
    const inside = document.getElementById('page-log-inside');
    if (inside) {
      const el = document.createElement('div');
      el.textContent = 'debug-client.js loaded: ' + new Date().toISOString();
      inside.appendChild(el);
    }
    console.log('debug-client.js executed');
    window.__debug_client_loaded = true;
  } catch(e) {
    console.error('debug-client.js error', e);
  }
})();
