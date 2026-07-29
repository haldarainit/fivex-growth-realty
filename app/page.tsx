import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection";
import StatsSection from "@/components/home/StatsSection";
import PartnersStrip from "@/components/home/PartnersStrip";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import FaqSection from "@/components/sections/FaqSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CorporateDirectorySection from "@/components/home/CorporateDirectorySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: 'FiveX Growth Realty | Premium Real Estate Advisory India',
  description: 'FiveX Growth Realty — India\'s trusted premium real estate brokerage. Expert advisory for residential, commercial, and investment properties in Delhi NCR, Noida, Gurgaon, Mumbai.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturedPropertiesSection />
        <PartnersStrip />
        <WhyChooseUsSection />
        <CorporateDirectorySection />
        <TestimonialsSlider />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
