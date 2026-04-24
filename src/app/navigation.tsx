"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        {pathname === "/" ? (
          <span className="text-xl font-bold">BurnTrack</span>
        ) : (
          <Link href="/home" className="text-xl font-bold">
            BurnTrack
          </Link>
        )}
        {pathname === "/" ? null : (
          <div className="flex gap-4 text-sm font-medium text-stone-700">
            {/* <Link href="/">Login</Link> */}
            {/* <Link href="/home">Home</Link> */}
            <Link href="/profile">Profile</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/add-activity">Add Activity</Link>
            <Link href="/history">History</Link>
            <Link href="/settings">Settings</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
