# DreamyByte Website

Official static website for **DreamyByte**, built with plain `HTML/CSS/JS`.

The site includes:
- a homepage with studio and team information;
- a projects hub (`software` / `games`);
- a changelog page for updates;
- a links page for socials and contact;
- service pages: `404` and `maintenance`.

## Stack

- `HTML5`
- `CSS3` (custom theme, glass effects, responsive layout)
- `Vanilla JavaScript` (animations, reveal effects, active nav state)

No build tools, frameworks, or backend required.

## Project Structure

```text
.
├── index.html              # Home page
├── projects.html           # Projects hub
├── software.html           # Software category
├── games.html              # Games category
├── changelog.html          # Update history
├── links.html              # Social/contact links
├── 404.html                # Not found page
├── maintenance.html        # Maintenance page
├── style.css               # Main stylesheet
├── liquid-glass.css        # Extra style experiments
├── script.js               # UI behavior (reveal/nav active)
├── logo/
│   ├── logo.svg
│   └── logo.png
└── icons/
    ├── github.svg
    ├── x.svg
    ├── mail.png
    └── maintenance-work.svg
```

## Pages

- `index.html`  
  Studio presentation, mission, values, and team (including `Who's in Our Team` section).

- `projects.html`  
  Entry point for `software` and `games` categories.

- `software.html` / `games.html`  
  Product and prototype cards by category.

- `changelog.html`  
  Public list of updates and releases.

- `links.html`  
  GitHub, X, email, and additional info block.

- `404.html`  
  Custom not-found page with quick navigation actions.

- `maintenance.html`  
  Maintenance notice page with status text for visitors.

## Local Run

Because this is a static website, you can open `index.html` directly in a browser.  
For development, using a local server is recommended.

Example:

```bash
# Python
python3 -m http.server 8080
```

Then open:
- `http://localhost:8080`

## Customization

### Content

Edit text directly in `.html` files:
- home: `index.html`
- projects: `projects.html`, `software.html`, `games.html`
- updates: `changelog.html`
- links: `links.html`
- service pages: `404.html`, `maintenance.html`

### Design

Theme variables are defined at the top of `style.css` in `:root`:
- background and text colors;
- accent gradients;
- border radii;
- typography;
- animation timings.

### Logo and Icons

- logo: `logo/logo.svg`, `logo/logo.png`
- icons: `icons/*`

## Deployment

This project works with any static hosting provider:
- GitHub Pages
- Netlify
- Vercel (static)
- Cloudflare Pages

### GitHub Pages (quick setup)

1. Push the repository to GitHub.
2. In `Settings -> Pages`, select your branch (usually `main`) and `/ (root)`.
3. Save and wait for publication.

## UI Behavior

`script.js` handles:
- scroll reveal animations (`IntersectionObserver`);
- top nav shrinking on scroll;
- automatic active nav link highlighting based on URL.

## Notes

- The website is fully static and does not require a build step.
- For production, configure your host to serve `404.html` for unknown routes.
- During maintenance windows, you can temporarily redirect traffic to `maintenance.html` at the hosting level.
