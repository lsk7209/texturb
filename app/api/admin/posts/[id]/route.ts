import { NextResponse } from "next/server";
import { deletePost, updatePost } from "@/lib/db/post-queries";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const result = await deletePost(Number(id));
  return NextResponse.json(result);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await request.json();
  const result = await updatePost(Number(id), body);
  return NextResponse.json(result);
}
