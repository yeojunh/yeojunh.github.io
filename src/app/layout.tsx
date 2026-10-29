import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeojun Han",
  description:
    "Yeojun Han. Software Engineer II working on AI tooling at Microsoft.",
  icons: {
    icon: [
      { url: "/assets/website-icon.png", type: "image/png", sizes: "512x512" },
      { url: "/assets/website-icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/assets/website-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c5e1f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
