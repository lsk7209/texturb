import { getAllPostsAdmin } from "@/lib/db/post-queries";
import { requireAdminAuth } from "@/lib/admin-auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function AdminPosts() {
  await requireAdminAuth();
  const { data: posts } = await getAllPostsAdmin();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">텍스터브 어드민</h1>
        <a
          href="/admin/posts"
          className="text-sm text-blue-600 hover:underline"
        >
          글 관리
        </a>
      </header>
      <main className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">글 관리</h2>
            <form action="/api/admin/posts" method="POST">
              <Button type="submit" variant="outline">
                + 수동 생성
              </Button>
            </form>
          </div>
          <div className="bg-white rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left">제목</th>
                  <th className="px-4 py-3 text-left">타입</th>
                  <th className="px-4 py-3 text-left">상태</th>
                  <th className="px-4 py-3 text-left">발행일</th>
                  <th className="px-4 py-3 text-left">액션</th>
                </tr>
              </thead>
              <tbody>
                {(posts ?? []).map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 max-w-xs truncate">
                      {post.title}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{post.type}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          post.status === "published" ? "default" : "secondary"
                        }
                      >
                        {post.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString(
                            "ko-KR",
                          )
                        : "-"}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <form
                        action={`/api/admin/posts/${post.id}`}
                        method="POST"
                      >
                        <input type="hidden" name="_method" value="DELETE" />
                        <Button type="submit" variant="destructive" size="sm">
                          삭제
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
