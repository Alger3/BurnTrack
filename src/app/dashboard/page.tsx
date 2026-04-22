import { SummaryCard } from "@/components/SummaryCard";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard label="Today Calories" value="0 kcal" />
        <SummaryCard label="Today Minutes" value="0 min" />
        <SummaryCard label="This Week Calories" value="0 kcal" />
        <SummaryCard label="This Week Minutes" value="0 min" />
      </div>
      <div className="rounded-md border border-stone-300 bg-white p-5">
        7-day calories chart will go here.
      </div>
      <div className="rounded-md border border-stone-300 bg-white p-5">
        Recent activities will go here.
      </div>
    </section>
  );
}
