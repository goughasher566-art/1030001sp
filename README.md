4-vercel: Vercel static deployment

This folder is a Vercel-ready static site built from `4/白页（已重新修改）`.

How to deploy on Vercel
1. Copy assets into `static/`:
   - From `4/白页（已重新修改）/static` → paste entire folder into `4-vercel/static` (keep subfolders: `css`, `js`, `font`, `picture`, `image`, etc.)
2. Commit and push this project to GitHub.
3. In Vercel, “New Project” → Import your repo → Set project root to `4-vercel`.
4. No build command needed (static). Click Deploy.

Notes
- Paths are relative to `/static/...` as in the original.
- `vercel.json` is included for static routing.
- Optional tracking scripts kept as-is. Remove if not needed.



