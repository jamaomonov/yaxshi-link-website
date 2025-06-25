import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import FandomatInfoSection from "@/components/sections/fandomat-info-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import GiftsSection from "@/components/sections/gifts-section"
import AdvantagesSection from "@/components/sections/advantages-section"
import PartnersSection from "@/components/sections/partners-section"
import StatsSection from "@/components/sections/stats-section"
import FaqSection from "@/components/sections/faq-section"
import CtaSection from "@/components/sections/cta-section"
import ImpactSection from "@/components/sections/impact-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <FandomatInfoSection />
        <GiftsSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <PartnersSection />
        <StatsSection />
        <ImpactSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
