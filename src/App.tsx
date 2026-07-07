import { Seo } from "./components/common/Seo";
import { PagePreloader } from "./components/common/PagePreloader";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { ScrollProgress } from "./components/animations/ScrollProgress";
import { Navigation } from "./components/navigation/Navigation";
import { useLenis } from "./hooks/useLenis";
import { HeroSection } from "./sections/Hero/HeroSection";
import { AboutSection } from "./sections/About/AboutSection";
import { WhyProjectSection } from "./sections/WhyProject/WhyProjectSection";
import { CountdownSection } from "./sections/Countdown/CountdownSection";
import { FundraisingSection } from "./sections/Fundraising/FundraisingSection";
import { VideoSection } from "./sections/Video/VideoSection";
import { GallerySection } from "./sections/Gallery/GallerySection";
import { LegacySection } from "./sections/Legacy/LegacySection";
import { PartnersSection } from "./sections/Partners/PartnersSection";
import { TeamSection } from "./sections/Team/TeamSection";
import { FAQSection } from "./sections/FAQ/FAQSection";
import { ContactSection } from "./sections/Contact/ContactSection";
import { FooterSection } from "./sections/Footer/FooterSection";

export default function App() {
  useLenis();

  return (
    <>
      <Seo />
      <PagePreloader />
      <ScrollProgress />
      <ScrollToTopButton />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyProjectSection />
        <CountdownSection />
        <FundraisingSection />
        <VideoSection />
        <GallerySection />
        <LegacySection />
        <PartnersSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
