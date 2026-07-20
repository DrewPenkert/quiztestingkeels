const MAX_ENTRIES = 50;
const MAX_NAME_LEN = 40;
const MAX_SCORE = 1000;
const MIN_SUBMIT_INTERVAL_MS = 3000;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

function kvKey(riddle) {
  return `riddle:${riddle}`;
}

async function getLeaderboard(env, riddle) {
  const raw = await env.LEADERBOARD.get(kvKey(riddle));
  if (!raw) return [];
  try {
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (url.pathname !== "/leaderboard") {
      return json({ error: "not found" }, 404);
    }

    if (request.method === "GET") {
      const riddle = parseInt(url.searchParams.get("riddle"), 10) || 0;
      const list = (await getLeaderboard(env, riddle))
        .slice()
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      return json({ leaderboard: list });
    }

    if (request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "invalid json" }, 400);
      }

      const riddle = parseInt(body.riddle, 10) || 0;
      const name = String(body.name || "").trim().slice(0, MAX_NAME_LEN);
      const score = Math.max(0, Math.min(MAX_SCORE, parseInt(body.score, 10) || 0));

      if (!name) {
        return json({ error: "name required" }, 400);
      }

      const ip = request.headers.get("cf-connecting-ip") || "unknown";
      const throttleKey = `throttle:${ip}`;
      const lastSubmit = await env.LEADERBOARD.get(throttleKey);
      if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < MIN_SUBMIT_INTERVAL_MS) {
        return json({ error: "too many requests" }, 429);
      }

      const list = await getLeaderboard(env, riddle);
      list.push({ name, score, date: Date.now() });
      list.sort((a, b) => b.score - a.score);
      const trimmed = list.slice(0, MAX_ENTRIES);

      await env.LEADERBOARD.put(kvKey(riddle), JSON.stringify(trimmed));
      await env.LEADERBOARD.put(throttleKey, String(Date.now()), { expirationTtl: 60 });

      return json({ leaderboard: trimmed.slice(0, 10) });
    }

    return json({ error: "method not allowed" }, 405);
  },
};
