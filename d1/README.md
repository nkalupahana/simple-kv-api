## Simple KV API

This is a simple KV store API that allows you to store and retrieve key-value pairs. Send a `GET` request to retrieve a key-value pair, and `POST` an object to set one or multiple key-value pairs. Authentication is done with a two API keys -- one for getting values, and one for setting them. There are no no user accounts and no permissions -- just two keys, and two types of requests to one endpoint. You can embed these requests in websites, scripts, automations, or wherever else they might be helpful.

### Setup

1. Create a Cloudflare account if you don't already have one.
2. `npm install && npx wrangler login`
3. Run `npx wrangler d1 create simple-kv-api`, and paste its output into `wranger.toml`, replacing the existing entry.
4. `npx wrangler d1 execute simple-kv-api --remote --file ./schema.sql`
5. `npm run deploy`
6. Generate your two API keys, and set them with `npx wrangler secret put GET_TOKEN` and `npx wrangler secret put SET_TOKEN`.

That's it. [Here are the plan limits.](https://developers.cloudflare.com/d1/platform/limits/) Note that the paid plan is only $5/month.