import { About, VisionMission } from "@/components/Sections";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <ProductCarousel />
      <Leadership />
      <ContactSection />
    </>
  );
}
