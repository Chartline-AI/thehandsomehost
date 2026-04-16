# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install           # one-time: install Tailwind
npm run build:css     # compile src/tailwind.css → assets/tailwind.css (minified)
npm run watch:css     # same, but rebuilds on save during development
python3 -m http.server 8000  # local preview at http://localhost:8000/
```

## Architecture

Single-page static site. One file does almost all the work:

- **`index.html`** — the entire site: all HTML structure, inline CSS (two `<style>` blocks), and a small inline `<script>`. No external JS. No framework.
- **`src/tailwind.css`** — Tailwind source with `@layer utilities` overrides that layer on top of the inline CSS in `index.html`. These are design-refresh rules (spacing, radii, shadows, nav behaviour, reveal animation).
- **`assets/tailwind.css`** — compiled output of the above. **This file is committed and ships to production as-is.** Must be rebuilt before pushing if `src/tailwind.css` or `tailwind.config.js` changed.

### CSS layering

There are three CSS layers in priority order (lowest → highest):
1. Tailwind base/utilities in `<style id="tw">` (inlined at build time via the Tailwind CLI output)
2. Custom inline `<style>` block in `index.html` — component styles, layout, animations
3. `src/tailwind.css` `@layer utilities` overrides — the design refresh, applied via `!important`

The inline CSS in `index.html` defines all custom components (`.hero`, `.nav-*`, `.pillar-card`, etc.). The Tailwind config extends the default theme with the site's colour tokens (`navy`, `coral`, `brass`, etc.) but the site primarily uses CSS custom properties (`--navy`, `--coral`, …) defined in `:root`.

### Deployment

GitHub Pages, deploying directly from `main` at the repo root. Push to `main` → live within ~2 minutes. The `CNAME` file sets the custom domain (`thehandsomehost.com`). No build step runs on the server.

### Images

All in `images/`. Book cover ships in both `.jpg` and `.webp` (with a `300w` variant for the cover). Illustrations ship as `.webp` with `.jpg`/`.png` fallbacks inside `<picture>` elements.
