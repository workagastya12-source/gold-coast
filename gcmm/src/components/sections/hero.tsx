"use client";

import Link from "next/link";
import { Phone, CalendarDays, ChevronDown, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: deep navy gradient + subtle wave overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(215,60%,10%) 0%, hsl(215,55%,16%) 40%, hsl(200,70%,20%) 100%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 bg-[hsl(200,80%,50%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 bg-[hsl(42,90%,52%)] blur-3xl pointer-events-none" />

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-xs font-semibold px-3 py-1">
              ⭐ 5-Star Google Rated
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20 text-xs font-semibold px-3 py-1">
              20+ Years Experience
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20 text-xs font-semibold px-3 py-1">
              Gold Coast's #1 Mobile Marine
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Your Boat Breaks Down.{" "}
            <span className="text-accent">We Come to You.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Gold Coast's most trusted mobile marine mechanic. Inboard, outboard,
            diesel &amp; petrol — pontoon, marina, or your garage. Available
            after hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="tel:+61755555555">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 shadow-xl shadow-accent/30 gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now — Free Quote
              </Button>
            </a>
            <Link href="/contact#booking">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 gap-2"
              >
                <CalendarDays className="w-5 h-5" />
                Book a Service
              </Button>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-5 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Genuine Parts Only
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              After-Hours Available
            </div>
          </div>
        </div>

        {/* Floating review card */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64 shadow-2xl">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-white/90 text-sm leading-relaxed italic mb-3">
            "Showed up within 2 hours, fixed my Yamaha outboard on the spot.
            Absolute legend!"
          </p>
          <p className="text-accent text-xs font-semibold">— Mark T., Broadwater</p>
          <div className="mt-3 pt-3 border-t border-white/20 text-center">
            <p className="text-white/60 text-xs">100+ 5-star reviews on Google</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
