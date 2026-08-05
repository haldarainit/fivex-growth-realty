import React from 'react';

export const WhyTrustUsBento: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-16 max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-primary font-bold mb-4">
            Why Trust Us?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: 2 columns */}
          <div className="md:col-span-2 bg-white/90 backdrop-blur-md p-8 rounded-2xl hover:shadow-xl transition-all border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 block">
                verified
              </span>
              <h3 className="font-display text-2xl text-primary font-bold mb-4">
                Unmatched Market Intelligence
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Our proprietary algorithm analyzes over 1,000 data points across the luxury sector to identify emerging value before it hits the mainstream market.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center font-bold text-xs text-white">
                  AS
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-container flex items-center justify-center font-bold text-xs text-white">
                  VV
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-fixed flex items-center justify-center font-bold text-xs text-primary">
                  MT
                </div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Trusted by 500+ HNWIs
              </span>
            </div>
          </div>

          {/* Bento Item 2: Dark Card */}
          <div className="bg-primary p-8 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-2xl">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-6xl mb-6">
              gavel
            </span>
            <h3 className="font-display text-2xl font-bold mb-4">Ethical Integrity</h3>
            <p className="font-body text-surface-variant/90 text-sm leading-relaxed">
              Transparency is our bedrock. We operate with a strict code of ethics ensuring your interests are always prioritized.
            </p>
          </div>

          {/* Bento Item 3 */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl hover:shadow-xl transition-all border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6 block">
              auto_graph
            </span>
            <h3 className="font-display text-2xl text-primary font-bold mb-4">
              Strategic Growth
            </h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              We don't just sell property; we curate portfolios that consistently outperform traditional market indices.
            </p>
          </div>

          {/* Bento Item 4: 2 columns */}
          <div className="md:col-span-2 bg-white/90 backdrop-blur-md p-8 rounded-2xl hover:shadow-xl transition-all border border-outline-variant/20 flex gap-8 items-center">
            <div className="hidden sm:block w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJ51gkhlgjR8nYpWJC2Ooti7LvAJPz9cCbVcg932n68dBcgMVtSU1MCvejYinB2EBmD_Z8frkbl0yY8C_He55uT7uC3wFbMv5_k2Fs9S-Hp3cBiXO2cq946Ihq_RpbTF5Sbt_mZCMNZGeSv9nzM58jYYzyt48JToZk-4gjAYJ3PoZSXPgUWhT7pWdI92kXZAE_nS3GLWIZqvbtWiVIcsVV1HomRsSdgXtY0duPsn5NrFDMJUKG26UTkzb6-SSOXhn3qv1jlBPcDNmJ')`,
                }}
                aria-label="Luxury watch and architectural blueprints"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl text-primary font-bold mb-2">
                Personalized Concierge
              </h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                From legal vetting to interior curation, our dedicated advisors manage every nuance of your real estate journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsBento;
