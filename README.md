# Binary Streaming

Proof of concept for direct binary streaming of BLE data to a Cloudflare Worker.

- Worker code (via Wrangler): [index.ts](worker/src/index.ts)
- Client code (via Next.js): [page.tsx](client/src/app/page.tsx)

## Local Development

### Worker

To develop and test locally you need to have a Cloudflare account and a Worker running on your local machine as well as a local client.

- Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update)
- Run `wrangler dev` in the `worker` directory

### Client

- Install all dependencies with `pnpm install`
- Run `pnpm dev` in the `client` directory
