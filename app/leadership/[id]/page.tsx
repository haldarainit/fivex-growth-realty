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

// ─── Social Platform Icon Renderer ───────────────────────────────────────────
const renderSocialPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('linkedin')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    );
  }
  if (p.includes('facebook')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
      </svg>
    );
  }
  if (p.includes('instagram')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (p.includes('youtube')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }
  if (p.includes('twitter') || p.includes('x')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
  }
  if (p.includes('tumblr')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.648h3.362v5.939h3.696v3.808h-3.696v7.052c0 1.62.616 2.406 2.15 2.406.914 0 1.72-.258 2.274-.537v3.52c-.752.5-2.053.807-3.049.807z"/>
      </svg>
    );
  }
  if (p.includes('pinterest')) {
    return (
      <svg className="w-3.5 h-3.5 fill-current text-secondary group-hover:text-white" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    );
  }
  return <span className="material-symbols-outlined text-xs text-secondary group-hover:text-white">open_in_new</span>;
};

export default async function LeadershipProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = leadershipMembers.find((m) => m.id === id);
  if (!member) notFound();

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary pt-8 pb-5 sm:pt-10 sm:pb-6">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/about#leadership" className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-sm mb-6 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Leadership
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Photo & Actions */}
              <div className="space-y-4 max-w-[280px]">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                  <img src={member.image} alt={member.imageAlt} className="w-full h-full object-cover object-top" />
                </div>

                {/* 1. Direct Contact Action Icons (CALL first, WHATSAPP second, EMAIL third) */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {/* Direct Phone Call Icon (FIRST) */}
                  <a
                    href={`tel:${member.phone}`}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
                    title={`Call Direct: ${member.phone}`}
                  >
                    <span className="material-symbols-outlined text-secondary text-xl">call</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Call</span>
                  </a>

                  {/* WhatsApp Icon (SECOND) */}
                  {member.whatsapp ? (
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md transition-all cursor-pointer group"
                      title="Connect on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider">WhatsApp</span>
                    </a>
                  ) : null}

                  {/* Direct Email Icon (THIRD) */}
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
                    title={`Send Email: ${member.email}`}
                  >
                    <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Email</span>
                  </a>
                </div>

                {/* 2. Social Links 3-Column Uniform Grid */}
                <div className="pt-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-secondary mb-2">
                    Connect with {member.name.split(' ')[0]}:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {member.social?.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-secondary hover:text-white border border-white/20 text-white text-[11px] sm:text-xs font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer group shadow-sm text-center"
                      >
                        {renderSocialPlatformIcon(s.platform)}
                        <span className="truncate">{s.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{member.name}</h1>
                <p className="text-secondary font-semibold text-lg mt-1">{member.designation}</p>
                <p className="text-white/90 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl text-justify font-medium">{member.shortBio}</p>

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
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 pt-8 pb-16 sm:pt-10 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Bio + Responsibilities */}
            <div className="lg:col-span-2 space-y-10">
              {/* Full Bio */}
              <div>
                <h2 className="font-display font-bold text-xl text-primary mb-6">Biography</h2>
                <div className="space-y-4 text-justify">
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
                    <div key={i} className="bg-surface-container-low rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>
                        stars
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{a}</p>
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
                <h3 className="font-display font-bold text-base text-secondary uppercase tracking-wider">Connect with Us</h3>
                <div className="space-y-3">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">call</span>
                    <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">mail</span>
                    <span className="break-all">{member.email}</span>
                  </a>
                </div>
                {member.whatsapp && (
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
