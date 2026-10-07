import { About, VisionMission } from "@/components/Sections";
import { Capabilities, Industries, Process, Quality, WhyIEMC } from "@/components/BrandSections";
import { CertificationStrip } from "@/components/CertificationStrip";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <CertificationStrip />
      <About />
      <Capabilities />
      <Products />
      <Industries />
      <Quality />
      <VisionMission />
      <Process />
      <Leadership />
      <WhyIEMC />
      <ContactSection />
    </>
  );
}
