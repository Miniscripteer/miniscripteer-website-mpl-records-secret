export const metadata = { title: "Affiliates — miniscripteer" };

const AFFILIATES = [
  // { name: "Example Studio", url: "https://example.com" },
];

export default function AffiliatesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Affiliates</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Friends & partners</h1>
      <p className="mt-4 text-sm text-fog">
        Add entries to the <code className="text-amber">AFFILIATES</code>{" "}
        array in <code className="text-amber">app/affiliates/page.js</code>.
      </p>

      {AFFILIATES.length === 0 ? (
        <p className="mt-10 font-mono text-sm text-fog">Nothing listed yet.</p>
      ) : (
        <ul className="mt-10 flex flex-col gap-4">
          {AFFILIATES.map((a) => (
            <li key={a.name}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-cyan hover:text-amber"
              >
                {a.name} →
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
