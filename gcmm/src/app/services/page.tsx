import Link from "next/link";
import { Phone, CalendarDays, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

const services = [
  {
    id: "outboard",
    badge: "Most Popular",
    title: "Outboard Engine Services",
    desc: "We service and repair all major outboard brands across the full power range — from small tinnies to high-performance offshore rigs.",
    includes: [
      "Annual & 100-hour services",
      "Fuel system diagnostics & repair",
      "Impeller & water pump replacement",
      "Gear case service & oil changes",
      "Throttle & shift cable adjustment",
      "Electrical fault diagnosis",
      "Propeller inspection & replacement",
      "Compression & leak-down testing",
    ],
    brands: ["Yamaha", "Mercury", "Suzuki", "Honda", "Evinrude", "Tohatsu", "Johnson"],
  },
  {
    id: "inboard",
    badge: null,
    title: "Inboard Engine Services",
    desc: "Petrol and diesel inboard engine specialists. From trailer boats to luxury cruisers, we handle full mechanical servicing and complex repairs.",
    includes: [
      "Full engine servicing & tune-ups",
      "Diesel & petrol diagnostics",
      "Cooling system service",
      "Transmission & drive service",
      "Exhaust system inspection",
      "Fuel injection service",
      "Engine mounts & alignment",
      "Overhauls & rebuilds",
    ],
    brands: ["Volvo Penta", "Mercruiser", "Yanmar", "Cummins", "Perkins", "Caterpillar"],
  },
  {
    id: "inspection",
    badge: "Buyer's Essential",
    title: "Pre-Purchase Inspections",
    desc: "Before you hand over your money, let us inspect the vessel. We've saved buyers thousands by uncovering hidden mechanical issues.",
    includes: [
      "Full engine mechanical inspection",
      "Compression & leak-down test",
      "Fuel system check",
      "Electrical systems review",
      "Cooling system assessment",
      "Drive & transmission check",
      "Written inspection report",
      "Honest, unbiased assessment",
    ],
    brands: [],
  },
  {
    id: "breakdown",
    badge: "Emergency",
    title: "Breakdown & Emergency Callouts",
    desc: "Stuck at the marina or on the water? We offer rapid-response callouts across the Gold Coast. After-hours available on request.",
    includes: [
      "Rapid response across Gold Coast",
      "On-site diagnosis",
      "Emergency parts sourcing",
      "Fuel system failures",
      "Electrical faults",
      "Overheating issues",
      "Starting & charging problems",
      "After-hours callouts (conditions apply)",
    ],
    brands: [],
  },
  {
    id: "repower",
    badge: null,
    title: "Engine Repowers & Installations",
    desc: "Upgrade your vessel's performance with a new engine. We manage the entire repower process from removal to sea trial.",
    includes: [
      "Engine removal & disposal",
      "New engine installation",
      "Rigging & controls setup",
      "Fuel system integration",
      "Electrical connection",
      "Sea trial & commissioning",
      "Warranty registration",
      "All major brands supplied",
    ],
    brands: [],
  },
  {
    id: "insurance",
    badge: null,
    title: "Insurance Repairs",
    desc: "Accredited for insurance work. We liaise directly with your insurer, handle the paperwork, and get your boat repaired to manufacturer standard.",
    includes: [
      "Direct insurer liaison",
      "Detailed damage assessment",
      "Written repair quotes",
      "OEM parts sourcing",
      "Full repair documentation",
      "Post-repair inspection",
      "All major insurers accepted",
      "Stress-free claims process",
    ],
    brands: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{
          background:
            "linear-gradient(135deg, hsl(215,60%,12%) 0%, hsl(200,70%,20%) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Marine Mechanical Services
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Every engine type. Every boat size. Anywhere on the Gold Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61755555555">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 px-8">
                <Phone className="w-4 h-4" /> Call for a Free Quote
              </Button>
            </a>
            <Link href="/contact#booking">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 gap-2 px-8">
                <CalendarDays className="w-4 h-4" /> Book a Service
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-background" preserveAspectRatio="none">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`flex flex-col lg:flex-row gap-10 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {s.badge && (
                    <Badge className="bg-accent/15 text-accent border-accent/30 text-xs font-semibold">
                      {s.badge}
                    </Badge>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                {s.brands.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Brands we service:</p>
                    <div className="flex flex-wrap gap-2">
                      {s.brands.map((b) => (
                        <span key={b} className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <a href="tel:+61755555555">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <Phone className="w-4 h-4" /> Get a Quote
                  </Button>
                </a>
              </div>

              {/* Includes card */}
              <div className="flex-1 bg-secondary rounded-2xl border border-border p-7">
                <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border">
                  <Link href="/contact#booking" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                    Book this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
