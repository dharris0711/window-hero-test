
// netlify/functions/settings.js
// ═══════════════════════════════════════════════════════════════
// Window Hero — Location Settings using Netlify Blobs
// CommonJS format — works without esbuild bundler
// ═══════════════════════════════════════════════════════════════

exports.handler = async function(event) {
  const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  let store;
  try {
    const { getStore } = require('@netlify/blobs');
    store = getStore('settings');
  } catch(e) {
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Blobs not available: ' + e.message })
    };
  }

  const SETTINGS_KEY = 'location-config';

  // GET — return saved settings
  if (event.httpMethod === 'GET') {
    try {
      const saved = await store.get(SETTINGS_KEY, { type: 'json' });
      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify(saved || {})
      };
    } catch(err) {
      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      };
    }
  }

  // POST — save settings
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body || '{}');
      await store.setJSON(SETTINGS_KEY, body);
      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: true })
      };
    } catch(err) {
      return {
        statusCode: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: err.message })
      };
    }
  }

  return { statusCode: 405, headers: CORS_HEADERS, body: 'Method not allowed' };
};
