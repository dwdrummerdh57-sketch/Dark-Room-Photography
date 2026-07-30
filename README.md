# Dark Room Real Estate Photography

The Dark Room Photography website runs locally with
[vinext](https://github.com/cloudflare/vinext) and does not require
Codex-specific hosting files.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

The tracked project is portable after a fresh clone. Local development and
production builds do not depend on ignored `.openai/` or `build/` files.

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm run deploy`: build and deploy to Cloudflare Workers
- `npm run deploy:preview`: build and deploy a Cloudflare preview version
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Production Deployment on Cloudflare

The site is configured as a Vinext application running on Cloudflare Workers.
It is not a static GitHub Pages export. The Worker entry in
`worker/index.ts` serves the Vinext App Router output and uses Cloudflare's
asset and image bindings defined in `wrangler.jsonc`.

### One-time Cloudflare setup

1. Create or sign in to a Cloudflare account.
2. Copy the Account ID from the Cloudflare dashboard.
3. Create an API token at **My Profile → API Tokens** using the
   **Edit Cloudflare Workers** template.
4. In GitHub, open the repository and go to
   **Settings → Secrets and variables → Actions**.
5. Add these repository secrets:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`

### Deploy from GitHub Actions

The workflow at `.github/workflows/deploy-cloudflare.yml` deploys on every push
to `main`.

1. Push or merge the approved release into `main`.
2. Open the repository's **Actions** tab.
3. Select **Deploy to Cloudflare Workers**.
4. Wait for the build and deploy steps to complete.
5. Open the `workers.dev` URL printed by the **Deploy Worker** step.

The workflow can also be run manually with **Run workflow**.

### Use Cloudflare's Git integration instead

Choose this option instead of GitHub Actions if you want Cloudflare to own the
build pipeline:

1. Open **Cloudflare Dashboard → Workers & Pages → Create application**.
2. Select **Import a repository**, authorize GitHub, and choose this repository.
3. Set the Worker name to `dark-room-photography`. It must match
   `wrangler.jsonc`.
4. Set the production branch to `main`.
5. Set the build command to `npm run build`.
6. Keep the deploy command as `npx wrangler deploy`.
7. Keep the root directory at the repository root.
8. Select **Save and Deploy**.

Cloudflare can create preview versions for non-production branches when branch
builds are enabled under **Settings → Build → Branch control**. Use either this
native integration or the included GitHub Actions workflow for automatic
production deploys, not both.

### Deploy from a local checkout

```bash
npm install
npx wrangler login
npm run deploy
```

Wrangler prints the production `workers.dev` URL after a successful deploy.
To create a preview deployment instead, run:

```bash
npm run deploy:preview
```

### Connect a custom domain

After the first deployment, open
**Cloudflare Dashboard → Workers & Pages → dark-room-photography → Settings →
Domains & Routes**, then add the production domain or subdomain. Cloudflare
manages the route and TLS certificate after the domain is connected.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Cloudflare Workers Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/)
- [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
