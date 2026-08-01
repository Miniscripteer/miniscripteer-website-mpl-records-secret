export const metadata = { title: "Info — miniscripteer" };

export default function InfoPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Info</p>
      <h1 className="mt-3 font-mono text-4xl text-white">About miniscripteer</h1>
      <p className="mt-6 text-sm leading-relaxed text-fog">
        Add a bio, press kit links, and socials here. Edit{" "}
        <code className="text-amber">app/info/page.js</code>.
      </p>
    </div>
  );
}
