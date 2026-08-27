# shellton-site

Marketing, comparison, privacy, and support site for Shellton. The SvelteKit app runs in Docker on datons-main behind a dedicated Cloudflare Tunnel.

## Local development

```sh
cd frontend
bun install
bun run dev
```

## Container lifecycle

```sh
make up
make health
make logs
make down
```

`make domain-plan` prints the intended Cloudflare zone, tunnel, ingress, and DNS changes without credentials or network writes. `make domain-apply` is intentionally gated until the dedicated tunnel ID and credentials are provisioned.
