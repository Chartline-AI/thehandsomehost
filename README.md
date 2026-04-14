# The Handsome Host

Marketing site for *The Handsome Host*, a book by Jacalyn Stames with
illustrations by Ryan T. Huang.

Live site: <https://thehandsomehost.com/>

## Structure

```
.
├── index.html              Single-page site (HTML + inline CSS + small JS)
├── src/tailwind.css        Tailwind source (design-refresh overrides)
├── assets/tailwind.css     Built + minified Tailwind output (checked in)
├── tailwind.config.js
├── images/                 Book cover and interior illustrations
├── og-cover.jpg            Open Graph / Twitter share image
├── CNAME                   GitHub Pages custom domain: thehandsomehost.com
├── .nojekyll               Tells GitHub Pages not to run Jekyll
├── robots.txt
├── sitemap.xml
├── package.json            devDependencies for Tailwind
└── .github/workflows/
    └── tailwind.yml        CI: verifies assets/tailwind.css is freshly built
```

## Local preview

```sh
# One-time: install Tailwind
npm install

# Rebuild CSS whenever src/tailwind.css changes
npm run build:css        # one-shot, minified
# or
npm run watch:css        # rebuild on save

# Serve the site locally
python3 -m http.server 8000
# then open http://localhost:8000/
```

No framework — the site is plain static files.

## Deployment

Deployed via **GitHub Pages** from the `main` branch at the repo root.
No build step runs on the server — whatever is committed to `main`
ships as-is. The custom domain is configured by the `CNAME` file.

Push to `main` → GitHub Pages publishes to
<https://thehandsomehost.com/> within a minute or two.

## Before committing

Always rebuild Tailwind before pushing changes that touch
`src/tailwind.css` or `tailwind.config.js`:

```sh
npm run build:css
git add assets/tailwind.css
```

The `Tailwind build check` GitHub Action will fail the build if the
committed `assets/tailwind.css` is not a fresh rebuild of the source.
