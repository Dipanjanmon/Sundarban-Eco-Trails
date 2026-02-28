import HeroSection from "@/components/ui/HeroSection";
import USPsSection from "@/components/ui/USPsSection";
import ActivitiesTab from "@/components/ui/ActivitiesTab";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import GallerySection from "@/components/ui/GallerySection";
import FaqSection from "@/components/ui/FaqSection";
import MapSection from "@/components/ui/MapSection";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <USPsSection />
      <ActivitiesTab />
      <GallerySection />
      <TestimonialSlider />
      <MapSection />
      <FaqSection />
    </div>
  );
}
