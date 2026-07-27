'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { blogPosts } from '@/data/blogData';

// Extended mock content for blog detail pages
const blogContent: Record<string, { body: string; tags: string[]; author: string; authorRole: string }> = {
  'featured-2024-luxury-guide': {
    author: 'Rajiv Mehta',
    authorRole: 'Senior Investment Strategist',
    tags: ['Luxury Real Estate', 'Investment Strategy', 'Delhi NCR', '2024 Market'],
    body: `The luxury real estate market in India has entered a period of unprecedented transformation. As high-net-worth individuals increasingly look beyond traditional asset classes, premium residential developments across Delhi NCR are emerging as the defining investment opportunity of this decade.

**The Macro Shift**

Following the post-pandemic recalibration, ultra-luxury inventory priced above ₹10 Crore has seen year-on-year appreciation of 12–18% in key micro-markets like Noida Sector 150, Dwarka Expressway, and Greater Noida West. This is not speculative froth — it is demand driven by end-users who want more space, better amenities, and verified developers.

**Key Trends Defining 2024**

1. **Branded Residences**: Developers partnering with luxury hotel brands (Marriott, Four Seasons, Oberoi) to co-create managed residential communities with concierge-level services.

2. **Sustainability Premium**: Net-zero buildings and LEED Platinum certified developments are commanding a 15–22% premium over equivalent non-certified properties in the same micro-market.

3. **Infrastructure as Catalyst**: The Jewar International Airport — slated to be one of Asia's largest — has already repriced land parcels within 30km by 30–45% since announcement.

**The Sophisticated Investor's Playbook**

For clients with a 3–7 year horizon, we recommend a barbell strategy: anchor the portfolio with ready-to-move Grade A assets in established corridors (Sector 150, Dwarka Exp.) and allocate 25–30% into pre-launch opportunities in emerging nodes (Noida Extension, Yamuna Expressway) for outsized appreciation.

Liquidity planning remains essential. Unlike equity, real estate positions require 6–18 months to exit cleanly. Factor this into your overall portfolio liquidity ratio before committing.

**Conclusion**

2024 is the inflection year. Infrastructure is coming online. NRI remittances are at record highs. Organised developers with strong balance sheets are consolidating market share. For the discerning investor, the window to accumulate before mainstream discovery narrows is closing. The time to act is now.`,
  },
  'sustainable-luxury': {
    author: 'Priya Kapoor',
    authorRole: 'Head of Architecture & Design',
    tags: ['Sustainability', 'Luxury Living', 'Green Architecture', 'Net Zero'],
    body: `The intersection of opulence and ecology, once considered an oxymoron, is now the defining frontier of premium real estate development. The most ambitious projects coming to market in 2024 are making a clear statement: you no longer have to choose between luxury and responsibility.

**The Green Revolution in Premium Developments**

Leading developers across India are embedding sustainability not as a compliance checkbox but as a core luxury feature. Double-height green walls in lobbies, passive cooling through Vastu-aligned building orientation, and rooftop photovoltaic installations that offset common-area electricity costs by up to 80%.

**Materials & Craftsmanship**

The shift from imported marble to locally-sourced granite and terracotta is not a cost-cutting measure — it is an identity statement. Modern luxury buyers increasingly prize provenance and craftsmanship over sheer extravagance.

**What Buyers Are Asking For**

In our internal survey of 200 HNI clients, 74% said they would pay a premium for a net-zero certified residence. The average premium they were willing to pay: 18%. This is a significant behavioral shift from just three years ago.`,
  },
  'mid-city-investment-hubs': {
    author: 'Aditya Sharma',
    authorRole: 'Market Research Analyst',
    tags: ['Investment Hubs', 'Market Trends', 'Emerging Cities', 'Capital Allocation'],
    body: `Tier-2 cities across India — Pune, Hyderabad, Ahmedabad, Surat — are experiencing what economists call a "catch-up" phenomenon. With established metros (Mumbai, Delhi) showing yield compression due to saturated supply, sophisticated capital is migrating.

**The Data Case**

Average gross rental yields in Mumbai South have compressed to 2.2–2.8%. Compare this to Pune's Hinjewadi or Hyderabad's HITEC City where yields of 4.5–5.5% are still achievable with quality Grade A assets.

**The Infrastructure Trigger**

Metro rail expansion, expressway connectivity, and IT/ITeS cluster development are the three catalysts creating micro-market appreciation. Cities that have received all three triggers simultaneously — Hyderabad and Pune being prime examples — have seen 10-year CAGR of 9–12% in premium residential.

**Portfolio Recommendation**

Consider a 30% allocation to one high-conviction Tier-2 city as a satellite position alongside your primary NCR/Mumbai anchor.`,
  },
  'riviera-heights-masterplan': {
    author: 'Saurav Bose',
    authorRole: 'Project Showcase Editor',
    tags: ['Project Spotlight', 'Luxury Residential', 'Architecture', 'Masterplan'],
    body: `The Riviera Heights masterplan represents a decade-in-the-making vision for what a self-contained luxury community can be in 21st century India. Spanning 42 acres along the Yamuna Expressway, the development breaks away from the tower-in-a-podium typology that has dominated NCR luxury for two decades.

**The Vision**

Eight low-rise towers — none exceeding G+14 — arranged around a central 3-acre lake. The design philosophy prioritizes sight-lines, private gardens, and the kind of density that permits genuine community while maintaining absolute privacy.

**Amenities**

The clubhouse alone spans 80,000 sq.ft. and includes: a 25m Olympic pool, a cigar lounge, a private dining room that seats 40, a rooftop observatory deck, and a dedicated concierge floor for move-in coordination.

**Pricing & Availability**

Units range from 4,200 sq.ft. to 9,800 sq.ft. (duplex penthouses). Pre-launch pricing begins at ₹4.2 Cr for a 4BHK. We anticipate a 15–20% price step-up at possession.`,
  },
  'interest-rates-portfolio': {
    author: 'Nisha Verma',
    authorRole: 'Portfolio Advisory Head',
    tags: ['Interest Rates', 'Portfolio Strategy', 'Diversification', 'Global Economy'],
    body: `The global interest rate cycle of 2022–2024 has been a baptism by fire for asset managers globally. With the US Fed holding rates at multi-decade highs and the RBI maintaining a cautious posture, the implications for Indian real estate portfolios are nuanced but navigable.

**The Direct Impact**

Home loan rates in India have risen from 6.5% (2021 lows) to 9.0–9.5% (2024). This has meaningfully impacted mid-segment demand (₹50L–₹1.5Cr) where EMI affordability is the dominant purchase driver.

**The Luxury Insulation Effect**

Premium and ultra-luxury segments (₹3Cr+) are largely insulated from rate sensitivity. Our data shows enquiry volumes in the ₹5Cr+ category have grown 34% year-on-year despite the rate environment, because buyers in this cohort typically have 40–60% of the purchase price in liquid assets.

**Diversification Strategy**

For the sophisticated investor, real estate should constitute 25–40% of a diversified portfolio. Within that allocation, we recommend: 60% in ready-to-move assets (defensive, yield-generating), 30% in under-construction from Tier-1 developers (appreciation play), and 10% in commercial/warehousing (inflation-linked rentals).

**The Bottom Line**

Rates will normalize. They always do. The investors who move counter-cyclically — acquiring quality assets when financing sentiment is weak — consistently outperform those who wait for conditions to be "perfect."`,
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const post = blogPosts.find((p) => p.id === id);
  const content = blogContent[id];

  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 flex-grow min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-6xl font-bold mb-4">404</p>
            <p className="text-gray-600 mb-6">Article not found.</p>
            <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-colors">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const paragraphs = (content?.body || post.excerpt)
    .split('\n\n')
    .filter(Boolean);

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 flex-grow bg-gray-50">
        {/* Hero Image */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-secondary text-primary px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-white/60 text-xs">{post.readTime}</span>
              <span className="text-white/60 text-xs">{post.date}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Author */}
          {content && (
            <div className="flex items-center gap-4 mb-8 sm:mb-12 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-secondary font-bold text-lg font-display">
                  {content.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{content.author}</p>
                <p className="text-gray-500 text-xs">{content.authorRole}</p>
              </div>
              <div className="ml-auto">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</span>
              </div>
            </div>
          )}

          {/* Lead excerpt */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-body border-l-4 border-secondary pl-5 italic">
            {post.excerpt}
          </p>

          {/* Body paragraphs */}
          <article className="prose prose-sm sm:prose-base max-w-none space-y-6">
            {paragraphs.map((para, idx) => {
              if (para.startsWith('**') && para.endsWith('**') && para.indexOf('**', 2) === para.length - 2) {
                return (
                  <h2 key={idx} className="font-display text-xl sm:text-2xl font-bold text-primary mt-10 mb-3">
                    {para.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              if (para.startsWith('**') && para.includes('**\n')) {
                const [heading, ...rest] = para.split('\n');
                return (
                  <div key={idx}>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                      {heading.replace(/\*\*/g, '')}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{rest.join(' ')}</p>
                  </div>
                );
              }
              if (para.startsWith('1. ') || para.startsWith('- ')) {
                const lines = para.split('\n').filter(Boolean);
                return (
                  <ul key={idx} className="space-y-3 pl-4">
                    {lines.map((line, li) => (
                      <li key={li} className="text-gray-600 text-sm sm:text-base leading-relaxed flex gap-2">
                        <span className="text-secondary font-bold mt-1 flex-shrink-0">→</span>
                        <span dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/^\d+\.\s+/, '')
                            .replace(/^-\s+/, '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-gray-600 text-sm sm:text-base leading-relaxed"
                   dangerouslySetInnerHTML={{
                     __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                   }}
                />
              );
            })}
          </article>

          {/* Tags */}
          {content?.tags && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-6 sm:p-8 bg-primary rounded-3xl text-white text-center">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Expert Consultation</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
              Ready to Invest Based on These Insights?
            </h3>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Speak with our senior advisors to translate market intelligence into a bespoke investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/enquire"
                className="bg-secondary text-primary px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Book Consultation
              </Link>
              <Link
                href="/properties"
                className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{related.category}</span>
                  <h4 className="font-bold text-sm text-gray-900 mt-1 line-clamp-2 group-hover:text-secondary transition-colors">
                    {related.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
