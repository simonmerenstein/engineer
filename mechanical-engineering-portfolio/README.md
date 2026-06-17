# Simon Merenstein Mechanical Engineering Portfolio

This is a static, GitHub Pages-ready portfolio site modeled after the simple project-first structure of Liam's portfolio and the clean portfolio format of Vercel's Magic Portfolio template.

## What this is

- `index.html` is the intro/work page.
- `about.html` is a resume-summary page.
- `contact.html` is a public contact page.
- `work/` contains project pages for SR25, the master cylinder, SR24 brakes, Honda, General Atomics, and Tylok.
- `assets/img/` contains compressed WebP images selected from the provided presentations and public-safe generated visuals for Honda and General Atomics.

## Publishing to GitHub Pages

GitHub is the place where the code lives. GitHub Pages can also host this static website directly.

1. Create a new GitHub repository.
2. Add the contents of this folder to the repository root.
3. Commit and push.
4. In GitHub, go to `Settings -> Pages`.
5. Set the source to `Deploy from a branch`.
6. Choose the `main` branch and `/root`, then save.
7. GitHub will give you a public URL after the first deploy finishes.

## If you want the exact Magic Portfolio / Next.js path

The Vercel Magic Portfolio template is a Next.js app. That usually works like this:

1. Create a new project from the Vercel template.
2. Edit its content files and images.
3. Store the code in GitHub.
4. Deploy it on Vercel.

That is not wrong, but it is a little heavier than needed for this first publish. This folder is a static version, so it can publish on GitHub Pages without Node, npm, Vercel, or a build step. If you later want the exact Next.js template, the copy and image structure here can be ported into Magic Portfolio.

## Confidentiality notes

- Honda images from the attached materials were not included.
- General Atomics project photos were not included.
- The Honda and General Atomics visuals are generic, non-branded, public-safe illustrations.
- Phone number is intentionally omitted from the public contact page.
