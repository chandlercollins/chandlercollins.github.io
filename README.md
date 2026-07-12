# chandlercollins.com

Hi — I'm Chandler. I lead product for AI/ML at Capital One, run absurdly long distances for fun, and build things like this on the side. This repo is the source for my personal site.

👉 **See it live: [chandlercollins.com](https://chandlercollins.com)**

The site is a short intro to me: what I've built and what I get up to when I'm away from a keyboard. If you'd rather just talk, I'm easiest to reach on [LinkedIn](https://www.linkedin.com/in/chandler-collins/) or at chandler@chandlercollins.com.

## For the curious

It's deliberately low-tech: hand-written HTML, CSS, and vanilla JavaScript. No framework, no build step, no dependencies — just files served straight off GitHub Pages. The projects are stored as plain data in `projects.js`, which keeps the whole thing easy to read and easy to update.

```
index.html   the page
styles.css   the look
projects.js  the projects, as data
main.js      renders them
```

Want to poke around? Clone it and open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080   # → http://localhost:8080
```
