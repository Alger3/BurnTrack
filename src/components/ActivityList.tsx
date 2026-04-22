export function ActivityList() {
  return (
    <div className="overflow-hidden rounded-md border border-stone-300 bg-white">
      <table className="w-full border-collapse text-left">
        <thead className="bg-stone-100">
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Sport</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Calories</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3" colSpan={5}>
              No activities yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
