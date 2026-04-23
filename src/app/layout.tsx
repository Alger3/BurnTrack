import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnTrack",
  description: "A simple sport recorder for estimated calories and progress."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-stone-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/home" className="text-xl font-bold">
              BurnTrack
            </Link>
            <div className="flex gap-4 text-sm font-medium text-stone-700">
              <Link href="/">Login</Link>
              <Link href="/home">Home</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/add-activity">Add Activity</Link>
              <Link href="/history">History</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-5 py-8">{children}</main>
      </body>
    </html>
  );
}
