# Migration Plan (Top Page Renewal)

## Goal
Replace the current temporary top page with an antigravity-oriented structure and keep only maintainable files.

## Phases
1. Stabilize current files and remove mojibake/broken JSX.
2. Split top page into section components (Hero, Vision, Mission, Service, Company, Contact).
3. Align styles and animation hooks with the split structure.
4. Validate build/lint and review file usage.
5. Classify files into keep/delete/hold before cleanup.

## Done in this phase
- `app/page.tsx` now points to `components/antigravity/HomePage`.
- `components/home/HomePage.tsx` is converted to a compatibility wrapper.
- Section components are split under `components/antigravity/`.

## Next
- Confirm final content and copy for each section.
- Freeze keep/delete/hold table and execute deletion in a separate step.
