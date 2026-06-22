# chandlercollins.github.io

Personal portfolio for **Chandler Collins** — Product Manager, Washington, DC.
A static, dependency-free site hosted on GitHub Pages, with a data-driven grid of project tiles.

🔗 **Live:** https://chandlercollins.github.io/

## Structure

```
index.html      landing page (hero + work section)
styles.css      shared dark design system
projects.js     project tile data — add a project here
main.js         renders the tiles
.nojekyll       serve files as-is (no Jekyll processing)
ROADMAP.md      the build plan, worked through piece by piece
```

## Adding a project

Append one entry to `window.PROJECTS` in [`projects.js`](projects.js):

```js
{
  title: "Project name",
  tag: "Category · Category",
  blurb: "One or two sentences on what it is.",
  href: "./project-slug/",   // or an external URL
  status: "live",            // "live" | "wip" | "soon"
  statusLabel: "Live"
}
```

Only `status: "live"` tiles become clickable links.

## Running locally

It's static — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080   # → http://localhost:8080
```

## Roadmap

See [ROADMAP.md](ROADMAP.md). Next up: the public **FIRE Crash Course** (its own repo,
linked from the first tile) and a custom domain.
