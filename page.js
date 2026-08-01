export const metadata = { title: "MPL Records — miniscripteer" };

export default function MplRecordsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Label</p>
      <h1 className="mt-3 font-mono text-4xl text-white">MPL Records</h1>
      <p className="mt-6 text-sm leading-relaxed text-fog">
        MPL Records is the home for miniscripteer&apos;s releases. Edit{" "}
        <code className="text-amber">app/mplrecords/page.js</code> to add the
        label&apos;s story, roster, and links.
      </p>
    </div>
  );
}
