# Top page replacement plan (Phase 2)

## New top-page structure

1. Hero
2. Vision
3. Mission
4. Service
5. Company
6. Contact

## Files to modify

- `components/home/HomePage.tsx`
- `app/globals.css`
- `app/page.tsx` (entrypoint, already delegated)

## Cleanup candidates

- `components/home/Section.tsx` (unused after direct section replacement)
- Legacy styles and sections not referenced from `HomePage`

## Keep (build foundation)

- `package.json`
- `tsconfig.json`
- `next.config.mjs`
- `next-env.d.ts`
- `app/layout.tsx`
