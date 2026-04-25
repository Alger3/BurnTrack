"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("member");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch("/api/profile");
        const result = await response.json();

        if (!response.ok) {
          setError(result.message ?? "Unable to load profile.");
          return;
        }

        setEmail(result.user.email ?? "");
        setName(result.user.name ?? "");
        setRole(result.user.role ?? "member");
        setHeightCm(String(result.user.heightCm ?? ""));
        setWeightKg(String(result.user.weightKg ?? ""));
        setAge(result.user.age ? String(result.user.age) : "");
        setSex(result.user.sex ?? "");
      } catch {
        setError("Unable to load profile.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setMessage("");

    setIsSaving(true);

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          heightCm,
          weightKg,
          age,
          sex
        })
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "Unable to save profile.");
        return;
      }

      setMessage(result.message ?? "Profile saved.");
    } catch {
      setError("Unable to save profile.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Profile Setup</h1>
      <form className="grid max-w-xl gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-1">
          <span>Name</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            disabled={isLoading}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <label className="grid gap-1">
          <span>Email</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            readOnly
            value={email}
          />
        </label>
        <label className="grid gap-1">
          <span>Role</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            readOnly
            value={role}
          />
        </label>
        <label className="grid gap-1">
          <span>Height cm</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            disabled={isLoading}
            onChange={(event) => setHeightCm(event.target.value)}
            type="number"
            value={heightCm}
          />
        </label>
        <label className="grid gap-1">
          <span>Weight kg</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            disabled={isLoading}
            onChange={(event) => setWeightKg(event.target.value)}
            type="number"
            value={weightKg}
          />
        </label>
        <label className="grid gap-1">
          <span>Age optional</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            disabled={isLoading}
            onChange={(event) => setAge(event.target.value)}
            type="number"
            value={age}
          />
        </label>
        <label className="grid gap-1">
          <span>Sex optional</span>
          <input
            className="rounded-md border border-stone-300 px-3 py-2"
            disabled={isLoading}
            onChange={(event) => setSex(event.target.value)}
            value={sex}
          />
        </label>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {message ? <p className="text-sm text-green-700">{message}</p> : null}
        <button
          className="w-fit rounded-md bg-stone-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isLoading || isSaving}
          type="submit"
        >
          {isSaving ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </section>
  );
}
