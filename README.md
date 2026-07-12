# chandlercollins.com

My personal site — a short bio, a grid of things I've built, and the stuff I do when I'm not at a desk. Static, no build step, no dependencies. Hosted on GitHub Pages.

🔗 **Live:** https://chandlercollins.com

> Note: this repo has to stay named `chandlercollins.github.io` — that's how GitHub Pages serves a user site. The custom domain comes from the `CNAME` file + DNS, not from the repo name.

## Layout

```
index.html   the page — hero, work, "beyond the desk", contact
styles.css   the design system
projects.js  project tiles, one array entry each
main.js      renders the tiles
CNAME        custom domain for GitHub Pages
.nojekyll    serve files as-is, skip Jekyll
```

## Adding a project

Drop one entry into `window.PROJECTS` in [`projects.js`](projects.js):

```js
{
  title: "Project name",
  tag: "Category · Category",
  blurb: "A sentence or two on what it is.",
  href: "./project-slug/",   // or an external URL
  status: "live",            // "live" | "wip" | anything else
  statusLabel: "Live"
}
```

Tiles with an `href` become clickable.

## Running it locally

It's just files — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080   # → http://localhost:8080
```
