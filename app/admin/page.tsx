import { redirect } from "next/navigation";
import { requireAdminAuth } from "@/lib/admin-auth";

export default async function AdminIndex() {
  await requireAdminAuth();
  redirect("/admin/posts");
}
