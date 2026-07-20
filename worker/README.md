# Keelvar riddle leaderboard — Cloudflare Worker

Live shared leaderboard backend, deployed as a Cloudflare Worker + KV namespace.

## Deploy (one-time)

1. Sign up for a free Cloudflare account (email only, no card): https://dash.cloudflare.com/sign-up
2. Install wrangler and log in:
   ```
   npm install -g wrangler
   wrangler login
   ```
3. From the `worker/` directory, create the KV namespace:
   ```
   wrangler kv namespace create LEADERBOARD
   ```
   This prints an `id`. Paste it into `wrangler.toml`, replacing `REPLACE_WITH_YOUR_KV_NAMESPACE_ID`.
4. Deploy:
   ```
   wrangler deploy
   ```
   This prints your worker URL, e.g. `https://keelvar-riddle-leaderboard.<your-subdomain>.workers.dev`.
5. Open `keelvar-riddle-campaign.html` and set `LEADERBOARD_API` to
   `https://keelvar-riddle-leaderboard.<your-subdomain>.workers.dev/leaderboard`.

## API

- `GET /leaderboard?riddle=<index>` → `{ leaderboard: [{ name, score, date }, ...] }` (top 10, sorted desc)
- `POST /leaderboard` with `{ riddle, name, score }` → same shape, appends the entry

## Notes

- Storage caps at 50 entries per riddle (oldest low scores drop off first).
- Submissions are throttled per IP to one every 3 seconds.
- CORS is open (`*`) since the campaign page can be hosted anywhere (e.g. GitHub Pages).
