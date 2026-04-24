"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!account.trim() || !password.trim()) {
      setError("Please enter both account and password.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          account,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "Invalid account or password.");
        return;
      }

      router.push("/home");
    } catch {
      setError("Unable to login right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-auto grid min-h-[70vh] max-w-md place-items-center">
      <div className="w-full rounded-md border border-stone-300 bg-white p-8 shadow-sm">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold text-stone-900">BurnTrack</h1>
          <p className="text-sm text-stone-600">
            Sign in to continue to your activity dashboard.
          </p>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1">
            <span className="text-sm font-medium text-stone-700">Account</span>
            <input
              className="rounded-md border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
              placeholder="Enter your account"
              type="text"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-stone-700">Password</span>
            <input
              className="rounded-md border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              type="password"
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            className="cursor-pointer rounded-md bg-stone-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
