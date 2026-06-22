/* Render project tiles from window.PROJECTS into #projects-grid. */
(function () {
  var grid = document.getElementById("projects-grid");
  var countEl = document.getElementById("project-count");
  var items = window.PROJECTS || [];
  if (!grid) return;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var html = items.map(function (p) {
    var isLink = !!p.href;
    var chipClass = p.status === "live" ? "chip live" : p.status === "wip" ? "chip wip" : "chip";
    var inner =
      '<p class="tag">' + esc(p.tag || "") + "</p>" +
      "<h3>" + esc(p.title) + "</h3>" +
      "<p>" + esc(p.blurb) + "</p>" +
      '<div class="foot">' +
        '<span class="' + chipClass + '">' + esc(p.statusLabel || p.status) + "</span>" +
        (isLink ? '<span class="go" aria-hidden="true">View →</span>' : "") +
      "</div>";
    if (isLink) {
      var ext = /^https?:/.test(p.href) ? ' target="_blank" rel="noopener"' : "";
      return '<a class="tile" href="' + esc(p.href) + '"' + ext + ">" + inner + "</a>";
    }
    return '<article class="tile' + (p.ghost ? " ghost" : "") + '">' + inner + "</article>";
  }).join("");

  grid.innerHTML = html;
  if (countEl) countEl.textContent = items.length + (items.length === 1 ? " project" : " projects");
})();
