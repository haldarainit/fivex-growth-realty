import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import OngoingProjectsSection from '@/components/projects/OngoingProjectsSection';
import UpcomingProjectsSection from '@/components/projects/UpcomingProjectsSection';
import CompletedProjectsSection from '@/components/projects/CompletedProjectsSection';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 flex-grow">
        {/* Projects Showcase Hero Header */}
        <section className="px-margin-desktop max-w-container-max mx-auto mb-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Investment Portfolios
          </h1>
          <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Curated architectural excellence and high-yield real estate opportunities across the world's most prestigious postal codes.
          </p>
        </section>

        {/* Section 01: Ongoing Developments */}
        <OngoingProjectsSection />

        {/* Section 02: Upcoming Launches */}
        <UpcomingProjectsSection />

        {/* Section 03: Completed Masterpieces */}
        <CompletedProjectsSection />
      </main>
      <Footer />
    </>
  );
}
