import storeItems from "@/data/store-items.json";
import StoreItemCard from "@/components/StoreItemCard";

export const metadata = { title: "Store — miniscripteer" };

export default function StorePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Store</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Merch & releases</h1>
      <p className="mt-4 max-w-xl text-sm text-fog">
        Everything ships from MPL Records. New items appear here as soon as
        they&apos;re added.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
