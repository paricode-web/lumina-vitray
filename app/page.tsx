import Link from "next/link";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-bg-base text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6">

        <section className="flex flex-1 items-center justify-center py-32">
          <div className="w-full max-w-3xl text-center">

            <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
              Next.js Starter
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              پروژه بعدی خود را بسازید
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
              یک پایه مدرن و قابل استفاده مجدد برای پروژه‌های Next.js،
              همراه با احراز هویت، Prisma، TypeScript و ساختار تمیز.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-ink transition hover:bg-primary-light"
              >
                شروع کنید
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                ورود
              </Link>
            </div>

          </div>
        </section>

        <section className="grid gap-4 pb-16 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-2 font-semibold">احراز هویت</h2>
            <p className="text-sm leading-6 text-neutral-400">
              سیستم احراز هویت مبتنی بر Credentials و NextAuth.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-2 font-semibold">دیتابیس</h2>
            <p className="text-sm leading-6 text-neutral-400">
              Prisma ORM و PostgreSQL با یک لایه دیتابیس قابل استفاده مجدد.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-2 font-semibold">TypeScript</h2>
            <p className="text-sm leading-6 text-neutral-400">
              یک پایه TypeScript برای توسعه سریع و ساخت پروژه‌های جدید.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
