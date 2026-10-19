# avivarma.ca

Source for [avivarma.ca](https://avivarma.ca). The `main` branch holds the built site that GitHub Pages serves; this `source` branch holds what it's built from.

The site is plain HTML and CSS with no framework, sized so the whole home page fits in the ~14 KB a server can send in its first round trip.

- `src/index.html`, `src/404.html`: page templates.
- `src/styles.css`: shared styles, inlined into each page at build time.
- `public/`: copied to the build as is (images, icons, `CNAME`, the `/linkedin` redirect).
- `build.mjs`: builds into `build/` and fails if a page is over 13 KB gzipped, leaving room for response headers.

## Commands

- `npm run build` builds the site.
- `npm start` builds and serves it at http://localhost:3000.
- `npm run deploy` builds and pushes `build/` to `main`.

Pushing to `source` also deploys through `.github/workflows/deploy.yml`.

Images are pre-sized WebP files. When adding one, resize it to about twice its displayed size, convert it to WebP, and give the `<img>` `width`, `height` and `loading="lazy"` (unless it's above the fold).
