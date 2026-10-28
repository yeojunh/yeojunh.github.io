import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeojun Han",
  description:
    "Yeojun Han. Software Engineer II working on AI tooling at Microsoft.",
  icons: {
    icon: "/assets/website-icon.png",
    apple: "/assets/website-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c5e1f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
