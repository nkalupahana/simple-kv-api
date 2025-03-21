## Simple KV API

This is a simple KV store API that allows you to store and retrieve key-value pairs. Send a `GET` request to retrieve a key-value pair, and `POST` an object to set one or multiple key-value pairs. Authentication is done with a two API keys -- one for getting values, and one for setting them. There are no no user accounts and no permissions -- just two keys, and two types of requests to one endpoint. You can embed these requests in websites, scripts, automations, or wherever else they might be helpful.

There are two versions of this API: one that uses Cloudflare KV (eventually consistent but global), and one that uses D1 (quickly consistent but regional). Setup instructions are in each folder, and both are similarly easy to set up. I personally use both!