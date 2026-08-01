"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="font-mono text-sm text-fog">···</span>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-cyan">{session.user?.name}</span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded border border-line px-3 py-1 font-mono text-sm text-fog transition-colors hover:border-amber hover:text-amber"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="font-mono text-sm text-fog hover:text-amber"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="rounded border border-amber px-3 py-1 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-ink"
      >
        Sign up
      </Link>
    </div>
  );
}
