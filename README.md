# TIS Sandbox Cloudflare Starter

A minimal Cloudflare Pages starter for the Taylor Insurance Services sandbox GitHub organization.

Use this repository as the pattern for small websites and experiments that should deploy through **Cloudflare Pages**. Team members work in GitHub; Robert/admins connect the repository to Cloudflare once.

## How the workflow should work

1. A Taylor team member creates or updates a GitHub repository in `TIS-Sandbox`.
2. Cloudflare Pages watches the repository's `main` branch.
3. When someone pushes to `main`, Cloudflare builds and deploys the site automatically.
4. Secrets and production environment variables live in Cloudflare, not in GitHub.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed by Wrangler.

## Cloudflare Pages build settings

Use these settings when connecting this repo in the Cloudflare dashboard:

- Framework preset: `None`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `public`
- Root directory: `/`

This starter does not require secrets.

## Repository layout

```text
public/index.html          Static website files
functions/_middleware.js   Optional Pages Function middleware example
package.json               Local/dev/build scripts
wrangler.toml              Cloudflare Pages config, no secrets
.env.example               Placeholder names only; do not put real values here
```

## Adding environment variables

Do **not** commit secrets to GitHub.

For Cloudflare Pages, add secret values in:

Cloudflare Dashboard → Workers & Pages → your Pages project → Settings → Environment variables

Only commit placeholder names in `.env.example`.

## When to use Workers instead of Pages

Use **Pages** for websites, landing pages, prototypes, and projects where Cloudflare should build from GitHub automatically.

Use **Workers** when the project is primarily an API, background task, proxy, scheduled job, or backend service. Workers can also deploy from GitHub, but Pages is usually the simpler default for Taylor team website experiments.

## Safety rules

- Never commit client data, PHI, passwords, API tokens, or private business data.
- Keep Cloudflare secrets in Cloudflare.
- Keep GitHub permissions focused on the TIS Sandbox organization/repositories.
