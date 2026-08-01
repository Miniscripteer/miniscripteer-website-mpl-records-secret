import CountdownTimer from "@/components/CountdownTimer";

export const metadata = { title: "Countdown — miniscripteer" };

export default function CountdownPage() {
  const target = process.env.NEXT_PUBLIC_COUNTDOWN_DATE || "2026-12-31T00:00:00Z";
  const label = process.env.NEXT_PUBLIC_COUNTDOWN_LABEL || "the next release";

  return (
    <div className="mx-auto max-w-4xl px-5 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
        Countdown
      </p>
      <h1 className="mt-3 font-mono text-4xl text-white">{label}</h1>
      <p className="mt-4 text-sm text-fog">
        Set your own date in the <code className="text-amber">NEXT_PUBLIC_COUNTDOWN_DATE</code> environment variable.
      </p>

      <div className="mt-14">
        <CountdownTimer targetDate={target} label={label} />
      </div>
    </div>
  );
}
