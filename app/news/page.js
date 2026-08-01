export const metadata = { title: "News — miniscripteer" };

const POSTS = [
  {
    date: "TBA",
    title: "AL02 in progress",
    body: "Work on the next album has started. Follow the countdown page for the release date once it's locked in.",
  },
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">News</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Latest updates</h1>
      <p className="mt-4 text-sm text-fog">
        Edit <code className="text-amber">app/news/page.js</code> to add a new post.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {POSTS.map((p) => (
          <article key={p.title} className="border-b border-line pb-8">
            <p className="font-mono text-xs text-amber">{p.date}</p>
            <h2 className="mt-2 font-mono text-xl text-white">{p.title}</h2>
            <p className="mt-3 text-sm text-fog">{p.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
