import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "./navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnTrack",
  description: "A simple sport recorder for estimated calories and progress."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="burntrack-theme" strategy="beforeInteractive">
          {`
            try {
              var theme = localStorage.getItem("burntrack-theme") || "light";
              document.documentElement.dataset.theme = theme;
            } catch (_) {}
          `}
        </Script>
        <Navigation />
        <main className="mx-auto max-w-5xl px-5 py-8">{children}</main>
      </body>
    </html>
  );
}
