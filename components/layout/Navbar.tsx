"use client";

import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-1/2 top-3 z-50 w-[94%] max-w-7xl -translate-x-1/2 md:top-4 md:w-[95%]"
      dir="rtl"
    >
      <nav className="rounded-2xl border border-white/10 bg-black/40 p-3 shadow-lg backdrop-blur-xl sm:p-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-neutral-200 transition hover:bg-white/10 md:hidden"
            aria-label="منو"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold text-white transition hover:opacity-80"
          >
            Starter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 text-sm text-neutral-200 md:flex lg:gap-6">
            <Link
              href="/"
              className="transition hover:text-primary"
            >
              خانه
            </Link>

            <Link
              href="/aboutus"
              className="transition hover:text-primary"
            >
              درباره ما
            </Link>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-2 sm:gap-4">
            {status === "loading" ? (
              <span className="hidden text-xs text-neutral-400 sm:block">
                در حال بررسی...
              </span>
            ) : session ? (
              <div className="hidden items-center gap-2 sm:flex md:gap-3">
                <span className="max-w-[140px] truncate text-xs font-medium text-neutral-100 md:text-sm">
                  سلام، {session.user?.name || "کاربر"}
                </span>

                <Link
                  href="/profile"
                  className="text-xs text-neutral-300 transition hover:text-primary"
                >
                  پروفایل
                </Link>

                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-xl bg-white/10 px-3 py-1.5 text-xs text-neutral-100 transition hover:bg-white/15"
                >
                  خروج
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href="/login"
                  className="text-xs text-neutral-200 transition hover:text-primary sm:text-sm"
                >
                  ورود
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-ink shadow-md transition hover:bg-primary-light sm:px-4 sm:text-sm"
                >
                  ثبت‌نام
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5 hover:text-primary"
              >
                خانه
              </Link>

              <Link
                href="/aboutus"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5 hover:text-primary"
              >
                درباره ما
              </Link>

              <div className="my-2 h-px bg-white/10" />

              {session ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5"
                  >
                    پروفایل
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="rounded-xl px-4 py-3 text-right text-sm text-red-300 transition hover:bg-white/5"
                  >
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5"
                  >
                    ورود
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-ink transition hover:bg-primary-light"
                  >
                    ثبت‌نام
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

