export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-fog md:flex-row">
        <span>© {new Date().getFullYear()} miniscripteer / MPL Records</span>
        <span className="cursor-blink text-amber">stay tuned</span>
      </div>
    </footer>
  );
}
