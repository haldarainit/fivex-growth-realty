import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { partners } from '@/data/partnerData';

export async function generateStaticParams() {
  return partners.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const partner = partners.find((p) => p.id === id);
  if (!partner) return {};
  return { title: `${partner.name} | FIVEX Partners`, description: partner.description };
}

const colorPairs = [
  { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' },
  { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200' },
];

export default async function PartnerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const partner = partners.find((p) => p.id === id);
  if (!partner) notFound();
  const partnerIndex = partners.findIndex(p => p.id === id);
  const colors = colorPairs[partnerIndex % colorPairs.length];

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        <div className="bg-primary py-12">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/partners" className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-sm mb-8 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>All Partners
            </Link>
            <div className="flex items-center gap-6">
              <div className={`w-24 h-24 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                <span className={`font-display font-extrabold text-2xl ${colors.text}`}>{partner.logo}</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-3xl text-white">{partner.name}</h1>
                <p className="text-secondary font-semibold mt-1">{partner.tagline}</p>
                <div className="flex gap-4 mt-3">
                  <span className="text-white/50 text-sm">{partner.dealsCount}+ deals · {partner.yearsOfPartnership} years partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-xl text-primary mb-4">About {partner.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Partnership Since', value: `${new Date().getFullYear() - partner.yearsOfPartnership}` },
                  { label: 'Deals Together', value: `${partner.dealsCount}+` },
                  { label: 'Category', value: partner.category.charAt(0).toUpperCase() + partner.category.slice(1) },
                  { label: 'Status', value: 'Active Partner' },
                ].map(item => (
                  <div key={item.label} className="bg-surface-container-low rounded-xl p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{item.label}</p>
                    <p className="text-primary font-bold text-lg mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-6 text-white h-fit">
              <h3 className="font-display font-bold text-base mb-4">Interested in this partner?</h3>
              <p className="text-white/60 text-sm mb-5">Our advisors can connect you with the right team at {partner.name}.</p>
              <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-secondary text-primary py-3 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
                Get Connected <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <a href={partner.website} target="_blank" rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 border border-white/10 text-white/60 py-3 rounded-xl text-sm font-semibold hover:border-secondary/40 hover:text-secondary transition-all">
                Visit Website <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
