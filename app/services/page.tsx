import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesBentoGrid from '@/components/services/ServicesBentoGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        <ServicesHero />
        <ServicesBentoGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
