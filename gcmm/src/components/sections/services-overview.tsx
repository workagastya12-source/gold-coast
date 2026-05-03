import Link from "next/link";
import { ArrowRight, Gauge, Cog, Search, Zap, Anchor, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Gauge,
    title: "Outboard Engines",
    desc: "Full service, repairs, and tune-ups for all outboard brands — Yamaha, Mercury, Suzuki, Honda, Evinrude.",
    href: "/services#outboard",
    highlight: true,
  },
  {
    icon: Cog,
    title: "Inboard Engines",
    desc: "Petrol and diesel inboard engine servicing, diagnostics, and overhauls for trailer boats to luxury cruisers.",
    href: "/services#inboard",
    highlight: false,
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspections",
    desc: "Buying a boat? Get a thorough mechanical inspection before you commit. Save thousands on hidden issues.",
    href: "/services#inspection",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Breakdown & Emergency",
    desc: "Stuck on the water or at the marina? We offer rapid response callouts across the Gold Coast.",
    href: "/services#breakdown",
    highlight: false,
  },
  {
    icon: Anchor,
    title: "Engine Repowers",
    desc: "Upgrade your vessel with a new engine installation. We handle the full repower from removal to sea trial.",
    href: "/services#repower",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Insurance Repairs",
    desc: "Accredited for insurance work. We liaise directly with your insurer to get your boat back on the water fast.",
    href: "/services#insurance",
    highlight: false,
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Complete Marine Mechanical Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            From routine servicing to emergency breakdowns — we cover every
            engine type, every boat size, anywhere on the Gold Coast.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group">
              <Card
                className={`h-full border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  s.highlight
                    ? "border-accent/40 bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      s.highlight
                        ? "bg-accent/20"
                        : "bg-primary/8 group-hover:bg-accent/10"
                    } transition-colors`}
                  >
                    <s.icon
                      className={`w-5 h-5 ${
                        s.highlight ? "text-accent" : "text-primary group-hover:text-accent"
                      } transition-colors`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-lg mb-2 ${
                      s.highlight ? "text-white" : "text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      s.highlight ? "text-white/75" : "text-muted-foreground"
                    }`}
                  >
                    {s.desc}
                  </p>
                  <div
                    className={`flex items-center gap-1 mt-4 text-sm font-semibold ${
                      s.highlight ? "text-accent" : "text-primary group-hover:text-accent"
                    } transition-colors`}
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
