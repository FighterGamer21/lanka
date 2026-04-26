import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#thakali", label: "Thakali" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#stay", label: "Stay" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-gold shadow-deep"
          : "bg-gradient-to-b from-charcoal/70 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-warm">
            <span className="font-display text-xl font-bold text-primary-foreground">L</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg lg:text-xl font-semibold text-cream">
              Hotel <span className="text-accent">Lanka</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-accent/80">
              Thakali · Dhulikhel
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream/85 hover:text-accent transition-smooth relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="tel:+9779841245653"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-warm text-primary-foreground text-sm font-semibold shadow-warm hover:scale-105 transition-smooth"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal/95 backdrop-blur-xl border-t border-gold shadow-deep">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-cream hover:bg-accent/10 hover:text-accent transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+9779841245653"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm"
            >
              <Phone className="h-4 w-4" /> Call +977 9841245653
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
