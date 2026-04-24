"use client";

import { FormEvent, useEffect, useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("burntrack-theme") ?? "light";

    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  function handleThemeChange(nextTheme: string) {
    setTheme(nextTheme);
    localStorage.setItem("burntrack-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="max-w-2xl text-stone-700">
          Manage your BurnTrack preferences.
        </p>
      </div>

      <form className="grid max-w-xl gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-1">
          <span>Default activity type</span>
          <select className="rounded-md border border-stone-300 bg-white px-3 py-2">
            <option>Running</option>
            <option>Walking</option>
            <option>Cycling</option>
            <option>Swimming</option>
          </select>
        </label>

        <label className="grid gap-1">
          <span>Weekly calorie goal</span>
          <input
            className="rounded-md border border-stone-300 bg-white px-3 py-2"
            min="0"
            type="number"
          />
        </label>

        <label className="grid gap-1">
          <span>Theme</span>
          <select
            className="rounded-md border border-stone-300 bg-white px-3 py-2"
            value={theme}
            onChange={(event) => handleThemeChange(event.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label className="flex items-center gap-2">
          <input className="h-4 w-4" type="checkbox" />
          <span>Show weekly progress on dashboard</span>
        </label>

        <button className="w-fit rounded-md bg-stone-900 px-4 py-2 text-white">
          Save Settings
        </button>
      </form>
    </section>
  );
}
