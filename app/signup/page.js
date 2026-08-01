"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      // Auto sign-in right after account creation.
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (result?.error) {
        router.push("/login");
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-md px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Account</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Sign up</h1>
      <p className="mt-4 text-sm text-fog">
        Get notified the moment new releases and merch drop.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
        />
        <Field
          label="Password"
          type="password"
          value={form.password}
          onChange={(v) => setForm({ ...form, password: v })}
        />

        {error && <p className="font-mono text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 rounded border border-amber bg-amber px-6 py-3 font-mono text-sm text-ink disabled:opacity-50"
        >
          {status === "sending" ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-6 font-mono text-sm text-fog">
        Already have an account?{" "}
        <Link href="/login" className="text-cyan hover:text-amber">
          Log in
        </Link>
      </p>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wide text-fog">
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-line bg-ink px-4 py-3 font-mono text-sm text-white outline-none focus:border-amber"
      />
    </div>
  );
}
