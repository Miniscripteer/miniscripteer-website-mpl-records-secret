import Link from "next/link";

export default function Home() {
  const bg = process.env.NEXT_PUBLIC_BG_IMAGE_URL;

  return (
    <div>
      <section
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-line bg-cover bg-center"
        style={{
          backgroundImage: bg
            ? `linear-gradient(180deg, rgba(11,11,14,0.55) 0%, rgba(11,11,14,0.9) 100%), url(${bg})`
            : "none",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-40" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            MPL Records
          </p>
          <h1
            data-text="miniscripteer"
            className="text-glitch font-mono text-5xl font-bold uppercase tracking-tight text-white sm:text-7xl"
          >
            miniscripteer
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-mono text-sm text-fog sm:text-base">
            New sounds, glitched into the timeline. Track the countdown, get
            first access to releases, and follow every drop.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/countdown"
              className="rounded border border-amber bg-amber px-6 py-3 font-mono text-sm text-ink transition-transform hover:scale-[1.02]"
            >
              View countdown
            </Link>
            <Link
              href="/store"
              className="rounded border border-line px-6 py-3 font-mono text-sm text-fog transition-colors hover:border-cyan hover:text-cyan"
            >
              Visit store
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <HomeCard
            eyebrow="01"
            title="AL02"
            body="The next album is in the works. CD pressing listed in the store as coming soon."
            href="/store"
            cta="See the store"
          />
          <HomeCard
            eyebrow="02"
            title="Sign up"
            body="Create an account to get updates the moment new material drops."
            href="/signup"
            cta="Create account"
          />
          <HomeCard
            eyebrow="03"
            title="Say hi"
            body="Bookings, press, or just want to talk shop — the contact form reaches me directly."
            href="/contacts"
            cta="Get in touch"
          />
        </div>
      </section>
    </div>
  );
}

function HomeCard({ eyebrow, title, body, href, cta }) {
  return (
    <div className="rounded border border-line bg-panel p-6">
      <p className="font-mono text-xs text-amber">{eyebrow}</p>
      <h3 className="mt-3 font-mono text-xl text-white">{title}</h3>
      <p className="mt-3 text-sm text-fog">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-block font-mono text-sm text-cyan hover:text-amber"
      >
        {cta} →
      </Link>
    </div>
  );
}
