import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutTeaser }       from "@/components/sections/AboutTeaser";
import { HowWeBuildSection } from "@/components/sections/HowWeBuildSection";
import { ProductsSection }   from "@/components/sections/ProductsSection";
import { CompanySection }    from "@/components/sections/CompanySection";
import { ContactSection }    from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <HowWeBuildSection />
      <ProductsSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
