import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import AboutHero from '@/components/about/AboutHero';
import StatsBar from '@/components/about/StatsBar';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import WhyTrustUsBento from '@/components/about/WhyTrustUsBento';
import TeamSection from '@/components/about/TeamSection';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <StatsBar />
        <MissionVisionSection />
        <WhyTrustUsBento />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
