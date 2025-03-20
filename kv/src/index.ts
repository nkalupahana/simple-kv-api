import { KVNamespace } from '@cloudflare/workers-types';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

interface SetData {
  token: string;
  [key: string]: string;
}

interface Env {
  KV: KVNamespace;
  GET_TOKEN: string;
  SET_TOKEN: string;
}

export default {
  async fetch(request: Request, env: Env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders
      })
    }

    if (request.method === "GET") {
      // Get value
      const params = new URL(request.url).searchParams;
      if (params.get("token") !== env.GET_TOKEN || !params.get("key")) return new Response("Authentication/Format Failed", { headers: corsHeaders });
      const key = params.get("key");
      try {
        if (!key) throw new Error("No key provided.");
        const value = await env.KV.get(key);
        return new Response(value, { headers: corsHeaders });
      } catch (e) {
        console.log(e);
        return new Response("Key does not exist.", { headers: corsHeaders });
      }
    } else if (request.method === "POST") {
      // Set value
      const data: SetData = await request.json();
      if (data.token !== env.SET_TOKEN) return new Response("Authentication failed.");
      for (const key in data) {
        if (key === "token") continue;
        await env.KV.put(key, data[key]);
      }
      return new Response("Set!");
    } else {
      return new Response("Method not allowed.", { headers: corsHeaders });
    }
  },
};