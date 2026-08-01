import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — miniscripteer" };

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Contact</p>
      <h1 className="mt-3 font-mono text-4xl text-white">Get in touch</h1>
      <p className="mt-4 text-sm text-fog">
        Bookings, press, collabs, or just to say hi — messages go straight
        through.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
