import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { csrMission, csrInitiatives, csrStats, csrEvents } from '@/data/csrData';

export const metadata = {
  title: 'CSR Activities | FIVEX Growth Realty',
  description: 'FIVEX Growth Realty\'s Corporate Social Responsibility initiatives — environment, education, health, and community welfare programs.',
};

export default function CSRPage() {
  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen">
        {/* Hero */}
        <div className="relative bg-primary pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
          <img
            src="/csr.jpg"
            alt="FiveX CSR Initiatives"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Corporate Social Responsibility</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-4 tracking-tight max-w-3xl leading-tight">
              {csrMission.title}
            </h1>
            <p className="text-white/60 text-lg mt-5 max-w-2xl leading-relaxed">{csrMission.description}</p>
          </div>
        </div>

        {/* Impact Statistics */}
        <section className="bg-secondary py-12">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {csrStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-2 block" style={{ fontVariationSettings: '"FILL" 1' }}>{stat.icon}</span>
                  <p className="font-display font-extrabold text-primary text-2xl">{stat.value}</p>
                  <p className="text-primary/70 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">What We Do</span>
              <h2 className="font-display font-bold text-3xl text-primary mt-3">CSR Initiatives</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {csrInitiatives.map((init, i) => (
                <div key={init.id} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{init.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-primary text-base mb-2">{init.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{init.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold text-xs">{init.impact}</span>
                    <span className="text-gray-400 text-xs">{init.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Recent Activities</span>
              <h2 className="font-display font-bold text-3xl text-primary mt-3">CSR Events</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {csrEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-primary bg-secondary px-2.5 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-primary text-base mb-2">{event.title}</h3>
                    <p className="text-gray-500 text-xs mb-3 leading-relaxed">{event.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span>{event.date}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">people</span>{event.participants} participants</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>volunteer_activism</span>
            <h2 className="font-display font-bold text-3xl text-white mb-4">Want to Partner with Us?</h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We collaborate with NGOs, corporates, and individuals who share our vision of building a better society alongside better buildings.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all">
              Get Involved <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
