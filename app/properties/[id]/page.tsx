import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import PropertyGallery from '@/components/property-detail/PropertyGallery';
import PropertyHeaderSpecs from '@/components/property-detail/PropertyHeaderSpecs';
import PropertyOverview from '@/components/property-detail/PropertyOverview';
import PropertyAmenitiesGrid from '@/components/property-detail/PropertyAmenitiesGrid';
import PropertyFloorPlan from '@/components/property-detail/PropertyFloorPlan';
import PropertyLandmarks from '@/components/property-detail/PropertyLandmarks';
import PropertyAgentCard from '@/components/property-detail/PropertyAgentCard';
import PropertyInvestmentInsight from '@/components/property-detail/PropertyInvestmentInsight';
import { getPropertyDetailById } from '@/data/propertiesData';

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyDetailById(id);

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 flex-grow">
        {/* Cinematic Gallery */}
        <PropertyGallery images={property.galleryImages} badges={property.badges} />

        {/* Content Layout */}
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8">
            <PropertyHeaderSpecs
              title={property.title}
              location={property.location}
              price={property.price}
              priceLabel={property.priceLabel}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              sqft={property.sqft}
            />
            <PropertyOverview paragraphs={property.overview} />
            <PropertyAmenitiesGrid amenities={property.amenities} />
            <PropertyFloorPlan floorPlanImage={property.floorPlanImage} />
            <PropertyLandmarks landmarks={property.landmarks} />
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-8">
              <PropertyAgentCard agent={property.agent} propertyTitle={property.title} />
              <PropertyInvestmentInsight
                title={property.investmentInsight.title}
                description={property.investmentInsight.description}
                trendLabel={property.investmentInsight.trendLabel}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
