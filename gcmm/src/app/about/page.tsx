import Link from "next/link";
import { Phone, Star, Award, Users, Wrench, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

const milestones = [
  { year: "2004", event: "Gold Coast Mobile Marine founded — one mechanic, one van, a passion for boats." },
  { year: "2008", event: "Expanded to cover all Gold Coast waterways including Broadwater, Coomera, and Hope Island." },
  { year: "2012", event: "Became accredited for insurance repair work with all major marine insurers." },
  { year: "2016", event: "Achieved 500+ five-star Google reviews — a milestone built purely on word of mouth." },
  { year: "2020", event: "Added diesel inboard specialist capability, covering superyachts and commercial vessels." },
  { year: "2024", event: "Celebrating 20 years — still family-owned, still mobile, still the Gold Coast's most trusted." },
];

const values = [
  {
    icon: Heart,
    title: "Passion for the Water",
    desc: "We're boaties ourselves. We understand what it means to be stuck on the water — and we treat every job like it's our own boat.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Genuine parts, proper procedures, and no shortcuts. Every job is done to manufacturer specification.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "You're kept informed from diagnosis to completion. No surprises on the invoice, ever.",
  },
  {
    icon: Wrench,
    title: "Continuous Learning",
    desc: "Marine technology evolves fast. We invest in ongoing training and the latest diagnostic equipment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          background:
            "linear-gradient(135deg, hsl(215,60%,12%) 0%, hsl(200,70%,20%) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              20 Years of Keeping Gold Coast Boats Running
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Gold Coast Mobile Marine was founded on a simple idea: boat owners
              shouldn't have to tow their vessel to a workshop. We bring the
              workshop to you — with the same expertise, the same quality parts,
              and the same commitment to getting you back on the water fast.
            </p>
            <div className="flex items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="text-white font-bold ml-1">5.0</span>
              <span className="text-white/60 text-sm">· 100+ Google Reviews</span>
            </div>
            <a href="tel:+61755555555">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 px-8">
                <Phone className="w-4 h-4" /> Talk to Us Today
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-background" preserveAspectRatio="none">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5">
                Built on the Gold Coast. Built on Trust.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gold Coast Mobile Marine started in 2004 with one mechanic, one
                  van, and a belief that boat owners deserved better than dragging
                  their vessel to a workshop and waiting weeks for a quote.
                </p>
                <p>
                  Over two decades, we've grown into the Gold Coast's most
                  recognised mobile marine service — but we've never lost the
                  personal touch that made us. Every job is still handled with the
                  same care as if it were our own boat.
                </p>
                <p>
                  We specialise in all petrol and diesel inboard and outboard
                  engines, from small tinnies to luxury cruisers. Whether your
                  boat is on a pontoon at Broadwater, stored at Coomera, or
                  sitting in your garage at Hope Island — we come to you.
                </p>
                <p>
                  Our 5-star Google rating isn't a marketing achievement — it's
                  the result of 20 years of showing up on time, being honest about
                  costs, and doing the job right the first time.
                </p>
              </div>
            </div>

            {/* Stats bento */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years in Business", sub: "Est. 2004" },
                { value: "1,000+", label: "Boats Serviced", sub: "All sizes & types" },
                { value: "5.0★", label: "Google Rating", sub: "100+ reviews" },
                { value: "All Brands", label: "Engines Covered", sub: "Petrol & Diesel" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-secondary rounded-2xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <p className="text-3xl font-extrabold text-primary mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-background rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <v.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              20 Years on the Gold Coast
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 z-10 shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary rounded-2xl border border-border p-5 flex-1 hover:border-primary/30 transition-colors">
                    <span className="text-accent font-bold text-sm">{m.year}</span>
                    <p className="text-foreground/80 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
