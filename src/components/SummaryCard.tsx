type SummaryCardProps = {
  label: string;
  value: string;
};

export function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div className="rounded-md border border-stone-300 bg-white p-5">
      <p className="text-sm text-stone-600">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
