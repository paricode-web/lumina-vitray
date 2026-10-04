import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-bg-base px-4 py-24 text-right"
    >
      <div className="mx-auto max-w-2xl">
        <div className="glass rounded-3xl p-8 shadow-xl">
          <h1 className="mb-8 text-3xl font-bold text-white">
            پروفایل کاربری
          </h1>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-neutral-400">نام</p>
              <p className="mt-1 text-lg text-white">
                {session.user.name || "ثبت نشده"}
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-400">ایمیل</p>
              <p className="mt-1 text-lg text-white">
                {session.user.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-400">نقش کاربر</p>
              <p className="mt-1 text-lg text-white">
                {(session.user as { role?: string }).role || "USER"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}