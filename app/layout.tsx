import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSiteTags } from "@/lib/getSiteTags";

export const metadata: Metadata = {
  title: "NCIO ",
  description: "National Crime Investigates Organization — Fighting for justice, healthcare, education, and basic rights for every Indian citizen. Based in Tirupur, Tamil Nadu.",
  icons: {
    icon: "logo/favicon.ico",
    shortcut: "logo/favicon-16x16.png",
    apple: "logo/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerTags = await getSiteTags("header");
  const footerTags = await getSiteTags("footer");
  const bodyTags = await getSiteTags("body");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
        {headerTags.map((tag) => (
          <div key={tag.id} dangerouslySetInnerHTML={{ __html: tag.tag_code }} />
        ))}
      </head>
      <body className="flex flex-col min-h-screen">
        {bodyTags.map((tag) => (
          <div key={tag.id} dangerouslySetInnerHTML={{ __html: tag.tag_code }} />
        ))}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {footerTags.map((tag) => (
          <div key={tag.id} dangerouslySetInnerHTML={{ __html: tag.tag_code }} />
        ))}
      </body>
    </html>
  );
}