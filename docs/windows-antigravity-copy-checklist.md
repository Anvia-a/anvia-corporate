# Windows Copy Checklist (Reference)

## Source and destination
- Source: antigravity workspace
- Destination: `anvia-corporate`

## Steps
1. Copy section-level components into `components/antigravity/`.
2. Update `app/page.tsx` entrypoint.
3. Merge global styles into `app/globals.css`.
4. Run `npm run lint` and `npm run build`.
5. Confirm changed files in GitHub Desktop.

## Warning
Do not delete old files during copy. Deletion is a separate, explicit phase.
