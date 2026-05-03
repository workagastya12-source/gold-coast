import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(215,60%,14%) 0%, hsl(200,70%,22%) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[hsl(200,80%,50%)]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Ready to Get Started?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Don't Let a Broken Engine Ruin Your Day on the Water
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
          Call us now for a free phone diagnosis, or book a service online. We'll
          come to your boat — anywhere on the Gold Coast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+61755555555">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-10 py-6 shadow-xl shadow-accent/30 gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now — Free Quote
            </Button>
          </a>
          <Link href="/contact#booking">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold text-base px-10 py-6 gap-2"
            >
              <CalendarDays className="w-5 h-5" />
              Book Online
            </Button>
          </Link>
        </div>

        <p className="text-white/40 text-xs mt-8">
          After-hours emergency service available · Conditions apply
        </p>
      </div>
    </section>
  );
}
