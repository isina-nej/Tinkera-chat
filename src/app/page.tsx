import { ChannelsSection } from "@/components/landing/channels-section";
import { Features } from "@/components/landing/features";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { GroupsSection } from "@/components/landing/groups-section";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { PrivateChatSection } from "@/components/landing/private-chat-section";
import { RealtimeSection } from "@/components/landing/realtime-section";
import { ResponsiveSection } from "@/components/landing/responsive-section";
import { SecuritySection } from "@/components/landing/security-section";
import { SocialProof } from "@/components/landing/social-proof";
import { UnifiedPlatformSection } from "@/components/landing/unified-platform-section";
import { UseCases } from "@/components/landing/use-cases";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <PrivateChatSection />
        <GroupsSection />
        <ChannelsSection />
        <UnifiedPlatformSection />
        <RealtimeSection />
        <ResponsiveSection />
        <SecuritySection />
        <UseCases />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
