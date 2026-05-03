import Link from "next/link";
import { Anchor, Phone, Mail, MapPin, Star } from "lucide-react";

// lucide-react dropped Facebook/Instagram — inline SVGs used instead
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Anchor className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Gold Coast Mobile Marine</p>
                <p className="text-primary-foreground/70 text-xs">Your 5-Star Marine Mechanic</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              Over 20 years of trusted marine expertise on the Gold Coast. We come to your boat — pontoon, marina, or garage.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="text-sm text-primary-foreground/80 ml-2">5.0 Google Rating</span>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/contact#booking", label: "Book a Service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:+61755555555" className="hover:text-accent transition-colors">
                  (07) 5555 5555
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:info@goldcoastmobilemarine.com.au" className="hover:text-accent transition-colors break-all">
                  info@goldcoastmobilemarine.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Gold Coast, QLD, Australia</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-primary-foreground/60">
              <p>Mon–Fri: 7am – 6pm</p>
              <p>Sat: 8am – 4pm</p>
              <p>After-hours available*</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Gold Coast Mobile Marine. All rights reserved.</p>
          <p>Licensed Marine Mechanic · Gold Coast, QLD</p>
        </div>
      </div>
    </footer>
  );
}
