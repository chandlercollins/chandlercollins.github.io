# Roadmap — Chandler Collins portfolio & projects

A living plan for the personal portfolio and the projects it showcases. Built to be
worked through **piece by piece**.

## Vision

A personal portfolio at `chandlercollins.github.io` (custom domain later) with a clean
tile grid of projects. The flagship first project is a **public, educational, interactive
version of the FIRE scrollyteller** — a financial-planning crash course anyone can use to
model their own plan. The throughline: *distilling complex topics into simple frameworks
and making the pieces click together.*

## Architecture — three repos

| Repo | Visibility | Purpose | Lives at |
|---|---|---|---|
| `financial-independence-scrollyteller` | 🔒 Private | Personal plan, real numbers | (private) |
| `chandlercollins.github.io` | 🌐 Public | Portfolio hub: bio + project tiles | `chandlercollins.github.io` |
| `fire-crash-course` | 🌐 Public | Forkable, sanitized, interactive teaching tool | `chandlercollins.github.io/fire-crash-course/` |

The portfolio is a **user/organization Pages site** (`<username>.github.io`), so it deploys
automatically from the default branch — no Actions pipeline needed.

## Tech decisions

- **Vanilla HTML / CSS / JS, no build step.** Matches the scrollyteller, deploys to Pages
  with zero tooling, trivial to maintain. Revisit a framework (e.g. Astro) only if scale demands it.
- **Data-driven tiles** (`projects.js`) — adding a project is one array entry.
- **Shared dark design system** so the portfolio and every project feel cohesive.
- **Best practices:** semantic HTML, meta + Open Graph tags, responsive, accessible
  (skip link, focus states, alt text), `prefers-reduced-motion`, `.nojekyll`.

## Phases

### Phase 0 — Foundation  ⏳ (in progress)
- [x] Decide architecture (3 repos) + tech (vanilla, data-driven)
- [x] Scaffold `chandlercollins.github.io` (landing, styles, tiles, README, .nojekyll)
- [ ] Create the public GitHub repo + push
- [ ] Enable GitHub Pages (deploy from `main`)
- [ ] Verify the live site renders

### Phase 1 — Portfolio polish
- [ ] Replace placeholder bio with Chandler's real story
- [ ] Real contact links (email/LinkedIn) + OG share image + favicon
- [ ] Responsive / accessibility QA across breakpoints
- [ ] Optionally add existing projects as tiles (e.g. NoBS White Noise app)

### Phase 2 — FIRE Crash Course (the big one)
- [ ] New public repo `fire-crash-course`, seeded from the scrollyteller
- [ ] **Strip all real data** → neutral defaults; remove names/employers/balances
- [ ] Reframe Chandler/Cowan → "You / Your partner" (or single-person mode)
- [ ] Turn fixed toggles into **editable inputs** so users model their own numbers
      (income, savings, contributions, loan balance + rate, retirement spend, etc.)
- [ ] Add the **teaching layer**: each view explains a concept (compounding, the 4% rule,
      debt-vs-invest, account types, automation) with plain-language annotations
- [ ] Persist inputs to `localStorage`; optional shareable URL / export
- [ ] Enable Pages, wire up the portfolio tile to the live URL

### Phase 3 — Deploy & connect
- [ ] Custom domain (`CNAME` + DNS), HTTPS
- [ ] Optional privacy-friendly analytics
- [ ] Final polish pass

### Phase 4 — Future projects
- [ ] Add new tiles as projects ship

## Notes

- The private scrollyteller stays private forever — the crash course is a **separate,
  sanitized derivative**, never a copy of real numbers.
- Keep the educational version genuinely *teaching-first*: the goal is that a stranger
  can learn how the pieces fit and then plug in their own life.
