import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
