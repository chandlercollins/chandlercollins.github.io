/* Project tiles — add a project by appending one entry.
   status: "live" | "wip" | "soon".  Only "live" tiles link out. */
window.PROJECTS = [
  {
    title: "FIRE Crash Course",
    tag: "Interactive · Financial education",
    blurb: "A scrollytelling crash course in financial independence — watch how saving, debt, taxes, and time compound into freedom, then plug in your own numbers and model your plan.",
    href: "./fire-crash-course/",
    status: "live",
    statusLabel: "Live"
  },
  {
    title: "More on the way",
    tag: "Placeholder",
    blurb: "Another project is being wired up. Tiles are data-driven — new work slots right in here.",
    href: "",
    status: "soon",
    statusLabel: "Coming soon",
    ghost: true
  }
];
