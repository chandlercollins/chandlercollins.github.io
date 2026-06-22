/* Project tiles — add a project by appending one entry.
   Any tile with an `href` becomes a clickable link; `status` drives the chip color
   ("live" = green, "wip" = amber, anything else = neutral). */
window.PROJECTS = [
  {
    title: "FIRE Crash Course",
    tag: "Interactive · Financial education",
    blurb: "A scrollytelling crash course in financial independence — watch saving, debt, taxes, and time compound into freedom, then plug in your own numbers and model your plan.",
    href: "./fire-crash-course/",
    status: "live",
    statusLabel: "Live · try it"
  },
  {
    title: "No-BS White Noise",
    tag: "iOS / iPadOS app · built with Claude Code",
    blurb: "A clean, no-nonsense white-noise app I designed and shipped — hands-on AI-assisted product development, end to end.",
    href: "https://apps.apple.com/app/id6753262024",
    status: "live",
    statusLabel: "On the App Store"
  },
  {
    title: "Running Japan",
    tag: "Documentary · Director",
    blurb: "The world's first English-language documentary on ekiden — Japan's distinctive team-based long-distance relay racing. I directed and crowdfunded it ($6K+), filming across Japan.",
    href: "https://www.youtube.com/watch?v=Zoj-DGGgjUU",
    status: "film",
    statusLabel: "Watch the film"
  }
];
