# Final Antigravity File Mapping

## Active top page files
- `app/page.tsx` -> imports `components/antigravity/HomePage`
- `components/antigravity/HomePage.tsx` -> composes all top-page sections
- `components/antigravity/*` -> per-section implementation and helpers
- `app/globals.css` -> top-page shared styles

## Transitional file
- `components/home/HomePage.tsx` -> compatibility wrapper to `components/antigravity/HomePage`

## Future cleanup trigger
When no code imports `components/home/HomePage.tsx`, it can move to delete candidates.
