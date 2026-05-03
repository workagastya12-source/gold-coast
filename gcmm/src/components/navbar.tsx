"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Anchor, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            {/* Icon badge */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary shadow-md group-hover:shadow-accent/40 transition-shadow duration-300">
              <Anchor className="w-5 h-5 text-white" />
              {/* gold corner accent */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
            </div>

            {/* Text wordmark */}
            <div className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight text-foreground">
                Gold Coast{" "}
                <span className="text-accent">Mobile Marine</span>
              </span>
              {/* thin gold rule + tagline */}
              <span className="flex items-center gap-1.5 mt-0.5">
                <span className="block h-px w-4 bg-accent/60 rounded-full" />
                <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                  Marine Mechanic · Gold Coast
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a href="tel:+61755555555">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <a href="tel:+61755555555" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
