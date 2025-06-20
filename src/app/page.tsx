import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromoSection from "@/components/home/PromoSection";
import GiftCardSection from "@/components/home/GiftCardSection";
import VaultSection from "@/components/home/VaultSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <FeaturedProducts />
      <PromoSection />
      <GiftCardSection />
      <VaultSection />
      <TestimonialSection />
    </div>
  );
}
