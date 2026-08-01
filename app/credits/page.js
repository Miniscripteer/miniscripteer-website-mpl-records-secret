export const metadata = { title: "Credits — miniscripteer" };

const CREDITS = [
  { role: "Production, writing, mixing", name: "miniscripteer" },
  { role: "Label", name: "MPL Records" },
  { role: "Mastering", name: "TBA" },
  { role: "Artwork", name: "TBA" },
];

export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Credits</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Who made this happen</h1>
      <p className="mt-4 text-sm text-fog">
        Edit <code className="text-amber">app/credits/page.js</code> to update this list.
      </p>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {CREDITS.map((c) => (
          <div key={c.role} className="flex items-center justify-between py-4 font-mono text-sm">
            <span className="text-fog">{c.role}</span>
            <span className="text-white">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
