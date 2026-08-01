"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (result?.error) {
      setError("Incorrect email or password.");
      setStatus("error");
      return;
    }

    router.push("/");
  }

  return (
    <div className="mx-auto max-w-md px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Account</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Log in</h1>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wide text-fog">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded border border-line bg-ink px-4 py-3 font-mono text-sm text-white outline-none focus:border-amber"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-wide text-fog">
            Password
          </label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded border border-line bg-ink px-4 py-3 font-mono text-sm text-white outline-none focus:border-amber"
          />
        </div>

        {error && <p className="font-mono text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 rounded border border-amber bg-amber px-6 py-3 font-mono text-sm text-ink disabled:opacity-50"
        >
          {status === "sending" ? "Logging in…" : "Log in"}
        </button>
      </form>

      <p className="mt-6 font-mono text-sm text-fog">
        No account yet?{" "}
        <Link href="/signup" className="text-cyan hover:text-amber">
          Sign up
        </Link>
      </p>
    </div>
  );
}
