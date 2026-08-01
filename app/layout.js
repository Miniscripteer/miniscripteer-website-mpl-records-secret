import "./globals.css";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "miniscripteer",
  description: "Official site of miniscripteer — releases, store, and news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-ink font-sans text-fog antialiased">
        <SessionProviderWrapper>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
