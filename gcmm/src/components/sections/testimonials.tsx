import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mark T.",
    location: "Broadwater",
    rating: 5,
    text: "Showed up within 2 hours of my call, diagnosed the issue on the spot, and had my Yamaha outboard running perfectly. Absolute legend — highly recommend!",
    service: "Outboard Repair",
  },
  {
    name: "Sarah K.",
    location: "Runaway Bay Marina",
    rating: 5,
    text: "Used Gold Coast Mobile Marine for a pre-purchase inspection. They found issues the seller hadn't disclosed and saved me from a very expensive mistake. Worth every cent.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "Dave R.",
    location: "Coomera",
    rating: 5,
    text: "Had a full engine repower done on my cruiser. Professional job from start to finish — on time, on budget, and the boat runs better than ever. Five stars without hesitation.",
    service: "Engine Repower",
  },
  {
    name: "Lisa M.",
    location: "Hope Island",
    rating: 5,
    text: "Called on a Saturday afternoon with a breakdown. They came out, fixed the fuel issue, and I was back on the water before sunset. Incredible service.",
    service: "Emergency Breakdown",
  },
  {
    name: "Tom B.",
    location: "Southport",
    rating: 5,
    text: "Been using them for annual servicing for 6 years. Always reliable, always honest about what needs doing and what can wait. Wouldn't go anywhere else.",
    service: "Annual Service",
  },
  {
    name: "Chris W.",
    location: "Sanctuary Cove",
    rating: 5,
    text: "Handled my insurance claim repair seamlessly — dealt with the insurer directly and kept me updated throughout. Stress-free experience.",
    service: "Insurance Repair",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="text-foreground font-bold ml-1">5.0</span>
            <span className="text-muted-foreground text-sm">· 100+ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <CardContent className="p-6">
                <Quote className="w-7 h-7 text-accent/40 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="text-xs bg-primary/8 text-primary px-2 py-1 rounded-full font-medium">
                    {t.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
