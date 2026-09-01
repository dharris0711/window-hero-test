netlify/functions/settings.js
// netlify/functions/settings.js
// ═══════════════════════════════════════════════════════════════
// Window Hero — Location Settings Blob Store
// Reads and writes location config to Netlify Blobs.
// Each Netlify site has its own isolated Blob store automatically.
// No token needed — this function runs server-side.
// ═══════════════════════════════════════════════════════════════
import { getStore } from "@netlify/blobs";

const SETTINGS_KEY = "location-config";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async (req) => {
  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const store = getStore("settings");

  // GET — return saved settings (or empty object if none saved yet)
  if (req.method === "GET") {
    try {
      const saved = await store.get(SETTINGS_KEY, { type: "json" });
      return Response.json(saved ?? {}, { headers: CORS_HEADERS });
    } catch (err) {
      console.error("Blob GET error:", err);
      return Response.json({}, { headers: CORS_HEADERS });
    }
  }

  // POST — save settings from admin panel
  if (req.method === "POST") {
    try {
      const body = await req.json();
      await store.setJSON(SETTINGS_KEY, body);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Blob POST error:", err);
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }
  }

  return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
};

export const config = {
  path: "/.netlify/functions/settings",
};
