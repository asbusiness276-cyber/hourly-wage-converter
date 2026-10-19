# Publish with Antigravity and Vercel

1. Extract the ZIP.
2. Open the extracted `hourly-wage-converter` folder in Antigravity. This is the project root: it contains `package.json`, `vercel.json`, `scripts`, and `dist`.
3. Give Antigravity the prompt below, and connect or sign in to the Vercel account you want to use when its deployment workflow requests it.

## Prompt to paste into Antigravity

```text
Deploy this existing Hourly Wage Converter website to my Vercel account.
Keep the current design, content, calculator behavior, and page URLs.
Use the folder containing package.json and vercel.json as the project root.
This is a static multipage website with no framework or runtime dependencies.
Run npm ci, npm run build, and npm run check.
Use the included vercel.json: Framework Other, build command npm run build,
output directory dist, Node.js 24.x. Do not add a catch-all SPA rewrite.
Preserve the four legacy calculator redirects, all page routes, sitemap,
robots.txt, and the custom 404 page.
The generator uses Vercel's production domain automatically. If I provide
a custom domain, set SITE_URL to its complete https:// origin and rebuild.
After deployment, check the homepage, all four main calculators, an article,
an unknown URL, and the legacy redirects, then give me the deployment URL.
```

## Vercel settings

The included `vercel.json` specifies the build and routing settings.

| Setting | Value |
| --- | --- |
| Root directory | The extracted `hourly-wage-converter` folder |
| Framework preset | Other |
| Node.js | 24.x |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | Default (`npm ci` with the included lockfile) |

Deploy the project root so Vercel runs the build. The prebuilt `dist` files are
included for inspection and local preview; their metadata initially points to
`http://localhost:3000` and is regenerated for the deployed domain during the build.

## Custom domain and SEO

When a custom domain is attached in Vercel, add this environment variable in
the project settings and redeploy, replacing the example with your own domain:

```text
SITE_URL=https://your-domain.com
```

Use an origin only, without a subdirectory. The generator updates canonical
links, Open Graph URLs, structured-data URLs, the sitemap, and `robots.txt`.
If `SITE_URL` is unset, it uses `VERCEL_PROJECT_PRODUCTION_URL`, then
`VERCEL_URL`, then `http://localhost:3000` for local work. Vercel's system
environment variables must be exposed to the build, or set `SITE_URL` yourself.

For an ordinary Vercel deployment, no API keys, database, or backend service
are required.

## Local preview

With Node.js 24 installed, run these commands from the project root:

```sh
npm ci
npm run build
npm run check
python3 -m http.server 3000 --directory dist
```

Open `http://localhost:3000`. Use an HTTP server for previewing; the assets
and links use paths relative to the site root.

## Official references

- [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json)
- [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
