## Simple KV API (KV)

### Setup

1. Create a Cloudflare account if you don't already have one.
2. Create a KV namespace in the Workers dashboard, and put its ID in `wrangler.toml`.
3. `npm install && npx wrangler login`
3. `npm deploy`
4. Generate your two API keys, and set them with `npx wrangler secret put GET_TOKEN` and `npx wrangler secret put SET_TOKEN`.

That's it. [Here are the plan limits.](https://developers.cloudflare.com/kv/platform/limits/) Note that the paid plan is only $5/month.