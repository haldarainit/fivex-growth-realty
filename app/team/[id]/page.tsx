import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { teamMembers } from '@/data/teamData';

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);
  if (!member) return {};
  return {
    title: `${member.name} – ${member.designation} | FIVEX Team`,
    description: member.shortBio,
  };
}

export default async function TeamProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);
  if (!member) notFound();

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        <div className="bg-primary py-12">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/team" className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-sm mb-8 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>Back to Team
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-secondary/30">
                <img src={member.image} alt={member.imageAlt} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/80">{member.department}</span>
                <h1 className="font-display font-bold text-3xl text-white mt-2">{member.name}</h1>
                <p className="text-secondary font-semibold mt-1">{member.designation}</p>
                <p className="text-white/50 text-sm mt-1">{member.location} · {member.experience}+ years experience</p>
                <p className="text-white/60 text-sm mt-4 max-w-xl leading-relaxed">{member.shortBio}</p>
                <div className="flex gap-3 mt-5">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/60 hover:text-secondary hover:border-secondary/40 text-xs font-semibold transition-all">
                    <span className="material-symbols-outlined text-sm">call</span>{member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/60 hover:text-secondary hover:border-secondary/40 text-xs font-semibold transition-all">
                    <span className="material-symbols-outlined text-sm">mail</span>{member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-display font-bold text-primary text-lg mb-4">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-sm px-4 py-2 bg-secondary/10 text-secondary rounded-full font-semibold">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-display font-bold text-primary text-lg mb-4">About {member.name.split(' ')[0]}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{member.shortBio}</p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-6 text-white h-fit">
              <h3 className="font-display font-bold text-base mb-5">Get in Touch</h3>
              <div className="space-y-3 mb-5">
                <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-base">call</span>
                  <span className="text-sm">{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-base">mail</span>
                  <span className="text-sm break-all">{member.email}</span>
                </a>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary text-base">open_in_new</span>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
              </div>
              <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-secondary text-primary py-3 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
                Send Message <span className="material-symbols-outlined text-base">send</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
