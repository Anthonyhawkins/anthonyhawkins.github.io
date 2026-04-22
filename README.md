# space-networking

A code-first career transition into Starlink network, topology, and LEO broadband systems, documented as a Hugo static blog.

## 🛰️ What This Is

**Orbital Protocol** — a personal blog and 52-week curriculum for a senior TCP/gRPC networking engineer preparing for SpaceX Starlink network, topology, ground-network, and constellation-routing roles.

Live site: `https://<your-github-username>.github.io/space-networking/`

The `curriculum/` directory contains the full study plan. The `site/` directory is the Hugo site.

---

## Prerequisites

| Tool | Install |
|------|---------|
| [Hugo ≥ 0.100 (extended)](https://gohugo.io/installation/) | `brew install hugo` |
| Git | included on macOS |

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/<your-username>/space-networking.git
cd space-networking

# Start the dev server (live reload, drafts visible)
make dev

# Open http://localhost:1313
```

---

## Makefile Reference

```
make dev           Start local dev server with live reload
make build         Build production site into site/public/
make clean         Remove site/public/
make new-post      Create a new journal entry
make new-module    Create a new curriculum module page
make check         Run Hugo content/template checks
```

### Creating a new journal entry

```bash
make new-post NAME=day-042-gateway-pathing
# Opens: site/content/blog/day-042-gateway-pathing.md
```

Edit the file, set `draft = false` when ready to publish. Push to `main` — GitHub Actions will deploy automatically.

### Creating a new curriculum module page

```bash
make new-module NAME=module-00-math-foundations
```

Edit the front matter (`module_number`, `summary`, `math_required`, `math_level`, `duration`) then add the content.

---

## Deploying to GitHub Pages

### One-Time Setup

1. Push this repo to GitHub as a **public** repository named `space-networking`
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. That's it — the workflow in `.github/workflows/deploy.yml` handles the rest

### How It Works

Every push to `main` automatically:
1. Checks out the repo
2. Installs Hugo (extended, v0.147.8)
3. Builds the site with `--minify`
4. Deploys to GitHub Pages

Your site will be live at:
```
https://<your-github-username>.github.io/space-networking/
```

### Updating Your Site URL

Edit `hugo.toml` and set `baseURL` to your actual GitHub Pages URL:

```toml
baseURL = "https://your-actual-username.github.io/space-networking/"
```

---

## Site Structure

```
space-networking/
├── Makefile                        # Build and deploy commands
├── curriculum/                     # Study plan (markdown source)
│   ├── README.md                   # Curriculum index
│   ├── learning-path.md            # Parallel track schedule
│   ├── 01-starlink-system-model/
│   ├── 02-starlink-rf-foundations/
│   └── ...
└── site/                           # Hugo site
    ├── hugo.toml                   # Site configuration
    ├── archetypes/                 # Content templates
    │   ├── blog.md
    │   └── curriculum.md
    ├── content/
    │   ├── about.md
    │   ├── blog/                   # Journal entries
    │   └── curriculum/             # Module pages
    └── themes/orbital/             # Custom SpaceX-dark theme
        ├── layouts/
        ├── static/css/
        └── static/js/
```

---

## Writing Journal Entries

Use front matter at the top of each post:

```toml
+++
title = "Day 042 — First Gateway Path Simulator Running"
date = 2026-05-10
tags = ["c++", "starlink", "routing", "project"]
summary = "Built a gateway and POP path selector for a Starlink-inspired LEO access model."
draft = false
+++
```

Suggested tags: `math`, `algebra`, `calculus`, `c++`, `python`, `starlink`, `leo`, `routing`, `topology`, `direct-to-cell`, `optical`, `project`, `books`, `planning`

---

## Adding Curriculum Module Pages

Each module page in `site/content/curriculum/` corresponds to a module in `curriculum/`. You can either:

1. Copy the curriculum markdown directly into the Hugo content file
2. Write a summary/overview and link out to the detailed curriculum files

Example front matter for a module:

```toml
+++
title = "Module 02 — Starlink RF Foundations and Phased-Array Access Links"
module_number = 2
summary = "Learn Ku/Ka/E-band access links, phased-array beam geometry, delay, and path loss."
math_required = false
math_level = ""
duration = "6 weeks"
language = "C++ and Python"
draft = false
+++
```
