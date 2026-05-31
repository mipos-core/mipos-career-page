---
service: career
name: Career Page
realm: business
category: people
linkage: weak
layer: app
maturity: built
domains: links_pending
depends_on:
d1:
kv:
r2:
owner: adrian
task_ref: ?
repo: mipos-career-page
links_pending: domains (static site, clean-URL nav like `/openings` `/contact` implies a hosted rewrite layer e.g. CF Pages, but NO wrangler/CNAME/_redirects config in-repo — no domain confirmable)
---
# Career Page

The public **Mipos ShopTech careers / recruiting marketing site** — a fully static, backend-less
multi-page site (hand-written HTML + TailwindCSS CDN + vanilla `shared.js`). Space/astronaut theme,
warm-orange brand, dark-mode toggle. Pages: Home, Missions, Openings, Blog, Contact, plus per-role
job detail pages under `jobs/` (bd, ecom, pos, warehouse). Markets open roles and "missions" to
prospective talent.

No build step, no backend, no `*.mipos.io` calls, no D1/KV/R2 bindings. The contact/application form
has **no server** — `handleSubmit` opens a `mailto:hr@mipos.io` (comment: "no backend"); applications
also route OUT to the external job board **MauKerja** (`maukerja.my/.../mipos-sdn-bhd`). Any link to the
HR/recruiting pipeline (hrportal's Airtable Job Application table) is a human/email process, not a code
dependency, so `depends_on` is left blank.

> Authoritative infra declaration; minfra crawls this to reconcile the registry.
