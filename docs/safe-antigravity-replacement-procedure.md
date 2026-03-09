# Safe Replacement Procedure

## Preconditions
- Work on `main` or a dedicated working branch.
- Confirm `git status` before edits.

## Procedure
1. Implement new components without deleting old files.
2. Switch entrypoint (`app/page.tsx`) to the new composition root.
3. Verify local build (`npm run build`) and lint (`npm run lint`).
4. Check unused files with import search.
5. Propose keep/delete/hold table.
6. Delete only after agreement.

## Rollback guidance
If issues appear, restore `app/page.tsx` to the previous import and keep both implementations until fixed.
