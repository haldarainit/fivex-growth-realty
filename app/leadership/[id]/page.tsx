import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { leadershipMembers } from '@/data/leadershipData';

export async function generateStaticParams() {
  return leadershipMembers.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = leadershipMembers.find((m) => m.id === id);
  if (!member) return {};
  return {
    title: `${member.name} – ${member.designation} | FIVEX Growth Realty`,
    description: member.shortBio,
  };
}

export default async function LeadershipProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = leadershipMembers.find((m) => m.id === id);
  if (!member) notFound();

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary py-12 sm:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/about#leadership" className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-sm mb-8 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Leadership
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Photo & Actions */}
              <div className="space-y-4 max-w-[280px]">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                  <img src={member.image} alt={member.imageAlt} className="w-full h-full object-cover object-top" />
                </div>

                {/* Main WhatsApp CTA Button */}
                {member.whatsapp && (
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp Connect
                  </a>
                )}

                {/* Compact Social & Direct Contact Links */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {member.social?.filter(s => s.platform !== 'WhatsApp').map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.platform}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/15 text-white/80 hover:text-secondary hover:border-secondary/40 text-[11px] font-bold transition-all bg-white/5"
                      >
                        <span className="material-symbols-outlined text-xs">open_in_new</span>
                        {s.platform}
                      </a>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 text-xs font-bold transition-all bg-white/5">
                      <span className="material-symbols-outlined text-secondary text-sm">mail</span>
                      Email
                    </a>
                    <a href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 text-xs font-bold transition-all bg-white/5">
                      <span className="material-symbols-outlined text-secondary text-sm">call</span>
                      Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary/80">{member.department}</span>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">{member.name}</h1>
                <p className="text-secondary font-semibold text-lg mt-1">{member.designation}</p>
                <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-2xl">{member.shortBio}</p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <p className="font-extrabold text-secondary text-2xl">{member.experience}+</p>
                    <p className="text-white/50 text-xs">Years Experience</p>
                  </div>
                  <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <p className="font-extrabold text-secondary text-2xl">{member.awards.length}</p>
                    <p className="text-white/50 text-xs">Awards</p>
                  </div>
                  <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <p className="font-extrabold text-secondary text-2xl">{member.skills.length}+</p>
                    <p className="text-white/50 text-xs">Core Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Bio + Responsibilities */}
            <div className="lg:col-span-2 space-y-10">
              {/* Full Bio */}
              <div>
                <h2 className="font-display font-bold text-xl text-primary mb-6">Biography</h2>
                <div className="space-y-4">
                  {member.fullBio.map((para, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="font-display font-bold text-xl text-primary mb-6">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {member.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-secondary text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>check</span>
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="font-display font-bold text-xl text-primary mb-6">Key Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.achievements.map((a, i) => (
                    <div key={i} className="bg-surface-container-low rounded-xl p-4 border border-gray-100">
                      <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>stars</span>
                      <p className="text-gray-700 text-sm mt-2 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h2 className="font-display font-bold text-xl text-primary mb-6">Awards & Recognition</h2>
                <div className="space-y-3">
                  {member.awards.map((award) => (
                    <div key={award.title} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>emoji_events</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-primary text-sm">{award.title}</p>
                        <p className="text-gray-400 text-xs">{award.issuer}</p>
                      </div>
                      <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">{award.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills, Education, Contact */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-base mb-5">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary font-semibold rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-base mb-5">Education</h3>
                <div className="space-y-4">
                  {member.education.map((edu) => (
                    <div key={edu.degree} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>school</span>
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">{edu.degree}</p>
                        <p className="text-gray-400 text-xs">{edu.institution}</p>
                        <p className="text-gray-400 text-xs">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-6 text-white border border-white/10 shadow-xl space-y-4">
                <h3 className="font-display font-bold text-base text-secondary uppercase tracking-wider">Connect with {member.name.split(' ')[0]}</h3>
                <div className="space-y-3">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">call</span>
                    <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">mail</span>
                    <span className="break-all">{member.email}</span>
                  </a>
                  {member.whatsapp && (
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold">
                      <span className="material-symbols-outlined text-green-400 text-base">chat</span>
                      <span>WhatsApp Chat</span>
                    </a>
                  )}
                </div>
                {member.whatsapp && (
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp Connect
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
