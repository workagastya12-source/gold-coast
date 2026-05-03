import { Trophy, Users, Wrench, Clock } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "20+",
    label: "Years Experience",
    sub: "Since 2004",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Customers",
    sub: "Gold Coast & surrounds",
  },
  {
    icon: Wrench,
    value: "All Brands",
    label: "Engines Serviced",
    sub: "Yamaha, Mercury, Volvo & more",
  },
  {
    icon: Clock,
    value: "Same Day",
    label: "Response Available",
    sub: "After-hours on request",
  },
];

export function StatsSection() {
  return (
    <section className="bg-background py-14 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {s.value}
              </p>
              <p className="text-sm font-semibold text-foreground/80 mt-0.5">
                {s.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
