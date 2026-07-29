import { getAllBlogPosts } from "../lib/blog-registry"
import { getBlogSearchRiskScore, getIndexableBlogPosts, isIndexableBlogPost } from "../lib/blog-search-eligibility"

const posts = getAllBlogPosts()
const indexablePosts = getIndexableBlogPosts(posts)
const noindexPosts = posts.filter((post) => !isIndexableBlogPost(post))

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(message)
}

assert(posts.length === 274, `expected 274 published static posts, received ${posts.length}`)
assert(noindexPosts.length === 68, `expected 68 high-risk posts, received ${noindexPosts.length}`)
assert(indexablePosts.length === 206, `expected 206 indexable posts, received ${indexablePosts.length}`)
assert(!isIndexableBlogPost(posts.find((post) => post.slug === "ai-writing-tools-guide")!), "thin ai-writing-tools guide must be noindex")
assert(isIndexableBlogPost(posts.find((post) => post.slug === "web-novel-chapter-length")!), "substantive web-novel guide must remain indexable")
assert(getBlogSearchRiskScore(posts.find((post) => post.slug === "ai-writing-tools-guide")!) >= 46, "thin guide must meet risk threshold")

console.log(JSON.stringify({ total: posts.length, indexable: indexablePosts.length, noindex: noindexPosts.length }, null, 2))
