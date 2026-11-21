# Portfolio

A personal portfolio: a single-page React site that introduces its owner, lists skills and lets visitors send a message.

## Overview

The site is one page with a sticky navigation bar and four sections: a hero banner with the owner's name and tagline; an About section with a bio, skills and interests; a Contact section; and a footer. The Contact section shows contact details and a message form. The form checks that every field is filled in and that the email address is well formed, then sends the message through FormSubmit, which emails it to the site owner.

## Getting started

Prerequisites: Node.js 18, or 20 or later, with the npm that comes with it.

```sh
git clone https://github.com/VicciV254/Portfolio.git
cd Portfolio
npm ci        # reinstalls node_modules/ for your platform
npm run dev   # serves the site at http://localhost:5173, or the next free port
```

The contact form posts to FormSubmit even from a local server, so each test submission emails the site owner.

## Verification

```sh
npm run build    # builds the site into dist/
npm run preview  # serves dist/ at http://localhost:4173
```

No test or lint script is defined in `package.json`.

## Tech stack

- React 18.3.1
- Vite 5.4.21 with `@vitejs/plugin-react` 4.7.0
- Plain CSS: one global stylesheet and one per component
- Font Awesome 6.0.0-beta3 icons, loaded from a CDN in `index.html`
- FormSubmit for contact-form delivery

## Project structure

```text
.
├── index.html          # page shell; loads Font Awesome and src/main.jsx
├── vite.config.js      # Vite config with the React plugin
├── package.json        # npm scripts and dependency ranges
├── package-lock.json   # locked dependency versions
├── node_modules/       # npm packages, committed to the repository
└── src/
    ├── main.jsx        # entry point; mounts App into #root
    ├── App.jsx         # page layout: renders each component in order
    ├── App.css         # global styles
    └── components/     # Navbar, Hero, About, Contact and Footer: a .jsx and a .css file each
```
