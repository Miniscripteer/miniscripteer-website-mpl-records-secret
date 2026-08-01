export default function StoreItemCard({ item }) {
  return (
    <div className="group overflow-hidden rounded border border-line bg-panel">
      <div className="relative aspect-square w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.comingSoon && (
          <span className="absolute right-3 top-3 rounded border border-amber bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-amber">
            Coming soon
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-mono text-lg text-white">{item.name}</h3>
        <p className="mt-2 text-sm text-fog">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-sm text-cyan">
            {item.comingSoon ? "—" : item.price ? `$${item.price}` : "Free"}
          </span>

          {item.comingSoon || !item.buyLink ? (
            <span className="rounded border border-line px-4 py-2 font-mono text-xs text-fog">
              Not yet available
            </span>
          ) : (
            <a
              href={item.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-amber px-4 py-2 font-mono text-xs text-amber hover:bg-amber hover:text-ink"
            >
              Buy
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
