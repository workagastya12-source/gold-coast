"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CalendarDays, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(07) 5555 5555",
    href: "tel:+61755555555",
    sub: "Mon–Fri 7am–6pm, Sat 8am–4pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@goldcoastmobilemarine.com.au",
    href: "mailto:info@goldcoastmobilemarine.com.au",
    sub: "We reply within 2 business hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Gold Coast, QLD",
    href: null,
    sub: "Broadwater · Coomera · Hope Island · Southport · Sanctuary Cove",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 7am – 6pm",
    href: null,
    sub: "Sat: 8am–4pm · After-hours available*",
  },
];

const serviceTypes = [
  "Outboard Service / Repair",
  "Inboard Service / Repair",
  "Pre-Purchase Inspection",
  "Emergency Breakdown",
  "Engine Repower",
  "Insurance Repair",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    engineBrand: "",
    boatLocation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API route / email service
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{
          background:
            "linear-gradient(135deg, hsl(215,60%,12%) 0%, hsl(200,70%,20%) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Call for a free phone diagnosis, or fill in the form and we'll get
            back to you within 2 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-background" preserveAspectRatio="none">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                Contact Information
              </h2>
              {contactInfo.map((c) => (
                <div
                  key={c.label}
                  className="flex gap-4 p-5 bg-secondary rounded-2xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <c.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-semibold text-foreground hover:text-accent transition-colors text-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm">{c.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Booking embed placeholder */}
              <div id="booking" className="mt-8 p-6 bg-primary rounded-2xl text-primary-foreground">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays className="w-5 h-5 text-accent" />
                  <h3 className="font-bold">Online Booking</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Prefer to book a time slot directly? Use our online scheduler
                  to pick a date and time that suits you.
                </p>
                {/* Calendly embed — replace data-url with your Calendly link */}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Open Booking Calendar
                  </Button>
                </a>
                <p className="text-primary-foreground/50 text-xs mt-3 text-center">
                  Powered by Calendly · Syncs with Google Calendar
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <Card className="border border-border shadow-sm">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        We'll get back to you within 2 business hours. For urgent
                        breakdowns, please call us directly.
                      </p>
                      <a href="tel:+61755555555" className="mt-6 inline-block">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                          <Phone className="w-4 h-4" /> Call Now
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-1.5">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-1.5">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="04xx xxx xxx"
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-1.5">
                              Service Type *
                            </label>
                            <select
                              name="service"
                              required
                              value={form.service}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                            >
                              <option value="">Select a service…</option>
                              {serviceTypes.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-1.5">
                              Engine Brand
                            </label>
                            <input
                              type="text"
                              name="engineBrand"
                              value={form.engineBrand}
                              onChange={handleChange}
                              placeholder="e.g. Yamaha 150hp"
                              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            Boat Location
                          </label>
                          <input
                            type="text"
                            name="boatLocation"
                            value={form.boatLocation}
                            onChange={handleChange}
                            placeholder="e.g. Runaway Bay Marina, Pontoon 12"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-1.5">
                            Describe the Issue
                          </label>
                          <textarea
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us what's happening with your boat…"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 py-6 text-base shadow-lg shadow-accent/20"
                        >
                          <Send className="w-5 h-5" />
                          Send Message
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          For urgent breakdowns, call us directly on{" "}
                          <a href="tel:+61755555555" className="text-accent font-semibold">
                            (07) 5555 5555
                          </a>
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
