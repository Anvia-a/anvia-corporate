import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { HowWeBuildSection } from "@/components/sections/HowWeBuildSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ValuesSection />
      <HowWeBuildSection />
      <ProductsSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
