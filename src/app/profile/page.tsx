export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Profile Setup</h1>
      <form className="grid max-w-xl gap-4">
        <label className="grid gap-1">
          <span>Name</span>
          <input className="rounded-md border border-stone-300 px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span>Height cm</span>
          <input className="rounded-md border border-stone-300 px-3 py-2" type="number" />
        </label>
        <label className="grid gap-1">
          <span>Weight kg</span>
          <input className="rounded-md border border-stone-300 px-3 py-2" type="number" />
        </label>
        <label className="grid gap-1">
          <span>Age optional</span>
          <input className="rounded-md border border-stone-300 px-3 py-2" type="number" />
        </label>
        <label className="grid gap-1">
          <span>Sex optional</span>
          <input className="rounded-md border border-stone-300 px-3 py-2" />
        </label>
        <button className="w-fit rounded-md bg-stone-900 px-4 py-2 text-white">
          Save Profile
        </button>
      </form>
    </section>
  );
}
