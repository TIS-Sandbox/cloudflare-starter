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

## Robert/admin setup: connect this repo to Cloudflare Pages

Cloudflare's native GitHub integration is completed in the Cloudflare dashboard, not from this repository. Recommended ownership model: Taylor team members work in GitHub; Robert/admins own the Cloudflare account, project settings, domains, and secrets.

1. Log in to Cloudflare as the account owner/admin.
2. Go to **Workers & Pages**.
3. Click **Create**.
4. Choose **Pages**.
5. Choose **Connect to Git**.
6. If GitHub is not connected yet, authorize/install the Cloudflare GitHub app for the `TIS-Sandbox` organization.
   - Prefer granting Cloudflare access only to selected repositories, not every repository, unless Robert intentionally wants org-wide deployment access.
   - Start with `TIS-Sandbox/cloudflare-starter`.
7. Select the repository: `TIS-Sandbox/cloudflare-starter`.
8. Use these build settings:
   - Project name: `tis-cloudflare-starter` or `cloudflare-starter`
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `public`
   - Root directory: `/`
9. Deploy.
10. After deployment, add any needed variables/secrets at:
    **Workers & Pages → cloudflare-starter project → Settings → Environment variables**.

No GitHub Actions workflow is included because Cloudflare Pages' native Git integration is the preferred setup. Add GitHub Actions only if native Cloudflare Git integration cannot be used for policy or permission reasons.
