# Current handoff

## Sitemap modification-date repair — 2026-09-08 KST

- User goal: improve AdSense-unapproved sites in current DAU order; Texturb is rank 12 at DAU 10 and `GETTING_READY` in the current fleet evidence.
- Current source: isolated clone of canonical `lsk7209/texturb` `main` at `df86bf7ba8b2648295126fe6e817ece837c1cbf3`; exact Production deployment `5779654793` is successful. The stale dirty primary at `E:\web\texturb` was preserved.
- Completed locally: removed generated-current-time `lastModified` claims from static, tool, guide, workflow, and blog-hub sitemap entries. Static posts retain `publishedAt`; DB posts retain stored published/created dates. Added `scripts/verify-sitemap-lastmod.mjs`.
- Fresh validation: regression was RED before repair and now prints `TEXTURB_SITEMAP_LASTMOD_OK`; `npm exec tsc -- --noEmit`, production build (514 routes), and `git diff --check` pass.
- Diagnostic gap: existing `npm run verify:search-scope` is stale and fails because it hardcodes 274 posts while current canonical source has 445. `npm run audit:content` independently reports 445 with 155 merge-or-noindex and 290 strengthen; its generated docs change is excluded from this focused release. This is evidence of remaining content-quality work, not a reason to alter the sitemap repair.
- Side effects/rollback: local isolated clone only at this checkpoint. `npm ci` restored dependencies; no dependency or lockfile change. Revert the eventual focused commit to roll back.
- Deliberately not run: no DB write, content generation/publication, AdSense/CMP/account action, GSC/IndexNow notification, or direct Vercel mutation.
- Next step: obtain independent diff review, commit/push only the sitemap/test/handoff allowlist, verify Git-connected production and public sitemap dates.

---

- Timestamp: 2026-07-29 KST
- User goal: Improve this site fleet for AdSense review readiness and useful Google search content.
- Scope: `texturb.com` static blog search surface, using the clean isolated clone only.
- Evidence before change: the fresh dashboard snapshot showed 133 active users in 7 days, 30 GSC impressions, 0 clicks and average position 8.4. The live sitemap exposed 331 URLs. The local content audit found 274 static posts, including 68 that meet its existing `merge-or-noindex` risk threshold.
- Current state: the site is a Next.js/Vercel project with static blog posts plus separately stored database posts. The static risk rule is now centralized and applied to blog listing, sitemap, RSS, article robots metadata, related recommendations, and direct static inlinks. Database-backed content is deliberately out of this change because source freshness cannot be established from the read-only local evidence.
- Completed checks: live home, a static article, a database article, sitemap, ads.txt, robots.txt, and RSS all returned HTTP 200; live pages have a canonical, one H1, and the configured AdSense loader. `npm run verify:search-scope` confirms 274 total / 206 indexable / 68 noindex. `npm run audit:content` independently reports the same 68 `merge-or-noindex` posts. `npm run build` completed successfully. A local production server confirmed a thin article emits `noindex`, a substantive article remains indexable, the thin URL is absent from sitemap and blog listing, and the sitemap contains 262 locally available URLs.
- Production release: commit `5a555df` (`Narrow Texturb search scope to reviewed static posts`) was pushed to `main`. Vercel production deployment `dpl_EiTTzEgX7M6BkiXYi5zqUGkzqGuD` is Ready and aliases both apex and `www` domains.
- Live verification: `https://www.texturb.com/blog/ai-writing-tools-guide/` is HTTP 200 with one H1, canonical URL, configured AdSense loader, and `noindex`; `https://www.texturb.com/blog/web-novel-chapter-length/` is HTTP 200 with one H1, canonical URL, configured AdSense loader, and remains indexable. Live sitemap is HTTP 200 with 272 URLs, excludes the thin guide, and includes the substantive guide. Live RSS and blog index are HTTP 200 and do not promote the thin guide.
- Side effects and rollback: production now retains direct article URLs and adds `noindex,follow` only to static posts that cross the existing risk threshold; revert commit `5a555df` to restore the previous search surface.
- External actions deliberately not run: no AdSense application/resubmission, GSC submission, IndexNow, sitemap ping, database write, or content publishing job.
- Validation gap: `npm run lint` cannot run because `eslint` is referenced by the repository script but not installed in its dependencies. No dependency was added for this pre-existing repository issue.
- Next step: continue fleet prioritization from the fresh dashboard snapshot; do not trigger GSC, IndexNow, sitemap ping, AdSense application/resubmission, database writes, or automatic content publishing without separate authority.
