import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { partners } from '@/data/partnerData';

export const metadata = {
  title: 'Our Partners | FIVEX Growth Realty',
  description: 'FIVEX Growth Realty\'s developer and banking partners — India\'s most trusted names in real estate and finance.',
};

const colorPairs = [
  { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-100' },
  { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-100' },
  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-100' },
  { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-100' },
  { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-100' },
  { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-100' },
  { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-100' },
  { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-100' },
];

export default function PartnersPage() {
  const developers = partners.filter(p => p.category === 'developer');
  const banks = partners.filter(p => p.category === 'bank');

  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen">
        <div className="relative bg-primary pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
          <img
            src="/our-patners.jpg"
            alt="FiveX Developer Partners"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Our Network</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight">Our Partners</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
              FiveX Growth Realty partners with India&apos;s most trusted developers and financial institutions to deliver exceptional value to our clients.
            </p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-16">
          {/* Developer Partners */}
          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>apartment</span>
              Developer Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {developers.map((partner, i) => {
                const colors = colorPairs[i % colorPairs.length];
                return (
                  <Link key={partner.id} href={`/partners/${partner.id}`}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                      <span className={`font-display font-extrabold text-lg ${colors.text}`}>{partner.logo}</span>
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg mb-1">{partner.name}</h3>
                    <p className="text-secondary text-xs font-semibold mb-3">{partner.tagline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{partner.dealsCount}+ deals · {partner.yearsOfPartnership} yrs partnership</span>
                      <span className="material-symbols-outlined text-secondary text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Banking Partners */}
          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>account_balance</span>
              Banking & Finance Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {banks.map((partner, i) => {
                const colors = colorPairs[(i + 4) % colorPairs.length];
                return (
                  <Link key={partner.id} href={`/partners/${partner.id}`}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                      <span className={`font-display font-extrabold text-base ${colors.text}`}>{partner.logo}</span>
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg mb-1">{partner.name}</h3>
                    <p className="text-secondary text-xs font-semibold mb-3">{partner.tagline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{partner.dealsCount}+ clients assisted</span>
                      <span className="material-symbols-outlined text-secondary text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Become a Partner CTA */}
          <section className="bg-primary rounded-3xl p-10 text-center">
            <h2 className="font-display font-bold text-2xl text-white mb-3">Become a FIVEX Partner</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              Are you a developer, bank, or service provider in the real estate ecosystem? Partner with FIVEX to reach India&apos;s most discerning property buyers.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all">
              Partner with Us <span className="material-symbols-outlined text-base">handshake</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
