import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash } from "crypto";

const SESSION_COOKIE = "admin-session";
const SESSION_SALT = "texturb-salt";

export function getExpectedAdminSession(): string {
  const pwd = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256")
    .update(pwd + SESSION_SALT)
    .digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  return session === getExpectedAdminSession();
}

export async function requireAdminAuth(): Promise<void> {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}
