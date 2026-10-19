# Hourly Wage Converter

A static, responsive gross-pay calculator site with 33 authored pages.

For deployment through Antigravity to Vercel, start with [START-HERE.md](START-HERE.md).
The ZIP contains the complete source, prebuilt pages, and Vercel configuration.

## Included

- Bidirectional converter with seven input pay periods, custom work schedules, unpaid weeks, and optional overtime.
- Salary-to-hourly, hourly-to-salary, gross paycheck, overtime, salary increase, job comparison, and freelance rate tools.
- Six hourly guides, five salary guides, five articles, four navigation directories, and five methodology and information pages.
- Cobalt, navy, and amber visual system; sticky desktop panels that automatically unpin when too tall for the viewport; stacked mobile layouts and touch navigation.
- Route-specific titles, descriptions, canonical URLs, sitemap, local favicon, and FAQ/article structured data.
- Feature-detected page tools using the same calculator functions as the visible UI.
- Expanded homepage and four core calculator pages following the supplied page briefs: direction controls, rate and salary presets, calculate/copy/reset/edit actions, weekly schedule inputs, custom overtime multipliers, and user-entered paycheck deductions.
- The four core calculators use `/hourly-to-salary-calculator/`, `/salary-to-hourly-calculator/`, `/overtime-calculator/`, and `/paycheck-calculator/`. Original `/calculators/.../` links retain redirect fallbacks.

## Work on the site

`node scripts/generate.mjs` regenerates the HTML from the authored templates.

`node scripts/check.mjs` checks calculation scenarios, edge cases, page metadata, and local links.

`node --check dist/assets/app.js` checks the client script's syntax.

Node.js 24.x is configured in `package.json`. Vercel builds the site with
`npm run build` and publishes `dist`. The generator reads `SITE_URL` when set,
otherwise the Vercel production hostname, otherwise the deployment hostname.
Local builds use `http://localhost:3000`. Set `SITE_URL` to your preferred
custom-domain origin and rebuild when attaching a domain.

The deployed directory is `dist`. There are no runtime dependencies or application-side data storage. Currency is USD. Wage conversion figures are before taxes and deductions. The paycheck tool separately shows gross pay minus deductions entered for one check; it does not calculate withholding or pre-tax savings. The freelance reserve is a user-selected planning input rather than a tax calculation.

This environment does not provide a supported browser preview for plain static sites. Calculation and route checks run locally, including deduction, quarterly, annual, custom overtime, and unpaid-week scenarios. Responsive rules cover 320, 375, 390, and 430 pixel widths, but live browser and WebMCP validation were unavailable here.
