# Review: performance, SEO, security

## Fixed

- Dev server: restricted public-file allowlist, realpath containment (including symlinks), malformed URL handling, GET/HEAD only, stream error handling, localhost binding. Previously arbitrary repo files could be served, invalid URI input could crash the process, and the directory prefix check was insufficient.
- Vercel: deploy only dist/ through a dependency-free static build; source/config/review files stay outside the published output. Added CSP, Referrer-Policy and Permissions-Policy; removed obsolete X-XSS-Protection. Inline styles remain permitted because existing markup and JS use them; inline executable scripts are blocked.
- Escaped dynamic HTML in autocomplete/price display and dormant booking-modal code. The main booking form is absent from current HTML, so its unsafe interpolation was a latent issue, not a confirmed currently reachable attack.
- Optimized the three displayed images from 2,706,621 to 307,152 bytes (88.7% smaller), prioritized hero loading and lazy-loaded fleet images. Original JPEGs retained for social previews/fallback editing.
- Cached normalized location search text, deferred scripts, passive scroll handler, reduced-motion support, synchronized mobile menu aria-expanded and Escape dismissal.
- Removed automatic Hanoi pricing fallback for unknown locations and quotes for routes with neither endpoint in Hai Duong. Editing a location hides the stale quote.
- Shorter title/description, canonical URL, Open Graph URL/image, Twitter card, robots.txt, sitemap.xml for https://www.xeghephaiduong.click/.

## Remaining recommendations

- Confirm the advertised fares against the operator's current price list. HTML route cards and pricing-data.js duplicate prices and may drift. Search still chooses its highest-ranked match for free text; explicit selection would give more reliable location matching.
- Replace or substantiate claims such as cheapest price, 100% new cars, five-star service and customer testimonials. Hero promises no extra fees while the calculator mentions distance surcharges; align visible copy with the actual terms.
- Provide a verified street address/business identity before adding LocalBusiness structured data. Do not invent ratings or reviews for schema.
- Build unique route pages with useful route-specific information if targeting individual route queries; current footer links all target one section.
- Verify HTTPS/www redirects, live canonical, production CSP, sitemap response and submit sitemap to Search Console after deployment.
- Google Fonts remains an external dependency. Self-hosting licensed font subsets is a possible follow-up after measuring real loading behavior.

## Validation

Passed JavaScript syntax, HTTP tests for public assets, headers, internal-file denial, traversal, malformed URL, method restrictions, HEAD and recovery; static checks for unique IDs, one H1, valid anchors, image dimensions/alt/files, safe external links, sitemap XML and config JSON; git diff --check.

No Lighthouse/browser/Core Web Vitals measurement or production deployment was performed. The image reduction is a file-size measurement, not a measured load-time improvement.

References: https://developers.google.com/search/docs/appearance/structured-data/local-business and https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
