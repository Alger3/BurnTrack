import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">BurnTrack</h1>
        <p className="max-w-2xl text-lg text-stone-700">
          Record activities, estimate calories burned, and review simple weekly
          progress.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/profile"
          className="rounded-md bg-stone-900 px-4 py-2 text-white"
        >
          Set Up Profile
        </Link>
        <Link
          href="/add-activity"
          className="rounded-md border border-stone-300 px-4 py-2"
        >
          Add Activity
        </Link>
      </div>
    </section>
  );
}
