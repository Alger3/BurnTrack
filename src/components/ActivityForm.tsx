export function ActivityForm() {
  return (
    <form className="grid max-w-xl gap-4">
      <label className="grid gap-1">
        <span>Sport type</span>
        <select className="rounded-md border border-stone-300 px-3 py-2">
          <option>Walking</option>
          <option>Running</option>
          <option>Cycling</option>
          <option>Swimming</option>
          <option>Gym</option>
          <option>Football</option>
          <option>Basketball</option>
          <option>Badminton</option>
          <option>Yoga</option>
        </select>
      </label>
      <label className="grid gap-1">
        <span>Intensity</span>
        <select className="rounded-md border border-stone-300 px-3 py-2">
          <option>Light</option>
          <option>Moderate</option>
          <option>Hard</option>
        </select>
      </label>
      <label className="grid gap-1">
        <span>Duration minutes</span>
        <input className="rounded-md border border-stone-300 px-3 py-2" type="number" />
      </label>
      <label className="grid gap-1">
        <span>Date</span>
        <input className="rounded-md border border-stone-300 px-3 py-2" type="date" />
      </label>
      <label className="grid gap-1">
        <span>Notes optional</span>
        <textarea className="min-h-24 rounded-md border border-stone-300 px-3 py-2" />
      </label>
      <button className="w-fit rounded-md bg-stone-900 px-4 py-2 text-white">
        Save Activity
      </button>
    </form>
  );
}
