# Current handoff

- Timestamp: 2026-07-29 KST
- User goal: Improve this site fleet for AdSense review readiness and useful Google search content.
- Scope: `texturb.com` static blog search surface, using the clean isolated clone only.
- Evidence before change: the fresh dashboard snapshot showed 133 active users in 7 days, 30 GSC impressions, 0 clicks and average position 8.4. The live sitemap exposed 331 URLs. The local content audit found 274 static posts, including 68 that meet its existing `merge-or-noindex` risk threshold.
- Current state: the site is a Next.js/Vercel project with static blog posts plus separately stored database posts. The static risk rule is now centralized and applied to blog listing, sitemap, RSS, article robots metadata, related recommendations, and direct static inlinks. Database-backed content is deliberately out of this change because source freshness cannot be established from the read-only local evidence.
- Completed checks: live home, a static article, a database article, sitemap, ads.txt, robots.txt, and RSS all returned HTTP 200; live pages have a canonical, one H1, and the configured AdSense loader. `npm run verify:search-scope` confirms 274 total / 206 indexable / 68 noindex. `npm run audit:content` independently reports the same 68 `merge-or-noindex` posts. `npm run build` completed successfully. A local production server confirmed a thin article emits `noindex`, a substantive article remains indexable, the thin URL is absent from sitemap and blog listing, and the sitemap contains 262 locally available URLs.
- Side effects and rollback: no production action yet. The planned change retains direct article URLs and adds `noindex,follow` only to static posts that cross the existing risk threshold; revert the resulting commit to restore the previous search surface.
- External actions deliberately not run: no AdSense application/resubmission, GSC submission, IndexNow, sitemap ping, database write, or content publishing job.
- Validation gap: `npm run lint` cannot run because `eslint` is referenced by the repository script but not installed in its dependencies. No dependency was added for this pre-existing repository issue.
- Next step: commit and push this isolated change, wait for Vercel, then repeat the public robots/sitemap/listing checks.
