import { Katibeh } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const katibeh = Katibeh({
  weight: ["400"],
  subsets: ["arabic", "latin"],
  variable: "--font-katibeh",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next Starter",
    template: "%s | Next Starter",
  },
  description:
    "A modern, reusable starter for Next.js projects with authentication, Prisma, PostgreSQL, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${katibeh.variable} bg-bg-base font-vazirmatn min-h-screen`}
      >
        <Toaster position="top-center" />

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}