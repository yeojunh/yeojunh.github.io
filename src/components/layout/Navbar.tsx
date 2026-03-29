"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(["hero", "about", "projects", "experience", "contact"]);
  const pathname = usePathname();
  const isPlayground = pathname === "/playground";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono font-semibold text-base hover:text-accent transition-colors"
          >
            yeojun.com
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {/*!isPlayground && */
              navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {/* Glowing dot indicator */}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        layoutId="nav-dot"
                        style={{
                          boxShadow: "0 0 6px 2px rgba(59,130,246,var(--glow-opacity))",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              
            {/* <Link
              href={isPlayground ? "/" : "/playground"}
              className="ml-2 px-3 py-1.5 text-sm font-medium rounded-full border border-border hover:border-accent/30 hover:text-accent transition-all"
            >
              {isPlayground ? "← Back to Safety" : "Playground 🎮"}
            </Link>*/}

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div> 

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block w-5 h-0.5 bg-foreground origin-center"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-foreground"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-foreground origin-center"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              className="absolute inset-0 bg-black/40 cursor-default"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              tabIndex={-1}
            />

            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-background/80 backdrop-blur-2xl border-l border-border p-6 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-2">
                {/*!isPlayground && */
                navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-base font-medium text-muted hover:text-foreground hover:bg-accent-muted rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}

                {/* <Link
                  href={isPlayground ? "/" : "/playground"}
                  className="px-4 py-3 text-base font-medium text-accent hover:bg-accent-muted rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {isPlayground ? "← Back to Safety" : "Playground 🎮"}
                </Link> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
