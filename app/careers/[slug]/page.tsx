import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { jobListings } from '@/data/careerData';
import ApplicationForm from '@/components/careers/ApplicationForm';

export async function generateStaticParams() {
  return jobListings.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobListings.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} – ${job.department} | FIVEX Careers`,
    description: job.shortDescription,
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobListings.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Header */}
        <div className="bg-primary py-12">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-sm mb-6 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>All Openings
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{job.title}</h1>
                  {job.isHot && <span className="text-[10px] font-extrabold uppercase text-white bg-secondary px-2.5 py-1 rounded-full">🔥 Hot</span>}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {[
                    { icon: 'apartment', text: job.department },
                    { icon: 'location_on', text: job.location },
                    { icon: 'work', text: job.type.replace('-', ' ') },
                    { icon: 'timeline', text: job.experience },
                    ...(job.salary ? [{ icon: 'currency_rupee', text: job.salary }] : []),
                  ].map((item) => (
                    <span key={item.text} className="flex items-center gap-1.5 text-white/60 text-xs">
                      <span className="material-symbols-outlined text-secondary text-sm">{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-8 xl:gap-12 items-start">
            {/* Left: Application Form */}
            <div className="lg:sticky lg:top-28">
              <ApplicationForm jobTitle={job.title} jobSlug={job.slug} />
            </div>

            {/* Right: Job Description */}
            <div className="space-y-6 lg:max-h-[calc(100svh-8rem)] lg:overflow-y-auto lg:pr-2">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-lg mb-4">About the Role</h3>
                {job.fullDescription.map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-lg mb-4">Responsibilities</h3>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-secondary text-[10px]" style={{ fontVariationSettings: '"FILL" 1' }}>arrow_right</span>
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-lg mb-4">Requirements</h3>
                <ul className="space-y-2.5">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm flex-shrink-0 mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                      <span className="text-gray-600 text-sm sm:text-base">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-lg mb-4">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary rounded-full font-semibold">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: 'forum', title: 'HR Screening', desc: 'A short introductory call to understand your experience and role expectations.' },
                  { icon: 'business_center', title: 'Role Evaluation', desc: 'A practical conversation with the hiring manager around domain fit and delivery style.' },
                  { icon: 'workspace_premium', title: 'Final Discussion', desc: 'Leadership review, culture fit, and final compensation alignment before the offer.' },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{step.icon}</span>
                    <h4 className="mt-3 font-display text-sm sm:text-base font-bold text-primary">{step.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-base mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {job.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm flex-shrink-0 mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>done</span>
                      <span className="text-white/70 text-xs">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
