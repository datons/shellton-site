# shellton-site

Marketing + privacy-policy site for the Shellton iOS app. Served via GitHub Pages.

## Publish

1. Create a new public repo at `github.com/datons/shellton-site` (or whatever org/name you prefer).
2. Copy everything in this directory into the root of that repo.
3. Fill in the TBDs in `privacy.md` (effective date, contact email, support URL).
4. Push to `main`.
5. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **/(root)**.
6. Wait ~60 seconds. Site goes live at `https://<your-username>.github.io/shellton-site/`.
7. (Optional) Add a custom domain: `shellton.app` → CNAME file + DNS.
8. Link the privacy policy URL into App Store Connect → App Information → Privacy Policy URL.

## URLs once live

| Page | URL |
|---|---|
| Home | `https://<pages-host>/` |
| Privacy policy | `https://<pages-host>/privacy` |
| Support | `https://<pages-host>/support` |

## Layout

```
.
├── _config.yml         # Jekyll config (GitHub Pages default)
├── index.md            # Landing page
├── privacy.md          # Privacy policy (from .plans/privacy-policy.md)
├── support.md          # Support / contact page
└── CNAME               # (optional) custom domain
```

## If you don't want Jekyll

Delete `_config.yml` and rename `*.md` → `*.html`, or add a `.nojekyll` file and write your own HTML. Jekyll is the path of least resistance; everything below works with GitHub's default Jekyll build.
