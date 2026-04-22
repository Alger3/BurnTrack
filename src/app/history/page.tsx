import { ActivityList } from "@/components/ActivityList";

export default function HistoryPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">History</h1>
      <ActivityList />
    </section>
  );
}
