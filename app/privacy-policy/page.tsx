import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { companyInfo } from '@/data/companyData';

export const metadata = {
  title: 'Privacy Policy | FIVEX Growth Realty',
  description: 'Privacy Policy for FIVEX Growth Realty — how we collect, use and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        <div className="bg-primary py-10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <h1 className="font-display font-bold text-3xl text-white">Privacy Policy</h1>
            <p className="text-white/50 text-sm mt-2">Last updated: January 1, 2026</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 prose prose-sm max-w-none">
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">1. Introduction</h2>
              <p className="text-sm leading-relaxed">{companyInfo.name} (&quot;FIVEX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>
            </section>
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">2. Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-2">We collect information you provide directly, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Name, email address, and phone number through contact forms</li>
                <li>Property preferences and budget details shared during consultations</li>
                <li>Resume and professional information submitted for job applications</li>
                <li>Cookies and analytics data when you browse our website</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">3. How We Use Your Information</h2>
              <p className="text-sm leading-relaxed mb-2">We use collected data to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Respond to your property inquiries and connect you with our advisors</li>
                <li>Send property recommendations and market updates (with your consent)</li>
                <li>Process job applications</li>
                <li>Improve our website and services through analytics</li>
                <li>Comply with legal obligations under RERA and other regulations</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">4. Data Security</h2>
              <p className="text-sm leading-relaxed">We implement industry-standard security measures to protect your data. However, no electronic transmission is 100% secure. We use SSL encryption for all form submissions and never store payment card information.</p>
            </section>
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">5. Sharing of Information</h2>
              <p className="text-sm leading-relaxed">We do not sell your personal information. We may share data with our developer and banking partners only when necessary to fulfill your service request, and only with your implicit consent during the advisory process.</p>
            </section>
            <section>
              <h2 className="font-display font-bold text-primary text-xl mb-3">6. Contact</h2>
              <p className="text-sm leading-relaxed">For privacy-related queries, contact us at privacy@fivexgrowthrealty.com or write to our registered office at {companyInfo.name}, Sector 62, Noida, UP 201309.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
