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
      <main className="flex-grow pt-20 sm:pt-24 min-h-screen bg-white">
        {/* Header Banner */}
        <div className="bg-primary py-12 sm:py-16 text-white border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/70 hover:text-secondary text-sm mb-6 transition-colors font-semibold">
              <span className="material-symbols-outlined text-base">arrow_back</span>All Open Positions
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">{job.title}</h1>
                  {job.isHot && <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-secondary px-3 py-1 rounded-full">🔥 Hot</span>}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { icon: 'apartment', text: job.department },
                    { icon: 'location_on', text: job.location },
                    { icon: 'work', text: job.type.replace('-', ' ') },
                    { icon: 'timeline', text: job.experience },
                    ...(job.salary ? [{ icon: 'currency_rupee', text: job.salary }] : []),
                  ].map((item) => (
                    <span key={item.text} className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-secondary text-base">{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout - Wide Grid & Standard Window Scroll */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Application Form (5 cols on large desktop, full width inputs) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 w-full">
              <ApplicationForm jobTitle={job.title} jobSlug={job.slug} />
            </div>

            {/* Right Column: Job Description & Details (7 cols, normal window scroll) */}
            <div className="lg:col-span-7 space-y-6 w-full">
              {/* Description */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
                <h3 className="font-display font-extrabold text-primary text-xl mb-4">About the Role</h3>
                {job.fullDescription.map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-medium">{para}</p>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
                <h3 className="font-display font-extrabold text-primary text-xl mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-secondary text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>arrow_right</span>
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
                <h3 className="font-display font-extrabold text-primary text-xl mb-4">Requirements &amp; Qualifications</h3>
                <ul className="space-y-3">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                      <span className="text-gray-700 text-sm sm:text-base font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
                <h3 className="font-display font-extrabold text-primary text-xl mb-4">Skills Required</h3>
                <div className="flex flex-wrap gap-2.5">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-xs px-4 py-2 bg-secondary/15 text-primary rounded-xl font-bold border border-secondary/30">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Hiring Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: 'forum', title: 'HR Screening', desc: 'Initial call to discuss profile fit and expectations.' },
                  { icon: 'business_center', title: 'Domain Review', desc: 'In-depth conversation with sales/advisory leads.' },
                  { icon: 'workspace_premium', title: 'Final Alignment', desc: 'Leadership chat and compensation discussion.' },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{step.icon}</span>
                    <h4 className="mt-3 font-display text-sm sm:text-base font-bold text-primary">{step.title}</h4>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-primary rounded-3xl p-7 text-white shadow-xl">
                <h3 className="font-display font-extrabold text-lg text-white mb-4">FIVEX Employee Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base flex-shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>done</span>
                      <span className="text-white/85 text-xs sm:text-sm font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
