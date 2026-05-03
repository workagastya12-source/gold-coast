import { MapPin, Clock, Star, ShieldCheck, Banknote, Headphones } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "We Come to You",
    desc: "No towing, no hassle. We service your boat at your pontoon, marina, or home garage anywhere on the Gold Coast.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "We know downtime costs you. Our goal is to diagnose and fix on the first visit so you're back on the water fast.",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    desc: "100+ five-star Google reviews built over 20 years. Our reputation is our business — we never cut corners.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts Only",
    desc: "We use OEM and manufacturer-approved parts. No cheap substitutes that fail six months later.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    desc: "You'll always know the cost before we start. No surprise invoices — just honest, upfront quotes.",
  },
  {
    icon: Headphones,
    title: "After-Hours Support",
    desc: "Breakdowns don't keep business hours. Emergency callouts available — conditions apply.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            The Gold Coast Marine Mechanic You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            20 years of showing up, fixing problems, and keeping our customers on the water.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                <r.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
