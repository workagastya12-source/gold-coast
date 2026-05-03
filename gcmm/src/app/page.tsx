import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
